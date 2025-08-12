import { memo } from "react";
import Console from "../../utils/Console.ts";
import Dropdown from "./Dropdown.tsx";
import Input from "./Input.tsx";
import RadioButton from "./RadioButton.tsx";
import Slider from "./Slider.tsx";
import Toggle from "./Toggle.tsx";

export interface Option {
  name: string;
  type: string;
  reveal?: Option[];
  placeholder?: string;
  popupModal?: string;
  tippy?: string;
  options?: { value: string; label: string }[];
  run?: () => void;
}

interface OptionTypeProps {
  option: Option;
  value: string | boolean | number;
  onChange: (value: string | boolean | number) => void;
  disabled?: boolean;
}

const OptionType = memo(({ option, value, onChange, disabled }: OptionTypeProps) => {
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
      return <Slider disabled={disabled} onChange={onChange} value={value as number} />;

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
      Console.Warn(`Unknown option type: "${option.type}" for option "${option.name}"`);
      return null;
  }
});

export default OptionType;
