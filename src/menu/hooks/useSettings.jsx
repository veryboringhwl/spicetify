import options from "@/menu/settingsmenu/options";
import { getLocalStorage } from "@/utils/LocalStorage";

const useSettings = () => {
  const [settings, setSettings] = Spicetify.React.useState(() => {
    return Object.values(options)
      .flat()
      .reduce((acc, option) => {
        const key = `theme:${option.name}`;
        acc[key] = getLocalStorage(key, option.defaultVal);
        if (option.reveal) {
          option.reveal.forEach((subOption) => {
            const subKey = `theme:${subOption.name}`;
            acc[subKey] = acc[key]
              ? getLocalStorage(subKey, subOption.defaultVal)
              : false;
          });
        }
        return acc;
      }, {});
  });
  const handleSettingChange = Spicetify.React.useCallback((key, value) => {
    setSettings((prev) => {
      const newSettings = { ...prev, [key]: value };
      const optionName = key.replace("theme:", "");
      const categoryOption = Object.values(options)
        .flat()
        .find((opt) => opt.name === optionName);
      if (categoryOption?.reveal) {
        categoryOption.reveal.forEach((subOption) => {
          const subKey = `theme:${subOption.name}`;
          newSettings[subKey] = value ? subOption.defaultVal : false;
        });
      }

      return newSettings;
    });
  }, []);

  return [settings, handleSettingChange, setSettings];
};

export default useSettings;
