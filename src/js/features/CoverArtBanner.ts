import { LocalStorage } from "../utils/LocalStorage.ts";

const channels = {
  Home: { regex: /^\/$/, key: "home-page" },
  Playlist: { regex: /^\/playlist\//, key: "playlist-page" },
  Album: { regex: /^\/album\//, key: "album-page" },
  Artist: { regex: /^\/artist\/(?!artists\b)\w+$/, key: "artist-page" },
  Lyrics: { regex: /^\/lyrics$/, key: "lyrics-page" },
  LyricsPlus: { regex: /^\/lyrics-plus$/, key: "lyrics-page" },
  Station: { regex: /^\/station\/playlist\//, key: "misc-page" },
  Collection: { regex: /^\/collection\/tracks$/, key: "misc-page" },
  Show: { regex: /^\/show\//, key: "misc-page" },
  Episode: { regex: /^\/episode\//, key: "misc-page" },
  User: { regex: /^\/user\/(?!users\b)\w+$/, key: "misc-page" },
  Genre: { regex: /^\/genre\//, key: "misc-page" },
};

export const CoverArtBanner = async (): Promise<void> => {
  while (!Spicetify.Player.data?.item) {
    await new Promise((resolve) => setTimeout(resolve, 10));
  }

  const banner =
    document.querySelector<HTMLDivElement>(".banner-image") ||
    (() => {
      const newBanner = document.createElement("div");
      newBanner.className = "banner-image";
      document.querySelector(".before-scroll-node")?.appendChild(newBanner);
      return newBanner;
    })();

  const updateBanner = () => {
    const imageUrl = Spicetify.Player.data?.item?.metadata?.image_xlarge_url?.replace(
      "spotify:image:",
      "https://i.scdn.co/image/",
    );

    const showBanner = Object.values(channels).some(
      ({ regex, key }) =>
        LocalStorage.get(key, false) && regex.test(Spicetify.Platform.History.location.pathname),
    );

    document.documentElement.style.setProperty("--image", imageUrl ? `url(${imageUrl})` : "none");
    banner.style.display = showBanner ? "" : "none";
  };

  LocalStorage.addEventListener(
    Object.values(channels).map(({ key }) => key),
    updateBanner,
  );
  Spicetify.Player.addEventListener("songchange", updateBanner);
  Spicetify.Platform.History.listen(updateBanner);
  updateBanner();
};
