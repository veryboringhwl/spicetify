import React from "react";

const Section = React.memo(({ name, children }) => {
  return (
    <div className={`themeSettingsCategory ${name.toLowerCase()}Container`}>
      <h2 className="categoryTitle">{name}</h2>
      {children}
    </div>
  );
});

export default Section;
