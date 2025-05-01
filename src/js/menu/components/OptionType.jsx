import React from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Toggle from "./Toggle";

const OptionType = React.memo(({ option, value, onChange, disabled }) => {
  const Component = { toggle: Toggle, dropdown: Dropdown, input: Input }[option.type];
  return <Component {...option} value={value} onChange={onChange} disabled={disabled} />;
});

export default OptionType;
