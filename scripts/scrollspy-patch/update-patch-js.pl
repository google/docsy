#!/usr/bin/env perl
#
# Updates assets/js/scrollspy-patch.js with the patched method from
# assets/_cache/bootstrap/scrollspy-method-patched.js
#
# cSpell:ignore scrollspy

use strict;
use warnings;
use File::Basename qw(dirname);
use Cwd qw(abs_path);

my $SCRIPT_DIR = dirname(abs_path(__FILE__));
my $PROJECT_ROOT = dirname(dirname($SCRIPT_DIR));

my $PATCHED_METHOD_FILE = "$PROJECT_ROOT/assets/_cache/bootstrap/scrollspy-method-patched.js";
my $PATCH_JS_FILE = "$PROJECT_ROOT/assets/js/scrollspy-patch.js";

sub main {
    # Check if patched method file exists
    unless (-f $PATCHED_METHOD_FILE) {
        print STDERR "ERROR: Patched method file not found: $PATCHED_METHOD_FILE\n";
        print STDERR "  Run: npm run _prepare:scrollspy-patch\n";
        exit 1;
    }

    # Check if patch JS file exists
    unless (-f $PATCH_JS_FILE) {
        print STDERR "ERROR: Patch JS file not found: $PATCH_JS_FILE\n";
        exit 1;
    }

    # Read patched method file
    open my $method_fh, '<', $PATCHED_METHOD_FILE
        or die "Cannot read $PATCHED_METHOD_FILE: $!";
    my @method_lines = <$method_fh>;
    close $method_fh;

    # Transform method body:
    # - Change function name from _initializeTargetsAndObservables to patchedInitializeTargetsAndObservables
    # - Keep indentation as-is (2 spaces)
    my @transformed_lines = ();
    foreach my $line (@method_lines) {
        if ($line =~ /^  _initializeTargetsAndObservables/) {
            $line =~ s/^  _initializeTargetsAndObservables/  function patchedInitializeTargetsAndObservables/;
        }
        push @transformed_lines, $line;
    }

    # Read patch JS file
    open my $js_fh, '<', $PATCH_JS_FILE
        or die "Cannot read $PATCH_JS_FILE: $!";
    my @js_lines = <$js_fh>;
    close $js_fh;

    # Replace content between prettier-ignore markers
    my @output_lines = ();
    my $in_section = 0;
    foreach my $line (@js_lines) {
        if ($line =~ /prettier-ignore-start/) {
            push @output_lines, $line;
            $in_section = 1;
            # Insert transformed method body
            push @output_lines, @transformed_lines;
            next;
        }
        if ($line =~ /prettier-ignore-end/) {
            push @output_lines, $line;
            $in_section = 0;
            next;
        }
        unless ($in_section) {
            push @output_lines, $line;
        }
    }

    # Write updated content
    open my $out_fh, '>', $PATCH_JS_FILE
        or die "Cannot write $PATCH_JS_FILE: $!";
    print $out_fh @output_lines;
    close $out_fh;
}

main();

