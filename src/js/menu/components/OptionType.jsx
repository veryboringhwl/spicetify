import React from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Toggle from "./Toggle";

const OptionType = React.memo(({ option, value, onChange }) => {
  const Component = { toggle: Toggle, dropdown: Dropdown, input: Input }[option.type];
  return <Component {...option} value={value} onChange={onChange} />;
});

export default OptionType;
