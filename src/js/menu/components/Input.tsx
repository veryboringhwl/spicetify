import { memo } from "react";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const Input = memo(({ value, onChange, placeholder, disabled = false }: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
export default Input;
