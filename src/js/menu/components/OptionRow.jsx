import React from "react";
import TippyButton from "../../components/TippyButton";
import InfoButton from "./InfoButton";

const OptionRow = React.memo(({ name, desc, children, popupModal, tippy }) => (
  <div className="themeOptionRow" data-name={`theme:${name}`}>
    <div className="themeOptionContent">
      <div className="themeOptionDesc">{desc}</div>
    </div>
    <div className="themeOptionControl">
      {tippy && <TippyButton tippy={tippy} />}
      <InfoButton name={name} popupModal={popupModal} />
      {children}
    </div>
  </div>
));

export default OptionRow;
