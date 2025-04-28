import PopupModal from "../../components/PopupModal";
import Icons from "../../icons/icons";
import SettingsMenu from "./SettingsMenu";

const SettingsButton = () => {
  new Spicetify.Topbar.Button(
    "Theme Settings",
    Icons.settings,
    () => {
      PopupModal({
        title: "Theme Settings",
        content: SettingsMenu,
      });
    },
    false,
    true,
  );
};

export default SettingsButton;
