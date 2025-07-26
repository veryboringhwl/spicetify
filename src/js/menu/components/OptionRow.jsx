import { memo } from "react";
import TippyButton from "../../components/TippyButton";
import PopupButton from "./PopupButton";

const OptionRow = memo(({ name, desc, tippy, children, popupModal }) => (
  <>
    <div className="option__content">
      <div className="option__desc">{desc}</div>
      {tippy && <TippyButton tippy={tippy} />}
    </div>
    <div className="option__control">
      <PopupButton name={name} popupModal={popupModal} />
      {children}
    </div>
  </>
));

export default OptionRow;
