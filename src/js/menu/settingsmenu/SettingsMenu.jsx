import React from "react";
import CategoryCarousel from "../components/CategoryCarousel";
import Section from "../components/Section";
import applyOptions from "../helpers/applyOptions";
import resetOptions from "../helpers/resetOptions";
import saveOptions from "../helpers/saveOptions";
import useSettings from "../hooks/useSettings";
import RenderOptions from "./RenderOptions";
import options from "./options";

const SettingsMenu = React.memo(() => {
  const [settings, handleSettingChange, setSettings] = useSettings();
  const categories = Object.keys(options);

  return (
    <div className="themeContainer">
      <CategoryCarousel categories={categories} />
      <div className="optionsContainer">
        {Object.entries(options).map(([category, categoryOptions]) => (
          <Section key={category} name={category}>
            {categoryOptions.map((option) => (
              <RenderOptions
                key={option.name}
                option={option}
                settings={settings}
                onChange={handleSettingChange}
              />
            ))}
          </Section>
        ))}
      </div>
      <div className="buttonContainer">
        <button className="resetButton" onClick={() => resetOptions(setSettings)}>
          Reset
        </button>
        <button
          className="saveButton"
          onClick={() => {
            const updatedSettings = saveOptions(settings);
            setSettings(updatedSettings);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
});

export default SettingsMenu;
