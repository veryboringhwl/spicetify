import React from "react";
import LocalStorage from "../../utils/LocalStorage";
import options from "../settingsmenu/options";

const useSettings = () => {
  const [settings, setSettings] = React.useState(() =>
    Object.values(options)
      .flat()
      .reduce((acc, option) => {
        const key = `theme:${option.name}`;
        acc[key] = LocalStorage.get(key, option.defaultVal);
        if (option.reveal) {
          option.reveal.forEach((subOption) => {
            const subKey = `theme:${subOption.name}`;
            acc[subKey] = acc[key] ? LocalStorage.get(subKey, subOption.defaultVal) : false;
          });
        }
        return acc;
      }, {}),
  );

  const handleSettingChange = React.useCallback((key, value) => {
    setSettings((prev) => {
      const newSettings = { ...prev, [key]: value };
      const optionName = key.replace("theme:", "");
      const categoryOption = Object.values(options)
        .flat()
        .find((opt) => opt.name === optionName);
      if (categoryOption?.reveal) {
        categoryOption.reveal.forEach((subOption) => {
          const subKey = `theme:${subOption.name}`;
          newSettings[subKey] = value ? subOption.defaultVal : false;
        });
      }
      return newSettings;
    });
  }, []);

  return [settings, handleSettingChange, setSettings];
};

export default useSettings;
