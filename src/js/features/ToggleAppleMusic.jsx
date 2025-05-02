let textObserverApple = null;
let collapsedObserverApple = null;

function ToggleAppleMusic(isEnabled) {
  const globalNav = document.querySelector(".Root__globalNav");
  if (!globalNav) return;

  disableAppleMusic(globalNav);

  if (isEnabled) {
    enableAppleMusic(globalNav);
  } else {
    disableAppleMusic(globalNav);
  }
}

function enableAppleMusic(globalNav) {
  disableAppleMusic(globalNav);
  globalNav.classList.add("global-libraryX");

  const addTextToButtons = () => {
    const elements = globalNav.querySelectorAll(".main-globalNav-navLink, ._b3hhmbWtOY8_1M1mM1H");
    // .main-globalNav-navLink: Nav Links
    // _b3hhmbWtOY8_1M1mM1H: Search tab
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

  textObserverApple = new MutationObserver(addTextToButtons);
  textObserverApple.observe(globalNav, { childList: true, subtree: true });

  const addCollapsed = () => {
    const elementToWatch = document.querySelector(".sikBfynL1Y6I25nVpbAg");
    globalNav.classList.toggle("collapsed", elementToWatch != null);
  };

  addCollapsed();
  collapsedObserverApple = new MutationObserver(addCollapsed);
  collapsedObserverApple.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

function disableAppleMusic(globalNav) {
  globalNav.classList.remove("global-libraryX", "collapsed");

  if (textObserverApple) {
    textObserverApple.disconnect();
    textObserverApple = null;
  }

  if (collapsedObserverApple) {
    collapsedObserverApple.disconnect();
    collapsedObserverApple = null;
  }

  const textWrappers = globalNav.querySelectorAll(".main-globalNav-textWrapper");
  textWrappers.forEach((el) => el.remove());
}

export default ToggleAppleMusic;
