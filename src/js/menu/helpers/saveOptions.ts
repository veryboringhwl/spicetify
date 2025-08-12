import Console from "../../utils/Console.ts";
import LocalStorage from "../../utils/LocalStorage.ts";
import applyOptions from "./applyOptions.ts";

const saveOptions = (settings: Record<string, any>) => {
  try {
    const changedOptions: string[] = [];

    Object.entries(settings).forEach(([key, value]) => {
      const storedValue = LocalStorage.get(key, null);
      if (JSON.stringify(storedValue) !== JSON.stringify(value)) {
        LocalStorage.set(key, value);
        changedOptions.push(key);
      }
    });

    if (changedOptions.length > 0) {
      Console.Log(`Saving settings: ${changedOptions.join(", ")}`);
      applyOptions({ settings: settings, changedOptions: changedOptions });
    }

    return settings;
  } catch (error) {
    Console.Error("Failed to save settings:", error);
    return settings;
  }
};

export default saveOptions;
