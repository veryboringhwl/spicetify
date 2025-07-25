import { memo, useCallback } from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";
import OptionRow from "./OptionRow";
import RadioButton from "./RadioButton";
import Toggle from "./Toggle";

const OptionType = memo(({ option, value, onChange, disabled }) => {
  const handleChange = useCallback(
    (e) => {
      const newValue = option.type === "toggle" ? !value : e.target.value;
      onChange(option.name, newValue);
    },
    [option.name, option.type, value, onChange],
  );

  let Component;
  const componentProps = {
    value,
    onChange: handleChange,
    disabled,
  };

  if (option.type === "toggle") {
    Component = Toggle;
  } else if (option.type === "dropdown") {
    Component = Dropdown;
    componentProps.options = option.options;
  } else if (option.type === "input") {
    Component = Input;
    componentProps.placeholder = option.placeholder;
  } else if (option.type === "radiobutton") {
    Component = RadioButton;
    componentProps.options = option.options;
    componentProps.selected = value; // Pass current value as 'selected'
  }

  return (
    <OptionRow
      name={option.name}
      desc={option.desc}
      tippy={option.tippy}
      popupModal={option.popupModal}
    >
      <Component {...componentProps} />
    </OptionRow>
  );
});

export default OptionType;
