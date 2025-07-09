import { memo } from "react";
import ButtonContainer from "../components/ButtonContainer";
import OptionType from "../components/OptionType";
import useModalSettings from "./useModalSettings";

const FontModal = memo(() => {
  const { settings, updateSetting, resetSettings, saveSettings } = useModalSettings(fontOptions);

  return (
    <div className="settings-modal">
      <div className="settings-modal__options">
        {fontOptions.map((option) => (
          <OptionType
            key={option.name}
            option={option}
            value={settings[option.name]}
            onChange={(key, value) => updateSetting(key, value)}
          />
        ))}
      </div>
      <div className="settings-modal__buttons">
        <ButtonContainer resetSettings={resetSettings} saveSettings={saveSettings} />
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
