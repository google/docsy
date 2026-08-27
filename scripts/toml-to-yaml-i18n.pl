#!/usr/bin/env perl
#
# Convert i18n TOML entries to YAML syntax
#
# Converts entries like:
#   [post_byline_by]
#   other = "By"
#
# To:
#   post_byline_by: By
#
# Usage:
#   perl toml-to-yaml-i18n.pl input.toml          # writes to input.yaml
#   perl toml-to-yaml-i18n.pl file1.toml file2.toml  # writes to file1.yaml, file2.yaml
#   perl toml-to-yaml-i18n.pl < input.toml        # writes to stdout

use strict;
use warnings;
use utf8;

# Process files or stdin
if (@ARGV) {
    # Process each file argument
    for my $input_file (@ARGV) {
        # Determine output filename
        my $output_file = $input_file;
        $output_file =~ s/\.toml$/.yaml/;

        if ($output_file eq $input_file) {
            warn "Warning: $input_file doesn't have .toml extension, appending .yaml\n";
            $output_file = "$input_file.yaml";
        }

        process_file($input_file, $output_file);
    }
} else {
    # Read from stdin, write to stdout
    process_file(\*STDIN, \*STDOUT);
}

# Process a single file
sub process_file {
    my ($input, $output) = @_;

    my $input_fh;
    my $output_fh;
    my $close_input = 0;
    my $close_output = 0;

    # Open input
    if (ref $input eq 'GLOB') {
        $input_fh = $input;
    } else {
        open $input_fh, '<', $input or die "Cannot open $input: $!\n";
        $close_input = 1;
    }

    # Open output
    if (ref $output eq 'GLOB') {
        $output_fh = $output;
    } else {
        open $output_fh, '>', $output or die "Cannot open $output for writing: $!\n";
        $close_output = 1;
    }

    my $current_key;
    my $pending_comment;
    my $line_num = 0;
    my $last_was_entry = 0;   # Track if we just output an entry
    my $pending_blank = 0;    # Track if we need to output a blank line
    my $in_ui_group   = 0;    # True while we're in the initial "UI" group

    while (my $line = <$input_fh>) {
        $line_num++;
        chomp $line;

        # Handle blank lines - preserve them (with some special-casing)
        if ($line =~ /^\s*$/) {
            # If we just output an entry, mark that we should add a blank line
            if ($last_was_entry) {
                $pending_blank = 1;
            }
            next;
        }

        # Output pending blank line before processing next entry
        if ($pending_blank && ($line =~ /^\[/ || $line =~ /^#/)) {
            # Inside the "UI" group, avoid blank lines between individual ui_* keys.
            # We still keep the blank line before the next comment section.
            if (!($in_ui_group && $line =~ /^\[ui_/)) {
                print $output_fh "\n";
            }
            $pending_blank = 0;
        }

        # Capture comments
        if ($line =~ /^#\s*(.+)$/) {
            my $comment = $1;
            $pending_comment = $comment;

            # Track whether we're in the "UI strings. Buttons and similar." group
            if ($comment =~ /^UI strings\. Buttons and similar\./) {
                $in_ui_group = 1;
            } else {
                # Any other top-level comment ends the UI group
                $in_ui_group = 0;
            }
            $last_was_entry = 0;
            next;
        }

        # Capture key in brackets: [key_name]
        if ($line =~ /^\[([^\]]+)\]\s*$/) {
            $current_key = $1;
            $last_was_entry = 0;
            next;
        }

        # Capture value: other = "value" [# optional inline comment]
        if ($line =~ /^other\s*=\s*"([^"]*)"\s*(?:#\s*(.+))?\s*$/) {
            my $value        = $1;
            my $inline_comment = $2;

            # Output comment if we have one
            if ($pending_comment) {
                print $output_fh "# $pending_comment\n";
                $pending_comment = undef;
            }

            # Output YAML entry
            if ($current_key) {
                # Output any pending full-line comment
                if ($pending_comment) {
                    print $output_fh "# $pending_comment\n";
                    $pending_comment = undef;
                }
                # Output inline comment from TOML value, if present
                if (defined $inline_comment && $inline_comment ne '') {
                    print $output_fh "# $inline_comment\n";
                }
                # Check if value needs block scalar format (starts with { or contains { or :)
                if ($value =~ /\{/ || $value =~ /:/) {
                    print $output_fh "$current_key: >-\n";
                    print $output_fh "  $value\n";
                } else {
                    # Escape special YAML characters if needed
                    $value = escape_yaml_value($value);
                    print $output_fh "$current_key: $value\n";
                }
                $current_key = undef;
                $last_was_entry = 1;
            } else {
                warn "Warning: Found 'other = ...' without preceding [key] at line $line_num\n";
            }
            next;
        }

        # Warn about unrecognized lines
        if ($line !~ /^\s*$/) {
            warn "Warning: Unrecognized line format at line $line_num: $line\n";
        }
    }

    close $input_fh if $close_input;
    close $output_fh if $close_output;
}

# Escape YAML special characters if needed
sub escape_yaml_value {
    my ($value) = @_;

    # Only quote if value contains characters that would break YAML parsing
    # Note: spaces, question marks, exclamation marks, hyphens don't need quotes in YAML
    # Values starting with { or containing : or { are handled separately with block scalar
    if ($value =~ /^[#@`|>*&%\[\]\\'"]/ ||        # Starts with special chars that need quoting
        $value =~ /[#@`|>*&%\[\]\\'"]/ ||         # Contains special chars that need quoting
        $value =~ /^\s|\s$/ ||                    # Leading or trailing whitespace
        $value =~ /^[TFtf]alse$|^[YNyn]o?$|^null$/i ||  # Boolean/null-like values
        ($value =~ /^[\d\.]+$/ && $value !~ /^0+$/)) {  # Numbers (but not all zeros)
        # Escape quotes and backslashes
        $value =~ s/\\/\\\\/g;
        $value =~ s/"/\\"/g;
        return qq{"$value"};
    }

    return $value;
}
