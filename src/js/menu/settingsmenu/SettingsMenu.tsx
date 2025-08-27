import { type FC, memo, useCallback, useMemo, useState } from "react";
import type { OptionsCategories } from "../../types/temp.d.ts";
import { ButtonContainer } from "../components/ButtonContainer.tsx";
import { CategoryCarousel } from "../components/CategoryCarousel.tsx";
import { RenderCategory } from "../components/RenderCategory.tsx";
import { useSettings } from "../hooks/useSettings.ts";
import { options } from "./options.ts";
import { Preview } from "./Preview.tsx";

export const SettingsMenu: FC = memo(() => {
  const { settings, handleSettingChange, resetSettings, saveSettings } = useSettings();
  const typedOptions = options as OptionsCategories;

  const allCategories = ["All", ...Object.keys(typedOptions)];
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleSelectCategory = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const filteredOptions = useMemo(() => {
    return selectedCategory === "All"
      ? Object.entries(typedOptions)
      : Object.entries(typedOptions).filter(([category]) => category === selectedCategory);
  }, [selectedCategory, typedOptions]);

  return (
    <div className="settings-menu">
      <div className="settings-menu__carousel">
        <CategoryCarousel
          categories={allCategories}
          onSelectCategory={handleSelectCategory}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className="settings-menu__options">
        {filteredOptions.map(([category, categoryOptions]) => (
          <RenderCategory
            category={category}
            categoryOptions={categoryOptions}
            key={category}
            onChange={handleSettingChange}
            settings={settings}
          />
        ))}
      </div>
      <div className="settings-menu__preview">
        <Preview settings={settings} />
      </div>
      <div className="settings-menu__buttons">
        <ButtonContainer resetSettings={resetSettings} saveSettings={saveSettings} />
      </div>
    </div>
  );
});
