import React, { memo, useState, useCallback, useMemo } from "react";
import CategoryCarousel from "../components/CategoryCarousel";
import RenderOptions from "../components/RenderOptions";
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
    <div className="themeContainer">
      <CategoryCarousel
        categories={allCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <div className="optionsContainer">
        {filteredOptions.map(([category, categoryOptions]) => (
          <div key={category} className={`themeOptionsCategory ${category.toLowerCase()}Container`}>
            <h2 className="categoryTitle">{category}</h2>
            {categoryOptions.map((option) => (
              <RenderOptions
                key={option.name}
                option={option}
                settings={settings}
                onChange={handleSettingChange}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="buttonContainer">
        <button className="resetButton" onClick={resetSettings}>
          Reset
        </button>
        <button className="saveButton" onClick={saveSettings}>
          Save
        </button>
      </div>
    </div>
  );
});

export default SettingsMenu;
