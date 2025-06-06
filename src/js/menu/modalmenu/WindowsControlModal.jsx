import { memo } from "react";
import OptionType from "../components/OptionType";
import useModalSettings from "./useModalSettings";

const WindowsControlModal = memo(() => {
  const { settings, updateSetting, resetSettings, saveSettings } =
    useModalSettings(windowsControlOptions);

  return (
    <div className="themeModalOptions windowsControlSettings">
      {windowsControlOptions.map((option) => (
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

export const windowsControlOptions = [
  {
    type: "toggle",
    name: "WindowsControl",
    desc: "Enable custom Windows Controls",
    defaultVal: false,
    run: (value) => {
      document.body.classList.toggle("WindowsControl", value);
    },
  },
  {
    type: "toggle",
    name: "HideWindowsControl",
    desc: "Removes Spotifys Windows Controls completely",
    defaultVal: false,
    run: (value) => {
      if (value) {
        Spicetify.Platform.ControlMessageAPI._updateUiClient.setButtonsVisibility({
          showButtons: false,
        });
        Spicetify.Platform.ControlMessageAPI._updateUiClient.updateTitlebarHeight({ height: 1 });
        document.querySelectorAll(".CCIGxtpAreSdwWRo14FE").forEach((el) => {
          el.style.display = "none";
        });
        document.querySelectorAll(".main-topBar-topbarContentRight").forEach((el) => {
          el.style.paddingRight = "8px";
        });
      } else {
        Spicetify.Platform.ControlMessageAPI._updateUiClient.setButtonsVisibility({
          showButtons: true,
        });
        Spicetify.Platform.ControlMessageAPI._updateUiClient.updateTitlebarHeight({ height: 64 });
        document.querySelectorAll(".CCIGxtpAreSdwWRo14FE").forEach((el) => {
          el.style.display = "";
        });
        document.querySelectorAll(".main-topBar-topbarContentRight").forEach((el) => {
          el.style.paddingRight = "";
        });
      }
    },
  },
  {
    type: "input",
    name: "WindowsControlBrightness",
    desc: "Set Brightness",
    defaultVal: "2.12",
    run: (value) => document.documentElement.style.setProperty("--windowcontrol-brightness", value),
  },
  {
    type: "input",
    name: "WindowsControlTop",
    desc: "Set Top",
    defaultVal: "16px",
    run: (value) => document.documentElement.style.setProperty("--windowcontrol-top", value),
  },
  {
    type: "input",
    name: "WindowsControlWidth",
    desc: "Set Width",
    defaultVal: "135px",
    run: (value) => document.documentElement.style.setProperty("--windowcontrol-width", value),
  },
  {
    type: "input",
    name: "WindowsControlHeight",
    desc: "Set Height",
    defaultVal: "32px",
    run: (value) => document.documentElement.style.setProperty("--windowcontrol-height", value),
  },
];

export default WindowsControlModal;
