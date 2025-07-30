import { memo } from "react";

const Input = memo(({ value, onChange, placeholder, disabled = false }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
});
export default Input;
