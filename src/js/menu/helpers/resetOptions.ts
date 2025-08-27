import type { Dispatch, SetStateAction } from "react";
import { ConfirmDialog } from "../../components/ConfirmDialog.tsx";
import type { Option, Settings } from "../../types/temp.d.ts";
import { Console } from "../../utils/Console.ts";
import { LocalStorage } from "../../utils/LocalStorage.ts";
import { albumBannerOptions } from "../modalmenu/AlbumBannerModal.tsx";
import { windowsControlOptions } from "../modalmenu/WindowsControlModal.tsx";
import { options } from "../settingsmenu/options.ts";
import { applyOptions } from "./applyOptions.ts";

export const resetOptions = (setSettings: Dispatch<SetStateAction<Settings>>): void => {
  ConfirmDialog({
    titleText: "Reset Settings?",
    descriptionText: "This will restore all theme settings to their default values.",
    confirmText: "Reset",
    onConfirm: () => {
      try {
        Console.Log("Resetting settings to default");
        const allOptions: Option[] = [
          ...Object.values(options).flat(),
          ...albumBannerOptions,
          ...windowsControlOptions,
        ];

        const defaultSettings: Settings = {};
        allOptions.forEach((option) => {
          defaultSettings[option.name] = option.defaultVal;
          if (option.type === "toggle" && option.reveal) {
            option.reveal.forEach((subOption) => {
              defaultSettings[subOption.name] = subOption.defaultVal;
            });
          }
        });

        // Update localStorage and apply changes
        Object.entries(defaultSettings).forEach(([key, value]) => {
          LocalStorage.set(key, value);
        });

        setSettings(defaultSettings);
        applyOptions({ settings: defaultSettings, changedOptions: Object.keys(defaultSettings) });

        Spicetify.showNotification("Settings have been reset.");
      } catch (error) {
        Console.Error("Failed to reset settings:", error);
        Spicetify.showNotification("Failed to reset settings.", true);
      }
    },
  });
};
