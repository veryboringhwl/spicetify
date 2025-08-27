import { type FC, memo, useCallback } from "react";
import type { RenderOptionProps } from "../../types/temp.d.ts";
import { OptionRow } from "./OptionRow.tsx";

export const RenderOption: FC<RenderOptionProps> = memo(
  ({ option, settings, onChange, disabled }) => {
    const value = settings[option.name];

    const handleChange = useCallback(
      (newValue: any) => {
        onChange(option.name, newValue);
      },
      [option.name, onChange],
    );

    return (
      <div className="option__item option__item--main" data-name={option.name}>
        <OptionRow
          desc={option.desc}
          disabled={disabled}
          name={option.name}
          onChange={handleChange}
          option={option}
          popupModal={option.popupModal}
          tippy={option.tippy}
          value={value}
        />
        {value && option.type === "toggle" && option.reveal && (
          <div className="option__item--revealed" data-name={option.name}>
            {option.reveal.map((sub) => (
              <RenderOption
                disabled={disabled}
                key={sub.name}
                onChange={onChange}
                option={sub}
                settings={settings} // Revealed options should also be disabled if the parent is.
              />
            ))}
          </div>
        )}
      </div>
    );
  },
);
