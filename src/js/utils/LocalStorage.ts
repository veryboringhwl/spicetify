import Console from "./Console.ts";

export interface LocalStorageProps {
  get<T>(key: string, defaultValue: T): T;
  set<T>(key: string, value: T): boolean;
  addEventListener<T>(
    keys: string[],
    callback: (event: CustomEvent<{ key: string; newValue: T }> | StorageEvent) => void,
  ): EventListener;
  removeEventListener(listener: EventListener): void;
}

const LocalStorage: LocalStorageProps = {
  get<T>(key: string, defaultValue: T): T {
    try {
      const item = localStorage.getItem(`theme:${key}`);
      return item != null ? (JSON.parse(item) as T) : defaultValue;
    } catch (error) {
      console.error(`Error getting ${key} from localStorage:`, error);
      return defaultValue;
    }
  },

  set<T>(key: string, value: T): boolean {
    try {
      const fullKey = `theme:${key}`;
      localStorage.setItem(fullKey, JSON.stringify(value));
      const event = new CustomEvent<{ key: string; newValue: T }>("theme:storage", {
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
      if (e instanceof CustomEvent) {
        changedKey = e.detail.key;
      } else if (e instanceof StorageEvent) {
        changedKey = e.key;
      }
      if (changedKey && watchedKeys.has(changedKey)) {
        callback(e as any);
      }
    };

    window.addEventListener("theme:storage", listener);
    return listener;
  },

  removeEventListener(listener: EventListener): void {
    window.removeEventListener("theme:storage", listener);
  },
};

export default LocalStorage;
