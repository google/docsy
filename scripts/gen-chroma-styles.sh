#!/bin/bash

set -eo pipefail

HUGO="npx hugo"
CHROMA_STYLE=tango
DEST_DIR=assets/scss/td/chroma
DEST_FILE=_light.scss
DEST_PATH=/dev/null # Set in process_CLI_args

function _usage() {
  cat <<EOS
Usage: `basename $0` [options]

  Generate CSS for the named Chroma style using Hugo.

  -h            Output this usage info.
  -o FILE       Output file name relative to $DEST_DIR.
                Default: $DEST_FILE.
  -s STYLE      Chroma style name from list at
                https://xyproto.github.io/splash/docs
                Default: $CHROMA_STYLE.
EOS
}

function usage() {
  local status=${1:-0}
  _usage 1>&2
  exit $status
}

function process_CLI_args() {
  while getopts ":ho:s:" opt; do
    case $opt in
      h)
        usage
        ;;
      o)
        DEST_FILE="$OPTARG"
        ;;
      s)
        CHROMA_STYLE="$OPTARG"
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

  DEST_PATH="$DEST_DIR/$DEST_FILE"
}

function main() {
  process_CLI_args "$@"

  # For more options, see https://gohugo.io/commands/hugo_gen_chromastyles/
  local cmd="$HUGO gen chromastyles --style=$CHROMA_STYLE >> $DEST_PATH"
  echo "Generating $DEST_FILE using: $cmd"

  echo "/* Chroma style: $CHROMA_STYLE */" > $DEST_PATH
  eval "$cmd"
}

main "$@"
