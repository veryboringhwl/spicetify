import Console from "./Console";

const LocalStorage = {
  get(key, defaultValue) {
    try {
      const item = localStorage.getItem(key);
      return item !== undefined && item !== null ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error getting ${key} from localStorage:`, error);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      Console.Error(`Error setting ${key} in localStorage:`, error);
      return false;
    }
  },
};

export default LocalStorage;
