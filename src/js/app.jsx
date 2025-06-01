import React from "react";
import Mousetrap from "./debug/Mousetrap";
import Icons from "./icons/icons";
import initialiseOptions from "./menu/helpers/initialiseOptions";
import SettingsButton from "./menu/settingsmenu/SettingsButton";
import Console from "./utils/Console";
import Notification from "./utils/Notification";

(async function main() {
  const timeout = Date.now() + 5000;
  while (
    !(
      Spicetify.Config &&
      Spicetify.CosmosAsync &&
      Spicetify.Mousetrap &&
      Spicetify.Platform &&
      Spicetify.ReactComponent &&
      Spicetify.Snackbar.enqueueCustomSnackbar &&
      Spicetify.Snackbar.enqueueSnackbar
    )
  ) {
    if (Date.now() > timeout) {
      Console.Error("Error: Required components not found.");
      Notification({
        autoHideDuration: 5000,
        backgroundColor: "#ff9800",
        message: (
          <>
            <Icons.React.warning size={24} />
            <span>Theme could not load. Please refresh the page and try again.</span>
          </>
        ),
      });
      break;
    }

    await new Promise((resolve) => setTimeout(resolve, 10));
  }

  Console.Log("Spicetify theme initialising");

  Spicetify.Mousetrap.bind(["escape"], () => {
    Spicetify.PopupModal.hide();
  });

  Spicetify.Mousetrap.bind("f8", () => {
    debugger;
  });

  const version = Spicetify.Platform.version.split(".").map((e) => Number.parseInt(e));
  if (version[2] < 55) {
    Notification({
      autoHideDuration: 5000,
      backgroundColor: "#ff9800",
      color: "#fff",
      message: (
        <>
          <Icons.React.warning size={24} />
          <span>Theme only supports Spotify versions greater than 1.2.55.000</span>
        </>
      ),
    });
  }

  Mousetrap();
  SettingsButton();

  initialiseOptions();

  Console.Log("Spicetify theme initialised");
})();
