import { useCallback, useState } from "react";
import LocalStorage from "../../utils/LocalStorage";
import { applySettingToDOM } from "./utils";
import getInitialOptions from "../helpers/getInitialOptions";

const useModalSettings = (options) => {
  const [settings, setSettings] = useState(() => getInitialOptions(options, false));

  const updateSetting = useCallback((key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetSettings = useCallback(() => {
    const defaultSettings = Object.fromEntries(
      options.map((option) => [option.name, option.defaultVal]),
    );
    setSettings(defaultSettings);

    options.forEach((option) => {
      LocalStorage.set(`theme:${option.name}`, option.defaultVal);
      applySettingToDOM(option, option.defaultVal);
    });
  }, [options]);

  const saveSettings = useCallback(() => {
    Object.entries(settings).forEach(([key, value]) => {
      LocalStorage.set(`theme:${key}`, value);
      const option = options.find((opt) => opt.name === key);
      if (option) {
        applySettingToDOM(option, value);
      }
    });
  }, [settings, options]);

  return { settings, updateSetting, resetSettings, saveSettings };
};

export default useModalSettings;
