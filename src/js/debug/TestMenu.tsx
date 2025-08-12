import { memo, useEffect, useState } from "react";
import Dropdown from "../menu/components/Dropdown.tsx";
import Input from "../menu/components/Input.tsx";
import RadioButton from "../menu/components/RadioButton.tsx";
import Slider from "../menu/components/Slider.tsx";
import Toggle from "../menu/components/Toggle.tsx";
import Console from "../utils/Console.ts";

const TestMenu = memo(() => {
  const [lastVersion, setLastVersion] = useState<string>("Loading...");
  const [lastUpdated, setLastUpdated] = useState<string>("Loading...");

  const [toggleValue, setToggleValue] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("test");
  const [radioValue, setRadioValue] = useState<string>("option1");
  const [dropdownValue, setDropdownValue] = useState<string>("option1");
  const [sliderValue, setSliderValue] = useState<number>(10);
  const [seekedSliderValue, setSeekedSliderValue] = useState<number>(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/veryboringhwl/spicetify/releases/latest",
        );
        const data = await response.json();
        setLastVersion(data.tag_name);
        const publishDate = new Date(data.published_at);
        const options = { year: "numeric", month: "long", day: "numeric" };
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

  interface InfoType {
    "Current Theme Version": string;
    "Newest Theme Version": string;
    "Last Updated": string;
    "Spotify Version": string;
    "Spicetify Version": string;
    Platform: string;
    OS: string;
    Theme: string;
    Extensions: string;
    "Custom apps": string;
    "Colour Scheme": string;
  }

  const Info: InfoType = {
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
    <div>
      <div className="theme-version">
        {Object.entries(Info).map(([key, value]: [keyof InfoType, string]) => (
          <p className="theme-info-item" key={key}>
            <span className="theme-info-key encore-text-body-medium-bold">{key}: </span>
            <span className="theme-info-value">{value}</span>
          </p>
        ))}
      </div>
      <div className="theme-test-menu">
        <h2>Component Test Menu</h2>

        <h3>Toggle Component</h3>
        <Toggle onChange={setToggleValue} value={toggleValue} />
        <p>Current Toggle Value: {toggleValue.toString()}</p>

        <h3>Input Component</h3>
        <Input onChange={setInputValue} placeholder="Type something..." value={inputValue} />
        <p>Current Input Value: {inputValue}</p>

        <h3>Radio Button Component</h3>
        <RadioButton
          name="test-radio"
          onChange={setRadioValue}
          options={[
            { label: "Radio Button Item 1", value: "option1" },
            { label: "Radio Button Item 2", value: "option2" },
            { label: "Radio Button Item 3", value: "option3" },
          ]}
          selectedValue={radioValue}
        />
        <p>Current Radio Button Value: {radioValue}</p>

        <h3>Dropdown Component</h3>
        <Dropdown
          onChange={setDropdownValue}
          options={[
            { label: "Dropdown Item 1", value: "option1" },
            { label: "Dropdown Item 2", value: "option2" },
            { label: "Dropdown Item 3", value: "option3" },
          ]}
          value={dropdownValue}
        />
        <p>Current Dropdown Value: {dropdownValue}</p>

        <h3>Slider Component</h3>
        <Slider
          max={100}
          min={10}
          onChange={setSliderValue}
          onRelease={() => setSeekedSliderValue(sliderValue)}
          step={1}
          value={sliderValue}
        />
        <p>
          Current Slider Value (onChange): {sliderValue.toFixed(2)} | Seeked Slider Value
          (onRelease): {seekedSliderValue.toFixed(2)}
        </p>
      </div>
    </div>
  );
});

export default TestMenu;
