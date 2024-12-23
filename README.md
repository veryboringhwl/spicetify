# Spicetify theme

A customisable Spicetify theme inspired by Fluent UI design

## Preview

| Color      | Screenshot                           |
| ---------- | ------------------------------------ |
| Dark       | ![(dark)](assets/dark.png)           |
| Light      | ![(light)](assets/light.png)         |
| Bloom Dark | ![(bloomdark)](assets/bloomdark.png) |
| Spotify    | ![(spotify)](assets/spotify.png)     |

## Features

- Settings Menu
- Dynamic lyrics background
- Multiple colour schemes
- Customisable built-in snippets/layouts
- Restore previous Spotify UIs

## Installation

### Spicetify Marketplace

The simplest way to install the theme is through the [Spicetify Marketplace](https://github.com/spicetify/marketplace):

1. Open Spicetify Marketplace.
2. Search for "boring" theme.
3. Click "Install".

### Auto Installation

Windows → PowerShell/Terminal:

```pwsh
iwr -useb https://raw.githubusercontent.com/veryboringhwl/spicetify/main/install.ps1 | iex
```

Linux and MacOS → Bash/Terminal:

```sh
curl -fsSL https://raw.githubusercontent.com/veryboringhwl/spicetify/main/install.sh | sh
```

### Manual installation

1. Clone or download the repository
2. Navigate to your spicetify folder (Type `spicetify config-dir` into terminal)
3. Move the whole `dist` folder into `themes`
4. Rename the `dist` folder to `boring`
5. Open Powershell and run these commands to apply

```powershell
 spicetify config current_theme "boring"
 spicetify config inject_css 1 replace_colors 1 overwrite_assets 1 inject_theme_js 1
 spicetify apply
```

### Uninstallation

Type these commands into the terminal

```powershell
spicetify config color_scheme ''
spicetify config current_theme marketplace
spicetify apply
```

## Colour scheme

The colour schemes are `dark` `light` `bloomdark` `spotify`. Apply by typing into terminal (remove the < > when typing)

`spicetify config color_scheme <colour scheme>`

## Credits

Based off of:

- [Bloom](https://github.com/nimsandu/spicetify-bloom)
- [Comfy](https://github.com/Comfy-Themes/Spicetify):
- [Hazy](https://github.com/Astromations/Hazy):
