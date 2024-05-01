<div align = "center">
<h1>Veryboring theme</h1>
<p>Spicetify theme inspired by Bloom and Fluent</p>
</div>

## Preview

### Fluent

![(image)](https://raw.githubusercontent.com/veryboringhwl/Spicetify-Theme/main/assets/placeholder2.png?token=GHSAT0AAAAAACRT5YFW22B4KRFGCKV4FFIAZRSNYAA)

### Dark

![(image)](https://raw.githubusercontent.com/veryboringhwl/Spicetify-Theme/main/assets/placeholder1.png?token=GHSAT0AAAAAACRT5YFXWSZDETFODQCQTBVCZRSNXQQ)
## Installation

### Automatic
Windows → PowerShell:

```powershell
iwr -useb https://raw.githubusercontent.com/veryboringhwl/spicetify-theme/main/install.ps1 | iex
```
### Manual installation
1. Clone the repo
2. Navigate to ```%appdata%\spicetify\themes```
3. Move `src` folder into `themes`
4. Rename `src` to `veryboring theme`
4. Open Powershell and run these commands to apply

```powershell
 spicetify config current_theme "spicetify-theme"
 spicetify config inject_css 1 replace_colors 1 overwrite_assets 1 inject_theme_js 1
 spicetify apply
```
### Manual Uninstallation

```powershell
spicetify config color_scheme ''
spicetify config current_theme marketplace
spicetify apply
```

## Colour scheme (Manual install only)
The colour schemes are `dark`,`fluent` Apply using 

`spicetify config color_scheme <colour scheme>`

## Credits
Based off of
- Bloom
- Fluent
