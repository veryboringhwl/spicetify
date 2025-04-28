import React from "react";
import Console from "../utils/Console";

const DebugMenu = React.memo(() => {
  const [lastVersion, setLastVersion] = React.useState("Loading...");
  const [lastUpdated, setLastUpdated] = React.useState("Loading...");

  React.useEffect(() => {
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
        Console.Error("Error fetching latest version:", error);
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

  return (
    <div className="theme-version">
      {Object.entries(Info).map(([key, value]) => (
        <p key={key} className="theme-info-item">
          <span className="theme-info-key encore-text-body-medium-bold">
            {key}:{" "}
          </span>
          <span className="theme-info-value">{value}</span>
        </p>
      ))}
      <button onClick={() => Notification()}>Special Button</button>
    </div>
  );
});

const Notification = () => {
  Spicetify.Snackbar?.enqueueCustomSnackbar("sidebar-config", {
    keyPrefix: "sidebar-config",
    autoHideDuration: 7500,
    children: Spicetify.ReactComponent.Snackbar.wrapper({
      children: Spicetify.React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: "stuff",
        },
        style: {
          "text-size": "12px",
        },
      }),
    }),
  });
};

export default DebugMenu;
