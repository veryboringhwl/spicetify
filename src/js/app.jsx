import React from "react";
import Mousetrap from "./debug/Mousetrap";
import UpdateZoom from "./features/UpdateZoom";
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
      Spicetify.Snackbar.enqueueSnackbar &&
      Spicetify.Snackbar.enqueueCustomSnackbar
    )
  ) {
    if (Date.now() > timeout) {
      Console.Error("Error: Required components not found.");
      Notification({
        autoHideDuration: 5000,
        backgroundColor: "#ff9800",
        message: (
          <>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              dangerouslySetInnerHTML={{ __html: Icons.warning }}
            />
            <span>Theme could not load. Please refresh the page and try again.</span>
          </>
        ),
      });
      break;
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  Console.Log("Spicetify theme initialising");

  Spicetify.Mousetrap.bind(["escape"], () => {
    Spicetify.PopupModal.hide();
  });

  Spicetify.Mousetrap.bind("f8", () => {
    debugger;
  });

  const SpotifyVersion =
    Spicetify.Platform.PlatformData.event_sender_context_information.client_version_int;

  if (SpotifyVersion < 125500000) {
    Notification({
      autoHideDuration: 5000,
      backgroundColor: "#ff9800",
      message: (
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            dangerouslySetInnerHTML={{ __html: Icons.warning }}
          />
          <span>Theme only supports Spotify versions greater than 1.2.50.000</span>
        </>
      ),
    });
  }

  UpdateZoom();
  Mousetrap();
  SettingsButton();

  initialiseOptions();

  Console.Log("Spicetify theme initialised");
})();
