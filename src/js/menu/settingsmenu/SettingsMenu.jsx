import React from "react";
import CategoryCarousel from "../components/CategoryCarousel";
import RenderOptions from "../components/RenderOptions";
import useSettings from "../hooks/useSettings";
import options from "./options";

const SettingsMenu = React.memo(() => {
  const { settings, handleSettingChange, resetSettings, saveSettings } = useSettings();
  const categories = Object.keys(options);

  return (
    <div className="themeContainer">
      <CategoryCarousel categories={categories} />
      <div className="optionsContainer">
        {Object.entries(options).map(([category, categoryOptions]) => (
          <div className={`themeOptionsCategory ${category.toLowerCase()}Container`}>
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
