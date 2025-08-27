import { type ChangeEvent, type FC, memo } from "react";
import type { RadioButtonProps } from "../../types/temp.d.ts";

export const RadioButton: FC<RadioButtonProps> = memo(({ options, value, onChange, disabled }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="radio-button">
      {options.map((option) => (
        <label className="radio-button__item" key={option.value}>
          <input
            checked={value === option.value}
            className="radio-button__input"
            disabled={disabled}
            onChange={handleChange}
            type="radio"
            value={option.value}
          />
          <span className="radio-button__text">{option.label}</span>
        </label>
      ))}
    </div>
  );
});
