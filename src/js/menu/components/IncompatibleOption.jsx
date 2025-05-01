import React from "react";
import OptionType from "../components/OptionType";
import options from "../settingsmenu/options";

const IncompatibleOption = React.memo(({ option, settings, onChange }) => {
  const allOptions = Object.values(options).flat();

  const isDisabled = allOptions.some(
    (otherOption) =>
      otherOption.incompatible?.includes(option.name) && settings[`theme:${otherOption.name}`],
  );

  return (
    <OptionType
      option={option}
      value={settings[`theme:${option.name}`]}
      onChange={onChange}
      disabled={isDisabled}
    />
  );
});

export default IncompatibleOption;
