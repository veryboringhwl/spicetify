import { useCallback, useState } from "react";
import getInitialOptions from "../helpers/getInitialOptions";
import resetOptions from "../helpers/resetOptions";
import saveOptions from "../helpers/saveOptions";
import options from "../settingsmenu/options";

const useSettings = () => {
  const allOptions = Object.values(options).flat();
  const [settings, setSettings] = useState(() => getInitialOptions(allOptions));

  const handleSettingChange = useCallback(
    (key, value) => {
      setSettings((prev) => {
        const newSettings = { ...prev, [key]: value };
        const optionName = key.replace("theme:", "");

        const changedOption = allOptions.find((opt) => opt.name === optionName);

        if (changedOption?.reveal) {
          changedOption.reveal.forEach((subOption) => {
            const subKey = `theme:${subOption.name}`;
            if (value) {
              newSettings[subKey] = subOption.defaultVal;
            } else {
              newSettings[subKey] = false;
            }
          });
        }

        if (value && changedOption?.incompatible) {
          changedOption.incompatible.forEach((incompName) => {
            newSettings[`theme:${incompName}`] = false;
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
      setSettings(updatedSettings);
    },
  };
};

export default useSettings;
