import initialiseSettings from "@/menu/helpers/initialiseOptions";
import TopbarButton from "@/menu/settingsmenu/TopbarButton";
import TopbarButton from "@/debug/TopbarButton";
import UpdateZoom from "@/features/UpdateZoom";
import ConsoleLog from "@/utils/ConsoleLog";

async function theme() {
	if (!(Spicetify.Platform && Spicetify.React && Spicetify.ReactDOM && Spicetify.Mousetrap)) {
		setTimeout(theme, 100);
		return;
	}

	UpdateZoom();

	TopbarButton();

	/*
	MARK: SECRET MENU
	*/

	/*
	MARK: BUG FIXES
	*/

	Spicetify.Mousetrap.bind(['escape'], () => {
		Spicetify.PopupModal.hide();
	});

	initialiseSettings();
	ConsoleLog("Spicetify theme initialised");
};

export default theme;
