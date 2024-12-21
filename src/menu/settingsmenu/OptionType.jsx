import Toggle from "@/menu/components/Toggle";
import Dropdown from "@/menu/components/Dropdown";
import Input from "@/menu/components/Input";	

const OptionType = Spicetify.React.memo(({ option, value, onChange }) => {
  const Component = { toggle: Toggle, dropdown: Dropdown, input: Input }[
    option.type
  ];
  return Spicetify.React.createElement(Component, {
    ...option,
    value,
    onChange,
  });
});

export default OptionType;
