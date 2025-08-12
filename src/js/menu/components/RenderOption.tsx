import { memo, useCallback } from "react";
import OptionRow from "./OptionRow.tsx";
import type { Option } from "./OptionType.tsx";

interface RenderOptionProps {
  option: Option;
  settings: Record<string, any>;
  onChange: (name: string, value: any) => void;
  disabled?: boolean;
}

const RenderOption = memo<RenderOptionProps>(({ option, settings, onChange, disabled }) => {
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
      {value && option.reveal && (
        <div className="option__item--revealed" data-name={option.name}>
          {option.reveal.map((sub) => (
            <RenderOption
              disabled={disabled}
              key={sub.name}
              onChange={onChange}
              option={sub}
              settings={settings}
            />
          ))}
        </div>
      )}
    </div>
  );
});

export default RenderOption;
