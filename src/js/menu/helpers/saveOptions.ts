import type { Settings } from "../../types/temp.d.ts";
import { Console } from "../../utils/Console.ts";
import { LocalStorage } from "../../utils/LocalStorage.ts";
import { applyOptions } from "./applyOptions.ts";

export const saveOptions = (settings: Settings): Settings => {
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
      applyOptions({ settings, changedOptions });
      Spicetify.showNotification("Settings saved.");
    } else {
      Spicetify.showNotification("No changes to save.");
    }
    return settings;
  } catch (error) {
    Console.Error("Failed to save settings:", error);
    Spicetify.showNotification("Failed to save settings.", true);
    return settings;
  }
};
