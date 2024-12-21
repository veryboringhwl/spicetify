#!/bin/sh

set -e

# Download URL
themeURL="https://raw.githubusercontent.com/veryboringhwl/spicetify/main"

# Setup directories to download to
spicePath="$(dirname "$(spicetify -c)")"
spiceThemes="${spicePath}/Themes"

# Make directories if needed
mkdir -p "${spiceThemes}/boring"

# Download latest tagged files into correct director
echo "Downloading Theme..."
curl --silent --output "${spiceThemes}/boring/color.ini" "${themeURL}/dist/color.ini"
curl --silent --output "${spiceThemes}/boring/user.css" "${themeURL}/dist/user.css"
curl --silent --output "${spiceThemes}/boring/theme.js" "${themeURL}/dist/theme.js"
echo "Done"

# Apply theme
echo "Applying theme"
spicetify config current_theme boring
spicetify config inject_css 1 replace_colors 1 overwrite_assets 1 inject_theme_js 1
spicetify apply

echo "All done!"