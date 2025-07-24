import { useCallback, useState } from "react";
import Console from "../../utils/Console";
import LocalStorage from "../../utils/LocalStorage";
import getInitialOptions from "../helpers/getInitialOptions";

const useModalSettings = (options) => {
  const [settings, setSettings] = useState(() => getInitialOptions(options));

  const updateSetting = useCallback((key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetSettings = useCallback(() => {
    const defaultSettings = Object.fromEntries(
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
    const changedOptions = [];

    Object.entries(settings).forEach(([key, value]) => {
      const storedValue = LocalStorage.get(key, null);
      if (JSON.stringify(storedValue) !== JSON.stringify(value)) {
        changedOptions.push(key);
      }

      LocalStorage.set(key, value);
      const option = options.find((opt) => opt.name === key);
      if (option) {
        if (option.run) {
          option.run(value);
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
