import { memo } from "react";
import options from "../settingsmenu/options";
import RenderOption from "./RenderOption";

const allOptions = Object.values(options).flat();

const RenderCategory = memo(({ category, categoryOptions, settings, onChange }) => (
  <div className={`option__category option__category--${category.toLowerCase()}`}>
    <h2 className="option__category-title">{category}</h2>
    {categoryOptions.map((option) => {
      const disabled = allOptions.some(
        (o) => o.incompatible?.includes(option.name) && settings[o.name],
      );
      return (
        <RenderOption
          key={option.name}
          option={option}
          settings={settings}
          onChange={onChange}
          disabled={disabled}
        />
      );
    })}
  </div>
));

export default RenderCategory;
