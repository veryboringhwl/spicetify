import OptionRow from "@/menu/components/OptionRow";

const Input = Spicetify.React.memo(
  ({ name, desc, tippy, value, onChange, placeholder }) => {
    const handleChange = Spicetify.React.useCallback(
      (e) => {
        onChange(`theme:${name}`, e.target.value);
      },
      [name, onChange]
    );

    return Spicetify.React.createElement(
      OptionRow,
      { name, desc, tippy },
      Spicetify.React.createElement("input", {
        className: "themeOptionInput",
        type: "text",
        value: value,
        onChange: handleChange,
        placeholder: placeholder,
      })
    );
  }
);

export default Input;
