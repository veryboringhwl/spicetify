import Console from "../utils/Console";
import waitForElements from "../utils/waitForElements";

let textObserverApple = null;
let sidebarStateListenerApple = null;

function ToggleAppleMusic(isEnabled) {
  disableAppleMusic();
  if (isEnabled) {
    enableAppleMusic();
  }
}

async function enableAppleMusic() {
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
  textObserverApple = new MutationObserver(addTextToButtons);
  textObserverApple.observe(globalNav, { childList: true, subtree: true });

  const updateCollapsedClass = () => {
    const sidebarState = Spicetify.Platform.LocalStorageAPI.getItem("left-sidebar-state");
    document.documentElement.classList.toggle("collapsed", sidebarState === 1);
  };

  sidebarStateListenerApple = (event) => {
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
    Console.Log("Removing sidebar state listener");
    Spicetify.Platform.LocalStorageAPI.getEvents().removeListener("update", sidebarStateListener);
    sidebarStateListenerApple = null;
  }

  const iconTexts = document.querySelectorAll(".main-globalNav-iconText");
  for (const el of iconTexts) {
    el.remove();
  }
}

export default ToggleAppleMusic;
