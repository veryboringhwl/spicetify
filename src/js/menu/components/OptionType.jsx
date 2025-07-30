import { memo } from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";
import RadioButton from "./RadioButton";
import Toggle from "./Toggle";

const OptionType = memo(({ option, value, onChange, disabled = false }) => {
  switch (option.type) {
    case "toggle":
      return <Toggle value={value} onChange={onChange} disabled={disabled} />;

    case "input":
      return (
        <Input
          value={value}
          onChange={onChange}
          placeholder={option.placeholder}
          disabled={disabled}
        />
      );

    case "dropdown":
      return (
        <Dropdown value={value} onChange={onChange} options={option.options} disabled={disabled} />
      );

    case "radiobutton":
      return (
        <RadioButton
          name={option.name}
          selectedValue={value}
          onChange={onChange}
          options={option.options}
          disabled={disabled}
        />
      );

    default:
      Console.Warn(`Unknown option type: "${option.type}" for option "${option.name}"`);
      return null;
  }
});

export default OptionType;
