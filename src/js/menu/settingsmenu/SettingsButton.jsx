import ReactDOM from "react-dom";
import ConfirmDialog from "../../components/ConfirmDialog";
import PopupModal from "../../components/PopupModal";
import TestMenu from "../../debug/TestMenu";
import Icons from "../../icons/Icons";
import Window from "../../utils/Window";
import SettingsMenu from "./SettingsMenu";

const SettingsButton = () => {
  const popoverId = "settings-menu-popover";
  let popoverElement = document.getElementById(popoverId);

  const hideMenu = () => {
    popoverElement?.hidePopover?.();
  };

  const showMenu = (event) => {
    event.preventDefault();
    popoverElement?.showPopover?.();
  };

  if (!popoverElement) {
    popoverElement = document.createElement("div");
    popoverElement.id = popoverId;
    popoverElement.style.top = "calc(anchor(--SettingsButton bottom) + 8px)";
    popoverElement.style.left = "anchor(--SettingsButton left)";
    popoverElement.style.background = "transparent";
    popoverElement.style.overflow = "visible";
    popoverElement.popover = "auto";
    document.body.appendChild(popoverElement);

    ReactDOM.createRoot(popoverElement).render(
      <Spicetify.ReactComponent.Menu>
        <Spicetify.ReactComponent.MenuItem
          key="reload-theme"
          onClick={() => {
            Window.Reload();
            hideMenu();
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
          key="restart-spotify"
          onClick={() => {
            Window.Restart();
            hideMenu();
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
          divider="after"
        >
          Restart Spotify
        </Spicetify.ReactComponent.MenuItem>
        <Spicetify.ReactComponent.MenuItem
          key="confirm-dialog"
          onClick={() => {
            ConfirmDialog({
              titleText: "Confirm Dialog",
              descriptionText: "Are you <b>sure</b>?",
              onOutside: () => Spicetify.showNotification("Clicked outside"),
              confirmLabel: "Ok",
              allowHTML: true,
            });
            hideMenu();
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
          divider="after"
        >
          Confirm Dialog
        </Spicetify.ReactComponent.MenuItem>
        <Spicetify.ReactComponent.MenuItem
          key="theme-settings-menu"
          onClick={() => {
            PopupModal({ title: "Theme Settings", content: SettingsMenu });
            hideMenu();
          }}
          leadingIcon={
            <svg
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="currentColor"
              dangerouslySetInnerHTML={{ __html: Spicetify.SVGIcons.subtitles }}
            />
          }
        >
          Theme Settings
        </Spicetify.ReactComponent.MenuItem>
        <Spicetify.ReactComponent.MenuItem
          key="test-menu"
          onClick={() => {
            PopupModal({ title: "Test Menu", content: TestMenu });
            hideMenu();
          }}
          leadingIcon={
            <svg
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="currentColor"
              dangerouslySetInnerHTML={{ __html: Spicetify.SVGIcons.menu }}
            />
          }
        >
          Test Menu
        </Spicetify.ReactComponent.MenuItem>
      </Spicetify.ReactComponent.Menu>,
    );
  }

  const SettingsButton = new Spicetify.Topbar.Button(
    "Theme Settings",
    `<svg viewBox="0 0 16 16" width="16px" height="16px" fill="currentColor">${Icons.HTML.settings}</svg>`,
    () => {
      PopupModal({
        title: "Theme Settings",
        content: SettingsMenu,
        buttons: (
          <Spicetify.ReactComponent.TooltipWrapper label="GitHub" placement="top">
            <button
              className="modal__button modal__button--github"
              onClick={() => window.open("https://github.com/veryboringhwl/spicetify")}
            >
              <Icons.React.github size={18} />
            </button>
          </Spicetify.ReactComponent.TooltipWrapper>
        ),
        icon: <Icons.React.settings size={30} />,
      });
    },
    false,
    true,
  );

  SettingsButton.element.oncontextmenu = showMenu;
  SettingsButton.element.style.anchorName = "--SettingsButton";
  return SettingsButton;
};

export default SettingsButton;
