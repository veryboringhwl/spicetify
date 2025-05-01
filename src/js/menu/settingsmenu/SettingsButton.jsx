import React from "react";
import ReactDOM from "react-dom";
import ConfirmDialog from "../../components/ConfirmDialog";
import PopupModal from "../../components/PopupModal";
import DebugMenu from "../../debug/DebugMenu";
import Icons from "../../icons/icons";
import Window from "../../utils/Window";
import SettingsMenu from "./SettingsMenu";

const SettingsButton = () => {
  let menuContainer = null;
  let SettingsButton = null;

  const removeContextMenu = () => {
    if (menuContainer) {
      menuContainer.remove();
      menuContainer = null;
    }
    document.removeEventListener("mousedown", handleClickOutside);
  };

  const handleClickOutside = (event) => {
    if (menuContainer && SettingsButton) {
      const clickedInside =
        menuContainer.contains(event.target) || SettingsButton.element.contains(event.target);
      if (!clickedInside) {
        removeContextMenu();
      }
    }
  };

  const createMenu = () => {
    removeContextMenu();

    menuContainer = document.createElement("div");
    menuContainer.id = "context-menu";
    menuContainer.style.position = "absolute";
    menuContainer.style.zIndex = "1000";
    document.body.appendChild(menuContainer);

    document.addEventListener("mousedown", handleClickOutside);
    return menuContainer;
  };

  const showMenu = (event) => {
    event.preventDefault();
    const bound = SettingsButton.element.getBoundingClientRect();

    const menu = createMenu();
    menu.style.top = `${bound.bottom}px`;
    menu.style.left = `${bound.left}px`;

    ReactDOM.createRoot(menu).render(
      <Spicetify.ReactComponent.Menu>
        <Spicetify.ReactComponent.MenuItem
          onClick={() => {
            Window.Reload();
            menu.remove();
          }}
          leadingIcon={
            <svg
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="currentColor"
              dangerouslySetInnerHTML={{ __html: Spicetify.SVGIcons.repeat }}
            />
          }
        >
          Reload theme
        </Spicetify.ReactComponent.MenuItem>
        <Spicetify.ReactComponent.MenuItem
          onClick={() => {
            Window.Restart();
            menu.remove();
          }}
          leadingIcon={
            <svg
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="currentColor"
              dangerouslySetInnerHTML={{ __html: Spicetify.SVGIcons.locked }}
            />
          }
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
            menu.remove();
          }}
          leadingIcon={
            <svg
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="currentColor"
              dangerouslySetInnerHTML={{ __html: Spicetify.SVGIcons.check }}
            />
          }
          divider={"after"}
        >
          Confirm Dialog
        </Spicetify.ReactComponent.MenuItem>
        <Spicetify.ReactComponent.MenuItem
          onClick={() => {
            PopupModal({
              title: "Theme Settings",
              content: SettingsMenu,
            });
            menu.remove();
          }}
          leadingIcon={
            <svg
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="currentColor"
              dangerouslySetInnerHTML={{
                __html: Spicetify.SVGIcons.subtitles,
              }}
            />
          }
        >
          Theme Settings
        </Spicetify.ReactComponent.MenuItem>
        <Spicetify.ReactComponent.MenuItem
          leadingIcon={
            <svg
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="currentColor"
              dangerouslySetInnerHTML={{ __html: Spicetify.SVGIcons.menu }}
            />
          }
          onClick={() => {
            PopupModal({
              title: "Debug Menu",
              content: DebugMenu,
            });
            menu.remove();
          }}
        >
          Debug Menu
        </Spicetify.ReactComponent.MenuItem>
      </Spicetify.ReactComponent.Menu>,
    );
  };

  SettingsButton = new Spicetify.Topbar.Button(
    "Theme Settings",
    `<svg viewBox="0 0 16 16" width="16px" height="16px" fill="currentColor">${Icons.settings}</svg>`,
    () => {
      PopupModal({
        title: "Theme Settings",
        content: SettingsMenu,
      });
    },
    false,
    true,
  );

  SettingsButton.element.oncontextmenu = showMenu;

  return SettingsButton;
};

export default SettingsButton;
