import { type ChangeEvent, type FC, memo } from "react";
import type { InputProps } from "../../types/temp.d.ts";

export const Input: FC<InputProps> = memo(({ value, onChange, placeholder, disabled = false }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="input"
      disabled={disabled}
      onChange={handleChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
});
