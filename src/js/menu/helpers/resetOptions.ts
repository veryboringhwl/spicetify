import ConfirmDialog from "../../components/ConfirmDialog.tsx";
import Console from "../../utils/Console.ts";
import LocalStorage from "../../utils/LocalStorage.ts";
import { albumBannerOptions } from "../modalmenu/AlbumBannerModal.tsx";
import { windowsControlOptions } from "../modalmenu/WindowsControlModal.tsx";
import options from "../settingsmenu/options.ts";
import applyOptions from "./applyOptions.ts";

interface Option {
  name: string;
  defaultVal: any;
  reveal?: {
    name: string;
    defaultVal?: any;
  }[];
}

type SetSettingsType = (settings: Record<string, any>) => void;

const resetOptions = (setSettings: SetSettingsType) => {
  ConfirmDialog({
    titleText: "Are you sure?",
    descriptionText: "This will reset all settings to default!",
    confirmText: "Reset",
    onConfirm: () => {
      try {
        Console.Log("Resetting settings");
        const allOptions: Option[] = [
          ...Object.values(options).flat(),
          ...albumBannerOptions,
          ...windowsControlOptions,
        ];
        const defaultSettings: Record<string, any> = {};

        allOptions.forEach((option: Option) => {
          const mainKey = option.name;
          defaultSettings[mainKey] = option.defaultVal;
          if (option.reveal) {
            option.reveal.forEach((subOption) => {
              defaultSettings[subOption.name] =
                subOption.defaultVal !== undefined ? subOption.defaultVal : false;
            });
          }
        });

        Object.entries(defaultSettings).forEach(([key, value]) => {
          LocalStorage.set(key, value);
        });
        setSettings(defaultSettings);
        applyOptions({ settings: defaultSettings, changedOptions: Object.keys(defaultSettings) });
      } catch (error) {
        Console.Error("Failed to reset settings:", error);
      }
    },
  });
};

export default resetOptions;
