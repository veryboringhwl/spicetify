import { memo } from "react";
import waitForElements from "../../utils/waitForElements.ts";
import ButtonContainer from "../components/ButtonContainer.tsx";
import RenderOption from "../components/RenderOption.tsx";
import useModalSettings from "./useModalSettings.ts";

const WindowsControlModal = memo(() => {
  const { settings, updateSetting, resetSettings, saveSettings } =
    useModalSettings(windowsControlOptions);

  return (
    <div className="settings-modal">
      <div className="settings-modal__options">
        {windowsControlOptions.map((option) => (
          <RenderOption
            key={option.name}
            onChange={(key, value) => updateSetting(key, value)}
            option={option}
            settings={settings}
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
    name: "windows-control",
    desc: "Enable custom Windows Controls",
    defaultVal: false,
    run: (value: boolean) => {
      document.documentElement.classList.toggle("windows-control", value);
    },
  },
  {
    type: "toggle",
    name: "hide-windows-control",
    desc: "Removes Spotifys Windows Controls completely",
    defaultVal: false,
    run: async (value: boolean) => {
      if (document.documentElement.classList.contains("WindowsControl")) {
        const threeDots = await waitForElements(".CCIGxtpAreSdwWRo14FE");
        const windowsControl = await waitForElements(".main-topBar-topbarContentRight");
        if (value) {
          Spicetify.Platform.ControlMessageAPI._updateUiClient.setButtonsVisibility(
            {
              showButtons: false,
            },
            {},
          );
          Spicetify.Platform.ControlMessageAPI._updateUiClient.updateTitlebarHeight(
            { height: 1 },
            {},
          );
          if (threeDots) (threeDots as HTMLElement).style.display = "none";
          if (windowsControl) (windowsControl as HTMLElement).style.paddingRight = "8px";
        } else {
          Spicetify.Platform.ControlMessageAPI._updateUiClient.setButtonsVisibility(
            {
              showButtons: true,
            },
            {},
          );
          Spicetify.Platform.ControlMessageAPI._updateUiClient.updateTitlebarHeight(
            { height: 64 },
            {},
          );
          if (threeDots) (threeDots as HTMLElement).style.display = "";
          if (windowsControl) (windowsControl as HTMLElement).style.paddingRight = "";
        }
      }
    },
  },
  {
    type: "input",
    name: "windows-control-brightness",
    desc: "Set Brightness",
    defaultVal: "2.12",
    run(value: string) {
      if (document.documentElement.classList.contains("windows-control")) {
        document.documentElement.style.setProperty("--windows-control-brightness", value);
      }
    },
  },
  {
    type: "input",
    name: "windows-control-top",
    desc: "Set Top",
    defaultVal: "16px",
    run(value: string) {
      if (document.documentElement.classList.contains("windows-control")) {
        document.documentElement.style.setProperty("--windows-control-top", value);
      }
    },
  },
  {
    type: "input",
    name: "windows-control-width",
    desc: "Set Width",
    defaultVal: "135px",
    run(value: string) {
      if (document.documentElement.classList.contains("windows-control")) {
        document.documentElement.style.setProperty("--windows-control-width", value);
      }
    },
  },
  {
    type: "input",
    name: "windows-control-height",
    desc: "Set Height",
    defaultVal: "32px",
    run(value: string) {
      if (document.documentElement.classList.contains("windows-control")) {
        document.documentElement.style.setProperty("--windows-control-height", value);
      }
    },
  },
];

export default WindowsControlModal;
