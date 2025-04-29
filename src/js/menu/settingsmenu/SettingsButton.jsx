import React from "react";
import ReactDOM from "react-dom";
import ConfirmDialog from "../../components/ConfirmDialog";
import PopupModal from "../../components/PopupModal";
import DebugMenu from "../../debug/DebugMenu";
import Icons from "../../icons/icons";
import Window from "../../utils/Window";
import SettingsMenu from "./SettingsMenu";

const SettingsButton = () => {
  const SettingsButton = new Spicetify.Topbar.Button(
    "Theme Settings",
    Icons.settings,
    () => {
      PopupModal({
        title: "Theme Settings",
        content: SettingsMenu,
      });
    },
    false,
    true,
  );

  SettingsButton.element.oncontextmenu = (event) => {
    event.preventDefault();
    const existingMenu = document.getElementById("context-menu");
    if (existingMenu) {
      existingMenu.remove();
    }

    const menuContainer = document.createElement("div");
    menuContainer.id = "context-menu";
    menuContainer.style.position = "absolute";
    menuContainer.style.top = `${event.clientY}px`;
    menuContainer.style.left = `${event.clientX}px`;
    menuContainer.style.zIndex = "1000";
    document.body.appendChild(menuContainer);

    const removeContextMenu = (event) => {
      if (!menuContainer.contains(event.target) && !SettingsButton.element.contains(event.target)) {
        menuContainer.remove();
        document.removeEventListener("mousedown", removeContextMenu);
      }
    };

    ReactDOM.createRoot(menuContainer).render(
      <Spicetify.ReactComponent.Menu>
        <Spicetify.ReactComponent.MenuItem
          onClick={() => {
            Window.Reload();
            removeContextMenu(new MouseEvent("mousedown"));
          }}
          divider={true}
        >
          Reload theme
        </Spicetify.ReactComponent.MenuItem>
        <Spicetify.ReactComponent.MenuItem
          onClick={() => {
            Window.Restart();
            removeContextMenu(new MouseEvent("mousedown"));
          }}
          divider={true}
        >
          Restart Spotify
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
            removeContextMenu(new MouseEvent("mousedown"));
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
            removeContextMenu(new MouseEvent("mousedown"));
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
            removeContextMenu(new MouseEvent("mousedown"));
          }}
          divider={true}
        >
          Debug Menu
        </Spicetify.ReactComponent.MenuItem>
      </Spicetify.ReactComponent.Menu>,
    );

    document.addEventListener("mousedown", removeContextMenu);
  };
};

export default SettingsButton;
