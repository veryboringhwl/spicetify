import { memo } from "react";

const RadioButton = memo(({ options, selected, onChange, disabled }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="radio-button">
      {options.map((option) => (
        <label key={option.value} className="radio-button__item">
          <input
            className="radio-button__input"
            type="radio"
            value={option.value}
            checked={selected === option.value}
            onChange={handleChange}
            disabled={disabled}
          />
          <span className="radio-button__text">{option.label}</span>
        </label>
      ))}
    </div>
  );
});

export default RadioButton;
