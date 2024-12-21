import OptionRow from "@/menu/components/OptionRow";

const Dropdown = Spicetify.React.memo(
  ({ name, desc, tippy, value, options, onChange }) => {
    const handleChange = Spicetify.React.useCallback(
      (e) => {
        onChange(`theme:${name}`, e.target.value);
      },
      [name, onChange]
    );

    const optionElements = Spicetify.React.useMemo(
      () =>
        options.map(({ value, label }) =>
          Spicetify.React.createElement("option", { key: value, value }, label)
        ),
      [options]
    );

    return Spicetify.React.createElement(
      OptionRow,
      { name, desc, tippy },
      Spicetify.React.createElement(
        "select",
        {
          className: "themeOptionDropdown",
          value: value,
          onChange: handleChange,
        },
        optionElements
      )
    );
  }
);

export default Dropdown;
