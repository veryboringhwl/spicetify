import { memo } from "react";

interface RadioButtonProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const RadioButton = memo(({ options, value, onChange, disabled }: RadioButtonProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

export default RadioButton;
