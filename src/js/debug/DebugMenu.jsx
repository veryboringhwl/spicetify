import React from "react";
import Console from "../utils/Console";
import Notification from "../utils/Notification";

const DebugMenu = React.memo(() => {
  const [lastVersion, setLastVersion] = React.useState("Loading...");
  const [lastUpdated, setLastUpdated] = React.useState("Loading...");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/veryboringhwl/spicetify/releases/latest",
        );
        const data = await response.json();

        setLastVersion(data.tag_name);

        const publishDate = new Date(data.published_at);
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const formattedDate = publishDate.toLocaleString("en-GB", options);
        setLastUpdated(formattedDate);
      } catch (error) {
        Console.Error("Error fetching latest version:", error);
        setLastVersion("Error fetching");
        setLastUpdated("Error fetching");
      }
    };

    fetchData();
  }, []);

  const Info = {
    "Current Theme Version": "v1.1.0",
    "Newest Theme Version": lastVersion,
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
          <span className="theme-info-key encore-text-body-medium-bold">{key}: </span>
          <span className="theme-info-value">{value}</span>
        </p>
      ))}
      <button
        onClick={() =>
          Notification({
            autoHideDuration: 99999999,
            message: "Theme only supports Spotify versions greater than 1.2.50.000",
          })
        }
      >
        Special Button
      </button>
    </div>
  );
});

export default DebugMenu;
