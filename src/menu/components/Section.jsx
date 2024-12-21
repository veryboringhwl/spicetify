const Section = Spicetify.React.memo(({ name, children }) => {
  return Spicetify.React.createElement(
    "div",
    { className: `${name.toLowerCase()}Container` },
    Spicetify.React.createElement("h2", { className: "categoryTitle" }, name),
    children
  );
});

export default Section;
