import PopupModal from "../../components/PopupModal";
import Icons from "../../icons/icons";
import Reload from "../../utils/Reload";
import SettingsMenu from "./SettingsMenu";

const SettingsButton = () => {
	const settingsButton = new Spicetify.Topbar.Button(
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
