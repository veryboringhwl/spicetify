import { type FC, memo } from "react";
import type { Option, OptionTypeProps } from "../../types/temp.d.ts";
import { Console } from "../../utils/Console.ts";
import { Dropdown } from "./Dropdown.tsx";
import { Input } from "./Input.tsx";
import { RadioButton } from "./RadioButton.tsx";
import { Slider } from "./Slider.tsx";
import { Toggle } from "./Toggle.tsx";

export const OptionType: FC<OptionTypeProps> = memo(({ option, value, onChange, disabled }) => {
  switch (option.type) {
    case "toggle":
      return <Toggle disabled={disabled} onChange={onChange} value={value as boolean} />;
    case "input":
      return (
        <Input
          disabled={disabled}
          onChange={onChange}
          placeholder={option.placeholder}
          value={value as string}
        />
      );
    case "dropdown":
      return (
        <Dropdown
          disabled={disabled}
          onChange={onChange}
          options={option.options || []}
          value={value as string | number}
        />
      );
    case "slider":
      return (
        <Slider
          disabled={disabled}
          max={option.max}
          min={option.min}
          onChange={onChange}
          step={option.step}
          value={value as number}
        />
      );
    case "radiobutton":
      return (
        <RadioButton
          disabled={disabled}
          onChange={onChange}
          options={option.options || []}
          value={value as string}
        />
      );
    default:
      Console.Warn(`Unknown option type for option "${(option as Option).name || "N/A"}"`);
      return null;
  }
});
