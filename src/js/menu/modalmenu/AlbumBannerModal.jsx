import { memo } from "react";
import ButtonContainer from "../components/ButtonContainer";
import RenderOption from "../components/RenderOption";
import useModalSettings from "./useModalSettings";

const AlbumBannerModal = memo(() => {
  const { settings, updateSetting, resetSettings, saveSettings } =
    useModalSettings(albumBannerOptions);

  return (
    <div className="settings-modal">
      <div className="settings-modal__options">
        {albumBannerOptions.map((option) => (
          <RenderOption
            key={option.name}
            option={option}
            settings={settings}
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
    name: "album-banner-page",
    desc: "Puts album art in places",
    defaultVal: true,
    run(value) {
      document.documentElement.classList.toggle("album-banner-page", value);
    },
  },
  {
    type: "toggle",
    name: "home-page",
    desc: "Adds Dynamic backgrounds to Home Page",
    defaultVal: false,
    run(value) {
      document.documentElement.classList.toggle("home-page", value);
    },
  },
  {
    type: "toggle",
    name: "lyrics-page",
    desc: "Adds Dynamic backgrounds to Lyrics Page",
    defaultVal: true,
    tippy: "Includes Spotify Lyrics page and Spicetify's Lyrics Plus",
    run(value) {
      document.documentElement.classList.toggle("lyrics-page", value);
    },
  },
  {
    type: "toggle",
    name: "playlist-page",
    desc: "Adds Dynamic backgrounds to your Playlist Pages",
    defaultVal: true,
    run(value) {
      document.documentElement.classList.toggle("playlist-page", value);
    },
  },
  {
    type: "toggle",
    name: "artist-page",
    desc: "Adds Dynamic backgrounds to Artist Pages",
    defaultVal: true,
    run(value) {
      document.documentElement.classList.toggle("artist-page", value);
    },
  },
  {
    type: "toggle",
    name: "album-page",
    desc: "Adds Dynamic backgrounds to Album Pages",
    defaultVal: true,
    run(value) {
      document.documentElement.classList.toggle("album-page", value);
    },
  },
  {
    type: "toggle",
    name: "misc-page",
    desc: "Adds Dynamic backgrounds to Misc Pages",
    defaultVal: true,
    tippy: "Enables album art for Station, Collection, Show, Episode, Genre, User",
    run(value) {
      document.documentElement.classList.toggle("misc-page", value);
    },
  },
];

export default AlbumBannerModal;
