import { useCallback, useState } from "react";
import getInitialOptions from "../helpers/getInitialOptions.ts";
import resetOptions from "../helpers/resetOptions.ts";
import saveOptions from "../helpers/saveOptions.ts";
import options from "../settingsmenu/options.ts";

const useSettings = () => {
  const allOptions = Object.values(options).flat();
  const [settings, setSettings] = useState(() => getInitialOptions(allOptions));

  const handleSettingChange = useCallback(
    (key, value) => {
      setSettings((prev) => {
        const newSettings = { ...prev, [key]: value };
        const optionName = key;

        const changedOption = allOptions.find((opt) => opt.name === optionName);

        if (changedOption?.reveal) {
          changedOption.reveal.forEach((subOption) => {
            const subKey = subOption.name;
            if (value) {
              newSettings[subKey] = subOption.defaultVal;
            } else {
              newSettings[subKey] = false;
            }
          });
        }

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
      setSettings(updatedSettings);
    },
  };
};

export default useSettings;
