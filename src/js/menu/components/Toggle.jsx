import { memo } from "react";

const Toggle = memo(({ value, onChange, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  return (
    <button className="toggle" onClick={handleClick} disabled={disabled}>
      <span className="toggle__background">
        <span
          className={`toggle__slider${value ? " toggle__slider--enabled" : ""}${disabled ? " toggle__slider--disabled" : ""}`}
        />
      </span>
    </button>
  );
});

export default Toggle;
