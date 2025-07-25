import LocalStorage from "../utils/LocalStorage";

const CoverArtBanner = async () => {
  while (!Spicetify.Player.data?.item) {
    await new Promise((resolve) => setTimeout(resolve, 10));
  }

  const channels = {
    Album: { regex: /^\/album\//, key: "album-page" },
    Artist: { regex: /^\/artist\/(?!artists\b)\w+$/, key: "artist-page" },
    Lyrics: { regex: /^\/lyrics$/, key: "lyrics-page" },
    LyricsPlus: { regex: /^\/lyrics-plus$/, key: "lyrics-page" },
    Playlist: { regex: /^\/playlist\//, key: "playlist-page" },
    Station: { regex: /^\/station\/playlist\//, key: "misc-page" },
    Collection: { regex: /^\/collection\/tracks$/, key: "misc-page" },
    Show: { regex: /^\/show\//, key: "misc-page" },
    Episode: { regex: /^\/episode\//, key: "misc-page" },
    User: { regex: /^\/user\/(?!users\b)\w+$/, key: "misc-page" },
    Genre: { regex: /^\/genre\//, key: "misc-page" },
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
