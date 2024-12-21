const options = {
  Features: [
    {
      type: "dropdown",
      name: "colourschemeselector",
      desc: "Changes colour scheme of spotify",
      defaultVal: "default",
      options: [
        { value: "default", label: "Default" },
        { value: "dark", label: "Dark" },
        { value: "light", label: "Light" },
        { value: "bloom", label: "Bloom" },
        { value: "spotify", label: "Spotify" },
      ],
      run(value) {
        selectColourScheme(value);
      },
    },
    {
      type: "dropdown",
      name: "change-Spotify-mode",
      desc: "Changes Spotify Mode to either Normal, Developer or Employee",
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
      desc: "Changes zoom level (%)",
      defaultVal: 100,
      placeholder: "%",
      run(value) {
        Zoomlevel = value / 100;
        document.documentElement.style.setProperty("--Zoomlevel", Zoomlevel);
      },
    },
    {
      type: "toggle",
      name: "AlbumBannerinPage",
      desc: "Puts album art in places",
      defaultVal: true,
      run(value) {
        coverArtBanner(value);
      },
      reveal: [
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
          tippy:
            "Enables album art for Station, Collection, Show, Episode, Genre, User",
        },
      ],
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
  ],
  Layouts: [
    {
      type: "toggle",
      name: "LibX",
      desc: "Brings back old ui",
      defaultVal: false,
      run(value) {
        toggleLibXUI(value);
      },
      reveal: [
        {
          type: "toggle",
          name: "highlightnav",
          desc: "Removes coloured gradient from the home page header",
          defaultVal: true,
        },
        {
          type: "toggle",
          name: "PreLibX",
          desc: "Brings back old ui ()",
          defaultVal: false,
        },
        {
          type: "toggle",
          name: "CompactLib",
          desc: "Makes library compact while keeping icons",
          defaultVal: false,
        },
      ],
    },
    {
      type: "toggle",
      name: "TestLayout",
      desc: "Switches Playbar and Cover art in now playing bar",
      defaultVal: true,
      tippy: "This is not compatible with newlayout",
    },
    {
      type: "toggle",
      name: "CombinedLibX",
      desc: "Combines the nowplaying view and library menu",
      defaultVal: false,
      tippy: "This is not compatible with newlayout",
    },
    {
      type: "toggle",
      name: "switchlayout",
      desc: "Makes left sidebar go in front of the now playing bar",
      defaultVal: true,
    },
  ],
  Snippets: [
    {
      type: "toggle",
      name: "hidetracklistnum",
      desc: "Hide tracklist numbers in playlist page",
      defaultVal: true,
    },
    {
      type: "toggle",
      name: "greenicon",
      desc: "Makes active tab icon green",
      defaultVal: true,
    },
    {
      type: "toggle",
      name: "hidenowplayview",
      desc: "Hide cover art in now playing bar",
      defaultVal: false,
    },
    {
      type: "toggle",
      name: "transplayicon",
      desc: "Transparent play/pause button in now playing bar",
      defaultVal: true,
    },
    {
      type: "toggle",
      name: "npvlargerlyrics",
      desc: "Now playing view (Right sidebar) has lyrics only",
      defaultVal: false,
    },
    {
      type: "toggle",
      name: "homeheader",
      desc: "Removes coloured gradient from the home page header",
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
          name: "revealedtoggle",
          desc: "Description",
          defaultVal: true,
        },
        {
          type: "input",
          name: "revealedinput",
          desc: "Description",
          defaultVal: true,
        },
        {
          type: "dropdown",
          name: "revealeddropdown",
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
