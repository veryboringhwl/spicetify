import type { Option, Settings } from "../../types/temp.d.ts";
import { Console } from "../../utils/Console.ts";
import { options } from "../settingsmenu/options.ts";

interface ApplyOptionsParams {
  settings: Settings;
  changedOptions?: string[];
}

export const applyOptions = ({ settings, changedOptions = [] }: ApplyOptionsParams): void => {
  try {
    const allOptions: Option[] = Object.values(options).flat();
    allOptions.forEach((option) => {
      const { name, run } = option;
      const value = settings[name];
      if (changedOptions.includes(name) && run) {
        run(value);
      }
    });
  } catch (error) {
    Console.Error("Failed to apply options:", error);
  }
};
