import { memo } from "react";
import ReactDOM from "react-dom";
import ConfirmDialog from "../components/ConfirmDialog";
import PopupModal from "../components/PopupModal";
import DebugMenu from "../debug/DebugMenu";
import SettingsMenu from "../menu/settingsmenu/SettingsMenu";
import Window from "../utils/Window";
import waitForElements from "../utils/waitForElements";

//why divider not work
const ContextMenuButton = memo(() => (
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
              Window.Reload();
            }}
            divider="before"
          >
            Reload theme
          </Spicetify.ReactComponent.MenuItem>
          <Spicetify.ReactComponent.MenuItem
            onClick={() => {
              Window.Restart();
            }}
            divider="before"
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
            }}
            divider={"before"}
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
            divider={before}
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

async function mountComponent() {
  const mountPoint = await waitForElements('[aria-label="Theme Settings"]');
  const container = document.createElement("div");
  container.className = "context-menu-container";
  container.style.position = "absolute";
  container.style.color = "transparent";
  container.style.height = "100%";
  container.style.width = "100%";
  mountPoint.appendChild(container);

  ReactDOM.createRoot(container).render(<ContextMenuButton />);
}

export default mountComponent;
