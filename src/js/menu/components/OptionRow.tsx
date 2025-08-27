import { type FC, memo } from "react";
import { TippyButton } from "../../components/TippyButton.tsx";
import type { OptionRowProps } from "../../types/temp.d.ts";
import { OptionType } from "./OptionType.tsx";
import { PopupButton } from "./PopupButton.tsx";

export const OptionRow: FC<OptionRowProps> = memo(
  ({ name, desc, tippy, popupModal, option, value, onChange, disabled }) => (
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
