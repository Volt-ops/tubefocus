#!/usr/bin/env bash
# Builds tubefocus.zip, ready to upload to the Chrome Web Store or Firefox Add-ons.
set -euo pipefail
cd "$(dirname "$0")/.."
rm -f tubefocus.zip
zip -r tubefocus.zip manifest.json defaults.js content.js styles.css popup.html popup.css popup.js icons -x "*.DS_Store"
echo "Built tubefocus.zip"
