import { memo } from "react";
import { createRoot } from "react-dom/client";
import { TestMenu } from "../debug/TestMenu.tsx";
import { SettingsMenu } from "../menu/settingsmenu/SettingsMenu.tsx";
import { Window } from "../utils/Window.ts";
import { waitForElements } from "../utils/waitForElements.ts";
import { ConfirmDialog } from "./ConfirmDialog.tsx";
import { PopupModal } from "./PopupModal.tsx";

const ContextMenuButton = memo(() => (
  <Spicetify.ReactComponent.ContextMenu
    menu={
      <Spicetify.ReactComponent.RemoteConfigProvider
        configuration={Spicetify.Platform.RemoteConfiguration}
      >
        <Spicetify.ReactComponent.Menu>
          <Spicetify.ReactComponent.MenuItem divider="before" onClick={() => Window.Reload()}>
            Reload theme
          </Spicetify.ReactComponent.MenuItem>
          <Spicetify.ReactComponent.MenuItem divider="before" onClick={() => Window.Restart()}>
            Restart Spotify
          </Spicetify.ReactComponent.MenuItem>
          <Spicetify.ReactComponent.MenuItem
            divider="before"
            onClick={() => {
              ConfirmDialog({
                titleText: "Confirm Dialog",
                descriptionText: "Are you <b>sure</b>?",
                onOutside: () => Spicetify.showNotification("Clicked outside"),
                confirmText: "Ok",
                allowHTML: true,
              });
            }}
          >
            Confirm Dialog
          </Spicetify.ReactComponent.MenuItem>
          <Spicetify.ReactComponent.MenuItem
            divider="before"
            onClick={() => {
              PopupModal({
                title: "Theme Settings",
                content: SettingsMenu,
              });
            }}
          >
            Theme Settings
          </Spicetify.ReactComponent.MenuItem>
          <Spicetify.ReactComponent.MenuItem
            divider="before"
            onClick={() => {
              PopupModal({
                title: "Debug Menu",
                content: TestMenu,
              });
            }}
          >
            Debug Menu
          </Spicetify.ReactComponent.MenuItem>
        </Spicetify.ReactComponent.Menu>
      </Spicetify.ReactComponent.RemoteConfigProvider>
    }
    offset={[0, 12]}
    placement="top"
    trigger="right-click"
  >
    <button
      style={{
        color: "transparent",
        width: "100%",
        height: "100%",
        background: "unset",
        border: "none",
        cursor: "context-menu",
      }}
    />
  </Spicetify.ReactComponent.ContextMenu>
));

export async function mountComponent(): Promise<void> {
  const mountPoint = await waitForElements('[aria-label="Theme Settings"]');
  if (!mountPoint) return;

  const container = document.createElement("div");
  container.className = "context-menu-container";
  container.style.position = "absolute";
  container.style.inset = "0";
  mountPoint.appendChild(container);
  createRoot(container).render(<ContextMenuButton />);
}
