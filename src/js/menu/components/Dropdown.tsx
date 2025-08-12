import { memo, useId, useRef } from "react";
import Icons from "../../icons/Icons.tsx";

interface DropdownOption {
  value: string | number;
  label: string;
}

interface DropdownProps {
  value: string | number;
  options: DropdownOption[];
  onChange?: (value: string | number) => void;
  disabled?: boolean;
}

const Dropdown = memo(({ value, options, onChange, disabled }: DropdownProps) => {
  const popoverId = useId();
  const popoverRef = useRef<HTMLDivElement>(null);
  const anchorName = `--dropdown-anchor-${popoverId.replace(/:/g, "id")}`;

  const handleSelect = (option: DropdownOption) => {
    onChange?.(option.value);
    popoverRef.current?.hidePopover();
  };

  const selectedLabel = options.find((opt) => opt.value === value)?.label || "Select...";

  return (
    <div className={`dropdown${disabled ? " dropdown--disabled" : ""}`}>
      <button
        className="dropdown__button"
        disabled={disabled}
        popovertarget={popoverId}
        popovertargetaction="toggle"
        // @ts-ignore
        style={{ anchorName: anchorName }}
      >
        <div className="dropdown__text">{selectedLabel}</div>
        <div className="dropdown__arrow">
          <Icons.React.dropdown size={12} />
        </div>
      </button>
      <div
        className="dropdown__menu"
        id={popoverId}
        popover="auto"
        ref={popoverRef}
        style={{
          top: `calc(anchor(${anchorName} bottom) + 4px)`,
          left: `anchor(${anchorName} left)`,
          width: `anchor-size(${anchorName} width)`,
        }}
      >
        {options.map((option) => (
          <div
            className={`dropdown__option${value === option.value ? " dropdown__option--selected" : ""}`}
            key={option.value}
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Dropdown;
