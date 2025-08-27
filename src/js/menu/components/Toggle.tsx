import { type FC, memo } from "react";
import type { ToggleProps } from "../../types/temp.d.ts";

export const Toggle: FC<ToggleProps> = memo(({ value, onChange, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  return (
    <button
      aria-checked={value}
      className="toggle"
      disabled={disabled}
      onClick={handleClick}
      role="switch"
    >
      <span className="toggle__background">
        <span
          className={`toggle__slider${value ? " toggle__slider--enabled" : ""}${
            disabled ? " toggle__slider--disabled" : ""
          }`}
        />
      </span>
    </button>
  );
});
