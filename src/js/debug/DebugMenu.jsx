import { memo, useEffect, useState } from "react";
import LoadingIndicator from "../components/LoadingIndicator";
import Icons from "../icons/Icons";
import OptionRow from "../menu/components/OptionRow";
import RadioButton from "../menu/components/RadioButton";
import Toggle from "../menu/components/Toggle";
import Console from "../utils/Console";
import Notification from "../utils/Notification";

const DebugMenu = memo(() => {
  const [lastVersion, setLastVersion] = useState("Loading...");
  const [lastUpdated, setLastUpdated] = useState("Loading...");
  const [enabled, setEnabled] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("option1");

  useEffect(() => {
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
    "Current Theme Version": "v1.2.0",
    "Newest Theme Version": lastVersion,
    "Last Updated": lastUpdated,
    "Spotify Version": Spicetify.Platform.version,
    "Spicetify Version": Spicetify.Config.version,
    Platform: Spicetify.Platform.PlatformData.app_platform,
    OS: Spicetify.Platform.PlatformData.os_name,
    Theme: Spicetify.Config.current_theme,
    Extensions: Spicetify.Config.extensions.join(", "),
    "Custom apps": Spicetify.Config.custom_apps.join(", "),
    "Colour Scheme": Spicetify.Config.color_scheme,
  };

  return (
    <div className="theme-version">
      {Object.entries(Info).map(([key, value]) => (
        <p key={key} className="theme-info-item">
          <span className="theme-info-key encore-text-body-medium-bold">{key}: </span>
          <span className="theme-info-value">{value}</span>
        </p>
      ))}
      <p>
        Press <kbd>F8</kbd> to pause script execution.
      </p>
      <button
        onClick={() => {
          Notification({
            autoHideDuration: 10000,
            message: "Debug Menu notification lolololol",
          });
        }}
      >
        Special Button
      </button>
      <div className="loading-wrapper">
        <LoadingIndicator />
      </div>
      <Icons.React.duplicate size={50} />
      <Icons.React.palette size={50} />
      <Spicetify.ReactComponent.Cards.Default
        id="card-id"
        title="Card Title"
        subtitle="Card Subtitle"
        media="https://placehold.co/100"
        size="sm" // "sm" or "md"
        onClick={() => console.log("Card clicked")}
      >
        <Spicetify.ReactComponent.Cards.Default.Body>
          Additional content here
        </Spicetify.ReactComponent.Cards.Default.Body>
        <Spicetify.ReactComponent.Cards.Default.Footer>
          Footer content
        </Spicetify.ReactComponent.Cards.Default.Footer>
      </Spicetify.ReactComponent.Cards.Default>
      <Spicetify.ReactComponent.TextComponent
        semanticColor="textBase"
        variant="viola"
        weight="book"
      >
        Hello World
      </Spicetify.ReactComponent.TextComponent>
      <Spicetify.ReactComponent.TooltipWrapper
        label="Hello World"
        placement="top"
        trigger="mouseenter"
      >
        <div>Hover me</div>
      </Spicetify.ReactComponent.TooltipWrapper>
      <OptionRow name={"BITCH"} desc={"REEEEEE"} tippy={"HELLOE"} popupModal={DebugMenu}>
        <Toggle value={enabled} onChange={() => setEnabled(!enabled)} />
      </OptionRow>
      <RadioButton
        items={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
        name="debugRadio"
        selected={selectedRadio}
        onChange={setSelectedRadio}
      />
    </div>
  );
});

export default DebugMenu;
