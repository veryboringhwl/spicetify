import type { LocalStorageProps } from "../types/temp.d.ts";
import { Console } from "./Console.ts";

export const LocalStorage: LocalStorageProps = {
  get<T>(key: string, defaultValue: T): T {
    try {
      const item = localStorage.getItem(`theme:${key}`);
      return item != null ? (JSON.parse(item) as T) : defaultValue;
    } catch (error) {
      Console.Error(`Error getting ${key} from localStorage:`, error);
      return defaultValue;
    }
  },
  set<T>(key: string, value: T): boolean {
    try {
      const fullKey = `theme:${key}`;
      localStorage.setItem(fullKey, JSON.stringify(value));
      const event = new CustomEvent("theme:storage", {
        detail: { key: fullKey, newValue: value },
      });
      window.dispatchEvent(event);
      return true;
    } catch (error) {
      Console.Error(`Error setting ${key} in localStorage:`, error);
      return false;
    }
  },
  addEventListener<T>(
    keys: string[],
    callback: (event: CustomEvent<{ key: string; newValue: T }> | StorageEvent) => void,
  ): EventListener {
    const watchedKeys = new Set(keys.map((key) => `theme:${key}`));
    const listener: EventListener = (e) => {
      let changedKey: string | null = null;
      if (e instanceof CustomEvent && e.type === "theme:storage") {
        changedKey = e.detail.key;
      } else if (e instanceof StorageEvent) {
        changedKey = e.key;
      }
      if (changedKey && watchedKeys.has(changedKey)) {
        callback(e as CustomEvent<{ key: string; newValue: T }> | StorageEvent);
      }
    };
    window.addEventListener("theme:storage", listener);
    window.addEventListener("storage", listener); // Also listen to standard storage events
    return listener;
  },
  removeEventListener(listener: EventListener): void {
    window.removeEventListener("theme:storage", listener);
    window.removeEventListener("storage", listener);
  },
};
