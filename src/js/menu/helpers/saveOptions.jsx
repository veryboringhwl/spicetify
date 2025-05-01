import Console from "../../utils/Console";
import LocalStorage from "../../utils/LocalStorage";
import options from "../settingsmenu/options";
import applyOptions from "./applyOptions";

const saveOptions = (settings) => {
  try {
    const newSettings = { ...settings };
    const allOptions = Object.values(options).flat();

    allOptions.forEach((option) => {
      const key = `theme:${option.name}`;
      if (newSettings[key] === true && option.incompatible) {
        option.incompatible.forEach((incompatibleName) => {
          const incompatibleKey = `theme:${incompatibleName}`;
          newSettings[incompatibleKey] = false;
        });
      }
    });

    const changedOptions = Object.entries(newSettings)
      .filter(([key, value]) => {
        const currentValue = LocalStorage.get(key, null);
        if (JSON.stringify(currentValue) !== JSON.stringify(value)) {
          LocalStorage.set(key, value);
          return true;
        }
        return false;
      })
      .map(([key]) => key);

    if (changedOptions.length > 0) {
      const formattedChanges = changedOptions
        .map((key) => `${key} = ${newSettings[key]}`)
        .join(", ");
      Console.Log(`Saving settings: ${formattedChanges}`);
      applyOptions(newSettings, changedOptions);
    }

    return newSettings;
  } catch (error) {
    Console.Error("Failed to save settings:", error);
    return settings;
  }
};

export default saveOptions;
