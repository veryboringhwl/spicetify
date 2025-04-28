import Console from "../utils/Console";

let libXObserver = null;
let collapsedObserver = null;

function ToggleLibXUI(isEnabled) {
  const globalNav = document.querySelector(".Root__globalNav");
  if (!globalNav) return;

  disableLibXUI(globalNav);

  if (isEnabled) {
    enableLibXUI(globalNav);
  } else {
    disableLibXUI(globalNav);
  }
}

function enableLibXUI(globalNav) {
  disableLibXUI(globalNav);
  globalNav.classList.add("global-libraryX");

  const addTextToButtons = () => {
    const elements = globalNav.querySelectorAll(
      ".search-searchCategory-categoryGrid > div > button, .main-globalNav-searchContainer > .main-globalNav-link-icon, ._b3hhmbWtOY8_1M1mM1H",
    );
    elements.forEach((el) => {
      if (!el.querySelector(".main-globalNav-textWrapper")) {
        const text = el.getAttribute("aria-label") || (el.querySelector("input") ? "Search" : "");
        const wrapper = document.createElement("span");
        wrapper.className = "main-globalNav-textWrapper";
        wrapper.innerHTML = `<div class="main-globalNav-iconText encore-text-body-medium-bold">${text}</div>`;
        el.appendChild(wrapper);
      }
    });
  };

  addTextToButtons();

  libXObserver = new MutationObserver(addTextToButtons);
  libXObserver.observe(globalNav, { childList: true, subtree: true });

  const addCollapsed = () => {
    const elementToWatch = document.querySelector(".sikBfynL1Y6I25nVpbAg");
    globalNav.classList.toggle("collapsed", elementToWatch != null);
  };

  addCollapsed();
  collapsedObserver = new MutationObserver(addCollapsed);
  collapsedObserver.observe(document.body, { childList: true, subtree: true });
}

function disableLibXUI(globalNav) {
  globalNav.classList.remove("global-libraryX", "collapsed");

  if (libXObserver) {
    Console.Log("Removing libx observer");
    libXObserver.disconnect();
    libXObserver = null;
  }

  if (collapsedObserver) {
    Console.Log("Removing collapsedobserver");
    collapsedObserver.disconnect();
    collapsedObserver = null;
  }

  const textWrappers = globalNav.querySelectorAll(".main-globalNav-textWrapper");
  textWrappers.forEach((el) => el.remove());
}

export default ToggleLibXUI;
