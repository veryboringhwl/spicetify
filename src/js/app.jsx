import Mousetrap from "./debug/Mousetrap";
import initialiseOptions from "./menu/helpers/initialiseOptions";
import SettingsButton from "./menu/settingsmenu/SettingsButton";
import Console from "./utils/Console";
import Notification from "./utils/Notification";

(async function theme() {
  const timeout = 5000;
  await Promise.race([
    (async () => {
      await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));
      while (!(Spicetify.Snackbar.enqueueCustomSnackbar && Spicetify.Snackbar.enqueueSnackbar)) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    })(),
    new Promise((_, reject) => setTimeout(() => reject("Initialization timeout"), timeout)),
  ]).catch((error) => {
    console.log(
      `${error}: Failed to initialize after ${timeout / 1000} seconds. Some features may not work.`,
    );
    Notification({
      autoHideDuration: 10000,
      isWarning: true,
      message: (
        <span>
          {error}: Failed to initialize after {timeout / 1000} seconds. Some features may not work.
        </span>
      ),
    });
  });

  Console.Log("Spicetify theme initialising");

  Spicetify.Mousetrap.bind(["escape"], () => {
    Spicetify.PopupModal.hide();
  });

  const MIN_PATCH_VERSION = 62;
  const MAX_PATCH_VERSION = 64;
  const [major, minor, patch] = Spicetify.Platform.version.split(".").map(Number);
  const isSupportedVersion = patch >= MIN_PATCH_VERSION && patch <= MAX_PATCH_VERSION;

  if (!isSupportedVersion) {
    Notification({
      autoHideDuration: 5000,
      isWarning: true,
      message: (
        <>
          <span>
            Theme supports Spotify v{major}.{minor}.{MIN_PATCH_VERSION} to v{major}.{minor}.
            {MAX_PATCH_VERSION}. Your version: {major}.{minor}.{patch}
          </span>
        </>
      ),
    });
  }

  Mousetrap();
  SettingsButton();
  initialiseOptions();

  Console.Log("Spicetify theme initialised");
})();
