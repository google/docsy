#!/usr/bin/env perl
use strict;
use warnings;
use utf8;

# Compare a TOML i18n file (Docsy format) with its YAML counterpart.
# Usage:
#   perl scripts/compare-i18n-toml-yaml.pl i18n/et.toml
#   perl scripts/compare-i18n-toml-yaml.pl i18n/et.toml i18n/et.yaml
#
# Exit codes:
#   0 - files match (same keys and values)
#   1 - mismatch or error

die "Usage: $0 <file.toml> [file.yaml]\n"
  unless @ARGV >= 1;

my $toml_file = $ARGV[0];
my $yaml_file = $ARGV[1] || ($toml_file =~ s/\.toml$/.yaml/r);

-f $toml_file or die "TOML file not found: $toml_file\n";
-f $yaml_file or die "YAML file not found: $yaml_file\n";

my %toml = parse_toml_i18n($toml_file);
my %yaml = parse_yaml_i18n($yaml_file);

my @errors;

# Keys in TOML missing or different in YAML
for my $k (sort keys %toml) {
  if (!exists $yaml{$k}) {
    push @errors, "Missing key in YAML: $k";
    next;
  }
  if (($toml{$k} // '') ne ($yaml{$k} // '')) {
    push @errors,
      "Value mismatch for key '$k':\n  TOML: '$toml{$k}'\n  YAML: '$yaml{$k}'";
  }
}

# Extra keys in YAML not present in TOML
for my $k (sort keys %yaml) {
  next if exists $toml{$k};
  push @errors, "Extra key in YAML (not in TOML): $k";
}

if (@errors) {
  print "Comparison FAILED for:\n  TOML: $toml_file\n  YAML: $yaml_file\n\n";
  print join("\n", @errors), "\n";
  exit 1;
} else {
  print "OK: $toml_file and $yaml_file have matching keys and values.\n";
  exit 0;
}

# --- Helpers ---------------------------------------------------------------

sub parse_toml_i18n {
  my ($path) = @_;
  open my $fh, '<:encoding(UTF-8)', $path
    or die "Cannot open $path: $!\n";

  my %map;
  my $current_key;

  while (my $line = <$fh>) {
    chomp $line;

    # [key]
    if ($line =~ /^\[([^\]]+)\]\s*$/) {
      $current_key = $1;
      next;
    }

    # other = "value"  (ignoring more complex TOML)
    if (defined $current_key && $line =~ /^other\s*=\s*"([^"]*)"/) {
      my $val = $1;
      # Simple unescape of \" and \\ if present
      $val =~ s/\\"/"/g;
      $val =~ s/\\\\/\\/g;
      $map{$current_key} = $val;
      $current_key = undef;
      next;
    }
  }

  close $fh;
  return %map;
}

sub parse_yaml_i18n {
  my ($path) = @_;
  open my $fh, '<:encoding(UTF-8)', $path
    or die "Cannot open $path: $!\n";

  my %map;
  my $current_key;
  my $in_block = 0;

  while (my $line = <$fh>) {
    chomp $line;

    # Skip comments and blank lines
    next if $line =~ /^\s*#/;
    next if $line =~ /^\s*$/;

    # Handle "key: >-" block scalars (as produced by toml-to-yaml-i18n.pl)
    if ($line =~ /^([A-Za-z0-9_\-]+):\s*>\-\s*$/) {
      $current_key = $1;
      $in_block    = 1;
      next;
    }

    if ($in_block) {
      # Expect an indented line with the actual value
      if ($line =~ /^\s+(.+)\s*$/) {
        my $val = $1;
        $map{$current_key} = $val;
      }
      $in_block   = 0;
      $current_key = undef;
      next;
    }

    # Simple "key: value" lines (flat YAML, no nesting)
    if ($line =~ /^([A-Za-z0-9_\-]+):\s*(.*)$/) {
      my ($k, $v) = ($1, $2);

      # Strip surrounding quotes if present
      if ($v =~ /^"(.*)"$/) {
        $v = $1;
        $v =~ s/\\"/"/g;
        $v =~ s/\\\\/\\/g;
      }

      $map{$k} = $v;
      next;
    }
  }

  close $fh;
  return %map;
}

