import { memo } from "react";
import options from "../settingsmenu/options";
import OptionType from "./OptionType";

const allOptions = Object.values(options).flat();

const RenderCategory = memo(({ category, categoryOptions, settings, onChange }) => (
  <div className={`option__category option__category--${category.toLowerCase()}`}>
    <h2 className="option__category-title">{category}</h2>
    {categoryOptions.map((option) => {
      const value = settings[`theme:${option.name}`];
      const disabled = allOptions.some(
        (o) => o.incompatible?.includes(option.name) && settings[`theme:${o.name}`],
      );
      return (
        <div className="option__item" key={option.name}>
          <div className="option__item--main">
            <OptionType option={option} value={value} onChange={onChange} disabled={disabled} />
          </div>
          {value && option.reveal && (
            <div className="option__item--revealed">
              {option.reveal.map((sub) => (
                <OptionType
                  key={sub.name}
                  option={sub}
                  value={settings[`theme:${sub.name}`]}
                  onChange={onChange}
                  disabled={disabled}
                />
              ))}
            </div>
          )}
        </div>
      );
    })}
  </div>
));

export default RenderCategory;
