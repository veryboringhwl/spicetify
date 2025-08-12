import Console from "../../utils/Console.ts";
import options from "../settingsmenu/options.ts";

interface ApplyOptionsParams {
  settings: Record<string, any>;
  changedOptions?: string[];
}

const applyOptions = ({ settings, changedOptions = [] }: ApplyOptionsParams) => {
  try {
    Object.values(options)
      .flat()
      .forEach((option: { name: string; run?: (value: any) => void }) => {
        const key = option.name;
        const value = settings[key];
        if (changedOptions.includes(key) && option.run) {
          option.run(value);
        }
      });
  } catch (error) {
    Console.Error("Failed to apply options:", error);
  }
};

export default applyOptions;
