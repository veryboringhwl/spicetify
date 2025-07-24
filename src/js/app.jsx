import Mousetrap from "./debug/Mousetrap";
import initialiseOptions from "./menu/helpers/initialiseOptions";
import SettingsButton from "./menu/settingsmenu/SettingsButton";
import Console from "./utils/Console";
import Notification from "./utils/Notification";

// run npx react-devtools in a terminal, and copy-paste the contents of http://localhost:8097 into xpui.js
// or add react devtools as chrome extension

// TODO:
// add save and reset icon to button
// Make menu look nicer. It looks like shit rn
// Add types of input (number, string)
// Use esbuild for css so i can use biome
// Redo basically all css as its very messy
// Redo all classnames
// Use absolute path instead of relative for imports (esbuild-plugin-alias)
//.body-drag-top make it bigger
// Use custom contextmenu icons
// Auto update theme?
// EVENTUALLY SWITCH TO TYPESCRIPT

async function theme() {
  const timeout = 5000;
  await Promise.race([
    (async () => {
      await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));
      while (
        !(
          Spicetify.Snackbar.enqueueCustomSnackbar &&
          Spicetify.Snackbar.enqueueSnackbar &&
          Spicetify.Platform.ProductStateAPI.productStateApi
        )
      ) {
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
}

theme();
