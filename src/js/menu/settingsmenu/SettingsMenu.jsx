import React from "react";
import options from "./options";
import RenderOptions from "./RenderOptions";
import useSettings from "../hooks/useSettings";
import resetOptions from "../helpers/resetOptions";
import saveOptions from "../helpers/saveOptions";
import CategoryCarousel from "../components/CategoryCarousel";
import Section from "../components/Section";

const SettingsMenu = React.memo(() => {
  const [settings, handleSettingChange, setSettings] = useSettings();
  const categories = Object.keys(options);

  return (
    <div className="themeContainer">
      <CategoryCarousel categories={categories} />
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
      <div className="buttonContainer">
        <button
          className="resetButton"
          onClick={() => resetOptions(setSettings)}
        >
          Reset
        </button>
        <button className="saveButton" onClick={() => saveOptions(settings)}>
          Save
        </button>
      </div>
    </div>
  );
});

export default SettingsMenu;
