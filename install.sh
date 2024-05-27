#!/bin/sh

set -e

# Download URL
theme_url="https://raw.githubusercontent.com/veryboringhwl/spicetify/main"

# Setup directories to download to
spice_dir="$(dirname "$(spicetify -c)")"
theme_dir="${spice_dir}/Themes"

# Make directories if needed
mkdir -p "${theme_dir}/boring"

# Download latest tagged files into correct director
echo "Downloading Theme..."
curl --silent --output "${theme_dir}/boring/color.ini" "${theme_url}/src/color.ini"
curl --silent --output "${theme_dir}/boring/user.css" "${theme_url}/src/user.css"
curl --silent --output "${theme_dir}/boring/theme.js" "${theme_url}/src/theme.js"
echo "Done"

# Apply theme
echo "Applying theme"
spicetify config current_theme boring
spicetify config inject_css 1 replace_colors 1 overwrite_assets 1 inject_theme_js 1
spicetify apply

echo "All done!"