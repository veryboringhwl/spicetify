import React from "react";
import OptionRow from "./OptionRow";

const Input = React.memo(
  ({ name, desc, tippy, value, onChange, placeholder, popupModal, disabled }) => {
    const handleChange = React.useCallback(
      (e) => onChange(`theme:${name}`, e.target.value),
      [name, onChange],
    );

    return (
      <OptionRow name={name} desc={desc} popupModal={popupModal} tippy={tippy}>
        <input
          className="themeOptionInput"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      </OptionRow>
    );
  },
);

export default Input;
