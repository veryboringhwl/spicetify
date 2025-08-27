import { Console } from "../utils/Console.ts";
import { waitForElements } from "../utils/waitForElements.ts";

let textObserver: MutationObserver | null = null;
let sidebarStateListener: ((event: any) => void) | null = null;

const addTextToButtons = (globalNav: Element) => {
  const elements = globalNav.querySelectorAll<HTMLElement>(
    ".main-globalNav-navLink, ._b3hhmbWtOY8_1M1mM1H",
  );
  for (const el of elements) {
    if (!el.querySelector(".main-globalNav-iconText")) {
      const text = el.getAttribute("aria-label") || (el.querySelector("input") ? "Search" : "");
      if (text) {
        const div = document.createElement("div");
        div.className = "main-globalNav-iconText encore-text-body-medium-bold";
        div.textContent = text;
        el.appendChild(div);
      }
    }
  }
};

async function enableLibXUI() {
  const globalNav = await waitForElements(".Root__globalNav");
  if (!globalNav) return;

  addTextToButtons(globalNav);

  textObserver = new MutationObserver(() => addTextToButtons(globalNav));
  textObserver.observe(globalNav, { childList: true, subtree: true });

  const updateCollapsedClass = () => {
    const sidebarState = Spicetify.Platform.LocalStorageAPI.getItem("left-sidebar-state");
    document.documentElement.classList.toggle("collapsed", sidebarState === 1);
  };

  sidebarStateListener = (event: { data: { key: string } }) => {
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
    Console.Log("Removing LibXUI observer");
    textObserver.disconnect();
    textObserver = null;
  }
  if (sidebarStateListener) {
    Console.Log("Removing LibXUI sidebar state listener");
    Spicetify.Platform.LocalStorageAPI._events.removeListener("update", sidebarStateListener);
    sidebarStateListener = null;
  }

  Spicetify.Platform.ControlMessageAPI._updateUiClient.updateTitlebarHeight({ height: 64 });
  document.querySelectorAll(".main-globalNav-iconText").forEach((el) => el.remove());
}

export function ToggleLibXUI(isEnabled: boolean): void {
  disableLibXUI();
  if (isEnabled) {
    enableLibXUI();
  }
}
