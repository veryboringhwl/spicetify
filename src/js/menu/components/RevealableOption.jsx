import { memo } from "react";
import OptionType from "./OptionType";

const RevealableOption = memo(({ option, settings, onChange }) => {
  return (
    <div className="themeOptionRevealed">
      {option.reveal.map((subOption) => (
        <OptionType
          key={subOption.name}
          option={subOption}
          value={settings[`theme:${subOption.name}`]}
          onChange={onChange}
        />
      ))}
    </div>
  );
});

export default RevealableOption;
