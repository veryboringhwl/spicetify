import { useCallback, useState } from "react";
import Console from "../../utils/Console";
import LocalStorage from "../../utils/LocalStorage";
import getInitialOptions from "../helpers/getInitialOptions";
import { ModalOption, ModalSettings } from "./types";

const useModalSettings = (options: ModalOption[]) => {
  const [settings, setSettings] = useState<ModalSettings>(() => getInitialOptions(options));

  const updateSetting = useCallback((key: string, value: string | boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetSettings = useCallback(() => {
    const defaultSettings: ModalSettings = Object.fromEntries(
      options.map((option) => [option.name, option.defaultVal]),
    );
    setSettings(defaultSettings);

    options.forEach((option) => {
      LocalStorage.set(option.name, option.defaultVal);
      if (option.run) {
        option.run(option.defaultVal);
      }
    });
  }, [options]);

  const saveSettings = useCallback(() => {
    const changedOptions: string[] = [];

    Object.entries(settings).forEach(([key, value]) => {
      const storedValue: string | boolean | null = LocalStorage.get(key, null);
      if (JSON.stringify(storedValue) !== JSON.stringify(value)) {
        changedOptions.push(key);
      }

      LocalStorage.set(key, value);
      const option = options.find((opt): opt is ModalOption => opt.name === key);
      if (option) {
        if (option.run) {
          // The 'run' function can take either boolean or string based on option type
          // We cast value to any to satisfy the type checker for now.
          // A more robust solution might involve type guards based on option.type.
          option.run(value as any);
        }
      }
    });

    if (changedOptions.length > 0) {
      Console.Log(`Saving modal settings: ${changedOptions.join(", ")}`);
    }
  }, [settings, options]);

  return { settings, updateSetting, resetSettings, saveSettings };
};

export default useModalSettings;
