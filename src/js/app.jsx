import React from "react";
import Mousetrap from "./debug/Mousetrap";
import UpdateZoom from "./features/UpdateZoom";
import Icons from "./icons/icons";
import initialiseOptions from "./menu/helpers/initialiseOptions";
import SettingsButton from "./menu/settingsmenu/SettingsButton";
import Console from "./utils/Console";
import Notification from "./utils/Notification";

(async function main() {
  while (
    !(
      Spicetify.Platform &&
      Spicetify.Mousetrap &&
      Spicetify.CosmosAsync &&
      Spicetify.Snackbar.enqueueCustomSnackbar &&
      Spicetify.ReactComponent
    )
  ) {
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

  if (SpotifyVersion < 125000000) {
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
