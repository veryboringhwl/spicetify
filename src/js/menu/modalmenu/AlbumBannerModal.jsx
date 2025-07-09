import { memo } from "react";
import ButtonContainer from "../components/ButtonContainer";
import OptionType from "../components/OptionType";
import useModalSettings from "./useModalSettings";

const AlbumBannerModal = memo(() => {
  const { settings, updateSetting, resetSettings, saveSettings } =
    useModalSettings(albumBannerOptions);

  return (
    <div className="settings-modal">
      <div className="settings-modal__options">
        {albumBannerOptions.map((option) => (
          <OptionType
            key={option.name}
            option={option}
            value={settings[option.name]}
            onChange={(key, value) => updateSetting(key, value)}
          />
        ))}
      </div>
      <div className="settings-modal__buttons">
        <ButtonContainer resetSettings={resetSettings} saveSettings={saveSettings} />
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
    run(value) {
      document.documentElement.classList.toggle("AlbumBannerPage", value);
    },
  },
  {
    type: "toggle",
    name: "LyricsPage",
    desc: "Adds Dynamic backgrounds to Lyrics Page",
    defaultVal: true,
    tippy: "Includes Spotify Lyrics page and Spicetify's Lyrics Plus",
    run(value) {
      document.documentElement.classList.toggle("LyricsPage", value);
    },
  },
  {
    type: "toggle",
    name: "PlaylistPage",
    desc: "Adds Dynamic backgrounds to your Playlist Pages",
    defaultVal: true,
    run(value) {
      document.documentElement.classList.toggle("PlaylistPage", value);
    },
  },
  {
    type: "toggle",
    name: "ArtistPage",
    desc: "Adds Dynamic backgrounds to Artist Pages",
    defaultVal: true,
    run(value) {
      document.documentElement.classList.toggle("ArtistPage", value);
    },
  },
  {
    type: "toggle",
    name: "AlbumPage",
    desc: "Adds Dynamic backgrounds to Album Pages",
    defaultVal: true,
    run(value) {
      document.documentElement.classList.toggle("AlbumPage", value);
    },
  },
  {
    type: "toggle",
    name: "MiscPage",
    desc: "Adds Dynamic backgrounds to Misc Pages",
    defaultVal: true,
    tippy: "Enables album art for Station, Collection, Show, Episode, Genre, User",
    run(value) {
      document.documentElement.classList.toggle("MiscPage", value);
    },
  },
];

export default AlbumBannerModal;
