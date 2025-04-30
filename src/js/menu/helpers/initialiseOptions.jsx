import Console from "../../utils/Console";
import LocalStorage from "../../utils/LocalStorage";
import runModalSettings from "../modalmenu/runModalSettings";
import options from "../settingsmenu/options";
import applyOptions from "./applyOptions";

const initialiseOptions = () => {
  try {
    const loadedOptions = Object.values(options)
      .flat()
      .reduce((acc, option) => {
        const mainKey = `theme:${option.name}`;
        acc[mainKey] = LocalStorage.get(mainKey, option.defaultVal);
        if (option.reveal) {
          option.reveal.forEach((subOption) => {
            const subKey = `theme:${subOption.name}`;
            acc[subKey] = acc[mainKey] ? LocalStorage.get(subKey, subOption.defaultVal) : false;
          });
        }
        return acc;
      }, {});

    Object.values(options)
      .flat()
      .forEach((option) => {
        const key = `theme:${option.name}`;
        const value = loadedOptions[key];
        option.run?.(value);
      });

    applyOptions(loadedOptions);
    runModalSettings();
    return loadedOptions;
  } catch (error) {
    Console.Error("Failed to initialise options:", error);
  }
};

export default initialiseOptions;
