import LocalStorage from "../../utils/LocalStorage";
import { albumBannerOptions } from "./AlbumBannerModal";
import { windowsControlOptions } from "./WindowsControlModal";

const runModalSettings = () => {
  const applyModalSetting = (options, styleProperty) => {
    options.forEach((option) => {
      const value = LocalStorage.get(`theme:${option.name}`, option.defaultVal);
      if (styleProperty) {
        document.documentElement.style.setProperty(
          styleProperty(option.name),
          value
        );
      } else {
        document.body.classList.toggle(option.name, value);
      }
    });
  };

  applyModalSetting(albumBannerOptions);
  applyModalSetting(
    windowsControlOptions,
    (name) =>
      `--windowcontrol-${name.replace("WindowsControl", "").toLowerCase()}`
  );
};

export default runModalSettings;
