import React from "react";
import ReactDOM from "react-dom";
import Notification from "./components/Notification";
import DebugMenu from "./debug/DebugMenu";
import Mousetrap from "./debug/Mousetrap";
import UpdateZoom from "./features/UpdateZoom";
import Icons from "./icons/icons";
import initialiseOptions from "./menu/helpers/initialiseOptions";
import SettingsButton from "./menu/settingsmenu/SettingsButton";
import SettingsMenu from "./menu/settingsmenu/SettingsMenu";
import Console from "./utils/Console";
import waitForElements from "./utils/waitForElements";

import ConfirmDialog from "./components/ConfirmDialog";
import PopupModal from "./components/PopupModal";
import Reload from "./utils/Reload";

(async function main() {
  while (
    !(
      Spicetify.Platform &&
      Spicetify.Mousetrap &&
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

  // const icons = {
  //   warning:
  //     "M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A1 1 0 0 0 3 21h18a1 1 0 0 0 .884-1.5zM13 18h-2v-2h2zm-2-4V9h2l0 5z",
  //   error:
  //     "M12 2C6.5 2 2 6.5 2 12c0 5.5 4.5 10 10 10s10-4.5 10-10C22 6.5 17.5 2 12 2zM17 15.5l-1.5 1.5L12 13.5l-3.5 3.5-1.5-1.5 3.5-3.5L7 8.5l1.5-1.5 3.5 3.5 3.5-3.5 1.5 1.5L13.5 12 17 15.5z",
  // };

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

  //why divider not work
  const ContextMenuButton = Spicetify.React.memo(() => (
    <Spicetify.ReactComponent.ContextMenu
      offset={[0, 12]}
      trigger="right-click"
      placement="top"
      menu={
        <Spicetify.ReactComponent.RemoteConfigProvider
          configuration={Spicetify.Platform.RemoteConfiguration}
        >
          <Spicetify.ReactComponent.Menu>
            <Spicetify.ReactComponent.MenuItem
              onClick={() => {
                Reload();
              }}
              divider={true}
            >
              Reload theme
            </Spicetify.ReactComponent.MenuItem>
            <Spicetify.ReactComponent.MenuItem
              onClick={() => {
                ConfirmDialog({
                  titleText: "Confirm Dialog",
                  descriptionText: "Are you <b>sure</b>?",
                  onOutside: () => Spicetify.showNotification("Clicked outside"),
                  confirmLabel: "Ok",
                  allowHTML: true,
                });
              }}
              divider={true}
            >
              Confirm Dialog
            </Spicetify.ReactComponent.MenuItem>
            <Spicetify.ReactComponent.MenuItem
              onClick={() => {
                PopupModal({
                  title: "Theme Settings",
                  content: SettingsMenu,
                });
              }}
              divider={true}
            >
              Theme Settings
            </Spicetify.ReactComponent.MenuItem>
            <Spicetify.ReactComponent.MenuItem
              onClick={() => {
                PopupModal({
                  title: "Debug Menu",
                  content: DebugMenu,
                });
              }}
              divider={true}
            >
              Debug Menu
            </Spicetify.ReactComponent.MenuItem>
          </Spicetify.ReactComponent.Menu>
        </Spicetify.ReactComponent.RemoteConfigProvider>
      }
    >
      <button
        style={{
          color: "transparent",
          width: "100%",
          height: "100%",
          background: "unset",
          border: "none",
        }}
      />
    </Spicetify.ReactComponent.ContextMenu>
  ));

  (async function mountComponent() {
    const mountPoint = await waitForElements('[aria-label="Theme Settings"]');
    const container = document.createElement("div");
    container.className = "context-menu-container";
    container.style.position = "absolute";
    container.style.color = "transparent";
    container.style.height = "100%";
    container.style.width = "100%";
    mountPoint.appendChild(container);

    ReactDOM.createRoot(container).render(<ContextMenuButton />);
  })();

  UpdateZoom();
  Mousetrap();
  SettingsButton();

  initialiseOptions();

  Console.Log("Spicetify theme initialised");
})();
