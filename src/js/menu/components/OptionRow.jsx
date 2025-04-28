import React from "react";
import InfoButton from "./InfoButton";

const OptionRow = React.memo(({ name, desc, children, popupModal }) => {
  return (
    <div className="themeOptionRow" data-name={`theme:${name}`}>
      <div className="themeOptionContent">
        <div className="themeOptionDesc">{desc}</div>
      </div>
      <div className="themeOptionControl">
        <InfoButton name={name} popupModal={popupModal} />
        {children}
      </div>
    </div>
  );
});

export default OptionRow;
