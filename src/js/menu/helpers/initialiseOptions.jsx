import Console from "../../utils/Console";
import runModalSettings from "../modalmenu/runModalSettings";
import options from "../settingsmenu/options";
import applyOptions from "./applyOptions";
import getInitialOptions from "./getInitialOptions";

const initialiseOptions = () => {
  try {
    const loadedOptions = getInitialOptions(Object.values(options).flat());

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
