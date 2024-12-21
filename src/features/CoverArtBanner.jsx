import getLocalStorage from "@/utils/getLocalStorage";

const CoverArtBanner = () => {
  if (!Spicetify.Player.data?.item) {
    setTimeout(coverArtBanner, 100);
    return;
  }

  const channels = {
    Album: { regex: /^\/album\//, key: "theme:AlbumPage", fallback: false },
    Artist: {
      regex: /^\/artist\/(?!artists\b)\w+$/,
      key: "theme:ArtistPage",
      fallback: false,
    },
    Lyrics: { regex: /^\/lyrics$/, key: "theme:LyricsPage", fallback: true },
    "Lyrics-Plus": {
      regex: /^\/lyrics-plus$/,
      key: "theme:LyricsPage",
      fallback: true,
    },
    Playlist: {
      regex: /^\/playlist\//,
      key: "theme:PlaylistPage",
      fallback: true,
    },
    Station: {
      regex: /^\/station\/playlist\//,
      key: "theme:MiscPage",
      fallback: false,
    },
    Collection: {
      regex: /^\/collection\/tracks$/,
      key: "theme:MiscPage",
      fallback: false,
    },
    Show: { regex: /^\/show\//, key: "theme:MiscPage", fallback: false },
    Episode: { regex: /^\/episode\//, key: "theme:MiscPage", fallback: false },
    User: {
      regex: /^\/user\/(?!users\b)\w+$/,
      key: "theme:MiscPage",
      fallback: false,
    },
    Genre: { regex: /^\/genre\//, key: "theme:MiscPage", fallback: false },
  };

  const banner =
    document.querySelector(".banner-image") ??
    (() => {
      const newBanner = document.createElement("div");
      newBanner.className = "banner-image";
      document.querySelector(".under-main-view")?.appendChild(newBanner);
      return newBanner;
    })();

  const updateBanner = () => {
    const { pathname } = Spicetify.Platform.History.location;
    const imageUrl = Spicetify.Player.data?.item?.metadata?.image_xlarge_url;

    const showBanner = Object.values(channels).some(
      ({ regex, key }) => getLocalStorage(key, false) && regex.test(pathname)
    );

    if (showBanner && imageUrl) {
      banner.style.display = "";
      const img = new Image();
      img.src = imageUrl;
      img.onload = () =>
        document.documentElement.style.setProperty(
          "--image",
          `url(${imageUrl})`
        );
    } else {
      banner.style.display = "none";
    }
  };

  Spicetify.Platform.History.listen(updateBanner);
  Spicetify.Player.addEventListener("songchange", updateBanner);
  updateBanner();
};

export default CoverArtBanner;
