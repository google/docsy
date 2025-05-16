#!/usr/bin/env perl
use strict;
use warnings;

# Usage: perl add_prettier_ignore.pl file1.md [file2.md ...]

foreach my $file (@ARGV) {
    open my $in,  '<', $file or die "Cannot open $file: $!";
    my @lines = <$in>;
    close $in;

    open my $out, '>', $file or die "Cannot write to $file: $!";

    my $i = 0;
    while ($i <= $#lines) {
        my $line = $lines[$i];

        # Check for opening tabpane shortcode
        if ($line =~ /^\s*\{\{<\s*tabpane\s*>\}\}\s*$/) {
            # Check previous line for ignore-start
            if ($i == 0 || $lines[$i-1] !~ /<!--\s*prettier-ignore-start\s*-->/) {
                print $out "<!-- prettier-ignore-start -->\n";
            }
            print $out $line;

            # Move to next line
            $i++;
            next;
        }

        # Check for closing tabpane shortcode
        if ($line =~ /^\s*\{\{<\s*\/tabpane\s*>\}\}\s*$/) {
            print $out $line;
            # Check next line for ignore-end
            if ($i == $#lines || $lines[$i+1] !~ /<!--\s*prettier-ignore-end\s*-->/) {
                print $out "<!-- prettier-ignore-end -->\n";
            }
            $i++;
            next;
        }

        print $out $line;
        $i++;
    }

    close $out;
}

print "Processed ", scalar(@ARGV), " files.\n";
