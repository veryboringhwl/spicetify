import { memo } from "react";
import IncompatibleOption from "./IncompatibleOption";
import RevealableOption from "./RevealableOption";

const RenderOptions = memo(({ option, settings, onChange }) => {
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
