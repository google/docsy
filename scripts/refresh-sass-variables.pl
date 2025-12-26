#!/usr/bin/perl -w

use strict;
use warnings;

my $bootstrap_vars = "node_modules/bootstrap/scss/_variables.scss";
my $forward_vars = "assets/scss/_variables_forward.scss";
die "File not found: $bootstrap_vars\n" unless -f $bootstrap_vars;
die "File not found: $forward_vars\n" unless -f $forward_vars;

# Read bootstrap variables into a hash
open(my $bootstrap_fh, '<', $bootstrap_vars) or die "Cannot open $bootstrap_vars: $!\n";
my %bootstrap_vars;
while (my $line = <$bootstrap_fh>) {
    $bootstrap_vars{$1} = $line if $line =~ /^(\$[\w-]+):\s*(.+?)\s*!default;/;
}
close($bootstrap_fh);

# Process forward variables file in place
local @ARGV = ($forward_vars);
local $^I = '.bak';  # Create a backup file
my $changed = 0;

while (<>) {
    my $line_to_print = $_;
    if (/^(\$[\w-]+):/ && exists $bootstrap_vars{$1}) {
        if ($_ ne $bootstrap_vars{$1}) {
            $changed = 1;
            $line_to_print = $bootstrap_vars{$1};
        }
    }
    print $line_to_print;
}

print STDOUT ($changed ? "Updated $forward_vars with refreshed variables\n" : "No changes needed in $forward_vars\n");
unlink("$forward_vars.bak") or die "Cannot remove backup file: $!\n";
