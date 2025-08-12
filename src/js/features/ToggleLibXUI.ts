import Console from "../utils/Console";
import waitForElements from "../utils/waitForElements";

let textObserver = null;
let sidebarStateListener = null;

async function ToggleLibXUI(isEnabled) {
  disableLibXUI();
  if (isEnabled) {
    enableLibXUI();
  }
}

async function enableLibXUI() {
  const globalNav = await waitForElements(".Root__globalNav");

  const addTextToButtons = () => {
    const elements = globalNav.querySelectorAll(".main-globalNav-navLink, ._b3hhmbWtOY8_1M1mM1H");
    // .main-globalNav-navLink: Nav Links
    // _b3hhmbWtOY8_1M1mM1H: Search tab
    for (const el of elements) {
      if (!el.querySelector(".main-globalNav-iconText")) {
        const text = el.getAttribute("aria-label") || (el.querySelector("input") ? "Search" : "");
        const div = document.createElement("div");
        div.className = "main-globalNav-iconText encore-text-body-medium-bold";
        div.textContent = text;
        el.appendChild(div);
      }
    }
  };

  addTextToButtons();
  textObserver = new MutationObserver(addTextToButtons);
  textObserver.observe(globalNav, { childList: true, subtree: true });

  const updateCollapsedClass = () => {
    const sidebarState = Spicetify.Platform.LocalStorageAPI.getItem("left-sidebar-state");
    document.documentElement.classList.toggle("collapsed", sidebarState === 1);
  };

  sidebarStateListener = (event) => {
    if (event.data.key === "left-sidebar-state") {
      updateCollapsedClass();
    }
  };

  Spicetify.Platform.ControlMessageAPI._updateUiClient.updateTitlebarHeight({ height: 40 });
  Spicetify.Platform.LocalStorageAPI.getEvents().addListener("update", sidebarStateListener);
  updateCollapsedClass();
}

function disableLibXUI() {
  document.documentElement.classList.remove("collapsed");

  if (textObserver) {
    Console.Log("Removing libx observer");
    textObserver.disconnect();
    textObserver = null;
  }

  if (sidebarStateListener) {
    Console.Log("Removing sidebar state listener");
    Spicetify.Platform.LocalStorageAPI.getEvents().removeListener("update", sidebarStateListener);
    sidebarStateListener = null;
  }

  Spicetify.Platform.ControlMessageAPI._updateUiClient.updateTitlebarHeight({ height: 64 });

  const iconTexts = document.querySelectorAll(".main-globalNav-iconText");
  for (const el of iconTexts) {
    el.remove();
  }
}

export default ToggleLibXUI;
