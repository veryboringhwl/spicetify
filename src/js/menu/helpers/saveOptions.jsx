import Console from "../../utils/Console";
import LocalStorage from "../../utils/LocalStorage";
import applyOptions from "./applyOptions";

const saveOptions = (options) => {
  try {
    const changedOptions = Object.entries(options)
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
      const formattedChanges = changedOptions.map((key) => `${key} = ${options[key]}`).join(", ");
      Console.Log(`Saving settings: ${formattedChanges}`);
      applyOptions(options, changedOptions);
    }
  } catch (error) {
    Console.Error("Failed to save settings:", error);
  }
};

export default saveOptions;
