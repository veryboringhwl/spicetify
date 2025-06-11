import React, { memo, useState, useCallback, useMemo } from "react";
import CategoryCarousel from "../components/CategoryCarousel";
import RenderCategory from "../components/RenderCategory";
import useSettings from "../hooks/useSettings";
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
      <div className="settings-menu__buttons-container">
        <button
          className="settings-menu__button settings-menu__button--reset"
          onClick={resetSettings}
        >
          Reset
        </button>
        <button
          className="settings-menu__button settings-menu__button--save"
          onClick={saveSettings}
        >
          Save
        </button>
      </div>
    </div>
  );
});

export default SettingsMenu;
