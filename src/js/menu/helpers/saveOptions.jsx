import Console from "../../utils/Console";
import LocalStorage from "../../utils/LocalStorage";
import applyOptions from "./applyOptions";

const saveOptions = (settings) => {
  try {
    const changedOptions = [];

    Object.entries(settings).forEach(([key, value]) => {
      const storedValue = LocalStorage.get(key, null);
      if (JSON.stringify(storedValue) !== JSON.stringify(value)) {
        LocalStorage.set(key, value);
        changedOptions.push(key);
      }
    });

    if (changedOptions.length > 0) {
      Console.Log(`Saving settings: ${changedOptions.join(", ")}`);
      applyOptions(settings, changedOptions);
    }

    return settings;
  } catch (error) {
    Console.Error("Failed to save settings:", error);
    return settings;
  }
};

export default saveOptions;
