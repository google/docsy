#!/usr/bin/env perl -w

use strict;
use warnings;

foreach my $file (@ARGV) {
    open my $in,  '<', $file or die "Cannot open $file: $!";
    my @lines = <$in>;
    close $in;

    open my $out, '>', $file or die "Cannot write to $file: $!";

    my $inside_tabpane = 0;
    my $inside_ignore = 0;

    while (@lines) {
        my $line = shift @lines;

        if ($line =~ /<!--\s*prettier-ignore-start\s*-->/) {
            $inside_ignore = 1;
        } elsif ($line =~ /<!--\s*prettier-ignore-end\s*-->/) {
            $inside_ignore = 0;
        } elsif ($line =~ /^\s*\{\{<\s*tabpane\s*>\}\}\s*$/) {
            if (!$inside_ignore) {
                print $out "<!-- prettier-ignore-start -->\n";
                $inside_ignore = 1;
            }
            $inside_tabpane = 1;
        } elsif ($inside_tabpane && $line =~ /^\s*\{\{<\s*\/tabpane\s*>\}\}\s*$/) {
            print $out $line;
            # If not already inside ignore, insert ignore-end
            if ($inside_ignore) {
                print $out "<!-- prettier-ignore-end -->\n";
                $inside_ignore = 0;
            }
            $inside_tabpane = 0;
            next;
        }

        print $out $line;
    }

    close $out;
}

print "Processed ", scalar(@ARGV), " files.\n";
