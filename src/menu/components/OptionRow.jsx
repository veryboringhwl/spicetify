import createTippy from "@/utils/createTippy";

const OptionRow = Spicetify.React.memo(({ name, desc, tippy, children }) => {
  const controlRef = Spicetify.React.useRef(null);

  Spicetify.React.useEffect(() => {
    if (controlRef.current && tippy) createTippy(controlRef.current, tippy);
  }, [tippy]);

  return Spicetify.React.createElement(
    "div",
    {
      className: "themeOptionRow",
      "data-name": `theme:${name}`,
      ref: controlRef,
    },
    Spicetify.React.createElement(
      "div",
      { className: "themeOptionContent" },
      Spicetify.React.createElement(
        "div",
        { className: "themeOptionName" },
        name
      ),
      Spicetify.React.createElement(
        "div",
        { className: "themeOptionDesc" },
        desc
      )
    ),
    Spicetify.React.createElement(
      "div",
      { className: "themeOptionControl" },
      children
    )
  );
});

export default OptionRow;
