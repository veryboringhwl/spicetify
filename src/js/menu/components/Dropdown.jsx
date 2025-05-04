import React from "react";
import OptionRow from "./OptionRow";

const Dropdown = React.memo(
  ({ name, desc, tippy, value, options, onChange, popupModal, disabled }) => {
    const handleChange = React.useCallback(
      (e) => {
        onChange(`theme:${name}`, e.target.value);
      },
      [name, onChange],
    );

    return (
      <OptionRow name={name} desc={desc} popupModal={popupModal} tippy={tippy}>
        <select
          className="themeOptionDropdown"
          value={value}
          onChange={handleChange}
          disabled={disabled}
        >
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </OptionRow>
    );
  },
);

export default Dropdown;
