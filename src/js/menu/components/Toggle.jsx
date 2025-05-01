import React from "react";
import Tippy from "../../components/Tippy";
import OptionRow from "./OptionRow";

const Toggle = React.memo(({ name, desc, tippy, value, onChange, disabled, popupModal }) => {
  const toggleRef = React.useRef(null);

  React.useEffect(() => {
    if (toggleRef.current && tippy) {
      Tippy(toggleRef.current, tippy);
    }
  }, [tippy]);

  const handleChange = React.useCallback(() => {
    !disabled && onChange(`theme:${name}`, !value);
  }, [name, value, onChange]);

  return (
    <OptionRow name={name} desc={desc} popupModal={popupModal}>
      <span className="themeOptionToggle" ref={toggleRef}>
        <button className="toggleButton" onClick={handleChange} disabled={disabled}>
          <span className="toggleBackground">
            <span className={`toggle ${value ? "enabled" : ""} ${disabled ? "disabled" : ""}`} />
          </span>
        </button>
      </span>
    </OptionRow>
  );
});

export default Toggle;
