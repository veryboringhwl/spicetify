import React from "react";
import IncompatibleOption from "../components/IncompatibleOption";
import RevealableOption from "../components/RevealableOption";

const RenderOptions = React.memo(({ option, settings, onChange }) => {
  const mainValue = settings[`theme:${option.name}`];

  return (
    <div className="themeOptionWrapper">
      <div className="themeOptionMain">
        <IncompatibleOption option={option} settings={settings} onChange={onChange} />
      </div>
      {mainValue && option.reveal && (
        <RevealableOption option={option} settings={settings} onChange={onChange} />
      )}
    </div>
  );
});

export default RenderOptions;
