#!/usr/bin/env perl
use strict;
use warnings;

# Usage: perl add_prettier_ignore.pl file1.md [file2.md ...]

foreach my $file (@ARGV) {
    open my $in,  '<', $file or die "Cannot open $file: $!";
    my @lines = <$in>;
    close $in;

    open my $out, '>', $file or die "Cannot write to $file: $!";

    my $inside_ignore = 0;
    my $i = 0;
    while ($i <= $#lines) {
        my $line = $lines[$i];

        # Detect entering or leaving prettier-ignore regions
        if ($line =~ /<!--\s*prettier-ignore-start\s*-->/) {
            $inside_ignore = 1;
            print $out $line;
            $i++;
            next;
        }
        if ($line =~ /<!--\s*prettier-ignore-end\s*-->/) {
            $inside_ignore = 0;
            print $out $line;
            $i++;
            next;
        }

        # Detect non-indented tabpane opening
        if (!$inside_ignore && $line =~ /^\s*\{\{<\s*tabpane.*?>\}\}\s*$/ && $line !~ /^\s{1,}\{\{<\s*tabpane.*?>\}\}\s*$/) {
            # Only process if NOT indented (no leading spaces/tabs)
            if ($i == 0 || $lines[$i-1] !~ /<!--\s*prettier-ignore-start\s*-->/) {
                print $out "<!-- prettier-ignore-start -->\n";
            }
            print $out $line;
            $i++;
            # Print inner block until non-indented closing shortcode
            while ($i <= $#lines) {
                my $inner = $lines[$i];
                print $out $inner;
                if ($inner =~ /^\s*\{\{<\s*\/tabpane\s*>\}\}\s*$/ && $inner !~ /^\s{1,}\{\{<\s*\/tabpane\s*>\}\}\s*$/) {
                    # Check next line for ignore-end
                    if ($i == $#lines || $lines[$i+1] !~ /<!--\s*prettier-ignore-end\s*-->/) {
                        print $out "<!-- prettier-ignore-end -->\n";
                    }
                    $i++;
                    last;
                }
                $i++;
            }
            next;
        }

        # Detect indented tabpane opening/closing not in an ignore region and warn
        if (!$inside_ignore &&
            (
                ($line =~ /^\s+\{\{<\s*tabpane.*?>\}\}\s*$/) ||
                ($line =~ /^\s+\{\{<\s*\/tabpane.*?>\}\}\s*$/)
            )
        ) {
            print STDERR "$file:", $i+1, ": WARNING: Indented tabpane shortcode found, usually because it is in a list. Add prettier-ignore directive manually before the start of the list.\n";
        }

        print $out $line;
        $i++;
    }

    close $out;
}

print "Processed ", scalar(@ARGV), " files.\n";
