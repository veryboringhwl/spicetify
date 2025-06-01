import { memo, useEffect } from "react";
import OptionType from "../components/OptionType";
import useModalSettings from "./useModalSettings";

const FontModal = memo(() => {
  const { settings, updateSetting, resetSettings, saveSettings } = useModalSettings(fontOptions);

  useEffect(() => {
    fontOptions.forEach((option) => option.run?.(settings[option.name]));
  }, [settings]);

  return (
    <div className="themeModalOptions windowsControlSettings">
      {fontOptions.map((option) => (
        <OptionType
          key={option.name}
          option={option}
          value={settings[option.name]}
          onChange={(key, value) => updateSetting(key.replace("theme:", ""), value)}
        />
      ))}
      <div className="buttonContainer">
        <button className="resetButton" onClick={resetSettings}>
          Reset
        </button>
        <button className="saveButton" onClick={saveSettings}>
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
