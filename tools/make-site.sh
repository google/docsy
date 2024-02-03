#!/bin/bash

set -eo pipefail

DEPS="autoprefixer postcss-cli"
DOCSY_REPO_DEFAULT="google/docsy"
DOCSY_REPO=$DOCSY_REPO_DEFAULT
DOCSY_VERS=""
DOCSY_SRC="NPM"
FORCE_DELETE=false
: ${HUGO:=npx hugo}
SITE_NAME="test-site"
THEMESDIR="node_modules"
VERBOSE=1
OUTPUT_REDIRECT="" # Use along with VERBOSE

function _usage() {
  cat <<EOS
Usage: `basename $0` [options]

  Creates a Docsy-themed site under SITE_NAME using the Hugo new command.
  Docsy is fetched as an NPM package from $DOCSY_REPO in GitHub,
  unless the -l or -s HUGO_MOD flags are used.

  -f            Force delete SITE_NAME if it exists before recreating it
  -h            Output this usage info
  -l PATH       Use local Docsy from PATH. Default: '$THEMESDIR'
  -n SITE_NAME  Name of directory to create for the Hugo generated site.
                Default: '$SITE_NAME'
  -q            Run a bit more quietly.
  -r REPO       GitHub org+repo to fetch Docsy from.
                Format: GITHUB_USER/DOCSY_REPO. Default: $DOCSY_REPO_DEFAULT
  -s MOD_OR_PKG Docsy source: from a Hugo module or NPM package named '$DOCSY_REPO', where
                MOD_OR_PKG is NPM or HUGO_MODULE (HUGO for short). Default: $DOCSY_SRC
  -v VERS       Docsy Hugo module or NPM package version. Default: '$DOCSY_VERS'.
                Examples for Hugo modules: v1.1.1, some-branch-name
                Examples for NPM: semver:1.1.1, some-branch-name

EOS
}

function usage() {
  local status=${1:-0}
  _usage 1>&2
  exit $status
}

function process_CLI_args() {
  while getopts ":fhl:n:qr:s:v:" opt; do
    case $opt in
      f)
        FORCE_DELETE=true
        ;;
      h)
        usage
        ;;
      l)
        DOCSY_SRC="LOCAL"
        THEMESDIR="$OPTARG"
        ;;
      n)
        SITE_NAME="$OPTARG"
        ;;
      q)
        VERBOSE=""
        OUTPUT_REDIRECT="> /dev/null 2>&1"
        ;;
      r)
        DOCSY_REPO="$OPTARG"
        ;;
      s)
        DOCSY_SRC=$(echo "$OPTARG" | tr '[:lower:]' '[:upper:]')
        if [[ $DOCSY_SRC != "NPM" && $DOCSY_SRC != HUGO* ]]; then
          echo "ERROR: invalid argument to -s flag: $OPTARG"
          usage 1;
        fi
        ;;
      v)
        DOCSY_VERS="$OPTARG"
        ;;
      \?)
        echo "ERROR: unrecognized flag: -$OPTARG"
        usage 1;
        ;;
    esac
  done

  shift $((OPTIND-1))
  if [ "$#" -gt 0 ]; then
    echo "ERROR: extra argument(s): $*" >&2
    usage 1;
  fi
}

# Create site directory, checking if it exists first
function create_site_directory() {
  if [ -e "$SITE_NAME" ]; then
    if [ "$FORCE_DELETE" = true ]; then
      echo "[INFO] Directory '$SITE_NAME' already exists. Deleting it as requested (-f)."
      ([[ $VERBOSE ]] && set -x; rm -rf "$SITE_NAME")
    else
      echo "[ERROR] Directory '$SITE_NAME' already exists. Remove it or use -f to force delete."
      exit 1
    fi
  fi
}

function _npm_install() {
  npm init -y > /dev/null
  npm install --omit dev --save $DEPS
}

function set_up_and_cd_into_site() {
  $HUGO new site --format yaml --quiet "$SITE_NAME"
  cd "$SITE_NAME"
  eval _npm_install $OUTPUT_REDIRECT

  if [[ "$DOCSY_SRC" == HUGO* ]]; then
    _set_up_site_using_hugo_modules
  else
    echo "theme: docsy" >> hugo.yaml
    echo "themesDir: $THEMESDIR" >> hugo.yaml
  fi
}

function _set_up_site_using_hugo_modules() {
  local user_name=$(whoami)
  # : ${user_name:=$USER}
  # : ${user_name:="me"}

  HUGO_MOD_WITH_VERS=$DOCSY_REPO
  if [[ -n $DOCSY_VERS ]]; then
    HUGO_MOD_WITH_VERS+="@$DOCSY_VERS"
  fi

  echo "[INFO] Getting Docsy as Hugo module $HUGO_MOD_WITH_VERS"

  eval "$HUGO mod init github.com/$user_name/$SITE_NAME" $OUTPUT_REDIRECT

  if [[ "$DOCSY_REPO" == "$DOCSY_REPO_DEFAULT" ]]; then
    eval "$HUGO mod get github.com/$HUGO_MOD_WITH_VERS" $OUTPUT_REDIRECT
  else
    echo "[INFO] Fetch Docsy GitHub repo '$DOCSY_REPO' @ '$DOCSY_VERS'"
    mkdir tmp
    local BRANCH_SPEC=""
    local DEPTH=10
    local SWITCH_NEEDED=
    local CLONE="git clone --depth=$DEPTH https://github.com/$DOCSY_REPO tmp/docsy"
    if [[ -n $DOCSY_VERS ]]; then
      BRANCH_SPEC="-b $DOCSY_VERS"
    fi
    if ! $CLONE $BRANCH_SPEC; then
      SWITCH_NEEDED=1
      $CLONE
    fi
    ( \
      cd tmp/docsy && \
      git log --oneline -$DEPTH && \
      if [[ -n $SWITCH_NEEDED ]]; then git switch --detach $DOCSY_VERS; fi \
    )
    echo "replace github.com/$DOCSY_REPO_DEFAULT => ./tmp/docsy" >> go.mod
    eval "$HUGO mod get github.com/$DOCSY_REPO_DEFAULT" $OUTPUT_REDIRECT
  fi

  echo "module: {proxy: direct, hugoVersion: {extended: true}, imports: [{path: github.com/$DOCSY_REPO_DEFAULT, disable: false}]}" >> hugo.yaml
}

function main() {
  process_CLI_args "$@"
  create_site_directory

  if [[ "$DOCSY_SRC" == "NPM" ]]; then
    NPM_PKG=$DOCSY_REPO
    if [[ -n $DOCSY_VERS ]]; then
      NPM_PKG+="#$DOCSY_VERS"
    fi
    echo "[INFO] Getting Docsy as NPM package '$NPM_PKG'"
    DEPS+=" $NPM_PKG"
  elif [[ "$DOCSY_SRC" == "LOCAL" ]]; then
    echo "[INFO] Getting Docsy through a local directory '$THEMESDIR"
  fi

  [[ $VERBOSE ]] && set -x
  set_up_and_cd_into_site
  eval $HUGO $OUTPUT_REDIRECT # Generate site
  [[ $VERBOSE ]] && set +x
  cd ..

  echo "[INFO] '$SITE_NAME' successfully created, set up, and built."

  if [[ $VERBOSE ]]; then
    echo "[INFO] Here are the site files:"
    echo
    set -x
    ls -l "$SITE_NAME"
    echo
    ls -l "$SITE_NAME/public"
  fi
}

main "$@"
