#!/bin/bash

set -eo pipefail

./scripts/_gen-chroma-style.sh -s friendly -o _light.scss && \
./scripts/_gen-chroma-style.sh -s native -o _dark.scss
