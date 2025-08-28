import { Mousetrap } from "./debug/Mousetrap.tsx";
import { initialiseOptions } from "./menu/helpers/initialiseOptions.ts";
import { SettingsButton } from "./menu/settingsmenu/SettingsButton.tsx";
import { Console } from "./utils/Console.ts";
import { Notification } from "./utils/Notification.tsx";

// TODO:
// Add types of input (number, string)
// Use custom contextmenu icons
// Auto update theme?
// Add more custom features/settings

async function theme() {
  const timeout = 5000;
  const { promise: timeoutPromise, reject: timeoutReject } = Promise.withResolvers<never>();
  const timeoutId = setTimeout(() => timeoutReject("Initialization timeout"), timeout);

  try {
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
      timeoutPromise,
    ]);
  } catch (error) {
    console.log(
      `${error}: Failed to initialize after ${timeout / 1000} seconds. Some features may not work.`,
    );
    Notification({
      autoHideDuration: 10000,
      isWarning: true,
      message: (
        <span>
          Failed to initialize after {timeout / 1000} seconds. Some features may not work.
        </span>
      ),
    });
  } finally {
    clearTimeout(timeoutId);
  }

  Console.Log("Spicetify theme initialising");

  Spicetify.Mousetrap.bind(["escape"], () => {
    Spicetify.PopupModal.hide();
  });

  const compareVersions = (v1: string, v2: string) =>
    v1.localeCompare(v2, undefined, { numeric: true, sensitivity: "base" });

  const MIN_VERSION = "1.2.68";
  const MAX_VERSION = "1.2.69";
  const currentVersion = Spicetify.Platform.version.split(".").slice(0, 3).join(".");
  const isSupportedVersion =
    compareVersions(currentVersion, MIN_VERSION) >= 0 &&
    compareVersions(currentVersion, MAX_VERSION) <= 0;

  if (!isSupportedVersion) {
    Notification({
      autoHideDuration: 5000,
      isWarning: true,
      message: (
        <>
          <span>
            Theme supports Spotify v{MIN_VERSION} to v{MAX_VERSION}. Your version: {currentVersion}{" "}
            may not work.
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
