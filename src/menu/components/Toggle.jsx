import OptionRow from "@/menu/components/OptionRow";

const Toggle = Spicetify.React.memo(
  ({ name, desc, tippy, value, onChange }) => {
    const handleChange = Spicetify.React.useCallback(() => {
      onChange(`theme:${name}`, !value);
    }, [name, value, onChange]);

    return Spicetify.React.createElement(
      OptionRow,
      { name, desc, tippy },
      Spicetify.React.createElement(
        "button",
        {
          className: "themeOptionToggle",
          onClick: handleChange,
        },
        Spicetify.React.createElement(
          "span",
          { className: "toggleWrapper" },
          Spicetify.React.createElement("span", {
            className: `toggle ${value ? "enabled" : ""}`,
          })
        )
      )
    );
  }
);

export default Toggle;
