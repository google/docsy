#!/bin/bash
#
# cSpell:ignore chromastyles

set -eo pipefail

# Repo-installed Hugo only: this script redirects hugo's stdout into the
# generated .scss. Bare-npx fallback rationale: tests/runner-lint.test.mjs.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HUGO="${HUGO:-$SCRIPT_DIR/../node_modules/.bin/hugo}"
CHROMA_STYLE=
DEST_DIR=theme/assets/scss/td/chroma
DEST_FILE=
DEST_PATH=/dev/null # Set in process_CLI_args

function _usage() {
  cat <<EOS
Usage: `basename $0` [options]

  Generate CSS for the named Chroma style using Hugo.

  -h            Output this usage info.
  -o FILE       Output file name relative to $DEST_DIR.
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

  if [ -z "$CHROMA_STYLE" ]; then
    echo "ERROR: -s STYLE is required"
    usage 1;
  fi

  if [ -z "$DEST_FILE" ]; then
    echo "ERROR: -o FILE is required"
    usage 1;
  fi

  DEST_PATH="$DEST_DIR/$DEST_FILE"
}

function main() {
  process_CLI_args "$@"

  # Mixin-wrapped (name derived from FILE) so importing a style is
  # side-effect free: dart-sass forbids Sass @imports nested under control
  # directives like @if (selector nesting is fine), so td/_code-dark.scss
  # imports at top level and @includes the mixin where the styles belong.
  local mixin_name="chroma-$(basename "$DEST_FILE" .scss | sed 's/^_//')"

  # For more options, see https://gohugo.io/commands/hugo_gen_chromastyles/
  local tmp_out
  tmp_out="$(mktemp)"
  local cmd="$HUGO gen chromastyles --style=$CHROMA_STYLE >> $tmp_out"
  echo "Generating $DEST_FILE from Chroma style $CHROMA_STYLE using:"
  echo "  $cmd"

  echo "/* Chroma style: $CHROMA_STYLE */" > $DEST_PATH
  eval "$cmd"
  # Header comment ahead of the mixin, rule lines inside it.
  head -1 "$tmp_out" >> $DEST_PATH
  echo "@mixin $mixin_name {" >> $DEST_PATH
  tail -n +2 "$tmp_out" >> $DEST_PATH
  echo "}" >> $DEST_PATH
  rm -f "$tmp_out"
}

main "$@"
