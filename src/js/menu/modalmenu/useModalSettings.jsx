import { useCallback, useState } from "react";
import LocalStorage from "../../utils/LocalStorage";

const useModalSettings = (options) => {
  const [settings, setSettings] = useState(() =>
    Object.fromEntries(
      options.map((option) => [
        option.name,
        LocalStorage.get(`theme:${option.name}`, option.defaultVal),
      ]),
    ),
  );

  const updateSetting = useCallback((key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));

    if (key.toLowerCase().includes("windowcontrol")) {
      document.documentElement.style.setProperty(
        `--windowcontrol-${key.replace("WindowsControl", "").toLowerCase()}`,
        value,
      );
    }
  }, []);

  const resetSettings = useCallback(() => {
    const defaultSettings = Object.fromEntries(
      options.map((option) => [option.name, option.defaultVal]),
    );

    setSettings(defaultSettings);

    options.forEach((option) => {
      const key = `theme:${option.name}`;
      LocalStorage.set(key, option.defaultVal);
      document.documentElement.style.setProperty(
        `--windowcontrol-${option.name.replace("WindowsControl", "").toLowerCase()}`,
        option.defaultVal,
      );
      document.body.classList.toggle(option.name, option.defaultVal);
      option.run?.(option.defaultVal);
    });
  }, [options]);

  const saveSettings = useCallback(() => {
    Object.entries(settings).forEach(([key, value]) => {
      LocalStorage.set(`theme:${key}`, value);

      const option = options.find((opt) => opt.name === key);
      if (option) {
        document.body.classList.toggle(key, value);
        option.run?.(value);
      }
    });
  }, [settings, options]);

  return { settings, updateSetting, resetSettings, saveSettings };
};

export default useModalSettings;
