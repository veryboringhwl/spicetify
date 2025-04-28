import React from "react";
import OptionType from "../settingsmenu/OptionType";
import resetModal from "./resetModal";
import saveModal from "./saveModal";
import LocalStorage from "../../utils/LocalStorage";

const WindowsControlModal = React.memo(() => {
  const [settings, setSettings] = React.useState(() =>
    Object.fromEntries(
      windowsControlOptions.map((option) => [
        option.name,
        LocalStorage.get(`theme:${option.name}`, option.defaultVal),
      ])
    )
  );

  const handleSettingChange = React.useCallback((key, value) => {
    const optionName = key.replace("theme:", "");
    setSettings((prev) => ({ ...prev, [optionName]: value }));
    document.documentElement.style.setProperty(
      `--windowcontrol-${optionName.toLowerCase()}`,
      value
    );
  }, []);

  React.useEffect(() => {
    windowsControlOptions.forEach((option) => {
      const value = settings[option.name];
      document.documentElement.style.setProperty(
        `--windowcontrol-${option.name.toLowerCase()}`,
        value
      );
    });
  }, [settings]);

  return (
    <div className="themeModalOptions windowsControlSettings">
      {windowsControlOptions.map((option) => (
        <OptionType
          key={option.name}
          option={option}
          value={settings[option.name]}
          onChange={handleSettingChange}
        />
      ))}
      <div className="buttonContainer">
        <button
          className="resetButton"
          onClick={() => resetModal(windowsControlOptions, setSettings)}
        >
          Reset
        </button>
        <button
          className="saveButton"
          onClick={() => saveModal(settings, windowsControlOptions)}
        >
          Save
        </button>
      </div>
    </div>
  );
});

export const windowsControlOptions = [
	{
		type: "toggle",
		name: "WindowsControl",
		desc: "Enable custom Windows Controls",
		defaultVal: true,
		run: (value) => {
			document.body.classList.toggle("WindowsControl", value);
		},
	},
	{
    type: "input",
    name: "WindowsControlBrightness",
    desc: "Set Brightness",
    defaultVal: "2.12",
    run: (value) =>
      document.documentElement.style.setProperty("--windowcontrol-brightness", value),
  },
  {
    type: "input",
    name: "WindowsControlTop",
    desc: "Set Top",
    defaultVal: "16px",
    run: (value) =>
      document.documentElement.style.setProperty("--windowcontrol-top", value),
  },
  {
    type: "input",
    name: "WindowsControlWidth",
    desc: "Set Width",
    defaultVal: "135px",
    run: (value) =>
      document.documentElement.style.setProperty(
        "--windowcontrol-width",
        value
      ),
  },
  {
    type: "input",
    name: "WindowsControlHeight",
    desc: "Set Height",
    defaultVal: "32px",
    run: (value) =>
      document.documentElement.style.setProperty(
        "--windowcontrol-height",
        value
      ),
  },
];

export default WindowsControlModal;
