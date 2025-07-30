import { memo, useCallback } from "react";
import OptionRow from "./OptionRow";

const RenderOption = memo(({ option, settings, onChange, disabled }) => {
  const value = settings[option.name];

  const handleChange = useCallback(
    (newValue) => {
      onChange(option.name, newValue);
    },
    [option.name, onChange],
  );

  return (
    <div className="option__item option__item--main" data-name={option.name}>
      <OptionRow
        name={option.name}
        desc={option.desc}
        tippy={option.tippy}
        popupModal={option.popupModal}
        option={option}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
      {value && option.reveal && (
        <div className="option__item--revealed" data-name={option.name}>
          {option.reveal.map((sub) => (
            <RenderOption
              key={sub.name}
              option={sub}
              settings={settings}
              onChange={onChange}
              disabled={disabled}
            />
          ))}
        </div>
      )}
    </div>
  );
});

export default RenderOption;
