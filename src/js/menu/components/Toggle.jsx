import React from "react";
import OptionRow from "./OptionRow";

const Toggle = React.memo(({ name, desc, tippy, value, onChange, disabled, popupModal }) => {
  const handleChange = React.useCallback(() => {
    !disabled && onChange(`theme:${name}`, !value);
  }, [name, value, onChange]);

  return (
    <OptionRow name={name} desc={desc} popupModal={popupModal} tippy={tippy}>
      <button className="themeOptionToggle" onClick={handleChange} disabled={disabled}>
        <span className="toggleBackground">
          <span className={`toggle ${value ? "enabled" : ""} ${disabled ? "disabled" : ""}`} />
        </span>
      </button>
    </OptionRow>
  );
});

export default Toggle;
