import { type FC, memo } from "react";
import type { Option } from "../../types/temp.d.ts";
import { ButtonContainer } from "../components/ButtonContainer.tsx";
import { RenderOption } from "../components/RenderOption.tsx";
import { useModalSettings } from "./useModalSettings.ts";

export const albumBannerOptions: Option[] = [
  {
    type: "toggle",
    name: "album-banner-page",
    desc: "Puts album art in places",
    defaultVal: true,
    run(value: boolean) {
      document.documentElement.classList.toggle("album-banner-page", value);
    },
  },
  {
    type: "toggle",
    name: "home-page",
    desc: "Adds Dynamic backgrounds to Home Page",
    defaultVal: false,
    run(value: boolean) {
      document.documentElement.classList.toggle("home-page", value);
    },
  },
  {
    type: "toggle",
    name: "lyrics-page",
    desc: "Adds Dynamic backgrounds to Lyrics Page",
    defaultVal: true,
    tippy: "Includes Spotify Lyrics page and Spicetify's Lyrics Plus",
    run(value: boolean) {
      document.documentElement.classList.toggle("lyrics-page", value);
    },
  },
  {
    type: "toggle",
    name: "playlist-page",
    desc: "Adds Dynamic backgrounds to your Playlist Pages",
    defaultVal: true,
    run(value: boolean) {
      document.documentElement.classList.toggle("playlist-page", value);
    },
  },
  {
    type: "toggle",
    name: "artist-page",
    desc: "Adds Dynamic backgrounds to Artist Pages",
    defaultVal: true,
    run(value: boolean) {
      document.documentElement.classList.toggle("artist-page", value);
    },
  },
  {
    type: "toggle",
    name: "album-page",
    desc: "Adds Dynamic backgrounds to Album Pages",
    defaultVal: true,
    run(value: boolean) {
      document.documentElement.classList.toggle("album-page", value);
    },
  },
  {
    type: "toggle",
    name: "misc-page",
    desc: "Adds Dynamic backgrounds to Misc Pages",
    defaultVal: true,
    tippy: "Enables album art for Station, Collection, Show, Episode, Genre, User",
    run(value: boolean) {
      document.documentElement.classList.toggle("misc-page", value);
    },
  },
];

export const AlbumBannerModal: FC = memo(() => {
  const { settings, handleSettingChange, resetSettings, saveSettings } =
    useModalSettings(albumBannerOptions);

  return (
    <div className="settings-modal">
      <div className="settings-modal__options">
        {albumBannerOptions.map((option) => (
          <RenderOption
            key={option.name}
            onChange={handleSettingChange}
            option={option}
            settings={settings}
          />
        ))}
      </div>
      <div className="settings-modal__buttons">
        <ButtonContainer resetSettings={resetSettings} saveSettings={saveSettings} />
      </div>
    </div>
  );
});

export default AlbumBannerModal;
