import { memo } from "react";
import TippyButton from "../../components/TippyButton";
import InfoButton from "./InfoButton";

const OptionRow = memo(({ name, desc, tippy, children, popupModal }) => (
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
