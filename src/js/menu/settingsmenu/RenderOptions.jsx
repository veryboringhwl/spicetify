import React from "react";
import OptionType from "./OptionType";
import RevealableOption from "../components/RevealableOption";

const RenderOptions = React.memo(({ option, settings, onChange }) => {
  const mainValue = settings[`theme:${option.name}`];

  return (
    <div className="themeOptionWrapper">
      <div className="themeOptionMain">
        <OptionType
          option={option}
          value={mainValue}
          onChange={onChange}
          popupModal={option.popupModal}
        />
      </div>
      {mainValue && option.reveal && (
        <RevealableOption
          option={option}
          settings={settings}
          onChange={onChange}
        />
      )}
    </div>
  );
});

export default RenderOptions;
