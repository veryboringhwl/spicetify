(async function() {
          while (!Spicetify.React || !Spicetify.ReactDOM) {
            await new Promise(resolve => setTimeout(resolve, 1));
          }
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// external-global-plugin:react
var require_react = __commonJS({
  "external-global-plugin:react"(exports, module) {
    module.exports = Spicetify.React;
  }
});

// external-global-plugin:react-dom
var require_react_dom = __commonJS({
  "external-global-plugin:react-dom"(exports, module) {
    module.exports = Spicetify.ReactDOM;
  }
});

// src/js/app.jsx
var import_react20 = __toESM(require_react(), 1);

// src/js/components/ModalButtons.jsx
var import_react = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// src/js/icons/icons.jsx
var Icons = {
  //24px
  editButton: `<path d="M17.318 1.975a3.329 3.329 0 1 1 4.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 0 1-1.28-1.28l1.581-4.376a4.726 4.726 0 0 1 1.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 0 0-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 0 0 1.001-.636L20.611 5.268a1.329 1.329 0 0 0 0-1.879z"/>`,
  //16px
  settings: `<path d="M8 5.36a2.68 2.68 90 100 5.36 2.68 2.68 90 000-5.36zM6.7 8.04a1.34 1.34 90 112.68 0 1.34 1.34 90 01-2.68 0zM11.55 3.21a.95.9487 90 01-1.1042-.76l-.3484-1.8974a.4744.4744 90 00-.3685-.3779 8.1365 8.1365 90 00-3.3755 0 .4744.4744 90 00-.3685.3779l-.3471 1.8974a.9514.9514 90 01-1.2542.7209l-1.8211-.6486a.4757.4757 90 00-.5119.1273c-.7625.8402-1.34 1.8318-1.6911 2.9118a.4717.4717 90 00.1447.5065l1.4767 1.2475a.9434.9434 90 010 1.4418l-1.4767 1.2475a.4717.4717 90 00-.1447.5065A8.0212 8.0212 90 002.0502 13.4268a.4757.4757 90 00.5119.1273l1.8224-.6486a.9487.9487 90 011.2542.7209l.3457 1.8974c.0348.1876.1809.3377.3685.3765a8.1405 8.1405 90 003.3768 0 .473.473 90 00.3672-.3765l.3484-1.8974a.9514.9514 90 011.2542-.7209l1.8211.6486c.1809.0643.3832.0134.5119-.1273.7625-.8402 1.34-1.8318 1.6911-2.9118a.4717.4717 90 00-.1447-.5065l-1.4767-1.2475a.942.942 90 010-1.4418l1.4767-1.2475a.4717.4717 90 00.1447-.5065A8.0199 8.0199 90 0014.0298 2.6532a.4757.4757 90 00-.5119-.1273l-1.8224.6486a.9514.9514 90 01-.1487.0402zm-8.8708.7772 1.2556.4462a2.2914 2.2914 90 003.0217-1.742l.2372-1.2998a6.8407 6.8407 90 011.6951 0l.2385 1.2998a2.2887 2.2887 90 003.0217 1.742L13.4 3.9892c.3417.4476.6258.9353.8442 1.4526l-1.0104.8536a2.2834 2.2834 90 000 3.4894l1.0117.8536a6.6866 6.6866 90 01-.8442 1.4526l-1.2556-.4476a2.2914 2.2914 90 00-3.0217 1.742l-.2385 1.2998a6.8327 6.8327 90 01-1.6951 0l-.2372-1.2998a2.2887 2.2887 90 00-3.0217-1.742L2.68 12.0908a6.6826 6.6826 90 01-.8442-1.4526l1.0104-.8549a2.2834 2.2834 90 000-3.488l-1.0117-.8536c.2198-.5172.5038-1.005.8442-1.4526z"/></svg>`,
  //96px
  github: `<path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"></path>`,
  //32px
  close: `<path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143"></path>`,
  //24px
  warning: `<path d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A1 1 0 0 0 3 21h18a1 1 0 0 0 .884-1.5zM13 18h-2v-2h2zm-2-4V9h2l0 5z"</path>`
};
var icons_default = Icons;

// src/js/utils/waitForElements.jsx
var waitForElements = async (selector, maxAttempts = 50) => {
  let attempts = 1;
  while (!document.querySelector(selector) && attempts < maxAttempts) {
    attempts = attempts + 1;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  return document.querySelector(selector) || null;
};
var waitForElements_default = waitForElements;

// src/js/components/Tippy.jsx
var Tippy = (element, content) => {
  if (content) {
    Spicetify.Tippy(element, {
      ...Spicetify.TippyProps,
      content,
      placement: "top",
      delay: [0, 0],
      onShow(instance) {
        instance.popper.classList.add("options-tippy");
      }
    });
  }
};
var Tippy_default = Tippy;

// src/js/components/ModalButtons.jsx
var ModalButtons = async () => {
  const header = await waitForElements_default(".main-trackCreditsModal-header");
  document.querySelector(".main-trackCreditsModal-closeBtn")?.remove();
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "main-trackCreditsModal-BtnContainer";
  import_react_dom.default.createRoot(buttonContainer).render(
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        className: "main-trackCreditsModal-githubBtn",
        onClick: () => window.open("https://github.com/veryboringhwl/spicetify"),
        ref: (label) => label && Tippy_default(label, "View on GitHub")
      },
      /* @__PURE__ */ import_react.default.createElement(
        "svg",
        {
          width: "18",
          height: "18",
          viewBox: "0 0 96 96",
          fill: "currentColor",
          dangerouslySetInnerHTML: { __html: icons_default.github }
        }
      )
    ), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        className: "main-trackCreditsModal-closeBtn",
        onClick: () => Spicetify.PopupModal.hide(),
        ref: (label) => label && Tippy_default(label, "Close")
      },
      /* @__PURE__ */ import_react.default.createElement(
        "svg",
        {
          width: "18",
          height: "18",
          viewBox: "0 0 32 32",
          fill: "currentColor",
          dangerouslySetInnerHTML: { __html: icons_default.close }
        }
      )
    ))
  );
  header.appendChild(buttonContainer);
};
var ModalButtons_default = ModalButtons;

// src/js/components/PopupModal.jsx
var PopupModal = ({ title = "", content = "", isLarge = true, buttons = true } = {}) => {
  Spicetify.PopupModal.hide();
  setTimeout(() => {
    Spicetify.PopupModal.display({
      title,
      content: Spicetify.React.createElement(content),
      isLarge
    });
    if (buttons === true) {
      ModalButtons_default();
    }
  }, 1);
};
var PopupModal_default = PopupModal;

// src/js/debug/DebugMenu.jsx
var import_react3 = __toESM(require_react(), 1);

// src/js/utils/Console.jsx
var Console = {
  Log: (...messages) => console.log(
    `%c\u25CF \u1D17 \u25CF [Theme]%c${messages.join(" ")}`,
    "color:#272ab0; font-weight:1000; background:#ffffff; padding:3px; border:2px solid #272ab0; border-right:none; border-radius:3px 0 0 3px;",
    "color:#000000; background:#ffffff; padding:3px; border:2px solid #272ab0; border-left:none; border-radius:0 3px 3px 0;"
  ),
  Error: (...messages) => console.error(
    `%c\u25CF \u1D17 \u25CF [Theme]%c${messages.join(" ")}`,
    "color:#ff6060; font-weight:1000; background:#ffffff; padding:3px; border:2px solid #ee6969; border-right:none; border-radius:3px 0 0 3px;",
    "color:#000000; background:#ffffff; padding:3px; border:2px solid #ee6969; border-left:none; border-radius:0 3px 3px 0;"
  ),
  Warn: (...messages) => console.warn(
    `%c\u25CF \u1D17 \u25CF [Theme]%c${messages.join(" ")}`,
    "color:#ee8860; font-weight:1000; background:#ffffff; padding:3px; border:2px solid #ff8860; border-right:none; border-radius:3px 0 0 3px;",
    "color:#000000; background:#ffffff; padding:3px; border:2px solid #ff8860; border-left:none; border-radius:0 3px 3px 0;"
  ),
  Debug: (...messages) => console.debug(
    `%c\u25CF \u1D17 \u25CF [Theme]%c${messages.join(" ")}`,
    "color:#272ab0; font-weight:1000; background:#ffffff; padding:3px; border:2px solid #272ab0; border-right:none; border-radius:3px 0 0 3px;",
    "color:#000000; background:#ffffff; padding:3px; border:2px solid #272ab0; border-left:none; border-radius:0 3px 3px 0;"
  )
};
Console.Log("Log message");
Console.Error("Error message");
Console.Warn("Warning message");
Console.Debug("Debug message");
var Console_default = Console;

// src/js/utils/Notification.jsx
var import_react2 = __toESM(require_react(), 1);
var Notification = ({
  message = "",
  keyPrefix = "custom-notif",
  autoHideDuration = 3e3,
  backgroundColor = "#fff"
} = {}) => {
  Spicetify.Snackbar.enqueueCustomSnackbar(keyPrefix, {
    keyPrefix,
    autoHideDuration,
    children: /* @__PURE__ */ import_react2.default.createElement(
      "div",
      {
        className: "custom-notification",
        style: {
          display: "flex",
          gap: "8px",
          alignItems: "center",
          color: "#fff",
          backgroundColor,
          padding: "14px 16px",
          borderRadius: "4px",
          fontSize: "0.875rem"
        }
      },
      message
    )
  });
};
var Notification_default = Notification;

// src/js/debug/DebugMenu.jsx
var DebugMenu = import_react3.default.memo(() => {
  const [lastVersion, setLastVersion] = import_react3.default.useState("Loading...");
  const [lastUpdated, setLastUpdated] = import_react3.default.useState("Loading...");
  import_react3.default.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/veryboringhwl/spicetify/releases/latest"
        );
        const data = await response.json();
        setLastVersion(data.tag_name);
        const publishDate = new Date(data.published_at);
        const options2 = {
          year: "numeric",
          month: "long",
          day: "numeric"
        };
        const formattedDate = publishDate.toLocaleString("en-GB", options2);
        setLastUpdated(formattedDate);
      } catch (error) {
        Console_default.Error("Error fetching latest version:", error);
        setLastVersion("Error fetching");
        setLastUpdated("Error fetching");
      }
    };
    fetchData();
  }, []);
  const Info = {
    "Current Theme Version": "v1.1.0",
    "Newest Theme Version": lastVersion,
    "Last Updated": lastUpdated,
    "Spotify Version": Spicetify.Platform.version,
    "Spicetify Version": Spicetify.Config.version,
    Platform: Spicetify.Platform.PlatformData.app_platform,
    OS: Spicetify.Platform.PlatformData.os_name,
    Theme: Spicetify.Config.current_theme,
    Extensions: Spicetify.Config.extensions.join(", "),
    "Custom apps": Spicetify.Config.custom_apps.join(", "),
    "Color Scheme": Spicetify.Config.color_scheme
  };
  return /* @__PURE__ */ import_react3.default.createElement("div", { className: "theme-version" }, Object.entries(Info).map(([key, value]) => /* @__PURE__ */ import_react3.default.createElement("p", { key, className: "theme-info-item" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "theme-info-key encore-text-body-medium-bold" }, key, ": "), /* @__PURE__ */ import_react3.default.createElement("span", { className: "theme-info-value" }, value))), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: () => Notification_default({
        autoHideDuration: 99999999,
        message: "Theme only supports Spotify versions greater than 1.2.50.000"
      })
    },
    "Special Button"
  ));
});
var DebugMenu_default = DebugMenu;

// src/js/debug/Mousetrap.jsx
var Mousetrap = () => {
  Spicetify.Mousetrap.bind(
    [
      "up up down down left right left right b a",
      "v e r s i o n",
      "s p o t i f y",
      "s p i c e t i f y",
      "d e b u g"
    ],
    () => {
      PopupModal_default({
        title: "Theme Version",
        content: DebugMenu_default
      });
    }
  );
};
var Mousetrap_default = Mousetrap;

// src/js/features/UpdateZoom.jsx
var UpdateZoom = () => {
  let prevOuter = window.outerWidth;
  let prevInner = window.innerWidth;
  let prevRatio = window.devicePixelRatio;
  const checkZoom = () => {
    const newOuter = window.outerWidth;
    const newInner = window.innerWidth;
    const newRatio = window.devicePixelRatio;
    if ((prevOuter <= 160 || prevRatio !== newRatio) && (prevOuter !== newOuter || prevInner !== newInner)) {
      const zoom = newOuter / newInner || 1;
      document.documentElement.style.setProperty("--zoom", zoom);
      Console_default.Log(`Zoom: ${zoom}`);
      prevOuter = newOuter;
      prevInner = newInner;
      prevRatio = newRatio;
    }
    requestAnimationFrame(checkZoom);
  };
  checkZoom();
};
var UpdateZoom_default = UpdateZoom;

// src/js/utils/LocalStorage.jsx
var LocalStorage = {
  get(key, defaultValue) {
    try {
      const item = localStorage.getItem(key);
      return item !== null && item !== "undefined" ? JSON.parse(item) : defaultValue;
    } catch (error) {
      Console_default.Error(`Error getting ${key} from localStorage:`, error);
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      Console_default.Error(`Error setting ${key} in localStorage:`, error);
      return false;
    }
  }
};
var LocalStorage_default = LocalStorage;

// src/js/menu/modalmenu/AlbumBannerModal.jsx
var import_react10 = __toESM(require_react(), 1);

// src/js/features/CoverArtBanner.jsx
var CoverArtBanner = () => {
  if (!Spicetify.Player.data?.item) {
    setTimeout(CoverArtBanner, 100);
    return;
  }
  const channels = {
    Album: { regex: /^\/album\//, key: "theme:AlbumPage" },
    Artist: { regex: /^\/artist\/(?!artists\b)\w+$/, key: "theme:ArtistPage" },
    Lyrics: { regex: /^\/lyrics$/, key: "theme:LyricsPage" },
    LyricsPlus: { regex: /^\/lyrics-plus$/, key: "theme:LyricsPage" },
    Playlist: { regex: /^\/playlist\//, key: "theme:PlaylistPage" },
    Station: { regex: /^\/station\/playlist\//, key: "theme:MiscPage" },
    Collection: { regex: /^\/collection\/tracks$/, key: "theme:MiscPage" },
    Show: { regex: /^\/show\//, key: "theme:MiscPage" },
    Episode: { regex: /^\/episode\//, key: "theme:MiscPage" },
    User: { regex: /^\/user\/(?!users\b)\w+$/, key: "theme:MiscPage" },
    Genre: { regex: /^\/genre\//, key: "theme:MiscPage" }
  };
  const banner = document.querySelector(".banner-image") || (() => {
    const newBanner = document.createElement("div");
    newBanner.className = "banner-image";
    document.querySelector(".under-main-view")?.appendChild(newBanner);
    return newBanner;
  })();
  const updateBanner = () => {
    const { pathname } = Spicetify.Platform.History.location;
    const imageUrl = Spicetify.Player.data?.item?.metadata?.image_xlarge_url;
    const showBanner = Object.values(channels).some(
      ({ regex, key }) => LocalStorage_default.get(key, false) && regex.test(pathname)
    );
    if (showBanner) {
      banner.style.display = "";
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => document.documentElement.style.setProperty("--image", `url(${imageUrl})`);
    } else {
      banner.style.display = "none";
    }
  };
  Spicetify.Platform.History.listen(updateBanner);
  Spicetify.Player.addEventListener("songchange", updateBanner);
  updateBanner();
};
var CoverArtBanner_default = CoverArtBanner;

// src/js/menu/components/OptionType.jsx
var import_react9 = __toESM(require_react(), 1);

// src/js/menu/components/Dropdown.jsx
var import_react6 = __toESM(require_react(), 1);

// src/js/menu/components/OptionRow.jsx
var import_react5 = __toESM(require_react(), 1);

// src/js/menu/components/InfoButton.jsx
var import_react4 = __toESM(require_react(), 1);
var InfoButton = import_react4.default.memo(({ name, popupModal }) => {
  if (!popupModal) return null;
  return /* @__PURE__ */ import_react4.default.createElement(
    "button",
    {
      className: "themeOptionPopupButton",
      onClick: () => PopupModal_default({
        title: name,
        content: popupModal,
        isLarge: false,
        buttons: false
      }),
      "aria-label": "Open popup"
    },
    /* @__PURE__ */ import_react4.default.createElement(
      "svg",
      {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        dangerouslySetInnerHTML: { __html: icons_default.editButton }
      }
    )
  );
});
var InfoButton_default = InfoButton;

// src/js/menu/components/OptionRow.jsx
var OptionRow = import_react5.default.memo(({ name, desc, children, popupModal }) => {
  return /* @__PURE__ */ import_react5.default.createElement("div", { className: "themeOptionRow", "data-name": `theme:${name}` }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "themeOptionContent" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "themeOptionDesc" }, desc)), /* @__PURE__ */ import_react5.default.createElement("div", { className: "themeOptionControl" }, /* @__PURE__ */ import_react5.default.createElement(InfoButton_default, { name, popupModal }), children));
});
var OptionRow_default = OptionRow;

// src/js/menu/components/Dropdown.jsx
var Dropdown = import_react6.default.memo(({ name, desc, tippy, value, options: options2, onChange, popupModal }) => {
  const dropdownRef = import_react6.default.useRef(null);
  import_react6.default.useEffect(() => {
    if (dropdownRef.current && tippy) {
      Tippy_default(dropdownRef.current, tippy);
    }
  }, [tippy]);
  const handleChange = import_react6.default.useCallback(
    (e) => {
      onChange(`theme:${name}`, e.target.value);
    },
    [name, onChange]
  );
  return /* @__PURE__ */ import_react6.default.createElement(OptionRow_default, { name, desc, popupModal }, /* @__PURE__ */ import_react6.default.createElement(
    "select",
    {
      className: "themeOptionDropdown",
      value,
      onChange: handleChange,
      ref: dropdownRef
    },
    options2.map(({ value: value2, label }) => /* @__PURE__ */ import_react6.default.createElement("option", { key: value2, value: value2 }, label))
  ));
});
var Dropdown_default = Dropdown;

// src/js/menu/components/Input.jsx
var import_react7 = __toESM(require_react(), 1);
var Input = import_react7.default.memo(({ name, desc, tippy, value, onChange, placeholder, popupModal }) => {
  const inputRef = import_react7.default.useRef(null);
  import_react7.default.useEffect(() => {
    if (inputRef.current && tippy) {
      Tippy_default(inputRef.current, tippy);
    }
  }, [tippy]);
  const handleChange = import_react7.default.useCallback(
    (e) => {
      onChange(`theme:${name}`, e.target.value);
    },
    [name, onChange]
  );
  return /* @__PURE__ */ import_react7.default.createElement(OptionRow_default, { name, desc, popupModal }, /* @__PURE__ */ import_react7.default.createElement(
    "input",
    {
      className: "themeOptionInput",
      type: "text",
      value,
      onChange: handleChange,
      placeholder,
      ref: inputRef
    }
  ));
});
var Input_default = Input;

// src/js/menu/components/Toggle.jsx
var import_react8 = __toESM(require_react(), 1);
var Toggle = import_react8.default.memo(({ name, desc, tippy, value, onChange, popupModal }) => {
  const toggleRef = import_react8.default.useRef(null);
  import_react8.default.useEffect(() => {
    if (toggleRef.current && tippy) {
      Tippy_default(toggleRef.current, tippy);
    }
  }, [tippy]);
  const handleChange = import_react8.default.useCallback(() => {
    onChange(`theme:${name}`, !value);
  }, [name, value, onChange]);
  return /* @__PURE__ */ import_react8.default.createElement(OptionRow_default, { name, desc, popupModal }, /* @__PURE__ */ import_react8.default.createElement("button", { className: "themeOptionToggle", onClick: handleChange, ref: toggleRef }, /* @__PURE__ */ import_react8.default.createElement("span", { className: "toggleWrapper" }, /* @__PURE__ */ import_react8.default.createElement("span", { className: `toggle ${value ? "enabled" : ""}` }))));
});
var Toggle_default = Toggle;

// src/js/menu/components/OptionType.jsx
var OptionType = import_react9.default.memo(({ option, value, onChange }) => {
  const Component = { toggle: Toggle_default, dropdown: Dropdown_default, input: Input_default }[option.type];
  return /* @__PURE__ */ import_react9.default.createElement(Component, { ...option, value, onChange });
});
var OptionType_default = OptionType;

// src/js/menu/modalmenu/resetModal.jsx
var resetModal = (options2, setSettings) => {
  const defaultSettings = Object.fromEntries(
    options2.map((option) => [option.name, option.defaultVal])
  );
  setSettings(defaultSettings);
  options2.forEach((option) => {
    const key = `theme:${option.name}`;
    LocalStorage_default.set(key, option.defaultVal);
    document.body.classList.toggle(option.name, option.defaultVal);
    if (option.run) {
      option.run(option.defaultVal);
    }
  });
};
var resetModal_default = resetModal;

// src/js/menu/modalmenu/saveModal.jsx
var saveModal = (settings, options2) => {
  Object.entries(settings).forEach(([key, value]) => {
    LocalStorage_default.set(`theme:${key}`, value);
    document.body.classList.toggle(key, value);
    options2.find((opt) => opt.name === key)?.run?.(value);
  });
};
var saveModal_default = saveModal;

// src/js/menu/modalmenu/AlbumBannerModal.jsx
var AlbumBannerModal = import_react10.default.memo(() => {
  const [settings, setSettings] = import_react10.default.useState(
    () => Object.fromEntries(
      albumBannerOptions.map((option) => [
        option.name,
        LocalStorage_default.get(`theme:${option.name}`, option.defaultVal)
      ])
    )
  );
  const handleSettingChange = import_react10.default.useCallback((key, value) => {
    setSettings((prev) => ({ ...prev, [key.replace("theme:", "")]: value }));
  }, []);
  import_react10.default.useEffect(() => {
    albumBannerOptions.forEach((option) => option.run?.(settings[option.name]));
  }, [settings]);
  return /* @__PURE__ */ import_react10.default.createElement("div", { className: "themeModalOptions albumBannerSettings" }, albumBannerOptions.map((option) => /* @__PURE__ */ import_react10.default.createElement(
    OptionType_default,
    {
      key: option.name,
      option,
      value: settings[option.name],
      onChange: handleSettingChange
    }
  )), /* @__PURE__ */ import_react10.default.createElement("div", { className: "buttonContainer" }, /* @__PURE__ */ import_react10.default.createElement("button", { className: "resetButton", onClick: () => resetModal_default(albumBannerOptions, setSettings) }, "Reset"), /* @__PURE__ */ import_react10.default.createElement(
    "button",
    {
      className: "saveButton",
      onClick: () => {
        saveModal_default(settings, albumBannerOptions);
        CoverArtBanner_default();
      }
    },
    "Save"
  )));
});
var albumBannerOptions = [
  {
    type: "toggle",
    name: "AlbumBannerPage",
    desc: "Puts album art in places",
    defaultVal: true,
    tippy: "Includes Spotify Lyrics page and Spicetify's Lyrics Plus"
  },
  {
    type: "toggle",
    name: "LyricsPage",
    desc: "Adds Dynamic backgrounds to Lyrics Page",
    defaultVal: true,
    tippy: "Includes Spotify Lyrics page and Spicetify's Lyrics Plus"
  },
  {
    type: "toggle",
    name: "PlaylistPage",
    desc: "Adds Dynamic backgrounds to your Playlist Pages",
    defaultVal: true
  },
  {
    type: "toggle",
    name: "ArtistPage",
    desc: "Adds Dynamic backgrounds to Artist Pages",
    defaultVal: true
  },
  {
    type: "toggle",
    name: "AlbumPage",
    desc: "Adds Dynamic backgrounds to Album Pages",
    defaultVal: true
  },
  {
    type: "toggle",
    name: "MiscPage",
    desc: "Adds Dynamic backgrounds to Misc Pages",
    defaultVal: true,
    tippy: "Enables album art for Station, Collection, Show, Episode, Genre, User"
  }
];
var AlbumBannerModal_default = AlbumBannerModal;

// src/js/menu/modalmenu/WindowsControlModal.jsx
var import_react11 = __toESM(require_react(), 1);
var WindowsControlModal = import_react11.default.memo(() => {
  const [settings, setSettings] = import_react11.default.useState(
    () => Object.fromEntries(
      windowsControlOptions.map((option) => [
        option.name,
        LocalStorage_default.get(`theme:${option.name}`, option.defaultVal)
      ])
    )
  );
  const handleSettingChange = import_react11.default.useCallback((key, value) => {
    const optionName = key.replace("theme:", "");
    setSettings((prev) => ({ ...prev, [optionName]: value }));
    document.documentElement.style.setProperty(
      `--windowcontrol-${optionName.toLowerCase()}`,
      value
    );
  }, []);
  import_react11.default.useEffect(() => {
    windowsControlOptions.forEach((option) => {
      const value = settings[option.name];
      document.documentElement.style.setProperty(
        `--windowcontrol-${option.name.toLowerCase()}`,
        value
      );
    });
  }, [settings]);
  return /* @__PURE__ */ import_react11.default.createElement("div", { className: "themeModalOptions windowsControlSettings" }, windowsControlOptions.map((option) => /* @__PURE__ */ import_react11.default.createElement(
    OptionType_default,
    {
      key: option.name,
      option,
      value: settings[option.name],
      onChange: handleSettingChange
    }
  )), /* @__PURE__ */ import_react11.default.createElement("div", { className: "buttonContainer" }, /* @__PURE__ */ import_react11.default.createElement(
    "button",
    {
      className: "resetButton",
      onClick: () => resetModal_default(windowsControlOptions, setSettings)
    },
    "Reset"
  ), /* @__PURE__ */ import_react11.default.createElement("button", { className: "saveButton", onClick: () => saveModal_default(settings, windowsControlOptions) }, "Save")));
});
var windowsControlOptions = [
  {
    type: "toggle",
    name: "WindowsControl",
    desc: "Enable custom Windows Controls",
    defaultVal: true,
    run: (value) => {
      document.body.classList.toggle("WindowsControl", value);
    }
  },
  {
    type: "input",
    name: "WindowsControlBrightness",
    desc: "Set Brightness",
    defaultVal: "2.12",
    run: (value) => document.documentElement.style.setProperty("--windowcontrol-brightness", value)
  },
  {
    type: "input",
    name: "WindowsControlTop",
    desc: "Set Top",
    defaultVal: "16px",
    run: (value) => document.documentElement.style.setProperty("--windowcontrol-top", value)
  },
  {
    type: "input",
    name: "WindowsControlWidth",
    desc: "Set Width",
    defaultVal: "135px",
    run: (value) => document.documentElement.style.setProperty("--windowcontrol-width", value)
  },
  {
    type: "input",
    name: "WindowsControlHeight",
    desc: "Set Height",
    defaultVal: "32px",
    run: (value) => document.documentElement.style.setProperty("--windowcontrol-height", value)
  }
];
var WindowsControlModal_default = WindowsControlModal;

// src/js/menu/modalmenu/runModalSettings.jsx
var runModalSettings = () => {
  const applyModalSetting = (options2, styleProperty) => {
    options2.forEach((option) => {
      const value = LocalStorage_default.get(`theme:${option.name}`, option.defaultVal);
      if (styleProperty) {
        document.documentElement.style.setProperty(styleProperty(option.name), value);
      } else {
        document.body.classList.toggle(option.name, value);
      }
    });
  };
  applyModalSetting(albumBannerOptions);
  applyModalSetting(
    windowsControlOptions,
    (name) => `--windowcontrol-${name.replace("WindowsControl", "").toLowerCase()}`
  );
};
var runModalSettings_default = runModalSettings;

// src/js/features/ColourScheme.jsx
var ColourScheme = async (scheme) => {
  if (scheme === "default") {
    const schemeTag2 = document.querySelector("style.customColourScheme");
    schemeTag2?.remove();
    return;
  }
  const response = await fetch(
    "https://raw.githubusercontent.com/veryboringhwl/spicetify/main/dist/color.ini"
  );
  const iniContent = await response.text();
  const colourSchemes = iniContent.split(/[\r\n]+/).reduce((acc, line) => {
    line = line.trim();
    if (line.startsWith(";")) return acc;
    const sectionMatch = line.match(/^\[([^\]]+)\]$/);
    if (sectionMatch) {
      acc[sectionMatch[1]] = {};
      return acc;
    }
    const paramMatch = line.match(/^([^=]+?)\s*=\s*(.+)$/);
    if (paramMatch) {
      const [, key, value] = paramMatch;
      const section = Object.keys(acc).pop();
      if (section) acc[section][key] = value.split(";")[0].trim();
    }
    return acc;
  }, {});
  const injectStr = `${Object.entries(colourSchemes[scheme]).reduce((acc, [key, value]) => {
    const rgb = value.length === 3 ? value.split("").map((char) => Number.parseInt(char + char, 16)).join(", ") : value.match(/\w\w/g).map((x) => Number.parseInt(x, 16)).join(", ");
    return `${acc}--spice-${key}:#${value};--spice-rgb-${key}:${rgb};`;
  }, ":root{")}}`;
  let schemeTag = document.querySelector("style.customColourScheme");
  if (!schemeTag) {
    schemeTag = document.createElement("style");
    schemeTag.classList.add("customColourScheme");
    document.body.appendChild(schemeTag);
  }
  schemeTag.textContent = injectStr;
};
var ColourScheme_default = ColourScheme;

// src/js/features/SpotifyMode.jsx
var SpotifyMode = async (mode) => {
  if (!Spicetify.Platform.UserAPI._product_state_service) {
    setTimeout(() => SpotifyMode(mode), 100);
    return;
  }
  const modePairs = {
    default: { "app-developer": "0", employee: "0" },
    developer: { "app-developer": "2", employee: "0" },
    employee: { "app-developer": "0", employee: "1" },
    both: { "app-developer": "2", employee: "1" }
  };
  const pairs = modePairs[mode] || modePairs.default;
  const setMode = async (key, value) => {
    await Spicetify.Platform.UserAPI._product_state_service.putValues({
      pairs: { [key]: value }
    });
    return Spicetify.Platform.UserAPI._product_state_service.subValues(
      { keys: [key] },
      async (newValues) => {
        if (newValues[key] !== value) {
          await Spicetify.Platform.UserAPI._product_state_service.putValues({
            pairs: { [key]: value }
          });
        }
      }
    );
  };
  window.appDevListener?.cancel();
  window.employeeListener?.cancel();
  window.appDevListener = await setMode("app-developer", pairs["app-developer"]);
  window.employeeListener = await setMode("employee", pairs.employee);
};
var SpotifyMode_default = SpotifyMode;

// src/js/features/ToggleAppleMusic.jsx
var textObserverApple = null;
var collapsedObserverApple = null;
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
    const elements = globalNav.querySelectorAll(
      ".search-searchCategory-categoryGrid > div > button, .main-globalNav-searchContainer > .main-globalNav-link-icon, ._b3hhmbWtOY8_1M1mM1H"
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
  textObserverApple = new MutationObserver(addTextToButtons);
  textObserverApple.observe(globalNav, { childList: true, subtree: true });
  const addCollapsed = () => {
    const elementToWatch = document.querySelector(".sikBfynL1Y6I25nVpbAg");
    globalNav.classList.toggle("collapsed", elementToWatch != null);
  };
  addCollapsed();
  collapsedObserverApple = new MutationObserver(addCollapsed);
  collapsedObserverApple.observe(document.body, { childList: true, subtree: true });
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
var ToggleAppleMusic_default = ToggleAppleMusic;

// src/js/features/ToggleLibXUI.jsx
var textObserver = null;
var collapsedObserver = null;
async function ToggleLibXUI(isEnabled) {
  const globalNav = await waitForElements_default(".Root__globalNav");
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
      ".search-searchCategory-categoryGrid > div > button, .main-globalNav-searchContainer > .main-globalNav-link-icon, ._b3hhmbWtOY8_1M1mM1H"
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
  textObserver = new MutationObserver(addTextToButtons);
  textObserver.observe(globalNav, { childList: true, subtree: true });
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
  if (textObserver) {
    Console_default.Log("Removing libx observer");
    textObserver.disconnect();
    textObserver = null;
  }
  if (collapsedObserver) {
    Console_default.Log("Removing collapsedobserver");
    collapsedObserver.disconnect();
    collapsedObserver = null;
  }
  const textWrappers = globalNav.querySelectorAll(".main-globalNav-textWrapper");
  textWrappers.forEach((el) => el.remove());
}
var ToggleLibXUI_default = ToggleLibXUI;

// src/js/features/VolPercent.jsx
var VolPercent = async (isEnabled) => {
  const volumeBar = await waitForElements_default(".main-nowPlayingBar-volumeBar");
  const updateVol = () => {
    const input = volumeBar.querySelector(".vol-input");
    if (input) {
      input.value = Math.round(Spicetify.Player.getVolume() * 100);
    }
  };
  if (isEnabled) {
    if (!volumeBar.querySelector(".vol-percent")) {
      volumeBar.insertAdjacentHTML(
        "beforeend",
        `
							<div class="vol-percent" style="display: inline-flex; align-items: center;">
									<input type="text" class="vol-input" 
											style="width: 30px; font-size: 15px; border: none; background: transparent; text-align: right;">
									<span style="font-size: 15px;">%</span>
							</div>
					`
      );
      volumeBar.style.flex = "0 1 200px";
      const input = volumeBar.querySelector(".vol-input");
      input.addEventListener("change", () => {
        const newVol = Number.parseInt(input.value, 10);
        if (newVol >= 0 && newVol <= 100) {
          Spicetify.Player.setVolume(newVol / 100);
        }
      });
      Spicetify.Platform.PlaybackAPI._events.addListener("volume", updateVol);
      updateVol();
    }
  } else {
    const volumeBar2 = document.querySelector(".main-nowPlayingBar-volumeBar");
    if (volumeBar2) {
      volumeBar2.querySelector(".vol-percent")?.remove();
      volumeBar2.style.flex = "";
      Spicetify.Platform.PlaybackAPI._events.removeListener("volume", updateVol);
    }
  }
};
var VolPercent_default = VolPercent;

// src/js/menu/settingsmenu/options.jsx
var options = {
  Features: [
    {
      type: "dropdown",
      name: "colourschemeselector",
      desc: "Change the colour scheme of Spotify",
      defaultVal: "default",
      options: [
        { value: "default", label: "Default" },
        { value: "dark", label: "Dark" },
        { value: "light", label: "Light" },
        { value: "bloom", label: "Bloom" },
        { value: "spotify", label: "Spotify" }
      ],
      run(value) {
        ColourScheme_default(value);
      }
    },
    {
      type: "dropdown",
      name: "change-Spotify-mode",
      desc: "Change Spotify mode",
      defaultVal: "developer",
      tippy: "Only takes effect after a restart",
      options: [
        { value: "default", label: "Default" },
        { value: "developer", label: "Developer" },
        { value: "employee", label: "Employee" },
        { value: "both", label: "Dev + Empl" }
      ],
      run(value) {
        SpotifyMode_default(value);
      }
    },
    {
      type: "input",
      name: "ZoomLevel",
      desc: "Change the zoom level of Spotify page",
      defaultVal: 100,
      placeholder: "100%",
      run(value) {
        Zoomlevel = value / 100;
        document.documentElement.style.setProperty("--Zoomlevel", Zoomlevel);
      }
    },
    {
      type: "toggle",
      name: "AlbumBannerPage",
      desc: "Put album cover art in various pages",
      defaultVal: true,
      popupModal: AlbumBannerModal_default,
      run(value) {
        CoverArtBanner_default(value);
      }
    },
    {
      type: "toggle",
      name: "VolumePercentage",
      desc: "Show volume percentage next to volume slider",
      defaultVal: true,
      run(value) {
        VolPercent_default(value);
      }
    },
    {
      type: "toggle",
      name: "WindowsControl",
      desc: "Adjust the position and brightness of the windows controls",
      defaultVal: false,
      popupModal: WindowsControlModal_default
    },
    {
      type: "input",
      name: "uifont",
      desc: "Changes the font of the Spotify app",
      defaultVal: "SpotifyMixUI",
      placeholder: "SpotifyMixUI",
      tippy: "This will only work if you have the font installed locally",
      run(value) {
        document.documentElement.style.setProperty("--FontFamily", value);
      }
    }
  ],
  Layouts: [
    {
      type: "toggle",
      name: "LibX",
      desc: "Restore the old UI >2024 (Pre Global Nav Bar)",
      defaultVal: false,
      run(value) {
        ToggleLibXUI_default(value);
      },
      reveal: [
        {
          type: "toggle",
          name: "highlightnav",
          desc: "Adds highlight to the selected page",
          defaultVal: true
        },
        {
          type: "toggle",
          name: "PreLibX",
          desc: "Restore the old UI >2023 (Pre LibraryX)",
          defaultVal: false
        },
        {
          type: "toggle",
          name: "CompactLib",
          desc: "Makes library compact while keeping icons",
          defaultVal: false,
          tippy: "Broken if library is collapsed"
        }
      ]
    },
    {
      type: "toggle",
      name: "AppleMusic",
      desc: "Changes the UI to look like Apple Music",
      defaultVal: false,
      tippy: "Incompatible with LibX, Switchlayout and testlayout",
      run(value) {
        ToggleAppleMusic_default(value);
      }
    },
    {
      type: "toggle",
      name: "TestLayout",
      desc: "Rearrange playbutton to start and cover art to middle",
      defaultVal: true
    },
    {
      type: "toggle",
      name: "switchlayout",
      desc: "Uses different grid layout for Now playing bar",
      defaultVal: true
    }
  ],
  Snippets: [
    {
      type: "toggle",
      name: "hidetracklistnum",
      desc: "Hide tracklist numbers in various pages",
      defaultVal: true
    },
    {
      type: "toggle",
      name: "greenicon",
      desc: "Make the selected tab icon green",
      defaultVal: true
    },
    {
      type: "toggle",
      name: "transplayicon",
      desc: "Make the play/pause button transparent",
      defaultVal: true
    },
    {
      type: "toggle",
      name: "npvlargerlyrics",
      desc: "Show lyrics only in Now playing view",
      defaultVal: false
    },
    {
      type: "toggle",
      name: "homeheader",
      desc: "Remove the coloured gradient from the home page header",
      defaultVal: true
    }
  ],
  Test: [
    {
      type: "toggle",
      name: "test-toggle",
      desc: "Description",
      defaultVal: true,
      popupModal: WindowsControlModal_default,
      run(value) {
        console.log(value);
      }
    },
    {
      type: "input",
      name: "test-input",
      desc: "Description",
      defaultVal: 1,
      placeholder: "does something"
    },
    {
      type: "dropdown",
      name: "test-dropdown",
      desc: "Description",
      defaultVal: "test1",
      options: [
        { value: "test1", label: "test1" },
        { value: "test2", label: "test2" },
        { value: "test3", label: "test3" },
        { value: "test4", label: "test4" }
      ],
      run(value) {
        console.log(value);
      }
    },
    {
      type: "toggle",
      name: "test-reveal",
      desc: "Description",
      defaultVal: true,
      reveal: [
        {
          type: "toggle",
          name: "revealed-toggle",
          desc: "Description",
          defaultVal: true
        },
        {
          type: "input",
          name: "revealed-input",
          desc: "Description",
          defaultVal: true
        },
        {
          type: "dropdown",
          name: "revealed-dropdown",
          desc: "Description",
          defaultVal: "test1",
          options: [
            { value: "test1", label: "test1" },
            { value: "test2", label: "test2" },
            { value: "test3", label: "test3" },
            { value: "test4", label: "test4" }
          ]
        }
      ]
    }
  ]
};
var options_default = options;

// src/js/menu/helpers/applyOptions.jsx
var applyOptions = (settings, changedOptions = []) => {
  try {
    Object.values(options_default).flat().forEach(({ name, type, reveal, run }) => {
      const key = `theme:${name}`;
      const value = settings[key];
      if (type === "toggle") {
        document.body.classList.toggle(name, value);
      }
      if (reveal) {
        reveal.forEach(({ name: subName, type: subType }) => {
          if (subType === "toggle") {
            document.body.classList.toggle(subName, value && settings[`theme:${subName}`]);
          }
        });
      }
      if (changedOptions.includes(key) && run) {
        run(value);
      }
    });
  } catch (error) {
    Console_default.Error("Failed to apply options:", error);
  }
};
var applyOptions_default = applyOptions;

// src/js/menu/helpers/initialiseOptions.jsx
var initialiseOptions = () => {
  try {
    const loadedOptions = Object.values(options_default).flat().reduce((acc, option) => {
      const mainKey = `theme:${option.name}`;
      acc[mainKey] = LocalStorage_default.get(mainKey, option.defaultVal);
      if (option.reveal) {
        option.reveal.forEach((subOption) => {
          const subKey = `theme:${subOption.name}`;
          acc[subKey] = acc[mainKey] ? LocalStorage_default.get(subKey, subOption.defaultVal) : false;
        });
      }
      return acc;
    }, {});
    Object.values(options_default).flat().forEach((option) => {
      const key = `theme:${option.name}`;
      const value = loadedOptions[key];
      option.run?.(value);
    });
    applyOptions_default(loadedOptions);
    runModalSettings_default();
    return loadedOptions;
  } catch (error) {
    Console_default.Error("Failed to initialise options:", error);
  }
};
var initialiseOptions_default = initialiseOptions;

// src/js/menu/settingsmenu/SettingsButton.jsx
var import_react19 = __toESM(require_react(), 1);
var import_react_dom3 = __toESM(require_react_dom(), 1);

// src/js/components/ConfirmDialog.jsx
var import_react12 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);
function ConfirmDialog({
  titleText,
  descriptionText,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onConfirm,
  onClose,
  onOpen,
  onOutside,
  confirmLabel,
  allowHTML
}) {
  const ConfirmDialog2 = import_react12.default.memo(() => {
    const [state, setState] = Spicetify.React.useState(true);
    const menu = document.querySelector(".ReactModalPortal:last-of-type");
    import_react12.default.useEffect(() => {
      if (state) onOpen?.();
    }, []);
    return /* @__PURE__ */ import_react12.default.createElement(
      Spicetify.ReactComponent.RemoteConfigProvider,
      {
        configuration: Spicetify.Platform.RemoteConfiguration
      },
      /* @__PURE__ */ import_react12.default.createElement(
        Spicetify.ReactComponent.ConfirmDialog,
        {
          titleText,
          descriptionText,
          cancelText,
          confirmText,
          isOpen: state,
          onOutside: () => {
            setState(false);
            onOutside?.();
            menu?.remove();
          },
          onClose: () => {
            setState(false);
            onClose?.();
            menu?.remove();
          },
          onConfirm: () => {
            setState(false);
            onConfirm?.();
            menu?.remove();
          },
          confirmLabel,
          allowHTML
        }
      )
    );
  });
  import_react_dom2.default.createRoot(document.createElement("div")).render(/* @__PURE__ */ import_react12.default.createElement(ConfirmDialog2, null));
}
var ConfirmDialog_default = ConfirmDialog;

// src/js/utils/Window.jsx
var Window = {
  Reload: () => {
    location.reload();
  },
  Restart: () => {
    Spicetify.Platform.UpdateAPI.applyUpdate();
  }
};
var Window_default = Window;

// src/js/menu/settingsmenu/SettingsMenu.jsx
var import_react18 = __toESM(require_react(), 1);

// src/js/menu/components/CategoryCarousel.jsx
var import_react13 = __toESM(require_react(), 1);
var CategoryCarousel = import_react13.default.memo(({ categories }) => {
  const carouselRef = import_react13.default.useRef(null);
  import_react13.default.useEffect(() => {
    const handleWheel = (e) => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    const carousel = carouselRef.current;
    carousel?.addEventListener("wheel", handleWheel, { passive: false });
    return () => carousel?.removeEventListener("wheel", handleWheel);
  }, []);
  const buttonWidth = `calc((100% - ${(categories.length - 1) * 8}px) / ${categories.length})`;
  return /* @__PURE__ */ import_react13.default.createElement("div", { className: "category-carousel-container" }, /* @__PURE__ */ import_react13.default.createElement("div", { className: "category-carousel", ref: carouselRef }, categories.map((category, index) => /* @__PURE__ */ import_react13.default.createElement(
    "button",
    {
      key: category,
      className: "category-button",
      onClick: () => {
        document.querySelector(`.${category.toLowerCase()}Container`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      },
      style: {
        width: buttonWidth,
        marginRight: index < categories.length - 1 ? "8px" : "0"
      }
    },
    category
  ))));
});
var CategoryCarousel_default = CategoryCarousel;

// src/js/menu/components/Section.jsx
var import_react14 = __toESM(require_react(), 1);
var Section = import_react14.default.memo(({ name, children }) => {
  return /* @__PURE__ */ import_react14.default.createElement("div", { className: `themeSettingsCategory ${name.toLowerCase()}Container` }, /* @__PURE__ */ import_react14.default.createElement("h2", { className: "categoryTitle" }, name), children);
});
var Section_default = Section;

// src/js/menu/helpers/resetOptions.jsx
var resetOptions = (setSettings) => {
  ConfirmDialog_default({
    titleText: "Are you sure?",
    descriptionText: "This will reset all settings to default!",
    confirmText: "Reset",
    onOpen: () => {
      document.querySelector(".GenericModal__overlay").style.zIndex = 0;
    },
    onConfirm: () => {
      try {
        Console_default.Log("Resetting settings");
        const defaultSettings = {};
        [...Object.values(options_default).flat(), ...albumBannerOptions, ...windowsControlOptions].forEach(
          (option) => {
            defaultSettings[`theme:${option.name}`] = option.defaultVal;
            if (option.reveal) {
              option.reveal.forEach((subOption) => {
                defaultSettings[`theme:${subOption.name}`] = option.defaultVal ? subOption.defaultVal : false;
              });
            }
          }
        );
        Object.entries(defaultSettings).forEach(([key, value]) => {
          LocalStorage_default.set(key, value);
        });
        setSettings(defaultSettings);
        applyOptions_default(defaultSettings, Object.keys(defaultSettings));
        runModalSettings_default();
      } catch (error) {
        Console_default.Error("Failed to reset settings:", error);
      }
    }
  });
};
var resetOptions_default = resetOptions;

// src/js/menu/helpers/saveOptions.jsx
var saveOptions = (options2) => {
  try {
    const changedOptions = Object.entries(options2).filter(([key, value]) => {
      const currentValue = LocalStorage_default.get(key, null);
      if (JSON.stringify(currentValue) !== JSON.stringify(value)) {
        LocalStorage_default.set(key, value);
        return true;
      }
      return false;
    }).map(([key]) => key);
    if (changedOptions.length > 0) {
      const formattedChanges = changedOptions.map((key) => `${key} = ${options2[key]}`).join(", ");
      Console_default.Log(`Saving settings: ${formattedChanges}`);
      applyOptions_default(options2, changedOptions);
    }
  } catch (error) {
    Console_default.Error("Failed to save settings:", error);
  }
};
var saveOptions_default = saveOptions;

// src/js/menu/hooks/useSettings.jsx
var import_react15 = __toESM(require_react(), 1);
var useSettings = () => {
  const [settings, setSettings] = import_react15.default.useState(
    () => Object.values(options_default).flat().reduce((acc, option) => {
      const key = `theme:${option.name}`;
      acc[key] = LocalStorage_default.get(key, option.defaultVal);
      if (option.reveal) {
        option.reveal.forEach((subOption) => {
          const subKey = `theme:${subOption.name}`;
          acc[subKey] = acc[key] ? LocalStorage_default.get(subKey, subOption.defaultVal) : false;
        });
      }
      return acc;
    }, {})
  );
  const handleSettingChange = import_react15.default.useCallback((key, value) => {
    setSettings((prev) => {
      const newSettings = { ...prev, [key]: value };
      const optionName = key.replace("theme:", "");
      const categoryOption = Object.values(options_default).flat().find((opt) => opt.name === optionName);
      if (categoryOption?.reveal) {
        categoryOption.reveal.forEach((subOption) => {
          const subKey = `theme:${subOption.name}`;
          newSettings[subKey] = value ? subOption.defaultVal : false;
        });
      }
      return newSettings;
    });
  }, []);
  return [settings, handleSettingChange, setSettings];
};
var useSettings_default = useSettings;

// src/js/menu/settingsmenu/RenderOptions.jsx
var import_react17 = __toESM(require_react(), 1);

// src/js/menu/components/RevealableOption.jsx
var import_react16 = __toESM(require_react(), 1);
var RevealableOption = import_react16.default.memo(({ option, settings, onChange }) => {
  return /* @__PURE__ */ import_react16.default.createElement("div", { className: "themeOptionRevealed" }, option.reveal.map((subOption) => /* @__PURE__ */ import_react16.default.createElement(
    OptionType_default,
    {
      key: subOption.name,
      option: subOption,
      value: settings[`theme:${subOption.name}`],
      onChange
    }
  )));
});
var RevealableOption_default = RevealableOption;

// src/js/menu/settingsmenu/RenderOptions.jsx
var RenderOptions = import_react17.default.memo(({ option, settings, onChange }) => {
  const mainValue = settings[`theme:${option.name}`];
  return /* @__PURE__ */ import_react17.default.createElement("div", { className: "themeOptionWrapper" }, /* @__PURE__ */ import_react17.default.createElement("div", { className: "themeOptionMain" }, /* @__PURE__ */ import_react17.default.createElement(
    OptionType_default,
    {
      option,
      value: mainValue,
      onChange,
      popupModal: option.popupModal
    }
  )), mainValue && option.reveal && /* @__PURE__ */ import_react17.default.createElement(RevealableOption_default, { option, settings, onChange }));
});
var RenderOptions_default = RenderOptions;

// src/js/menu/settingsmenu/SettingsMenu.jsx
var SettingsMenu = import_react18.default.memo(() => {
  const [settings, handleSettingChange, setSettings] = useSettings_default();
  const categories = Object.keys(options_default);
  return /* @__PURE__ */ import_react18.default.createElement("div", { className: "themeContainer" }, /* @__PURE__ */ import_react18.default.createElement(CategoryCarousel_default, { categories }), Object.entries(options_default).map(([category, categoryOptions]) => /* @__PURE__ */ import_react18.default.createElement(Section_default, { key: category, name: category }, categoryOptions.map((option) => /* @__PURE__ */ import_react18.default.createElement(
    RenderOptions_default,
    {
      key: option.name,
      option,
      settings,
      onChange: handleSettingChange
    }
  )))), /* @__PURE__ */ import_react18.default.createElement("div", { className: "buttonContainer" }, /* @__PURE__ */ import_react18.default.createElement("button", { className: "resetButton", onClick: () => resetOptions_default(setSettings) }, "Reset"), /* @__PURE__ */ import_react18.default.createElement("button", { className: "saveButton", onClick: () => saveOptions_default(settings) }, "Save")));
});
var SettingsMenu_default = SettingsMenu;

// src/js/menu/settingsmenu/SettingsButton.jsx
var SettingsButton = () => {
  const SettingsButton2 = new Spicetify.Topbar.Button(
    "Theme Settings",
    icons_default.settings,
    () => {
      PopupModal_default({
        title: "Theme Settings",
        content: SettingsMenu_default
      });
    },
    false,
    true
  );
  SettingsButton2.element.oncontextmenu = (event) => {
    event.preventDefault();
    const existingMenu = document.getElementById("context-menu");
    if (existingMenu) {
      existingMenu.remove();
    }
    const menuContainer = document.createElement("div");
    menuContainer.id = "context-menu";
    menuContainer.style.position = "absolute";
    menuContainer.style.top = `${event.clientY}px`;
    menuContainer.style.left = `${event.clientX}px`;
    menuContainer.style.zIndex = "1000";
    document.body.appendChild(menuContainer);
    const removeContextMenu = (event2) => {
      if (!menuContainer.contains(event2.target) && !SettingsButton2.element.contains(event2.target)) {
        menuContainer.remove();
        document.removeEventListener("mousedown", removeContextMenu);
      }
    };
    import_react_dom3.default.createRoot(menuContainer).render(
      /* @__PURE__ */ import_react19.default.createElement(Spicetify.ReactComponent.Menu, null, /* @__PURE__ */ import_react19.default.createElement(
        Spicetify.ReactComponent.MenuItem,
        {
          onClick: () => {
            Window_default.Reload();
            removeContextMenu(new MouseEvent("mousedown"));
          },
          divider: true
        },
        "Reload theme"
      ), /* @__PURE__ */ import_react19.default.createElement(
        Spicetify.ReactComponent.MenuItem,
        {
          onClick: () => {
            Window_default.Restart();
            removeContextMenu(new MouseEvent("mousedown"));
          },
          divider: true
        },
        "Restart Spotify"
      ), /* @__PURE__ */ import_react19.default.createElement(
        Spicetify.ReactComponent.MenuItem,
        {
          onClick: () => {
            ConfirmDialog_default({
              titleText: "Confirm Dialog",
              descriptionText: "Are you <b>sure</b>?",
              onOutside: () => Spicetify.showNotification("Clicked outside"),
              confirmLabel: "Ok",
              allowHTML: true
            });
            removeContextMenu(new MouseEvent("mousedown"));
          },
          divider: true
        },
        "Confirm Dialog"
      ), /* @__PURE__ */ import_react19.default.createElement(
        Spicetify.ReactComponent.MenuItem,
        {
          onClick: () => {
            PopupModal_default({
              title: "Theme Settings",
              content: SettingsMenu_default
            });
            removeContextMenu(new MouseEvent("mousedown"));
          },
          divider: true
        },
        "Theme Settings"
      ), /* @__PURE__ */ import_react19.default.createElement(
        Spicetify.ReactComponent.MenuItem,
        {
          onClick: () => {
            PopupModal_default({
              title: "Debug Menu",
              content: DebugMenu_default
            });
            removeContextMenu(new MouseEvent("mousedown"));
          },
          divider: true
        },
        "Debug Menu"
      ))
    );
    document.addEventListener("mousedown", removeContextMenu);
  };
};
var SettingsButton_default = SettingsButton;

// src/js/app.jsx
(async function main() {
  const timeout = Date.now() + 5e3;
  while (!(Spicetify.Platform && Spicetify.Mousetrap && Spicetify.CosmosAsync && Spicetify.Snackbar.enqueueSnackbar && Spicetify.Snackbar.enqueueCustomSnackbar && Spicetify.ReactComponent)) {
    if (Date.now() > timeout) {
      Console_default.Error("Error: Required components not found.");
      Notification_default({
        autoHideDuration: 5e3,
        backgroundColor: "#ff9800",
        message: /* @__PURE__ */ import_react20.default.createElement(import_react20.default.Fragment, null, /* @__PURE__ */ import_react20.default.createElement(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            dangerouslySetInnerHTML: { __html: icons_default.warning }
          }
        ), /* @__PURE__ */ import_react20.default.createElement("span", null, "Theme could not load. Please refresh the page and try again."))
      });
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  Console_default.Log("Spicetify theme initialising");
  Spicetify.Mousetrap.bind(["escape"], () => {
    Spicetify.PopupModal.hide();
  });
  Spicetify.Mousetrap.bind("f8", () => {
    debugger;
  });
  const SpotifyVersion = Spicetify.Platform.PlatformData.event_sender_context_information.client_version_int;
  if (SpotifyVersion < 1255e5) {
    Notification_default({
      autoHideDuration: 5e3,
      backgroundColor: "#ff9800",
      message: /* @__PURE__ */ import_react20.default.createElement(import_react20.default.Fragment, null, /* @__PURE__ */ import_react20.default.createElement(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          dangerouslySetInnerHTML: { __html: icons_default.warning }
        }
      ), /* @__PURE__ */ import_react20.default.createElement("span", null, "Theme only supports Spotify versions greater than 1.2.50.000"))
    });
  }
  UpdateZoom_default();
  Mousetrap_default();
  SettingsButton_default();
  initialiseOptions_default();
  Console_default.Log("Spicetify theme initialised");
})();
})();
