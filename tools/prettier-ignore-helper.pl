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

        # Only process tabpane blocks if NOT inside an ignore region
        if (!$inside_ignore && $line =~ /^\s*\{\{<\s*tabpane.*?>\}\}\s*$/) {
            # Check previous line for ignore-start
            if ($i == 0 || $lines[$i-1] !~ /<!--\s*prettier-ignore-start\s*-->/) {
                print $out "<!-- prettier-ignore-start -->\n";
            }
            print $out $line;

            # Print inner block until closing shortcode
            $i++;
            while ($i <= $#lines) {
                my $inner = $lines[$i];
                print $out $inner;
                if ($inner =~ /^\s*\{\{<\s*\/tabpane\s*>\}\}\s*$/) {
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

        # Otherwise, print the line as is
        print $out $line;
        $i++;
    }

    close $out;
}

print "Processed ", scalar(@ARGV), " files.\n";
