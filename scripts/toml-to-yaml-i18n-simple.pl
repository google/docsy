#!/usr/bin/env perl
#
# Simple conversion of i18n TOML entries to YAML syntax
#
# Converts entries like:
#   [post_byline_by]
#   other = "By"
#
# To:
#   post_byline_by: By
#
# Usage:
#   ./toml-to-yaml-i18n-simple.pl input.toml
#   ./toml-to-yaml-i18n-simple.pl file1.toml file2.toml

use strict;
use warnings;

# Process each file argument
for my $file (@ARGV) {
    next unless -f $file;

    # Read entire file (slurp mode) to preserve blank lines
    open my $fh, '<', $file or die "Cannot open $file: $!\n";
    local $/;  # Enable slurp mode
    my $content = <$fh>;
    close $fh;

    # Extended regex for readability - matches pattern across lines
    $content =~ s{
        \[          # Opening bracket
        ([^\]]+)    # Capture key name
        \]          # Closing bracket
        \s*         # Optional whitespace
        \n          # Newline after ]
        (\s*)       # Capture any blank lines before "other"
        other       # Literal "other"
        \s*         # Optional whitespace
        =           # Equals sign
        \s*         # Optional whitespace
        "           # Opening quote
        ([^"]+)     # Capture value
        "           # Closing quote
        [ \t]*      # Optional spaces/tabs (but not newlines)
        (\n+)       # Capture newline(s) - one or more to preserve blank lines
    }{$1: $3$4}gx;  # Replace: key: value, preserve newline(s) after

    # Write back to file
    open $fh, '>', $file or die "Cannot write $file: $!\n";
    print $fh $content;
    close $fh;
}
