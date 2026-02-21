#!/usr/bin/env bash
# Rebuild the resume and copy the output into the site.
# Run from anywhere; paths are resolved relative to this script.
#
# Usage:
#   scripts/update-resume.sh              # expects resume repo at ../resume
#   scripts/update-resume.sh /other/path  # explicit path to resume repo

set -euo pipefail

SITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RESUME_DIR="${1:-"$(dirname "$SITE_DIR")/resume"}"

if [[ ! -f "$RESUME_DIR/package.json" ]]; then
  echo "Error: no package.json found at $RESUME_DIR" >&2
  exit 1
fi

echo "→ Building resume at $RESUME_DIR"
cd "$RESUME_DIR"
npm run build

echo "→ Copying dist to $SITE_DIR/resume/"
rm -rf "$SITE_DIR/resume"
mkdir -p "$SITE_DIR/resume"
cp -r dist/* "$SITE_DIR/resume/"

echo "→ Done. Stage and commit when ready:"
echo "    git add resume/ && git commit -m 'Update resume build'"
