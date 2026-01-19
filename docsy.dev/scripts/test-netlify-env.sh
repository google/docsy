#!/bin/bash

# Test environment variables for Netlify build info shortcode
# Usage: (source scripts/test-netlify-env.sh && npm run serve)

export BRANCH="main"
export BUILD_ID="6969a939575aaf0008ac7a48"
export COMMIT_REF="884d714b43e317c83fb9df0a0a25346f1bea4974"
export DEPLOY_ID="6969a939575aaf0008ac7a48"
export NETLIFY="true"
export PULL_REQUEST="false"
export REVIEW_ID=""
export CONTEXT="deploy-preview"

# Uncomment to test PR build scenario:
# export PULL_REQUEST="true"
# export REVIEW_ID="1234"
# export CONTEXT="deploy-preview"

# Uncomment to test production build:
# export CONTEXT="production"

# Uncomment to test local build (no Netlify):
# unset NETLIFY
# export CONTEXT="local"

echo "Netlify test environment variables set:"
echo "  BRANCH=$BRANCH"
echo "  BUILD_ID=$BUILD_ID"
echo "  COMMIT_REF=$COMMIT_REF"
echo "  DEPLOY_ID=$DEPLOY_ID"
echo "  NETLIFY=$NETLIFY"
echo "  PULL_REQUEST=$PULL_REQUEST"
echo "  REVIEW_ID=$REVIEW_ID"
echo "  CONTEXT=$CONTEXT"
echo ""
echo "To use: source scripts/test-netlify-env.sh"
echo "Then run: npm run serve (or your build command)"
