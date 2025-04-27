import Mousetrap from "./debug/Mousetrap";
import UpdateZoom from "./features/UpdateZoom";
import initialiseSettings from "./menu/helpers/initialiseOptions";
import SettingsButton from "./menu/settingsmenu/SettingsButton";
import Console from "./utils/Console";

async function theme() {
	if (
		!(Spicetify.Platform && Spicetify.Mousetrap && Spicetify.ReactComponent)
	) {
		await new Promise((resolve) => setTimeout(resolve, 100));
		return;
	}
	Console.Log("Spicetify theme initialising");

	Spicetify.Mousetrap.bind(["escape"], () => {
		Spicetify.PopupModal.hide();
	});

	const SpotifyVersion =
		Spicetify.Platform.PlatformData.event_sender_context_information
			.client_version_int;

	if (SpotifyVersion < 124800405) {
		Spicetify.Snackbar.enqueueSnackbar(
			"Theme only supports the latest version of Spotify (1.2.48.405)",
			{
				autoHideDuration: 5000,
				style: {
					backgroundColor: "red",
				},
				variant: "error",
			},
		);
	}

	UpdateZoom();
	Mousetrap();
	SettingsButton();

	initialiseSettings();
	Console.Log("Spicetify theme initialised");
}

export default theme;
