import ConfirmDialog from "../../components/ConfirmDialog";
import Console from "../../utils/Console";
import LocalStorage from "../../utils/LocalStorage";
import { albumBannerOptions } from "../modalmenu/AlbumBannerModal";
import { windowsControlOptions } from "../modalmenu/WindowsControlModal";
import runModalSettings from "../modalmenu/runModalSettings";
import options from "../settingsmenu/options";
import applyOptions from "./applyOptions";

const resetOptions = (setSettings) => {
  ConfirmDialog({
    titleText: "Are you sure?",
    descriptionText: "This will reset all settings to default!",
    confirmText: "Reset",
    onOpen: () => {
      document.querySelector(".GenericModal__overlay").style.zIndex = 0;
    },
    onConfirm: () => {
      try {
        Console.Log("Resetting settings");
        const allOptions = [
          ...Object.values(options).flat(),
          ...albumBannerOptions,
          ...windowsControlOptions,
        ];
        const defaultSettings = {};

        allOptions.forEach((option) => {
          const mainKey = `theme:${option.name}`;
          defaultSettings[mainKey] = option.defaultVal;
          if (option.reveal) {
            option.reveal.forEach((subOption) => {
              defaultSettings[`theme:${subOption.name}`] = option.defaultVal
                ? subOption.defaultVal
                : false;
            });
          }
        });

        Object.entries(defaultSettings).forEach(([key, value]) => {
          LocalStorage.set(key, value);
        });
        setSettings(defaultSettings);
        applyOptions(defaultSettings, Object.keys(defaultSettings));
        runModalSettings();
      } catch (error) {
        Console.Error("Failed to reset settings:", error);
      }
    },
  });
};

export default resetOptions;
