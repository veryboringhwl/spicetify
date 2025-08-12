import { memo } from "react";
import options from "../settingsmenu/options.ts";
import RenderOption from "./RenderOption.tsx";

interface OptionType {
  name: string;
  incompatible?: string[];
}

interface RenderCategoryProps {
  category: string;
  categoryOptions: OptionType[];
  settings: Record<string, any>;
  onChange: (name: string, value: boolean) => void;
}

const allOptions: OptionType[] = Object.values(options).flat();

const RenderCategory = memo<RenderCategoryProps>(
  ({ category, categoryOptions, settings, onChange }) => (
    <div className={`option__category option__category--${category.toLowerCase()}`}>
      <h2 className="option__category-title">{category}</h2>
      {categoryOptions.map((option) => {
        const disabled = allOptions.some(
          (o) => o.incompatible?.includes(option.name) && settings[o.name],
        );
        return (
          <RenderOption
            disabled={disabled}
            key={option.name}
            onChange={onChange}
            option={option}
            settings={settings}
          />
        );
      })}
    </div>
  ),
);

export default RenderCategory;
