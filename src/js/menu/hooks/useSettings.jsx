import React from "react";
import getInitialOptions from "../helpers/getInitialOptions";
import options from "../settingsmenu/options";

const useSettings = () => {
  const initialSettings = getInitialOptions(Object.values(options).flat());
  const [settings, setSettings] = React.useState(initialSettings);

  const handleSettingChange = (key, value) => {
    setSettings((prev) => {
      const newSettings = { ...prev, [key]: value };
      const optionName = key.replace("theme:", "");

      const changedOption = Object.values(options)
        .flat()
        .find((opt) => opt.name === optionName);
      if (changedOption?.reveal) {
        changedOption.reveal.forEach((subOption) => {
          const subKey = `theme:${subOption.name}`;
          newSettings[subKey] = value ? subOption.defaultVal : false;
        });
      }

      return newSettings;
    });
  };

  return [settings, handleSettingChange, setSettings];
};

export default useSettings;
