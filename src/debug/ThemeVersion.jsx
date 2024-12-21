const ThemeVersion = Spicetify.React.memo(() => {
  const [lastVersion, setLastVersion] = Spicetify.React.useState("Loading...");
  const [lastUpdated, setLastUpdated] = Spicetify.React.useState("Loading...");

  Spicetify.React.useEffect(() => {
    fetch(
      "https://api.github.com/repos/veryboringhwl/spicetify/releases/latest"
    )
      .then((response) => response.json())
      .then((data) => {
        setLastVersion(data.tag_name);

        const publishDate = new Date(data.published_at);
        const formattedDate = `${publishDate.getFullYear()}/${(
          publishDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}/${publishDate
          .getDate()
          .toString()
          .padStart(2, "0")}`;
        setLastUpdated(formattedDate);
      })
      .catch((error) => {
        console.error("Error fetching latest version:", error);
        setLastVersion("Error fetching");
        setLastUpdated("Error fetching");
      });
  }, []);

  const Info = {
    "Theme Version": lastVersion,
    "Last Updated": lastUpdated,
    "Spotify Version": Spicetify.Platform.version,
    "Spicetify Version": Spicetify.Config.version,
    Platform: Spicetify.Platform.PlatformData.app_platform,
    OS: Spicetify.Platform.PlatformData.os_name,
    Theme: Spicetify.Config.current_theme,
    Extensions: Spicetify.Config.extensions.join(", "),
    "Custom apps": Spicetify.Config.custom_apps.join(", "),
    "Color Scheme": Spicetify.Config.color_scheme,
  };

  return Spicetify.React.createElement(
    "div",
    { className: "theme-version" },
    Object.entries(Info).map(([key, value]) =>
      Spicetify.React.createElement(
        "p",
        { key: key },
        Spicetify.React.createElement("strong", null, `${key}: `),
        `${value}`
      )
    ),
    Spicetify.React.createElement(
      "button",
      {
        onClick: () => {
          ConsoleLog("Secret theme activated!");
        },
      },
      "Activate Secret Theme"
    )
  );
});

export default ThemeVersion;
