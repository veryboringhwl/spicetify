import type { Option, Settings } from "../../types/temp.d.ts";
import { LocalStorage } from "../../utils/LocalStorage.ts";

export function getInitialOptions(optionList: Option[]): Settings {
  const acc: Settings = {};

  for (const option of optionList) {
    acc[option.name] = LocalStorage.get(option.name, option.defaultVal);

    if (option.type === "toggle" && option.reveal) {
      for (const subOption of option.reveal) {
        // Load sub-option's value only if parent is enabled, otherwise default to false.
        acc[subOption.name] = acc[option.name]
          ? LocalStorage.get(subOption.name, subOption.defaultVal)
          : false;
      }
    }
  }
  return acc;
}
