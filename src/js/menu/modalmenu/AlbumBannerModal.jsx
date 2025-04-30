import React from "react";
import CoverArtBanner from "../../features/CoverArtBanner";
import LocalStorage from "../../utils/LocalStorage";
import OptionType from "../components/OptionType";
import resetModal from "./resetModal";
import saveModal from "./saveModal";

const AlbumBannerModal = React.memo(() => {
  const [settings, setSettings] = React.useState(() =>
    Object.fromEntries(
      albumBannerOptions.map((option) => [
        option.name,
        LocalStorage.get(`theme:${option.name}`, option.defaultVal),
      ]),
    ),
  );

  const handleSettingChange = React.useCallback((key, value) => {
    setSettings((prev) => ({ ...prev, [key.replace("theme:", "")]: value }));
  }, []);

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
          onChange={handleSettingChange}
        />
      ))}
      <div className="buttonContainer">
        <button className="resetButton" onClick={() => resetModal(albumBannerOptions, setSettings)}>
          Reset
        </button>
        <button
          className="saveButton"
          onClick={() => {
            saveModal(settings, albumBannerOptions);
            CoverArtBanner();
          }}
        >
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
    tippy: "Includes Spotify Lyrics page and Spicetify's Lyrics Plus",
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
