import React from "react";
import options from "@/menu/settingsmenu/options";

import useSettings from "@/menu/hooks/useSettings";

import resetOptions from "@/menu/helpers/resetOptions";
import saveOptions from "@/menu/helpers/saveOptions";

import CategoryCarousel from "@/menu/components/CategoryCarousel";
import Section from "@/menu/components/Section";
import RevealableOption from "@/menu/settingsmenu/RevealableOption";

const ThemeSettings = React.memo(() => {
  const [settings, handleSettingChange, setSettings] = useSettings();
  const categories = Object.keys(options);

  return (
    <div className="themeContainer">
      <CategoryCarousel categories={categories} />
      {Object.entries(options).map(([category, categoryOptions]) => (
        <Section key={category} name={category}>
          {categoryOptions.map((option) => (
            <RevealableOption
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
        <button
          className="saveButton"
          onClick={() => saveOptions(settings)}
        >
          Save
        </button>
      </div>
    </div>
  );
});

export default ThemeSettings;
