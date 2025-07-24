import { memo } from "react";

const RadioButton = memo(({ options, name, selected, onChange, disabled }) => (
  <div className="radio-button">
    {options.map((option) => (
      <label key={option.value} className="radio-button__item">
        <input
          className="radio-button__input"
          type="radio"
          name={name}
          value={option.value}
          checked={selected === option.value}
          onChange={(e) => onChange(e)}
          disabled={disabled}
        />
        <span className="radio-button__text">{option.label}</span>
      </label>
    ))}
  </div>
));

export default RadioButton;
