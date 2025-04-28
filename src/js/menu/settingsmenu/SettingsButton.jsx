import PopupModal from "../../components/PopupModal";
import SettingsMenu from "./SettingsMenu";
import Icons from "../../icons/icons";

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
    true
  );
};

export default SettingsButton;
