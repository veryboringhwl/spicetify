import React from "react";
import ReactDOM from "react-dom";
import initialiseSettings from "./menu/helpers/initialiseOptions";
import SettingsButton from "./menu/settingsmenu/SettingsButton";
import SettingsMenu from "./menu/settingsmenu/SettingsMenu";
import Mousetrap from "./debug/Mousetrap";
import DebugMenu from "./debug/DebugMenu";
import UpdateZoom from "./features/UpdateZoom";
import Console from "./utils/Console";
import Notification from "./components/Notification";
import Icons from "./icons/icons";

import Reload from "./utils/Reload";
import ConfirmDialog from "./components/ConfirmDialog";
import PopupModal from "./components/PopupModal";

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
    Spicetify.Platform.PlatformData.event_sender_context_information
      .client_version_int;

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
          <span>
            Theme only supports Spotify versions greater than 1.2.50.000
          </span>
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
            <Spicetify.ReactComponent.MenuItem onClick={Reload} divider>
              Reload theme
            </Spicetify.ReactComponent.MenuItem>

            <Spicetify.ReactComponent.MenuItem
              onClick={() => {
                ConfirmDialog({
                  titleText: "Confirm Dialog",
                  descriptionText: "Are you <b>sure</b>?",
                  onOutside: () =>
                    Spicetify.showNotification("Clicked outside"),
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

  (function mountComponent() {
    const mountPoint = document.querySelector('[aria-label="Theme Settings"]');
    if (!mountPoint) {
      setTimeout(mountComponent, 300);
      return;
    }

    const container = document.createElement("div");
    container.className = "context-menu-container";
    container.style.position = "absolute";
    container.style.color = "transparent";
    container.style.height = "100%";
    container.style.width = "100%";
    mountPoint.appendChild(container);

    ReactDOM.createRoot(container).render(<ContextMenuButton />);
  })();

  new Spicetify.ContextMenuV2.ItemSubMenu({
    text: "Theme Options",
    leadingIcon: Icons.settings,
    items: [
      new Spicetify.ContextMenuV2.Item({
        children: "Reload theme",
        onClick: () => {
          Spicetify.showNotification("Theme reloading...");
          setTimeout(Reload, 1000);
        },
      }),
      new Spicetify.ContextMenuV2.Item({
        children: "Theme Settings",
        onClick: () => {
          PopupModal({
            title: "Theme Settings",
            content: SettingsMenu,
          });
        },
      }),
      new Spicetify.ContextMenuV2.Item({
        children: "Debug Menu",
        onClick: () => {
          PopupModal({
            title: "Debug Menu",
            content: DebugMenu,
          });
        },
      }),
      new Spicetify.ContextMenuV2.Item({
        children: "Confirm Dialog",
        onClick: () => {
          ConfirmDialog({
            titleText: "Debug Menu",
            descriptionText: "Are you <b>sure</b>?",
            onOutside: () => {
              Spicetify.showNotification("Clicked outside");
            },
            confirmLabel: "Ok",
            allowHTML: true,
          });
        },
      }),
    ],
    shouldAdd: (_, trigger, target) => {
      const targetElement = target || trigger?.target;
      return (
        target?.classList.contains("view-homeShortcutsGrid-shortcut") ||
        targetElement?.getAttribute("aria-label") === "Theme Settings" ||
        target?.classList.contains("main-topBar-buddyFeed") ||
        target?.classList.contains("main-actionButtons") ||
        target?.classList.contains("main-actionButtons > *")
      );
    },
  }).register();

  UpdateZoom();
  Mousetrap();
  SettingsButton();

  initialiseSettings();
  Console.Log("Spicetify theme initialised");
})();
