import { useCallback, useState } from "react";
import type { Option, Settings, UseSettingsReturn } from "../../types/temp.d.ts";
import { getInitialOptions } from "../helpers/getInitialOptions.ts";
import { resetOptions } from "../helpers/resetOptions.ts";
import { saveOptions } from "../helpers/saveOptions.ts";
import { options } from "../settingsmenu/options.ts";

export const useSettings = (): UseSettingsReturn => {
  const allOptions: Option[] = Object.values(options).flat();
  const [settings, setSettings] = useState<Settings>(() => getInitialOptions(allOptions));

  const handleSettingChange = useCallback(
    (key: string, value: any) => {
      setSettings((prev) => {
        const newSettings: Settings = { ...prev, [key]: value };
        const changedOption = allOptions.find((opt) => opt.name === key);

        // If a toggle is turned off, disable its revealed sub-options
        if (changedOption?.type === "toggle" && changedOption.reveal && !value) {
          changedOption.reveal.forEach((subOption) => {
            newSettings[subOption.name] = false;
          });
        }

        // If a toggle is turned on, handle incompatibilities
        if (value && changedOption?.incompatible) {
          changedOption.incompatible.forEach((incompName) => {
            newSettings[incompName] = false;
          });
        }

        return newSettings;
      });
    },
    [allOptions],
  );

  return {
    settings,
    handleSettingChange,
    resetSettings: () => resetOptions(setSettings),
    saveSettings: () => {
      const updatedSettings = saveOptions(settings);
      setSettings(updatedSettings); // Sync state with what was actually saved
    },
  };
};
