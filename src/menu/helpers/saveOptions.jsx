import ConsoleLog from "@/utils/ConsoleLog";
import applyOptions from "@/menu/helpers/applyOptions";
import { setLocalStorage } from "@/utils/LocalStorage";

const saveOptions = (options) => {
  const changedOptions = Object.entries(options).filter(([key, value]) => {
    const currentValue = getLocalStorage(key, null);
    if (JSON.stringify(currentValue) !== JSON.stringify(value)) {
      setLocalStorage(key, value);
      return true;
    }
    return false;
  });

  if (changedOptions.length > 0) {
    const formattedChanges = changedOptions
      .map(([key, value]) => `${key} = ${value}`)
      .join(", ");
    ConsoleLog(`Saving settings: ${formattedChanges}`);
    applyOptions(options);
  }
};

export default saveOptions;
