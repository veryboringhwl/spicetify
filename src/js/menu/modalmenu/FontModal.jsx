import React from "react";
import LocalStorage from "../../utils/LocalStorage";
import OptionType from "../settingsmenu/OptionType";
import resetModal from "./resetModal";
import saveModal from "./saveModal";

const FontModal = React.memo(() => {
  const [settings, setSettings] = React.useState(() =>
    Object.fromEntries(
      fontOptions.map((option) => [
        option.name,
        LocalStorage.get(`theme:${option.name}`, option.defaultVal),
      ]),
    ),
  );

  const handleSettingChange = React.useCallback((key, value) => {
    setSettings((prev) => ({ ...prev, [key.replace("theme:", "")]: value }));
  }, []);

  React.useEffect(() => {
    fontOptions.forEach((option) => option.run?.(settings[option.name]));
  }, [settings]);

  return (
    <div className="themeModalOptions windowsControlSettings">
      {fontOptions.map((option) => (
        <OptionType
          key={option.name}
          option={option}
          value={settings[option.name]}
          onChange={handleSettingChange}
        />
      ))}
      <div className="buttonContainer">
        <button className="resetButton" onClick={() => resetModal(fontOptions, setSettings)}>
          Reset
        </button>
        <button className="saveButton" onClick={() => saveModal(settings, fontOptions)}>
          Save
        </button>
      </div>
    </div>
  );
});

export const fontOptions = [
  {
    type: "input",
    name: "uifont",
    desc: "Changes the font of the Spotify app",
    defaultVal: "Segoe UI Variable Display",
    tippy: "This will only work if you have the font installed",
    popupModal: FontModal,
    run(value) {
      document.documentElement.style.setProperty("--FontFamily", value);
    },
  },
];

export default FontModal;
