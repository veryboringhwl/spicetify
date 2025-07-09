import Console from "../../utils/Console";
import LocalStorage from "../../utils/LocalStorage";
import { albumBannerOptions } from "../modalmenu/AlbumBannerModal";
import { windowsControlOptions } from "../modalmenu/WindowsControlModal";
import options from "../settingsmenu/options";
import applyOptions from "./applyOptions";
import getInitialOptions from "./getInitialOptions";

const initialiseOptions = () => {
  Console.Log("Initialising options");
  const loadedOptions = getInitialOptions(Object.values(options).flat());
  const allOptions = [
    ...Object.values(options).flat(),
    ...windowsControlOptions,
    ...albumBannerOptions,
  ];

  allOptions.forEach((option) => {
    const key = option.name;
    if (LocalStorage.get(key, null) === null) {
      LocalStorage.set(key, option.defaultVal);
    }

    if (option.reveal) {
      option.reveal.forEach((subOption) => {
        const subKey = subOption.name;
        if (LocalStorage.get(subKey, null) === null) {
          LocalStorage.set(subKey, loadedOptions[key] ? subOption.defaultVal : false);
        }
      });
    }
  });

  allOptions.forEach((option) => {
    const key = option.name;
    const value = LocalStorage.get(key, option.defaultVal);
    if (option.run) {
      option.run(value);
    }
  });

  applyOptions(loadedOptions);
  return loadedOptions;
};

export default initialiseOptions;
