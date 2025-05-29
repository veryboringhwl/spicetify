import React from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";
import OptionRow from "./OptionRow";
import Toggle from "./Toggle";

const OptionType = React.memo(({ option, value, onChange, disabled }) => {
  const handleChange = React.useCallback(
    (e) => {
      const newValue = option.type === "toggle" ? !value : e.target.value;
      onChange(`theme:${option.name}`, newValue);
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
