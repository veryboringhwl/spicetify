import { useCallback, useState } from "react";
import type { Option, Settings, UseSettingsReturn } from "../../types/temp.d.ts";
import { Console } from "../../utils/Console.ts";
import { LocalStorage } from "../../utils/LocalStorage.ts";
import { getInitialOptions } from "../helpers/getInitialOptions.ts";

export const useModalSettings = (modalOptions: Option[]): UseSettingsReturn => {
  const [settings, setSettings] = useState<Settings>(() => getInitialOptions(modalOptions));

  const handleSettingChange = useCallback((key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetSettings = useCallback(() => {
    const defaultSettings: Settings = Object.fromEntries(
      modalOptions.map((option) => [option.name, option.defaultVal]),
    );
    setSettings(defaultSettings);
    modalOptions.forEach((option) => {
      LocalStorage.set(option.name, option.defaultVal);
      option.run?.(option.defaultVal);
    });
    Spicetify.showNotification("Settings reset to default.");
  }, [modalOptions]);

  const saveSettings = useCallback(() => {
    const changedOptions: string[] = [];
    Object.entries(settings).forEach(([key, value]) => {
      const storedValue = LocalStorage.get(key, null);
      if (JSON.stringify(storedValue) !== JSON.stringify(value)) {
        LocalStorage.set(key, value);
        changedOptions.push(key);
        const option = modalOptions.find((opt) => opt.name === key);
        option?.run?.(value);
      }
    });

    if (changedOptions.length > 0) {
      Console.Log(`Saving modal settings: ${changedOptions.join(", ")}`);
      Spicetify.showNotification("Modal settings saved.");
    } else {
      Spicetify.showNotification("No changes to save.");
    }
  }, [settings, modalOptions]);

  return { settings, handleSettingChange, resetSettings, saveSettings };
};
