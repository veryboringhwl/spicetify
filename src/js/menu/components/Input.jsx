import { memo } from "react";

const Input = memo(({ value, onChange, placeholder, disabled }) => (
  <input
    className="themeOptionInput"
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    disabled={disabled}
  />
));

export default Input;
