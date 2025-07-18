import { memo } from "react";
import ButtonContainer from "../components/ButtonContainer";
import OptionType from "../components/OptionType";
import useModalSettings from "./useModalSettings";

const WindowsControlModal = memo(() => {
  const { settings, updateSetting, resetSettings, saveSettings } =
    useModalSettings(windowsControlOptions);

  return (
    <div className="settings-modal">
      <div className="settings-modal__options">
        {windowsControlOptions.map((option) => (
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

export const windowsControlOptions = [
  {
    type: "toggle",
    name: "WindowsControl",
    desc: "Enable custom Windows Controls",
    defaultVal: false,
    run: (value) => {
      document.documentElement.classList.toggle("WindowsControl", value);
    },
  },
  {
    type: "toggle",
    name: "HideWindowsControl",
    desc: "Removes Spotifys Windows Controls completely",
    defaultVal: false,
    run: (value) => {
      if (document.documentElement.classList.contains("WindowsControl")) {
        const threeDots = document.querySelector(".CCIGxtpAreSdwWRo14FE");
        const windowsControl = document.querySelector(".main-topBar-topbarContentRight");
        if (value) {
          Spicetify.Platform.ControlMessageAPI._updateUiClient.setButtonsVisibility({
            showButtons: false,
          });
          Spicetify.Platform.ControlMessageAPI._updateUiClient.updateTitlebarHeight({ height: 1 });
          if (threeDots) threeDots.style.display = "none";
          if (windowsControl) windowsControl.style.paddingRight = "8px";
        } else {
          Spicetify.Platform.ControlMessageAPI._updateUiClient.setButtonsVisibility({
            showButtons: true,
          });
          Spicetify.Platform.ControlMessageAPI._updateUiClient.updateTitlebarHeight({ height: 64 });
          if (threeDots) threeDots.style.display = "";
          if (windowsControl) windowsControl.style.paddingRight = "";
        }
      }
    },
  },
  {
    type: "input",
    name: "WindowsControlBrightness",
    desc: "Set Brightness",
    defaultVal: "2.12",
    run(value) {
      if (document.documentElement.classList.contains("WindowsControl")) {
        document.documentElement.style.setProperty("--windowcontrol-brightness", value);
      }
    },
  },
  {
    type: "input",
    name: "WindowsControlTop",
    desc: "Set Top",
    defaultVal: "16px",
    run(value) {
      if (document.documentElement.classList.contains("WindowsControl")) {
        document.documentElement.style.setProperty("--windowcontrol-top", value);
      }
    },
  },
  {
    type: "input",
    name: "WindowsControlWidth",
    desc: "Set Width",
    defaultVal: "135px",
    run(value) {
      if (document.documentElement.classList.contains("WindowsControl")) {
        document.documentElement.style.setProperty("--windowcontrol-width", value);
      }
    },
  },
  {
    type: "input",
    name: "WindowsControlHeight",
    desc: "Set Height",
    defaultVal: "32px",
    run(value) {
      if (document.documentElement.classList.contains("WindowsControl")) {
        document.documentElement.style.setProperty("--windowcontrol-height", value);
      }
    },
  },
];

export default WindowsControlModal;
