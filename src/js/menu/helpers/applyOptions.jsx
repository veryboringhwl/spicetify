import Console from "../../utils/Console";
import options from "../settingsmenu/options";

const applyOptions = (settings, changedOptions = []) => {
  try {
    Object.values(options)
      .flat()
      .forEach(({ name, run }) => {
        const key = name;
        const value = settings[key];
        if (changedOptions.includes(key) && run) {
          run(value);
        }
      });
  } catch (error) {
    Console.Error("Failed to apply options:", error);
  }
};

export default applyOptions;
