import React from "react";
import Icons from "../../icons/icons";

const Dropdown = React.memo(({ value, options, onChange, disabled }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOpen = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option, e) => {
    e.stopPropagation();
    onChange?.({ target: { value: option.value } });
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={`themeOptionDropdown ${isOpen ? "menu-open" : ""} ${disabled ? "disabled" : ""}`}
    >
      <div className="themeOptionDropdownButton" onClick={disabled ? null : toggleOpen}>
        <div className="themeOptionDropdownText">
          {options.find((opt) => opt.value === value)?.label}
        </div>
        <div className="themeOptionDropdownArrow">
          <Icons.React.dropdown size={12} />
        </div>
      </div>
      {isOpen && !disabled && (
        <div className="themeOptionDropdownMenu">
          {options.map((option) => (
            <div
              key={option.value}
              className={`themeOptionDropdownOptions ${value === option.value ? "selected" : ""}`}
              role="option"
              onClick={(e) => handleSelect(option, e)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default Dropdown;
