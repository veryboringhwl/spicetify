import { type FC, memo } from "react";
import type { Option, RenderCategoryProps } from "../../types/temp.d.ts";
import { options } from "../settingsmenu/options.ts";
import { RenderOption } from "./RenderOption.tsx";

const allOptions: Option[] = Object.values(options).flat();

export const RenderCategory: FC<RenderCategoryProps> = memo(
  ({ category, categoryOptions, settings, onChange }) => (
    <div className={`option__category option__category--${category.toLowerCase()}`}>
      <h2 className="option__category-title">{category}</h2>
      {categoryOptions.map((option) => {
        const isDisabled = allOptions.some(
          (o) => o.incompatible?.includes(option.name) && settings[o.name],
        );
        return (
          <RenderOption
            disabled={isDisabled}
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
