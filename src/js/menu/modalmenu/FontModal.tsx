import { type FC, memo } from "react";
import type { Option } from "../../types/temp.d.ts";
import { ButtonContainer } from "../components/ButtonContainer.tsx";
import { RenderOption } from "../components/RenderOption.tsx";
import { useModalSettings } from "./useModalSettings.ts";

export const fontOptions: Option[] = [
  {
    type: "input",
    name: "uifont",
    desc: "Changes the font of the Spotify app",
    defaultVal: "Segoe UI Variable Display",
    tippy: "This will only work if you have the font installed on your system",
    run(value: string) {
      document.documentElement.style.setProperty("--FontFamily", value);
    },
  },
];

export const FontModal: FC = memo(() => {
  const { settings, handleSettingChange, resetSettings, saveSettings } =
    useModalSettings(fontOptions);

  return (
    <div className="settings-modal">
      <div className="settings-modal__options">
        {fontOptions.map((option) => (
          <RenderOption
            key={option.name}
            onChange={handleSettingChange}
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
