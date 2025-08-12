import Console from "../../utils/Console.ts";
import LocalStorage from "../../utils/LocalStorage.ts";
import { albumBannerOptions } from "../modalmenu/AlbumBannerModal.tsx";
import { windowsControlOptions } from "../modalmenu/WindowsControlModal.tsx";
import options from "../settingsmenu/options.ts";
import applyOptions from "./applyOptions.ts";
import getInitialOptions from "./getInitialOptions.ts";

interface SubOption {
  name: string;
  defaultVal?: any;
}

interface Option {
  name: string;
  defaultVal?: any;
  reveal?: SubOption[];
  run?: (value: any) => void;
}

const initialiseOptions = (): Record<string, any> => {
  Console.Log("Initialising options");
  const loadedOptions: Record<string, any> = getInitialOptions(Object.values(options).flat());
  const allOptions: Option[] = [
    ...Object.values(options).flat(),
    ...windowsControlOptions,
    ...albumBannerOptions,
  ];

  allOptions.forEach((option: Option) => {
    const key = option.name;
    if (LocalStorage.get(key, null) === null) {
      LocalStorage.set(key, option.defaultVal);
    }

    if (option.reveal) {
      option.reveal.forEach((subOption: SubOption) => {
        const subKey = subOption.name;
        if (LocalStorage.get(subKey, null) === null) {
          const parentValue =
            loadedOptions[key] !== undefined ? loadedOptions[key] : option.defaultVal;
          LocalStorage.set(subKey, parentValue ? subOption.defaultVal : false);
        }
      });
    }
  });

  allOptions.forEach((option: Option) => {
    const key = option.name;
    const value = LocalStorage.get(key, option.defaultVal);
    if (option.run) {
      option.run(value);
    }
  });

  const allKeys = Object.keys(loadedOptions);
  applyOptions({ settings: loadedOptions, changedOptions: allKeys });

  return loadedOptions;
};

export default initialiseOptions;
