import TestMenu from "../../debug/TestMenu.tsx";
import ColourScheme from "../../features/ColourScheme.ts";
import CoverArtBanner from "../../features/CoverArtBanner.ts";
import SpotifyMode from "../../features/SpotifyMode.ts";
import ToggleAppleMusic from "../../features/ToggleAppleMusic.ts";
import ToggleLibXUI from "../../features/ToggleLibXUI.ts";
import VolPercent from "../../features/VolPercent.tsx";
import AlbumBannerModal from "../../menu/modalmenu/AlbumBannerModal.tsx";
import WindowsControlModal from "../../menu/modalmenu/WindowsControlModal.tsx";

const options = {
  Features: [
    {
      type: "radiobutton",
      name: "colour-scheme",
      desc: "Colour Scheme",
      defaultVal: "default",
      options: [
        { value: "default", label: "Default" },
        { value: "dark", label: "Dark" },
        { value: "light", label: "Light" },
        { value: "bloom", label: "Bloom" },
        { value: "spotify", label: "Spotify" },
      ],
      tippy: "Default uses the colour scheme set in config-xpui.ini",
      run(value: string) {
        ColourScheme(value);
      },
    },
    {
      type: "dropdown",
      name: "spotify-mode",
      desc: "Spotify mode",
      defaultVal: "default",
      tippy: "Only takes effect after a restart",
      options: [
        { value: "default", label: "Default" },
        { value: "developer", label: "Developer" },
      ],
      run(value: string) {
        SpotifyMode(value);
      },
    },
    {
      type: "toggle",
      name: "album-banner-page",
      desc: "Puts Track cover art in various pages",
      defaultVal: true,
      popupModal: AlbumBannerModal,
      run(value: boolean) {
        document.documentElement.classList.toggle("album-banner-page", value);
        CoverArtBanner();
      },
    },
    {
      type: "toggle",
      name: "volume-percentage",
      desc: "Adds volume percentage next to volume slider",
      defaultVal: true,
      run(value: boolean) {
        VolPercent(value);
      },
    },
    {
      type: "toggle",
      name: "windows-control",
      desc: "Adjusts brightness and position of windows controls",
      defaultVal: false,
      tippy: "This will override the themes default windows controls",
      popupModal: WindowsControlModal,
      run: (value: boolean) => {
        document.documentElement.classList.toggle("windows-control", value);
      },
    },
    {
      type: "input",
      name: "spotify-font",
      desc: "Spotify font",
      defaultVal: "SpotifyMixUI",
      placeholder: "SpotifyMixUI",
      tippy: "This will only work if you have the font installed locally",
      run(value: string) {
        document.documentElement.style.setProperty("--FontFamily", value);
      },
    },
  ],
  Layouts: [
    {
      type: "toggle",
      name: "libx-ui",
      desc: "Restores the old UI >2024 (Pre Global Nav Bar)",
      defaultVal: false,
      incompatible: ["AppleMusic"],
      tippy: "Incompatible with AppleMusic",
      run(value: boolean) {
        document.documentElement.classList.toggle("libx-ui", value);
        ToggleLibXUI(value);
      },
      reveal: [
        {
          type: "toggle",
          name: "highlight-navlinks",
          desc: "Adds highlights to the selected page",
          defaultVal: true,
          run(value: boolean) {
            document.documentElement.classList.toggle("highlight-navlinks", value);
          },
        },
        {
          type: "toggle",
          name: "pre-libx-ui",
          desc: "Restores the old UI >2023 (Pre LibraryX)",
          defaultVal: false,
          run(value: boolean) {
            document.documentElement.classList.toggle("pre-libx-ui", value);
          },
        },
        {
          type: "toggle",
          name: "compact-library",
          desc: "Uses compact sidebar",
          defaultVal: false,
          tippy: "Broken if library is collapsed",
          run(value: boolean) {
            document.documentElement.classList.toggle("compact-library", value);
          },
        },
      ],
    },
    {
      type: "toggle",
      name: "apple-music-ui",
      desc: "Changes the UI to look like Apple Music",
      defaultVal: false,
      incompatible: ["LibX", "switchlayout", "TestLayout", "greenicon"],
      tippy: "Incompatible with LibX, Switchlayout, greenicon and testlayout",
      run(value: boolean) {
        document.documentElement.classList.toggle("apple-music-ui", value);
        ToggleAppleMusic(value);
      },
    },
    {
      type: "toggle",
      name: "modern-layout",
      desc: "Reorders play button to start and cover art to middle",
      incompatible: ["AppleMusic"],
      tippy: "Incompatible with AppleMusic",
      defaultVal: true,
      run(value: boolean) {
        document.documentElement.classList.toggle("modern-layout", value);
      },
    },
    {
      type: "toggle",
      name: "switch-grid-layout",
      desc: "Uses different grid layout",
      incompatible: ["AppleMusic"],
      tippy: "Incompatible with AppleMusic",
      defaultVal: true,
      run(value: boolean) {
        document.documentElement.classList.toggle("switch-grid-layout", value);
      },
    },
  ],
  Snippets: [
    {
      type: "toggle",
      name: "hide-tracklist-numbers",
      desc: "Hides tracklist numbers in various pages",
      defaultVal: true,
      run(value: boolean) {
        document.documentElement.classList.toggle("hide-tracklist-numbers", value);
      },
    },
    {
      type: "toggle",
      name: "green-navLink-icons",
      desc: "Makes Navlinks green",
      incompatible: ["AppleMusic"],
      tippy: "Incompatible with AppleMusic",
      defaultVal: true,
      run(value: boolean) {
        document.documentElement.classList.toggle("green-navLink-icons", value);
      },
    },
    {
      type: "toggle",
      name: "transparent-playbutton",
      desc: "Make the play/pause button transparent",
      defaultVal: true,
      run(value: boolean) {
        document.documentElement.classList.toggle("transparent-playbutton", value);
      },
    },
    {
      type: "toggle",
      name: "lyrics-only-npv",
      desc: "Show lyrics only in Now playing view",
      defaultVal: false,
      run(value: boolean) {
        document.documentElement.classList.toggle("lyrics-only-npv", value);
      },
    },
    {
      type: "toggle",
      name: "no-gradient",
      desc: "Remove the coloured gradient from header",
      defaultVal: true,
      run(value: boolean) {
        document.documentElement.classList.toggle("no-gradient", value);
      },
    },
  ],
  Test: [
    {
      type: "toggle",
      name: "test-toggle",
      desc: "test-toggle",
      defaultVal: true,
      popupModal: TestMenu,
      incompatible: [
        "test-incompatible-toggle",
        "test-incompatible-input",
        "test-incompatible-dropdown",
      ],
      tippy: "Incompatible with test-incompatible",
    },
    {
      type: "toggle",
      name: "test-incompatible-toggle",
      desc: "test-incompatible-toggle",
      defaultVal: true,
    },
    {
      type: "input",
      name: "test-incompatible-input",
      desc: "test-incompatible-input",
      defaultVal: 1,
      placeholder: "does something",
    },
    {
      type: "dropdown",
      name: "test-incompatible-dropdown",
      desc: "test-incompatible-dropdown",
      defaultVal: "test1",
      options: [
        { value: "test1", label: "test1" },
        { value: "test2", label: "test2" },
        { value: "test3", label: "test3" },
        { value: "test4", label: "test4" },
      ],
    },
    {
      type: "input",
      name: "test-input",
      desc: "test-input",
      defaultVal: 1,
      placeholder: "does something",
    },
    {
      type: "dropdown",
      name: "test-dropdown",
      desc: "test-dropdown",
      defaultVal: "test1",
      options: [
        { value: "test1", label: "test1" },
        { value: "test2", label: "test2" },
        { value: "test3", label: "test3" },
        { value: "test4", label: "test4" },
      ],
    },
    {
      type: "radiobutton",
      name: "test-radiobutton",
      desc: "test-radiobutton",
      defaultVal: "test1",
      options: [
        { value: "test1", label: "test1" },
        { value: "test2", label: "test2" },
        { value: "test3", label: "test3" },
        { value: "test4", label: "test4" },
      ],
    },
    {
      type: "toggle",
      name: "test-reveal",
      desc: "test-reveal",
      defaultVal: true,
      reveal: [
        {
          type: "toggle",
          name: "revealed-toggle",
          desc: "revealed-toggle",
          defaultVal: true,
        },
        {
          type: "input",
          name: "revealed-input",
          desc: "revealed-input",
          defaultVal: true,
        },
        {
          type: "dropdown",
          name: "revealed-dropdown",
          desc: "revealed-dropdown",
          defaultVal: "test1",
          options: [
            { value: "test1", label: "test1" },
            { value: "test2", label: "test2" },
            { value: "test3", label: "test3" },
            { value: "test4", label: "test4" },
          ],
        },
      ],
    },
  ],
};

export default options;
