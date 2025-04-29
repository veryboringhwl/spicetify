import ColourScheme from "../../features/ColourScheme";
import CoverArtBanner from "../../features/CoverArtBanner";
import SpotifyMode from "../../features/SpotifyMode";
import ToggleLibXUI from "../../features/ToggleLibXUI";
import VolPercent from "../../features/VolPercent";
import AlbumBannerModal from "../../menu/modalmenu/AlbumBannerModal";
import WindowsControlModal from "../../menu/modalmenu/WindowsControlModal";

const options = {
  Features: [
    {
      type: "dropdown",
      name: "colourschemeselector",
      desc: "Change the colour scheme of Spotify",
      defaultVal: "default",
      options: [
        { value: "default", label: "Default" },
        { value: "dark", label: "Dark" },
        { value: "light", label: "Light" },
        { value: "bloom", label: "Bloom" },
        { value: "spotify", label: "Spotify" },
      ],
      run(value) {
        ColourScheme(value);
      },
    },
    {
      type: "dropdown",
      name: "change-Spotify-mode",
      desc: "Change Spotify mode",
      defaultVal: "developer",
      tippy: "Only takes effect after a restart",
      options: [
        { value: "default", label: "Default" },
        { value: "developer", label: "Developer" },
        { value: "employee", label: "Employee" },
        { value: "both", label: "Dev + Empl" },
      ],
      run(value) {
        SpotifyMode(value);
      },
    },
    {
      type: "input",
      name: "ZoomLevel",
      desc: "Change the zoom level of Spotify page",
      defaultVal: 100,
      placeholder: "100%",
      run(value) {
        Zoomlevel = value / 100;
        document.documentElement.style.setProperty("--Zoomlevel", Zoomlevel);
      },
    },
    {
      type: "toggle",
      name: "AlbumBannerPage",
      desc: "Put album cover art in various pages",
      defaultVal: true,
      popupModal: AlbumBannerModal,
      run(value) {
        CoverArtBanner(value);
      },
    },
    {
      type: "toggle",
      name: "VolumePercentage",
      desc: "Show volume percentage next to volume slider",
      defaultVal: true,
      run(value) {
        VolPercent(value);
      },
    },
    {
      type: "toggle",
      name: "WindowsControl",
      desc: "Adjust the position and brightness of the windows controls",
      defaultVal: false,
      popupModal: WindowsControlModal,
    },
    {
      type: "input",
      name: "uifont",
      desc: "Changes the font of the Spotify app",
      defaultVal: "SpotifyMixUI",
      placeholder: "SpotifyMixUI",
      tippy: "This will only work if you have the font installed locally",
      run(value) {
        document.documentElement.style.setProperty("--FontFamily", value);
      },
    },
  ],
  Layouts: [
    {
      type: "toggle",
      name: "LibX",
      desc: "Restore the old UI >2024 (Pre Global Nav Bar)",
      defaultVal: false,
      run(value) {
        ToggleLibXUI(value);
      },
      reveal: [
        {
          type: "toggle",
          name: "highlightnav",
          desc: "Adds highlight to the selected page",
          defaultVal: true,
        },
        {
          type: "toggle",
          name: "PreLibX",
          desc: "Restore the old UI >2023 (Pre LibraryX)",
          defaultVal: false,
        },
        {
          type: "toggle",
          name: "CompactLib",
          desc: "Makes library compact while keeping icons",
          defaultVal: false,
          tippy: "Broken if library is collapsed",
        },
      ],
    },
    {
      type: "toggle",
      name: "TestLayout",
      desc: "Rearrange playbutton to start and cover art to middle",
      defaultVal: true,
    },
    {
      type: "toggle",
      name: "switchlayout",
      desc: "Uses different grid layout for Now playing bar",
      defaultVal: true,
    },
  ],
  Snippets: [
    {
      type: "toggle",
      name: "hidetracklistnum",
      desc: "Hide tracklist numbers in various pages",
      defaultVal: true,
    },
    {
      type: "toggle",
      name: "greenicon",
      desc: "Make the selected tab icon green",
      defaultVal: true,
    },
    {
      type: "toggle",
      name: "transplayicon",
      desc: "Make the play/pause button transparent",
      defaultVal: true,
    },
    {
      type: "toggle",
      name: "npvlargerlyrics",
      desc: "Show lyrics only in Now playing view",
      defaultVal: false,
    },
    {
      type: "toggle",
      name: "homeheader",
      desc: "Remove the coloured gradient from the home page header",
      defaultVal: true,
    },
  ],
  Test: [
    {
      type: "toggle",
      name: "test-toggle",
      desc: "Description",
      defaultVal: true,
    },
    {
      type: "toggle",
      name: "test-reveal",
      desc: "Description",
      defaultVal: true,
      reveal: [
        {
          type: "toggle",
          name: "revealed-toggle",
          desc: "Description",
          defaultVal: true,
        },
        {
          type: "input",
          name: "revealed-input",
          desc: "Description",
          defaultVal: true,
        },
        {
          type: "dropdown",
          name: "revealed-dropdown",
          desc: "Description",
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
    {
      type: "input",
      name: "test-input",
      desc: "Description",
      defaultVal: 1,
      placeholder: "does something",
    },
    {
      type: "dropdown",
      name: "test-dropdown",
      desc: "Description",
      defaultVal: "test1",
      options: [
        { value: "test1", label: "test1" },
        { value: "test2", label: "test2" },
        { value: "test3", label: "test3" },
        { value: "test4", label: "test4" },
      ],
    },
  ],
};

export default options;
