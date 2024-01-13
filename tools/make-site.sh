#!/bin/bash

set -eo pipefail

DEPS="autoprefixer postcss-cli"
FORCE_DELETE=false
: ${HUGO:=npx hugo}
NPM_PKG_VERS=
NPM_PKG="google/docsy"
SITE_NAME="test-site"
THEMESDIR=node_modules

function _usage() {
  echo
  echo "Usage: `basename $0` [options]"
  echo
  echo "  Creates a Docsy-themed site under SITE_NAME using the Hugo new command."
  echo "  Docsy is fetched as an NPM module from GitHub, unless the -l flag is used."
  echo
  echo "  -f            Force delete SITE_NAME if it exists before recreating it"
  echo "  -h            Output this usage info"
  echo "  -l PATH       Use Docsy at PATH rather than as an NPM package"
  echo "  -n SITE_NAME  Name of directory to create for the Hugo generated site. Default: $SITE_NAME"
  echo "  -p NPM_PKG    GitHub repo to fetch Docsy from as an NPM module"
  echo "                Format: GITHUB_USER/DOCSY_REPO. Default: $NPM_PKG"
  echo "  -v VERS       Docsy NPM package version. Default: ''."
  echo "                Examples: semver:0.8.0, some-branch-name"
  echo
}

function usage() {
  local status=${1:-0}
  _usage 1>&2
  exit $status
}

# Process command line arguments
while getopts "fhl:n:p:v:" opt; do
  case $opt in
    f)
      FORCE_DELETE=true
      ;;
    h)
      usage
      ;;
    l)
      NPM_PKG=""
      THEMESDIR="$OPTARG"
      ;;
    n)
      SITE_NAME="$OPTARG"
      ;;
    p)
      NPM_PKG="$OPTARG"
      ;;
    v)
      NPM_PKG_VERS="#$OPTARG"
      ;;
  esac
done

# Create project directory, checking if it exists first
if [ -e "$SITE_NAME" ]; then
  if [ "$FORCE_DELETE" = true ]; then
    echo "[INFO] Directory '$SITE_NAME' already exists. Deleting it as requested (-f)."
    (set -x; rm -rf "$SITE_NAME")
  else
    echo "[ERROR] Directory '$SITE_NAME' already exists. Remove it or use -f to force delete."
    exit 1
  fi
fi

DOCSY_NPM_PKG=$NPM_PKG$NPM_PKG_VERS

set -x

# Setup site
$HUGO new site --format yaml --quiet "$SITE_NAME"
cd "$SITE_NAME"
npm init -y > /dev/null
npm install --save-dev $DOCSY_NPM_PKG $DEPS

echo "theme: docsy" >> hugo.yaml
echo "themesDir: $THEMESDIR" >> hugo.yaml

# Generate site
$HUGO

set +x

echo "[INFO] $SITE_NAME successfully created, set up, and built."
