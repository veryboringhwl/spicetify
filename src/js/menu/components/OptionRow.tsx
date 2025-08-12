import { memo } from "react";
import TippyButton from "../../components/TippyButton.tsx";
import OptionType, { type Option } from "./OptionType.tsx";
import PopupButton from "./PopupButton.tsx";

interface OptionRowProps {
  name: string;
  desc: string;
  tippy?: string;
  popupModal?: string;
  option?: Option;
  value: string | number | boolean;
  onChange?: (value: string | number | boolean) => void;
  disabled?: boolean;
}

const OptionRow = memo(
  ({ name, desc, tippy, popupModal, option, value, onChange, disabled }: OptionRowProps) => (
    <div className="option__row">
      <div className="option__content">
        <div className="option__desc">{desc}</div>
        {tippy && <TippyButton tippy={tippy} />}
      </div>
      <div className="option__control">
        {popupModal && <PopupButton name={name} popupModal={popupModal} />}
        {option && (
          <OptionType
            disabled={disabled}
            onChange={onChange || (() => {})}
            option={option}
            value={value}
          />
        )}
      </div>
    </div>
  ),
);

export default OptionRow;
