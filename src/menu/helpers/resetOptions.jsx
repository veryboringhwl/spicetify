import options from "@/menu/settingsmenu/options";
import ConsoleLog from "@/utils/ConsoleLog";
import ConfirmDialog from "@/menu/components/ConfirmDialog";
import applyOptions from "@/menu/helpers/applyOptions";
import { setLocalStorage } from "@/utils/LocalStorage";


const resetOptions = (setSettings) => {
  const settings = document.querySelector(".GenericModal__overlay");
  Spicetify.ReactDOM.render(
    Spicetify.React.createElement(
      Spicetify.ReactComponent.RemoteConfigProvider,
      { configuration: Spicetify.Platform.RemoteConfiguration },
      Spicetify.React.createElement(ConfirmDialog, {
        titleText: "Are you sure?",
        descriptionText: "This will reset all settings to default!",
        cancelText: "Cancel",
        confirmText: "Reset",
        onOpen: () => {
          settings.style.zIndex = 0;
        },
        onClose: () => {
          settings.style.zIndex = 10;
        },
        onConfirm: () => {
          ConsoleLog("Resetting settings");
          const defaultSettings = Object.fromEntries(
            Object.values(options)
              .flat()
              .flatMap(({ name, defaultVal, reveal }) => [
                [`theme:${name}`, defaultVal],
                ...(reveal?.map((option) => [
                  `theme:${option.name}`,
                  defaultVal ? option.defaultVal : false,
                ]) ?? []),
              ])
          );
          setSettings(defaultSettings);
          applyOptions(defaultSettings);
          Object.entries(defaultSettings).forEach(([key, value]) => {
            setLocalStorage(key, value);
          });
        },
      })
    ),
    document.createElement("div")
  );
};

export default resetOptions;
