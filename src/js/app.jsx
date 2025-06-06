import React from "react";
import Mousetrap from "./debug/Mousetrap";
import Icons from "./icons/icons";
import initialiseOptions from "./menu/helpers/initialiseOptions";
import SettingsButton from "./menu/settingsmenu/SettingsButton";
import Console from "./utils/Console";
import Notification from "./utils/Notification";

(async function theme() {
  try {
    const startTime = Date.now();
    while (
      !(
        Spicetify.Config &&
        Spicetify.React &&
        Spicetify.ReactDOM &&
        Spicetify.CosmosAsync &&
        Spicetify.Mousetrap &&
        Spicetify.Platform &&
        Spicetify.ReactComponent &&
        Spicetify.Snackbar.enqueueCustomSnackbar &&
        Spicetify.Snackbar.enqueueSnackbar
      )
    ) {
      if (Date.now() - startTime > 2500) {
        throw new Error("Required Spicetify components not found within timeout.");
      }
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
  } catch (error) {
    Console.Error(error.message);
    Notification({
      autoHideDuration: 10000,
      backgroundColor: "#ff9800",
      color: "#fff",
      message: (
        <>
          <Icons.React.warning size={24} />
          <span>Required Spicetify components not found, some features may not work.</span>
          <span>Please refresh the page and try again.</span>
        </>
      ),
    });
  }

  Console.Log("Spicetify theme initialising");

  Spicetify.Mousetrap.bind(["escape"], () => {
    Spicetify.PopupModal.hide();
  });

  Spicetify.Mousetrap.bind("f8", () => {
    debugger;
  });

  const MIN_PATCH_VERSION = 50;
  const MAX_PATCH_VERSION = 61;
  const [major, minor, patch] = Spicetify.Platform.version.split(".").map(Number);
  const isSupportedVersion = patch >= MIN_PATCH_VERSION && patch <= MAX_PATCH_VERSION;

  if (!isSupportedVersion) {
    Notification({
      autoHideDuration: 5000,
      backgroundColor: "#ff9800",
      color: "#fff",
      message: (
        <>
          <Icons.React.warning size={24} />
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
