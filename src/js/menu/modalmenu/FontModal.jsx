import { memo, useEffect } from "react";
import ButtonContainer from "../components/ButtonContainer";
import OptionType from "../components/OptionType";
import useModalSettings from "./useModalSettings";

const FontModal = memo(() => {
  const { settings, updateSetting, resetSettings, saveSettings } = useModalSettings(fontOptions);

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
      <ButtonContainer resetSettings={resetSettings} saveSettings={saveSettings} />
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
