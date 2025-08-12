import { memo } from "react";

interface ToggleProps {
  value: boolean;
  onChange: (newValue: boolean) => void;
  disabled?: boolean;
}

const Toggle = memo(({ value, onChange, disabled }: ToggleProps) => {
  const handleClick = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  return (
    <button className="toggle" disabled={disabled} onClick={handleClick}>
      <span className="toggle__background">
        <span
          className={`toggle__slider${value ? " toggle__slider--enabled" : ""}${disabled ? " toggle__slider--disabled" : ""}`}
        />
      </span>
    </button>
  );
});

export default Toggle;
