import React from "react";
import OptionType from "../components/OptionType";
import useModalSettings from "./useModalSettings";

const AlbumBannerModal = React.memo(() => {
  const { settings, updateSetting, resetSettings, saveSettings } =
    useModalSettings(albumBannerOptions);

  React.useEffect(() => {
    albumBannerOptions.forEach((option) => option.run?.(settings[option.name]));
  }, [settings]);

  return (
    <div className="themeModalOptions albumBannerSettings">
      {albumBannerOptions.map((option) => (
        <OptionType
          key={option.name}
          option={option}
          value={settings[option.name]}
          onChange={(key, value) => updateSetting(key.replace("theme:", ""), value)}
        />
      ))}
      <div className="buttonContainer">
        <button className="resetButton" onClick={resetSettings}>
          Reset
        </button>
        <button className="saveButton" onClick={saveSettings}>
          Save
        </button>
      </div>
    </div>
  );
});

export const albumBannerOptions = [
  {
    type: "toggle",
    name: "AlbumBannerPage",
    desc: "Puts album art in places",
    defaultVal: true,
  },
  {
    type: "toggle",
    name: "LyricsPage",
    desc: "Adds Dynamic backgrounds to Lyrics Page",
    defaultVal: true,
    tippy: "Includes Spotify Lyrics page and Spicetify's Lyrics Plus",
  },
  {
    type: "toggle",
    name: "PlaylistPage",
    desc: "Adds Dynamic backgrounds to your Playlist Pages",
    defaultVal: true,
  },
  {
    type: "toggle",
    name: "ArtistPage",
    desc: "Adds Dynamic backgrounds to Artist Pages",
    defaultVal: true,
  },
  {
    type: "toggle",
    name: "AlbumPage",
    desc: "Adds Dynamic backgrounds to Album Pages",
    defaultVal: true,
  },
  {
    type: "toggle",
    name: "MiscPage",
    desc: "Adds Dynamic backgrounds to Misc Pages",
    defaultVal: true,
    tippy: "Enables album art for Station, Collection, Show, Episode, Genre, User",
  },
];

export default AlbumBannerModal;
