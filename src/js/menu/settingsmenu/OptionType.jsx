import React from "react";
import Toggle from "../components/Toggle";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";

const OptionType = React.memo(({ option, value, onChange }) => {
  const Component = { toggle: Toggle, dropdown: Dropdown, input: Input }[
    option.type
  ];
  return <Component {...option} value={value} onChange={onChange} />;
});

export default OptionType;
