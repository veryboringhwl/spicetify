import Console from "../../utils/Console";
import LocalStorage from "../../utils/LocalStorage";
import { albumBannerOptions } from "../modalmenu/AlbumBannerModal";
import { fontOptions } from "../modalmenu/FontModal";
import { windowsControlOptions } from "../modalmenu/WindowsControlModal";
import { applySettingToDOM } from "../modalmenu/utils";
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
    ...fontOptions,
  ];

  allOptions.forEach((option) => {
    const key = `theme:${option.name}`;
    if (localStorage.getItem(key) === null) {
      LocalStorage.set(key, option.defaultVal);
    }

    if (option.reveal) {
      option.reveal.forEach((subOption) => {
        const subKey = `theme:${subOption.name}`;
        if (localStorage.getItem(subKey) === null) {
          LocalStorage.set(subKey, loadedOptions[key] ? subOption.defaultVal : false);
        }
      });
    }
  });

  allOptions.forEach((option) => {
    const key = `theme:${option.name}`;
    const value = LocalStorage.get(key, option.defaultVal);
    applySettingToDOM(option, value);
  });

  applyOptions(loadedOptions);
  return loadedOptions;
};

export default initialiseOptions;
