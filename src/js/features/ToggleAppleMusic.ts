import { Console } from "../utils/Console.ts";
import { waitForElements } from "../utils/waitForElements.ts";

let textObserverApple: MutationObserver | null = null;
let sidebarStateListenerApple: ((event: any) => void) | null = null;

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

async function enableAppleMusic() {
  const globalNav = await waitForElements(".Root__globalNav");
  if (!globalNav) return;

  const performInitialSetup = () => addTextToButtons(globalNav);
  performInitialSetup();

  textObserverApple = new MutationObserver(() => addTextToButtons(globalNav));
  textObserverApple.observe(globalNav, { childList: true, subtree: true });

  const updateCollapsedClass = () => {
    const sidebarState = Spicetify.Platform.LocalStorageAPI.getItem("left-sidebar-state");
    document.documentElement.classList.toggle("collapsed", sidebarState === 1);
  };

  sidebarStateListenerApple = (event: { data: { key: string } }) => {
    if (event.data.key === "left-sidebar-state") {
      updateCollapsedClass();
    }
  };

  Spicetify.Platform.LocalStorageAPI.getEvents().addListener("update", sidebarStateListenerApple);
  updateCollapsedClass();
}

function disableAppleMusic() {
  document.documentElement.classList.remove("collapsed");
  if (textObserverApple) {
    Console.Log("Removing AppleMusic observer");
    textObserverApple.disconnect();
    textObserverApple = null;
  }
  if (sidebarStateListenerApple) {
    Console.Log("Removing AppleMusic sidebar state listener");
    Spicetify.Platform.LocalStorageAPI.getEvents().removeListener(
      "update",
      sidebarStateListenerApple,
    );
    sidebarStateListenerApple = null;
  }
  document.querySelectorAll(".main-globalNav-iconText").forEach((el) => el.remove());
}

export function ToggleAppleMusic(isEnabled: boolean): void {
  disableAppleMusic();
  if (isEnabled) {
    enableAppleMusic();
  }
}
