import LocalStorage from "../utils/LocalStorage";

const CoverArtBanner = async () => {
  while (!Spicetify.Player.data?.item) {
    await new Promise((resolve) => setTimeout(resolve, 10));
  }

  const channels = {
    Album: { regex: /^\/album\//, key: "AlbumPage" },
    Artist: { regex: /^\/artist\/(?!artists\b)\w+$/, key: "ArtistPage" },
    Lyrics: { regex: /^\/lyrics$/, key: "LyricsPage" },
    LyricsPlus: { regex: /^\/lyrics-plus$/, key: "LyricsPage" },
    Playlist: { regex: /^\/playlist\//, key: "PlaylistPage" },
    Station: { regex: /^\/station\/playlist\//, key: "MiscPage" },
    Collection: { regex: /^\/collection\/tracks$/, key: "MiscPage" },
    Show: { regex: /^\/show\//, key: "MiscPage" },
    Episode: { regex: /^\/episode\//, key: "MiscPage" },
    User: { regex: /^\/user\/(?!users\b)\w+$/, key: "MiscPage" },
    Genre: { regex: /^\/genre\//, key: "MiscPage" },
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
