import OptionType from "@/menu/settingsmenu/OptionType";

const RevealableOption = Spicetify.React.memo(
  ({ option, settings, onChange }) => {
    const mainValue = settings[`theme:${option.name}`];

    return Spicetify.React.createElement(
      "div",
      { className: "themeOptionWrapper" },
      Spicetify.React.createElement(OptionType, {
        option,
        value: mainValue,
        onChange,
      }),
      mainValue &&
        option.reveal &&
        Spicetify.React.createElement(
          "div",
          { className: "themeOptionRevealedWrapper" },
          option.reveal.map((subOption) =>
            Spicetify.React.createElement(OptionType, {
              key: subOption.name,
              option: subOption,
              value: settings[`theme:${subOption.name}`],
              onChange,
            })
          )
        )
    );
  }
);

export default RevealableOption;
