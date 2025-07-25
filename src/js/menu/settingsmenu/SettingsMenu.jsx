import { memo, useCallback, useMemo, useState } from "react";
import ButtonContainer from "../components/ButtonContainer";
import CategoryCarousel from "../components/CategoryCarousel";
import RenderCategory from "../components/RenderCategory";
import useSettings from "../hooks/useSettings";
import Preview from "./Preview";
import options from "./options";

const SettingsMenu = memo(() => {
  const { settings, handleSettingChange, resetSettings, saveSettings } = useSettings();
  const allCategories = ["All", ...Object.keys(options)];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSelectCategory = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const filteredOptions = useMemo(() => {
    if (selectedCategory === "All") {
      return Object.entries(options);
    }
    return Object.entries(options).filter(([category]) => category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="settings-menu">
      <div className="settings-menu__carousel">
        <CategoryCarousel
          categories={allCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
      </div>
      <div className="settings-menu__options">
        {filteredOptions.map(([category, categoryOptions]) => (
          <RenderCategory
            key={category}
            category={category}
            categoryOptions={categoryOptions}
            settings={settings}
            onChange={handleSettingChange}
          />
        ))}
      </div>
      <div className="settings-menu__preview">
        <Preview />
      </div>
      <div className="settings-menu__buttons">
        <ButtonContainer resetSettings={resetSettings} saveSettings={saveSettings} />
      </div>
    </div>
  );
});

export default SettingsMenu;
