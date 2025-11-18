#!/usr/bin/env perl
#
# Extracts the _initializeTargetsAndObservables method from Bootstrap ScrollSpy
# source and saves it to the cache directory.
#
# cSpell:ignore scrollspy

use strict;
use warnings;
use File::Basename qw(dirname);
use File::Path qw(make_path);
use Cwd qw(abs_path);

my $SCRIPT_DIR = dirname(abs_path($0));
my $PROJECT_ROOT = dirname(dirname($SCRIPT_DIR));

my $BOOTSTRAP_SOURCE = "$PROJECT_ROOT/node_modules/bootstrap/js/src/scrollspy.js";
my $CACHED_METHOD_FILE = "$PROJECT_ROOT/assets/_cache/bootstrap/scrollspy-method.js";

# Check if Bootstrap source exists
unless (-f $BOOTSTRAP_SOURCE) {
    print STDERR "ERROR: Bootstrap source not found: $BOOTSTRAP_SOURCE\n";
    print STDERR "  Make sure Bootstrap is installed: npm install\n";
    exit 1;
}

# Create cache directory
make_path(dirname($CACHED_METHOD_FILE));

# Extract method
my $in_method = 0;
my $method_indent = 0;
my $method_content = '';

open my $fh, '<', $BOOTSTRAP_SOURCE or die "Cannot read $BOOTSTRAP_SOURCE: $!";

while (my $line = <$fh>) {
    if ($line =~ /^(\s*)_initializeTargetsAndObservables\(\)/) {
        $in_method = 1;
        $method_indent = length($1);
        $method_content = $line;
    } elsif ($in_method) {
        $method_content .= $line;
        # Check if this line has a closing brace at the method indentation level
        if ($line =~ /^(\s*)\}/ && length($1) == $method_indent) {
            last;
        }
    }
}

close $fh;

unless ($method_content) {
    print STDERR "ERROR: Failed to extract method from Bootstrap source\n";
    exit 1;
}

# Write cached method
open my $out_fh, '>', $CACHED_METHOD_FILE or die "Cannot write $CACHED_METHOD_FILE: $!";
print $out_fh $method_content;
close $out_fh;

print "✅ Extracted _initializeTargetsAndObservables() method\n";
print "   Saved to: $CACHED_METHOD_FILE\n";
