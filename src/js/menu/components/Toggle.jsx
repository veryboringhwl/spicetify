import React from "react";
import Tippy from "../../components/Tippy";
import OptionRow from "./OptionRow";

const Toggle = React.memo(({ name, desc, tippy, value, onChange, popupModal }) => {
  const toggleRef = React.useRef(null);

  React.useEffect(() => {
    if (toggleRef.current && tippy) {
      Tippy(toggleRef.current, tippy);
    }
  }, [tippy]);

  const handleChange = React.useCallback(() => {
    onChange(`theme:${name}`, !value);
  }, [name, value, onChange]);

  return (
    <OptionRow name={name} desc={desc} popupModal={popupModal}>
      <button className="themeOptionToggle" onClick={handleChange} ref={toggleRef}>
        <span className="toggleWrapper">
          <span className={`toggle ${value ? "enabled" : ""}`} />
        </span>
      </button>
    </OptionRow>
  );
});

export default Toggle;
