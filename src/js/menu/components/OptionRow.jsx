import { memo } from "react";
import TippyButton from "../../components/TippyButton";
import OptionType from "./OptionType";
import PopupButton from "./PopupButton";

const OptionRow = memo(({ name, desc, tippy, popupModal, option, value, onChange, disabled }) => (
  <div className="option__row">
    <div className="option__content">
      <div className="option__desc">{desc}</div>
      {tippy && <TippyButton tippy={tippy} />}
    </div>
    <div className="option__control">
      <PopupButton name={name} popupModal={popupModal} />
      <OptionType option={option} value={value} onChange={onChange} disabled={disabled} />
    </div>
  </div>
));

export default OptionRow;
