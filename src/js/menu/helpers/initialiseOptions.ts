import type { Option, Settings } from "../../types/temp.d.ts";
import { Console } from "../../utils/Console.ts";
import { LocalStorage } from "../../utils/LocalStorage.ts";
import { albumBannerOptions } from "../modalmenu/AlbumBannerModal.tsx";
import { windowsControlOptions } from "../modalmenu/WindowsControlModal.tsx";
import { options } from "../settingsmenu/options.ts";
import { applyOptions } from "./applyOptions.ts";
import { getInitialOptions } from "./getInitialOptions.ts";

export const initialiseOptions = (): Settings => {
  Console.Log("Initialising options");

  const allOptions: Option[] = [
    ...Object.values(options).flat(),
    ...albumBannerOptions,
    ...windowsControlOptions,
  ];

  // Set default values in localStorage if they don't exist
  allOptions.forEach((option) => {
    if (LocalStorage.get(option.name, null) === null) {
      LocalStorage.set(option.name, option.defaultVal);
    }
    if (option.type === "toggle" && option.reveal) {
      option.reveal.forEach((subOption) => {
        if (LocalStorage.get(subOption.name, null) === null) {
          LocalStorage.set(subOption.name, subOption.defaultVal);
        }
      });
    }
  });

  const loadedSettings = getInitialOptions(allOptions);

  // Run all functions on startup
  applyOptions({ settings: loadedSettings, changedOptions: Object.keys(loadedSettings) });

  return loadedSettings;
};
