import LocalStorage from "../utils/LocalStorage";

const CoverArtBanner = async () => {
  while (!Spicetify.Player.data?.item) {
    await new Promise((resolve) => setTimeout(resolve, 10));
  }

  const channels = {
    Album: { regex: /^\/album\//, key: "theme:AlbumPage" },
    Artist: { regex: /^\/artist\/(?!artists\b)\w+$/, key: "theme:ArtistPage" },
    Lyrics: { regex: /^\/lyrics$/, key: "theme:LyricsPage" },
    LyricsPlus: { regex: /^\/lyrics-plus$/, key: "theme:LyricsPage" },
    Playlist: { regex: /^\/playlist\//, key: "theme:PlaylistPage" },
    Station: { regex: /^\/station\/playlist\//, key: "theme:MiscPage" },
    Collection: { regex: /^\/collection\/tracks$/, key: "theme:MiscPage" },
    Show: { regex: /^\/show\//, key: "theme:MiscPage" },
    Episode: { regex: /^\/episode\//, key: "theme:MiscPage" },
    User: { regex: /^\/user\/(?!users\b)\w+$/, key: "theme:MiscPage" },
    Genre: { regex: /^\/genre\//, key: "theme:MiscPage" },
  };

  const banner =
    document.querySelector(".banner-image") ||
    (() => {
      const newBanner = document.createElement("div");
      newBanner.className = "banner-image";
      document.querySelector(".under-main-view")?.appendChild(newBanner);
      return newBanner;
    })();

  const updateBanner = () => {
    const imageUrl = Spicetify.Player.data?.item?.metadata?.image_xlarge_url;
    const showBanner = Object.values(channels).some(
      ({ regex, key }) =>
        LocalStorage.get(key, false) && regex.test(Spicetify.Platform.History.location.pathname),
    );

    if (showBanner) {
      banner.style.display = "";
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => document.documentElement.style.setProperty("--image", `url(${imageUrl})`);
    } else {
      banner.style.display = "none";
    }
  };

  Spicetify.Platform.History.listen(updateBanner);
  Spicetify.Player.addEventListener("songchange", updateBanner);
  updateBanner();
};

export default CoverArtBanner;
