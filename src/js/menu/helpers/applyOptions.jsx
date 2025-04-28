import options from "../settingsmenu/options";
import Console from "../../utils/Console";

const applyOptions = (settings) => {
  try {
    Object.values(options)
      .flat()
      .forEach(({ name, type, reveal, run }) => {
        const key = `theme:${name}`;
        const value = settings[key];
        if (type === "toggle") {
          document.body.classList.toggle(name, value);
        }
        if (reveal) {
          reveal.forEach(({ name: subName, type: subType }) => {
            if (subType === "toggle") {
              document.body.classList.toggle(
                subName,
                value && settings[`theme:${subName}`]
              );
            }
          });
        }
        if (run) run(value);
      });
  } catch (error) {
    Console.Error("Failed to apply options:", error);
  }
};

export default applyOptions;
