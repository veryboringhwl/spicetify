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

// external-global-plugin:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "external-global-plugin:react/jsx-runtime"(exports, module) {
    module.exports = Spicetify.ReactJSX;
  }
});

// src/js/components/PopupModal.jsx
var import_react = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// src/js/icons/Icons.jsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var Icons = {
  //24px
  editButton: "M17.318 1.975a3.329 3.329 0 114.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 01-1.28-1.28l1.581-4.376a4.726 4.726 0 011.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 00-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 001.001-.636L20.611 5.268a1.329 1.329 0 000-1.879z",
  //24px
  settings: "M7.96 5.33a2.67 2.67 90 100 5.34 2.67 2.67 90 000-5.34ZM6.67 8A1.33 1.33 90 119.33 8 1.33 1.33 90 016.67 8Zm4.82-4.81a.95.94 90 01-1.1-.75L10.05.55A.47.47 90 009.68.17 8.1 8.1 90 006.32.17.47.47 90 005.96.55L5.61 2.44a.95.95 90 01-1.25.71L2.55 2.51a.47.47 90 00-.51.13C1.28 3.47.71 4.46.36 5.53a.47.47 90 00.14.51L1.97 7.28a.94.94 90 010 1.43L.5 9.95a.47.47 90 00-.14.51 7.98 7.98 90 001.68 2.9.47.47 90 00.51.13l1.81-.65a.94.94 90 011.25.72l.34 1.89c.04.18.18.33.37.37a8.1 8.1 90 003.36 0 .47.47 90 00.37-.37l.34-1.89a.95.95 90 011.25-.72l1.81.65c.18.06.38.01.51-.13.76-.84 1.34-1.82 1.68-2.9a.47.47 90 00-.14-.5L14.03 8.72a.94.94 90 010-1.44L15.5 6.04a.47.47 90 00.14-.5 7.98 7.98 90 00-1.68-2.9.47.47 90 00-.51-.13l-1.81.65a.95.95 90 01-.15.04Zm-8.82.78 1.25.44a2.28 2.28 90 003-1.73l.24-1.3a6.81 6.81 90 011.68 0l.24 1.3a2.28 2.28 90 003.01 1.73l1.24-.44c.34.44.63.93.84 1.44l-1 .85a2.27 2.27 90 000 3.48l1 .85a6.65 6.65 90 01-.84 1.44l-1.24-.44A2.28 2.28 90 009.08 13.32l-.24 1.29a6.8 6.8 90 01-1.69 0l-.23-1.29A2.28 2.28 90 003.91 11.59l-1.24.44a6.65 6.65 90 01-.84-1.44l1-.86a2.27 2.27 90 000-3.47l-1-.85c.21-.51.5-1 .84-1.44Z",
  //24px
  github: "M12.2135 0C18.947 0 24.4267 5.5 24.4066 12.3041c0 5.4391-3.4983 10.0428-8.3513 11.6728-.6065.1223-.829-.265-.829-.591 0-.4072.02-1.7315.02-3.3815 0-1.1613-.384-1.8945-.829-2.2815 2.73-.3058 5.581-1.3445 5.581-6.0708 0-1.3445-.465-2.4445-1.2537-3.3.1213-.3055.5463-1.5688-.1212-3.2595 0 0-1.0312-.326-3.3567 1.263-.9707-.2648-2.0219-.4075-3.0532-.4075A11.7425 11.7425 90 009.16 6.3556c-2.3252-1.589-3.3565-1.263-3.3565-1.263-.6675 1.6907-.2427 2.954-.1215 3.2595-.7685.8555-1.2535 1.9555-1.2535 3.3 0 4.7263 2.8509 5.7855 5.5607 6.0708-.3437.3055-.6675.8555-.7685 1.65-.7077.326-2.467.8555-3.5587-1.0185 0 0-.6472-1.1815-1.8807-1.263 0 0-1.193 0-.081.7538 0 0 .809.3665 1.355 1.7925 0 0 .7075 2.2002 4.105 1.4667 0 1.0188.02 1.9965.02 2.2818 0 .3258-.2222.713-.829.5905C3.4983 22.3472 0 17.7432 0 12.3042 0 5.5 5.4597 0 12.2135 0Z",
  //32px
  close: "M31.098 29.794 16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143",
  //24px
  warning: "M13 14V9H11v5Zm0 2H11v2h2Zm8.884 3.5A1 1 0 0121 21H3a1 1 0 01-.884-1.468l9-17c.346-.654 1.422-.654 1.768 0Z",
  //16px
  more: "M3 8A1.5 1.5 0 110 8a1.5 1.5 0 013 0zm6.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  //24px
  questionMark: "M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12 6.477 2 12 2Zm0 1.667c-4.595 0-8.333 3.738-8.333 8.333S7.405 20.333 12 20.333 20.333 16.595 20.333 12c0-4.595-3.738-8.333-8.333-8.333ZM12 15.5a1 1 0 110 2 1 1 0 010-2Zm0-8.75a2.75 2.75 0 012.75 2.75c0 1.01-.297 1.574-1.051 2.359l-.169.171c-.622.622-.78.886-.78 1.47a.75.75 0 01-1.5 0c0-1.01.297-1.574 1.051-2.359l.169-.171c.622-.622.78-.886.78-1.47a1.25 1.25 0 00-2.493-.128l-.007.128a.75.75 0 01-1.5 0A2.75 2.75 0 0112 6.75Z",
  //24px
  dropdown: "M20.4614 6.3469a1.506 1.506 90 00-2.1125.1919L12 14.1564 5.651 6.5389a1.4997 1.4997 90 10-2.3028 1.922l7.5004 9.0004a1.4992 1.4992 90 002.3028 0l7.5004-9.0005a1.5019 1.5019 90 00-.1904-2.1139Z",
  //24px
  palette: "M12 2c5.461 0 9.965 4.012 9.992 8.84 0 3.051-2.504 5.554-5.555 5.554H14.441a1.64 1.64 0 00-1.668 1.668c0 .473.148.836.438 1.125.257.29.437.688.437 1.125C13.648 21.254 12.926 22 12 22 6.5 22 2 17.5 2 12S6.5 2 12 2Z",
  //16px
  duplicate: "M15 3.5c0-.5-.5-1-1-1H11V1c0-.5-.5-1-1-1H2C1.5 0 1 .5 1 1V11.5c0 .5.5 1 1 1H4.5V15c0 .5.5 1 1 1H14c.5 0 1-.5 1-1ZM2.5 2c0-.25.25-.5.5-.5H9c.25 0 .5.25.5.5v8.5c0 .25-.25.5-.5.5H3c-.25 0-.5-.25-.5-.5Zm4 12.5c-.25 0-.5-.25-.5-.5V12.5h4c.5 0 1-.5 1-1V4h2c.25 0 .5.25.5.5V14c0 .25-.25.5-.5.5Z"
};
var ReactComponent = (icon, defaultSize = 16) => {
  return ({ size = defaultSize, fill = "currentColor" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: `0 0 ${defaultSize} ${defaultSize}`, width: size, height: size, fill, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: icon }) });
};
Icons.React = {
  editButton: ReactComponent(Icons.editButton, 24),
  settings: ReactComponent(Icons.settings, 16),
  github: ReactComponent(Icons.github, 24),
  close: ReactComponent(Icons.close, 32),
  warning: ReactComponent(Icons.warning, 24),
  more: ReactComponent(Icons.more, 16),
  questionMark: ReactComponent(Icons.questionMark, 24),
  dropdown: ReactComponent(Icons.dropdown, 24),
  palette: ReactComponent(Icons.palette, 24),
  duplicate: ReactComponent(Icons.duplicate, 16)
};
Icons.HTML = {
  editButton: `<path d="${Icons.editButton}"/>`,
  settings: `<path d="${Icons.settings}"/>`,
  github: `<path d="${Icons.github}"/>`,
  close: `<path d="${Icons.close}"/>`,
  warning: `<path d="${Icons.warning}"/>`,
  more: `<path d="${Icons.more}"/>`,
  questionMark: `<path d="${Icons.questionMark}"/>`,
  dropdown: `<path d="${Icons.dropdown}"/>`,
  palette: `<path d="${Icons.palette}"/>`,
  duplicate: `<path d="${Icons.duplicate}"/>`
};
var Icons_default = Icons;

// src/js/components/PopupModal.jsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var modalContainer = null;
var modalRoot = null;
var closeModal = () => {
  if (modalRoot && modalContainer) {
    modalRoot.unmount();
    modalContainer.remove();
    document.body.style.overflow = "auto";
    document.removeEventListener("keydown", handleEscKey);
    document.removeEventListener("mousedown", handleClickOutside);
    modalContainer = null;
    modalRoot = null;
  }
};
var handleEscKey = (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
};
var handleClickOutside = (event) => {
  if (event.target.classList.contains("modal-overlay")) {
    closeModal();
  }
};
var PopupModal = ({ title = "", content, isLarge = true, buttons = false, icon = "" } = {}) => {
  modalContainer = document.getElementById("popup-modal");
  if (!modalContainer) {
    modalContainer = document.createElement("popup-modal");
    modalContainer.id = "popup-modal";
    document.body.appendChild(modalContainer);
  }
  modalRoot = import_react_dom.default.createRoot(modalContainer);
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", handleEscKey);
  document.addEventListener("mousedown", handleClickOutside);
  const ModalComponent = (0, import_react.memo)(() => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "modal-overlay", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "modal", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `modal__container${isLarge ? " modal__container--large" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "modal__header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "modal__titleContainer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "modal__icon", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { className: "modal__title", children: title })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "modal__buttonContainer", children: [
        buttons,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Spicetify.ReactComponent.TooltipWrapper, { label: "Close", placement: "top", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { className: "modal__button modal__button--close", onClick: () => closeModal(), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icons_default.React.close, { size: 18 }) }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "modal__content", children: import_react.default.isValidElement(content) ? content : import_react.default.createElement(content) })
  ] }) }) }));
  modalRoot.render(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ModalComponent, {}));
};
PopupModal.hide = closeModal;
var PopupModal_default = PopupModal;

// src/js/debug/DebugMenu.jsx
var import_react7 = __toESM(require_react(), 1);

// src/js/components/LoadingIndicator.jsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var LoadingIndicator = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "loading-indicator-container", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 120 40", className: "loading-indicator", children: [
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { stroke: "none", cx: "20", cy: "20", r: "8", className: "loading-indicator-circle" }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { stroke: "none", cx: "60", cy: "20", r: "8", className: "loading-indicator-circle" }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { stroke: "none", cx: "100", cy: "20", r: "8", className: "loading-indicator-circle" })
] }) });
var LoadingIndicator_default = LoadingIndicator;

// src/js/menu/components/OptionRow.jsx
var import_react4 = __toESM(require_react(), 1);

// src/js/components/TippyButton.jsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var TippyButton = (0, import_react2.memo)(({ tippy }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Spicetify.ReactComponent.TooltipWrapper, { label: tippy, placement: "top", showDelay: 0, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "info-tippy", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icons_default.React.questionMark, { size: 20, fill: "var(--spice-subtext)" }) }) });
});
var TippyButton_default = TippyButton;

// src/js/menu/components/PopupButton.jsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var PopupButton = (0, import_react3.memo)(({ name, popupModal }) => {
  if (!popupModal) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "button",
    {
      className: "popup-button",
      onClick: () => PopupModal_default({
        title: name,
        content: popupModal,
        isLarge: false
      }),
      "aria-label": "Open popup",
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icons_default.React.editButton, { size: 16 })
    }
  );
});
var PopupButton_default = PopupButton;

// src/js/menu/components/OptionRow.jsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var OptionRow = (0, import_react4.memo)(({ name, desc, tippy, children, popupModal }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "themeOptionRow", "data-name": name, children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "themeOptionContent", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "themeOptionDesc", children: desc }) }),
  /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "themeOptionControl", children: [
    tippy && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TippyButton_default, { tippy }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PopupButton_default, { name, popupModal }),
    children
  ] })
] }));
var OptionRow_default = OptionRow;

// src/js/menu/components/RadioButton.jsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var RadioButton = (0, import_react5.memo)(({ options: options2, name, selected, onChange, disabled }) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "radio-button", children: options2.map((option) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: "radio-button__item", children: [
  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "input",
    {
      className: "radio-button__input",
      type: "radio",
      name,
      value: option.value,
      checked: selected === option.value,
      onChange: (e) => onChange(e),
      disabled
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "radio-button__text", children: option.label })
] }, option.value)) }));
var RadioButton_default = RadioButton;

// src/js/menu/components/Toggle.jsx
var import_react6 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var Toggle = (0, import_react6.memo)(({ value, onChange, disabled }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { className: "toggle", onClick: onChange, disabled, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "toggle__background", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
  "span",
  {
    className: `toggle__slider${value ? " toggle__slider--enabled" : ""}${disabled ? " toggle__slider--disabled" : ""}`
  }
) }) }));
var Toggle_default = Toggle;

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
var Console_default = Console;

// src/js/utils/Notification.jsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var Notification = ({
  message = "",
  keyPrefix = "custom-notif",
  autoHideDuration = 3e3,
  backgroundColour = "#fff",
  colour = "#000",
  isWarning = false
} = {}) => {
  const content = isWarning ? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Icons_default.React.warning, { size: 24 }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: message })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: message });
  const BackgroundColour = isWarning ? "#ff9800" : backgroundColour;
  const Colour = isWarning ? "#fff" : colour;
  try {
    Spicetify.Snackbar.enqueueCustomSnackbar(keyPrefix, {
      keyPrefix,
      autoHideDuration,
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "div",
        {
          className: "custom-notification",
          style: {
            display: "flex",
            gap: "8px",
            alignItems: "center",
            color: Colour,
            backgroundColor: BackgroundColour,
            padding: "14px 16px",
            borderRadius: "4px",
            fontSize: "0.875rem"
          },
          children: content
        }
      )
    });
  } catch (error) {
    Console_default.Error("Error displaying notification:", error);
  }
};
var Notification_default = Notification;

// src/js/debug/DebugMenu.jsx
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var DebugMenu = (0, import_react7.memo)(() => {
  const [lastVersion, setLastVersion] = (0, import_react7.useState)("Loading...");
  const [lastUpdated, setLastUpdated] = (0, import_react7.useState)("Loading...");
  const [enabled, setEnabled] = (0, import_react7.useState)(false);
  const [selectedRadio, setSelectedRadio] = (0, import_react7.useState)("option1");
  (0, import_react7.useEffect)(() => {
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
    "Current Theme Version": "v1.2.0",
    "Newest Theme Version": lastVersion,
    "Last Updated": lastUpdated,
    "Spotify Version": Spicetify.Platform.version,
    "Spicetify Version": Spicetify.Config.version,
    Platform: Spicetify.Platform.PlatformData.app_platform,
    OS: Spicetify.Platform.PlatformData.os_name,
    Theme: Spicetify.Config.current_theme,
    Extensions: Spicetify.Config.extensions.join(", "),
    "Custom apps": Spicetify.Config.custom_apps.join(", "),
    "Colour Scheme": Spicetify.Config.color_scheme
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "theme-version", children: [
    Object.entries(Info).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "theme-info-item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: "theme-info-key encore-text-body-medium-bold", children: [
        key,
        ": "
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "theme-info-value", children: value })
    ] }, key)),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { children: [
      "Press ",
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("kbd", { children: "F8" }),
      " to pause script execution."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "button",
      {
        onClick: () => {
          Notification_default({
            autoHideDuration: 1e4,
            message: "Debug Menu notification lolololol"
          });
        },
        children: "Special Button"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "loading-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(LoadingIndicator_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icons_default.React.duplicate, { size: 50 }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icons_default.React.palette, { size: 50 }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      Spicetify.ReactComponent.Cards.Default,
      {
        id: "card-id",
        title: "Card Title",
        subtitle: "Card Subtitle",
        media: "https://placehold.co/100",
        size: "sm",
        onClick: () => console.log("Card clicked"),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Spicetify.ReactComponent.Cards.Default.Body, { children: "Additional content here" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Spicetify.ReactComponent.Cards.Default.Footer, { children: "Footer content" })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Spicetify.ReactComponent.TextComponent,
      {
        semanticColor: "textBase",
        variant: "viola",
        weight: "book",
        children: "Hello World"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Spicetify.ReactComponent.TooltipWrapper,
      {
        label: "Hello World",
        placement: "top",
        trigger: "mouseenter",
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: "Hover me" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(OptionRow_default, { name: "BITCH", desc: "REEEEEE", tippy: "HELLOE", popupModal: DebugMenu, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Toggle_default, { value: enabled, onChange: () => setEnabled(!enabled) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      RadioButton_default,
      {
        items: [
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" }
        ],
        name: "debugRadio",
        selected: selectedRadio,
        onChange: setSelectedRadio
      }
    )
  ] });
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

// src/js/utils/LocalStorage.jsx
var LocalStorage = {
  get(key, defaultValue) {
    try {
      const item = localStorage.getItem(`theme:${key}`);
      return item !== void 0 && item !== null ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error getting ${key} from localStorage:`, error);
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(`theme:${key}`, JSON.stringify(value));
      return true;
    } catch (error) {
      Console_default.Error(`Error setting ${key} in localStorage:`, error);
      return false;
    }
  }
};
var LocalStorage_default = LocalStorage;

// src/js/menu/modalmenu/AlbumBannerModal.jsx
var import_react13 = __toESM(require_react(), 1);

// src/js/menu/components/ButtonContainer.jsx
var import_react8 = __toESM(require_react(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var ButtonContainer = (0, import_react8.memo)(({ resetSettings, saveSettings }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "button-container", children: [
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "button",
    {
      className: "button-container__button button-container__button--reset",
      onClick: resetSettings,
      children: "Reset"
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "button",
    {
      className: "button-container__button button-container__button--save",
      onClick: saveSettings,
      children: "Save"
    }
  )
] }));
var ButtonContainer_default = ButtonContainer;

// src/js/menu/components/OptionType.jsx
var import_react11 = __toESM(require_react(), 1);

// src/js/menu/components/Dropdown.jsx
var import_react9 = __toESM(require_react(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var Dropdown = (0, import_react9.memo)(({ value, options: options2, onChange, disabled }) => {
  const popoverId = (0, import_react9.useId)();
  const popoverRef = (0, import_react9.useRef)(null);
  const anchorName = `--dropdown-anchor-${popoverId.replace(/:/g, "id")}`;
  const handleSelect = (option) => {
    onChange?.({ target: { value: option.value } });
    popoverRef.current?.hidePopover();
  };
  const selectedLabel = options2.find((opt) => opt.value === value)?.label || "Select...";
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: `dropdown${disabled ? " dropdown--disabled" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "button",
      {
        className: "dropdown__button",
        popovertarget: popoverId,
        popovertargetaction: "toggle",
        disabled,
        style: { anchorName },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "dropdown__text", children: selectedLabel }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "dropdown__arrow", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Icons_default.React.dropdown, { size: 12 }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        popover: "auto",
        id: popoverId,
        ref: popoverRef,
        className: "dropdown__menu",
        style: {
          top: `calc(anchor(${anchorName} bottom) + 4px)`,
          left: `anchor(${anchorName} left)`,
          width: `anchor-size(${anchorName} width)`
        },
        children: options2.map((option) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "div",
          {
            className: `dropdown__option${value === option.value ? " dropdown__option--selected" : ""}`,
            onClick: () => handleSelect(option),
            children: option.label
          },
          option.value
        ))
      }
    )
  ] });
});
var Dropdown_default = Dropdown;

// src/js/menu/components/Input.jsx
var import_react10 = __toESM(require_react(), 1);
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var Input = (0, import_react10.memo)(({ value, onChange, placeholder, disabled }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  "input",
  {
    className: "input",
    type: "text",
    value,
    onChange,
    placeholder,
    disabled
  }
));
var Input_default = Input;

// src/js/menu/components/OptionType.jsx
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var OptionType = (0, import_react11.memo)(({ option, value, onChange, disabled }) => {
  const handleChange = (0, import_react11.useCallback)(
    (e) => {
      const newValue = option.type === "toggle" ? !value : e.target.value;
      onChange(option.name, newValue);
    },
    [option.name, option.type, value, onChange]
  );
  let Component;
  const componentProps = {
    value,
    onChange: handleChange,
    disabled
  };
  if (option.type === "toggle") {
    Component = Toggle_default;
  } else if (option.type === "dropdown") {
    Component = Dropdown_default;
    componentProps.options = option.options;
  } else if (option.type === "input") {
    Component = Input_default;
    componentProps.placeholder = option.placeholder;
  } else if (option.type === "radiobutton") {
    Component = RadioButton_default;
    componentProps.options = option.options;
    componentProps.selected = value;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    OptionRow_default,
    {
      name: option.name,
      desc: option.desc,
      tippy: option.tippy,
      popupModal: option.popupModal,
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Component, { ...componentProps })
    }
  );
});
var OptionType_default = OptionType;

// src/js/menu/modalmenu/useModalSettings.jsx
var import_react12 = __toESM(require_react(), 1);

// src/js/menu/helpers/getInitialOptions.jsx
function getInitialOptions(optionList) {
  const acc = {};
  for (const option of optionList) {
    const mainKey = option.name;
    acc[mainKey] = LocalStorage_default.get(mainKey, option.defaultVal);
    if (option.reveal) {
      for (const subOption of option.reveal) {
        const subKey = subOption.name;
        acc[subKey] = acc[mainKey] ? LocalStorage_default.get(subKey, subOption.defaultVal) : false;
      }
    }
  }
  return acc;
}
var getInitialOptions_default = getInitialOptions;

// src/js/menu/modalmenu/useModalSettings.jsx
var useModalSettings = (options2) => {
  const [settings, setSettings] = (0, import_react12.useState)(() => getInitialOptions_default(options2));
  const updateSetting = (0, import_react12.useCallback)((key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);
  const resetSettings = (0, import_react12.useCallback)(() => {
    const defaultSettings = Object.fromEntries(
      options2.map((option) => [option.name, option.defaultVal])
    );
    setSettings(defaultSettings);
    options2.forEach((option) => {
      LocalStorage_default.set(option.name, option.defaultVal);
      if (option.run) {
        option.run(option.defaultVal);
      }
    });
  }, [options2]);
  const saveSettings = (0, import_react12.useCallback)(() => {
    Object.entries(settings).forEach(([key, value]) => {
      LocalStorage_default.set(key, value);
      const option = options2.find((opt) => opt.name === key);
      if (option) {
        if (option.run) {
          option.run(value);
        }
      }
    });
  }, [settings, options2]);
  return { settings, updateSetting, resetSettings, saveSettings };
};
var useModalSettings_default = useModalSettings;

// src/js/menu/modalmenu/AlbumBannerModal.jsx
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var AlbumBannerModal = (0, import_react13.memo)(() => {
  const { settings, updateSetting, resetSettings, saveSettings } = useModalSettings_default(albumBannerOptions);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "settings-modal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "settings-modal__options", children: albumBannerOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      OptionType_default,
      {
        option,
        value: settings[option.name],
        onChange: (key, value) => updateSetting(key, value)
      },
      option.name
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "settings-modal__buttons", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ButtonContainer_default, { resetSettings, saveSettings }) })
  ] });
});
var albumBannerOptions = [
  {
    type: "toggle",
    name: "album-banner-page",
    desc: "Puts album art in places",
    defaultVal: true,
    run(value) {
      document.documentElement.classList.toggle("album-banner-page", value);
    }
  },
  {
    type: "toggle",
    name: "lyrics-page",
    desc: "Adds Dynamic backgrounds to Lyrics Page",
    defaultVal: true,
    tippy: "Includes Spotify Lyrics page and Spicetify's Lyrics Plus",
    run(value) {
      document.documentElement.classList.toggle("lyrics-page", value);
    }
  },
  {
    type: "toggle",
    name: "playlist-page",
    desc: "Adds Dynamic backgrounds to your Playlist Pages",
    defaultVal: true,
    run(value) {
      document.documentElement.classList.toggle("playlist-page", value);
    }
  },
  {
    type: "toggle",
    name: "artist-page",
    desc: "Adds Dynamic backgrounds to Artist Pages",
    defaultVal: true,
    run(value) {
      document.documentElement.classList.toggle("artist-page", value);
    }
  },
  {
    type: "toggle",
    name: "album-page",
    desc: "Adds Dynamic backgrounds to Album Pages",
    defaultVal: true,
    run(value) {
      document.documentElement.classList.toggle("album-page", value);
    }
  },
  {
    type: "toggle",
    name: "misc-page",
    desc: "Adds Dynamic backgrounds to Misc Pages",
    defaultVal: true,
    tippy: "Enables album art for Station, Collection, Show, Episode, Genre, User",
    run(value) {
      document.documentElement.classList.toggle("misc-page", value);
    }
  }
];
var AlbumBannerModal_default = AlbumBannerModal;

// src/js/menu/modalmenu/WindowsControlModal.jsx
var import_react14 = __toESM(require_react(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var WindowsControlModal = (0, import_react14.memo)(() => {
  const { settings, updateSetting, resetSettings, saveSettings } = useModalSettings_default(windowsControlOptions);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "settings-modal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "settings-modal__options", children: windowsControlOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      OptionType_default,
      {
        option,
        value: settings[option.name],
        onChange: (key, value) => updateSetting(key, value)
      },
      option.name
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "settings-modal__buttons", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ButtonContainer_default, { resetSettings, saveSettings }) })
  ] });
});
var windowsControlOptions = [
  {
    type: "toggle",
    name: "windows-control",
    desc: "Enable custom Windows Controls",
    defaultVal: false,
    run: (value) => {
      document.documentElement.classList.toggle("windows-control", value);
    }
  },
  {
    type: "toggle",
    name: "hide-windows-control",
    desc: "Removes Spotifys Windows Controls completely",
    defaultVal: false,
    run: (value) => {
      if (document.documentElement.classList.contains("WindowsControl")) {
        const threeDots = document.querySelector(".CCIGxtpAreSdwWRo14FE");
        const windowsControl = document.querySelector(".main-topBar-topbarContentRight");
        if (value) {
          Spicetify.Platform.ControlMessageAPI._updateUiClient.setButtonsVisibility({
            showButtons: false
          });
          Spicetify.Platform.ControlMessageAPI._updateUiClient.updateTitlebarHeight({ height: 1 });
          if (threeDots) threeDots.style.display = "none";
          if (windowsControl) windowsControl.style.paddingRight = "8px";
        } else {
          Spicetify.Platform.ControlMessageAPI._updateUiClient.setButtonsVisibility({
            showButtons: true
          });
          Spicetify.Platform.ControlMessageAPI._updateUiClient.updateTitlebarHeight({ height: 64 });
          if (threeDots) threeDots.style.display = "";
          if (windowsControl) windowsControl.style.paddingRight = "";
        }
      }
    }
  },
  {
    type: "input",
    name: "windows-control-brightness",
    desc: "Set Brightness",
    defaultVal: "2.12",
    run(value) {
      if (document.documentElement.classList.contains("windows-control")) {
        document.documentElement.style.setProperty("--windows-control-brightness", value);
      }
    }
  },
  {
    type: "input",
    name: "windows-control-top",
    desc: "Set Top",
    defaultVal: "16px",
    run(value) {
      if (document.documentElement.classList.contains("windows-control")) {
        document.documentElement.style.setProperty("--windows-control-top", value);
      }
    }
  },
  {
    type: "input",
    name: "windows-control-width",
    desc: "Set Width",
    defaultVal: "135px",
    run(value) {
      if (document.documentElement.classList.contains("windows-control")) {
        document.documentElement.style.setProperty("--windows-control-width", value);
      }
    }
  },
  {
    type: "input",
    name: "windows-control-height",
    desc: "Set Height",
    defaultVal: "32px",
    run(value) {
      if (document.documentElement.classList.contains("windows-control")) {
        document.documentElement.style.setProperty("--windows-control-height", value);
      }
    }
  }
];
var WindowsControlModal_default = WindowsControlModal;

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
  if (!response.ok) {
    Notification_default({
      isWarning: true,
      autoHideDuration: 1e4,
      message: "Unable to fetch the colour scheme options. You won't be able to change the colour scheme using the settings menu."
    });
    return;
  }
  const iniContent = await response.text();
  const colourSchemes = iniContent.split(/[\r\n]+/).reduce((acc, line) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith(";")) return acc;
    const sectionMatch = trimmedLine.match(/^\[([^\]]+)\]$/);
    if (sectionMatch) {
      acc[sectionMatch[1]] = {};
      return acc;
    }
    const paramMatch = trimmedLine.match(/^([^=]+?)\s*=\s*(.+)$/);
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

// src/js/features/CoverArtBanner.jsx
var CoverArtBanner = async () => {
  while (!Spicetify.Player.data?.item) {
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
  const channels = {
    Album: { regex: /^\/album\//, key: "album-page" },
    Artist: { regex: /^\/artist\/(?!artists\b)\w+$/, key: "artist-page" },
    Lyrics: { regex: /^\/lyrics$/, key: "lyrics-page" },
    LyricsPlus: { regex: /^\/lyrics-plus$/, key: "lyrics-page" },
    Playlist: { regex: /^\/playlist\//, key: "playlist-page" },
    Station: { regex: /^\/station\/playlist\//, key: "misc-page" },
    Collection: { regex: /^\/collection\/tracks$/, key: "misc-page" },
    Show: { regex: /^\/show\//, key: "misc-page" },
    Episode: { regex: /^\/episode\//, key: "misc-page" },
    User: { regex: /^\/user\/(?!users\b)\w+$/, key: "misc-page" },
    Genre: { regex: /^\/genre\//, key: "misc-page" }
  };
  const banner = document.querySelector(".banner-image") || (() => {
    const newBanner = document.createElement("div");
    newBanner.className = "banner-image";
    document.querySelector(".under-main-view")?.appendChild(newBanner);
    return newBanner;
  })();
  const updateBanner = () => {
    const imageUrl = Spicetify.Player.data?.item?.metadata?.image_xlarge_url;
    const showBanner = Object.values(channels).some(
      ({ regex, key }) => LocalStorage_default.get(key, false) && regex.test(Spicetify.Platform.History.location.pathname)
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

// src/js/features/SpotifyMode.jsx
var SpotifyMode = async (mode) => {
  if (!Spicetify.Platform.ProductStateAPI.productStateApi) {
    return;
  }
  const modePairs = {
    default: { "app-developer": "0" },
    developer: { "app-developer": "2" }
  };
  const pairs = modePairs[mode] || modePairs.default;
  const setMode = async (key, value) => {
    await Spicetify.Platform.ProductStateAPI.productStateApi.putValues({
      pairs: { [key]: value }
    });
    return Spicetify.Platform.ProductStateAPI.productStateApi.subValues(
      { keys: [key] },
      async (newValues) => {
        if (newValues[key] !== value) {
          await Spicetify.Platform.ProductStateAPI.productStateApi.putValues({
            pairs: { [key]: value }
          });
        }
      }
    );
  };
  window.appDevListener?.cancel();
  window.appDevListener = await setMode("app-developer", pairs["app-developer"]);
};
var SpotifyMode_default = SpotifyMode;

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

// src/js/features/ToggleAppleMusic.jsx
var textObserverApple = null;
var sidebarStateListenerApple = null;
function ToggleAppleMusic(isEnabled) {
  disableAppleMusic();
  if (isEnabled) {
    enableAppleMusic();
  }
}
async function enableAppleMusic() {
  const globalNav = await waitForElements_default(".Root__globalNav");
  const addTextToButtons = () => {
    const elements = globalNav.querySelectorAll(".main-globalNav-navLink, ._b3hhmbWtOY8_1M1mM1H");
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
    Console_default.Log("Removing AppleMusic observer");
    textObserverApple.disconnect();
    textObserverApple = null;
  }
  if (sidebarStateListenerApple) {
    Console_default.Log("Removing sidebar state listener");
    Spicetify.Platform.LocalStorageAPI.getEvents().removeListener("update", sidebarStateListener);
    sidebarStateListenerApple = null;
  }
  const iconTexts = document.querySelectorAll(".main-globalNav-iconText");
  for (const el of iconTexts) {
    el.remove();
  }
}
var ToggleAppleMusic_default = ToggleAppleMusic;

// src/js/features/ToggleLibXUI.jsx
var textObserver = null;
var sidebarStateListener2 = null;
async function ToggleLibXUI(isEnabled) {
  disableLibXUI();
  if (isEnabled) {
    enableLibXUI();
  }
}
async function enableLibXUI() {
  const globalNav = await waitForElements_default(".Root__globalNav");
  const addTextToButtons = () => {
    const elements = globalNav.querySelectorAll(".main-globalNav-navLink, ._b3hhmbWtOY8_1M1mM1H");
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
  sidebarStateListener2 = (event) => {
    if (event.data.key === "left-sidebar-state") {
      updateCollapsedClass();
    }
  };
  Spicetify.Platform.LocalStorageAPI.getEvents().addListener("update", sidebarStateListener2);
  updateCollapsedClass();
}
function disableLibXUI() {
  document.documentElement.classList.remove("collapsed");
  if (textObserver) {
    Console_default.Log("Removing libx observer");
    textObserver.disconnect();
    textObserver = null;
  }
  if (sidebarStateListener2) {
    Console_default.Log("Removing sidebar state listener");
    Spicetify.Platform.LocalStorageAPI.getEvents().removeListener("update", sidebarStateListener2);
    sidebarStateListener2 = null;
  }
  const iconTexts = document.querySelectorAll(".main-globalNav-iconText");
  for (const el of iconTexts) {
    el.remove();
  }
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
      type: "radiobutton",
      name: "colour-scheme",
      desc: "Colour Scheme:",
      defaultVal: "default",
      options: [
        { value: "default", label: "Default" },
        { value: "dark", label: "Dark" },
        { value: "light", label: "Light" },
        { value: "bloom", label: "Bloom" },
        { value: "spotify", label: "Spotify" }
      ],
      tippy: "Default uses the colour scheme set in config-xpui.ini",
      run(value) {
        ColourScheme_default(value);
      }
    },
    {
      type: "dropdown",
      name: "spotify-mode",
      desc: "Spotify mode:",
      defaultVal: "default",
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
      type: "toggle",
      name: "album-banner-page",
      desc: "Puts Track cover art in various pages",
      defaultVal: true,
      popupModal: AlbumBannerModal_default,
      run(value) {
        CoverArtBanner_default(value);
      }
    },
    {
      type: "toggle",
      name: "volume-percentage",
      desc: "Adds volume percentage next to volume slider",
      defaultVal: true,
      run(value) {
        VolPercent_default(value);
      }
    },
    {
      type: "toggle",
      name: "windows-control",
      desc: "Adjusts brightness and position of windows controls",
      defaultVal: false,
      tippy: "This will override the themes default windows controls",
      popupModal: WindowsControlModal_default,
      run: (value) => {
        document.documentElement.classList.toggle("windows-control", value);
      }
    },
    {
      type: "input",
      name: "spotify-font",
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
      name: "libx-ui",
      desc: "Restores the old UI >2024 (Pre Global Nav Bar)",
      defaultVal: false,
      incompatible: ["AppleMusic"],
      tippy: "Incompatible with AppleMusic",
      run(value) {
        document.documentElement.classList.toggle("libx-ui", value);
        ToggleLibXUI_default(value);
      },
      reveal: [
        {
          type: "toggle",
          name: "highlight-navlinks",
          desc: "Adds highlights to the selected page",
          defaultVal: true,
          run(value) {
            document.documentElement.classList.toggle("highlight-navlinks", value);
          }
        },
        {
          type: "toggle",
          name: "pre-libx-ui",
          desc: "Restores the old UI >2023 (Pre LibraryX)",
          defaultVal: false,
          run(value) {
            document.documentElement.classList.toggle("pre-libx-ui", value);
          }
        },
        {
          type: "toggle",
          name: "compact-library",
          desc: "Uses compact sidebar",
          defaultVal: false,
          tippy: "Broken if library is collapsed",
          run(value) {
            document.documentElement.classList.toggle("compact-library", value);
          }
        }
      ]
    },
    {
      type: "toggle",
      name: "apple-music-ui",
      desc: "Changes the UI to look like Apple Music",
      defaultVal: false,
      incompatible: ["LibX", "switchlayout", "TestLayout", "greenicon"],
      tippy: "Incompatible with LibX, Switchlayout, greenicon and testlayout",
      run(value) {
        document.documentElement.classList.toggle("apple-music-ui", value);
        ToggleAppleMusic_default(value);
      }
    },
    {
      type: "toggle",
      name: "modern-layout",
      desc: "Reorders play button to start and cover art to middle",
      incompatible: ["AppleMusic"],
      tippy: "Incompatible with AppleMusic",
      defaultVal: true,
      run(value) {
        document.documentElement.classList.toggle("modern-layout", value);
      }
    },
    {
      type: "toggle",
      name: "switch-grid-layout",
      desc: "Uses different grid layout",
      incompatible: ["AppleMusic"],
      tippy: "Incompatible with AppleMusic",
      defaultVal: true,
      run(value) {
        document.documentElement.classList.toggle("switch-grid-layout", value);
      }
    }
  ],
  Snippets: [
    {
      type: "toggle",
      name: "hide-tracklist-numbers",
      desc: "Hides tracklist numbers in various pages",
      defaultVal: true,
      run(value) {
        document.documentElement.classList.toggle("hide-tracklist-numbers", value);
      }
    },
    {
      type: "toggle",
      name: "green-navLink-icons",
      desc: "Makes Navlinks green",
      incompatible: ["AppleMusic"],
      tippy: "Incompatible with AppleMusic",
      defaultVal: true,
      run(value) {
        document.documentElement.classList.toggle("green-navLink-icons", value);
      }
    },
    {
      type: "toggle",
      name: "transparent-playbutton",
      desc: "Make the play/pause button transparent",
      defaultVal: true,
      run(value) {
        document.documentElement.classList.toggle("transparent-playbutton", value);
      }
    },
    {
      type: "toggle",
      name: "lyrics-only-npv",
      desc: "Show lyrics only in Now playing view",
      defaultVal: false,
      run(value) {
        document.documentElement.classList.toggle("lyrics-only-npv", value);
      }
    },
    {
      type: "toggle",
      name: "no-gradient",
      desc: "Remove the coloured gradient from header",
      defaultVal: true,
      run(value) {
        document.documentElement.classList.toggle("no-gradient", value);
      }
    }
  ],
  Test: [
    {
      type: "toggle",
      name: "test-toggle",
      desc: "test-toggle",
      defaultVal: true,
      popupModal: DebugMenu_default,
      incompatible: [
        "test-incompatible-toggle",
        "test-incompatible-input",
        "test-incompatible-dropdown"
      ],
      tippy: "Incompatible with test-incompatible"
    },
    {
      type: "toggle",
      name: "test-incompatible-toggle",
      desc: "test-incompatible-toggle",
      defaultVal: true
    },
    {
      type: "input",
      name: "test-incompatible-input",
      desc: "test-incompatible-input",
      defaultVal: 1,
      placeholder: "does something"
    },
    {
      type: "dropdown",
      name: "test-incompatible-dropdown",
      desc: "test-incompatible-dropdown",
      defaultVal: "test1",
      options: [
        { value: "test1", label: "test1" },
        { value: "test2", label: "test2" },
        { value: "test3", label: "test3" },
        { value: "test4", label: "test4" }
      ]
    },
    {
      type: "input",
      name: "test-input",
      desc: "test-input",
      defaultVal: 1,
      placeholder: "does something"
    },
    {
      type: "dropdown",
      name: "test-dropdown",
      desc: "test-dropdown",
      defaultVal: "test1",
      options: [
        { value: "test1", label: "test1" },
        { value: "test2", label: "test2" },
        { value: "test3", label: "test3" },
        { value: "test4", label: "test4" }
      ]
    },
    {
      type: "radiobutton",
      name: "test-radiobutton",
      desc: "test-radiobutton",
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
      desc: "test-reveal",
      defaultVal: true,
      reveal: [
        {
          type: "toggle",
          name: "revealed-toggle",
          desc: "revealed-toggle",
          defaultVal: true
        },
        {
          type: "input",
          name: "revealed-input",
          desc: "revealed-input",
          defaultVal: true
        },
        {
          type: "dropdown",
          name: "revealed-dropdown",
          desc: "revealed-dropdown",
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
    Object.values(options_default).flat().forEach(({ name, run }) => {
      const key = name;
      const value = settings[key];
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
  Console_default.Log("Initialising options");
  const loadedOptions = getInitialOptions_default(Object.values(options_default).flat());
  const allOptions2 = [
    ...Object.values(options_default).flat(),
    ...windowsControlOptions,
    ...albumBannerOptions
  ];
  allOptions2.forEach((option) => {
    const key = option.name;
    if (LocalStorage_default.get(key, null) === null) {
      LocalStorage_default.set(key, option.defaultVal);
    }
    if (option.reveal) {
      option.reveal.forEach((subOption) => {
        const subKey = subOption.name;
        if (LocalStorage_default.get(subKey, null) === null) {
          LocalStorage_default.set(subKey, loadedOptions[key] ? subOption.defaultVal : false);
        }
      });
    }
  });
  allOptions2.forEach((option) => {
    const key = option.name;
    const value = LocalStorage_default.get(key, option.defaultVal);
    if (option.run) {
      option.run(value);
    }
  });
  applyOptions_default(loadedOptions);
  return loadedOptions;
};
var initialiseOptions_default = initialiseOptions;

// src/js/menu/settingsmenu/SettingsButton.jsx
var import_react_dom3 = __toESM(require_react_dom(), 1);

// src/js/components/ConfirmDialog.jsx
var import_react15 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
function ConfirmDialog({
  titleText,
  descriptionText,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onConfirm,
  onClose,
  onOpen,
  onOutside,
  allowHTML
}) {
  const ConfirmDialog2 = import_react15.default.memo(() => {
    const [state, setState] = Spicetify.React.useState(true);
    const menu = document.querySelector(".ReactModalPortal:last-of-type");
    import_react15.default.useEffect(() => {
      if (state) onOpen?.();
    }, [state, onOpen]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      Spicetify.ReactComponent.RemoteConfigProvider,
      {
        configuration: Spicetify.Platform.RemoteConfiguration,
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
            allowHTML
          }
        )
      }
    );
  });
  import_react_dom2.default.createRoot(document.createElement("div")).render(/* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ConfirmDialog2, {}));
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
var import_react20 = __toESM(require_react(), 1);

// src/js/menu/components/CategoryCarousel.jsx
var import_react16 = __toESM(require_react(), 1);
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var CategoryCarousel = (0, import_react16.memo)(({ categories, selectedCategory, onSelectCategory }) => {
  const carouselRef = (0, import_react16.useRef)(null);
  (0, import_react16.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "carousel", ref: carouselRef, children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "button",
    {
      className: `carousel__button ${selectedCategory === category ? "carousel__button--active" : ""}`,
      onClick: () => onSelectCategory(category),
      children: category
    },
    category
  )) });
});
var CategoryCarousel_default = CategoryCarousel;

// src/js/menu/components/RenderCategory.jsx
var import_react17 = __toESM(require_react(), 1);
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var allOptions = Object.values(options_default).flat();
var RenderCategory = (0, import_react17.memo)(({ category, categoryOptions, settings, onChange }) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: `option__category option__category--${category.toLowerCase()}`, children: [
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { className: "option__category-title", children: category }),
  categoryOptions.map((option) => {
    const value = settings[option.name];
    const disabled = allOptions.some(
      (o) => o.incompatible?.includes(option.name) && settings[o.name]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_react17.default.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "option__item--main", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(OptionType_default, { option, value, onChange, disabled }) }),
      value && option.reveal && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "option__item--revealed", children: option.reveal.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        OptionType_default,
        {
          option: sub,
          value: settings[sub.name],
          onChange,
          disabled
        },
        sub.name
      )) })
    ] }, option.name);
  })
] }));
var RenderCategory_default = RenderCategory;

// src/js/menu/hooks/useSettings.jsx
var import_react19 = __toESM(require_react(), 1);

// src/js/menu/modalmenu/FontModal.jsx
var import_react18 = __toESM(require_react(), 1);
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var FontModal = (0, import_react18.memo)(() => {
  const { settings, updateSetting, resetSettings, saveSettings } = useModalSettings_default(fontOptions);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "settings-modal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "settings-modal__options", children: fontOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      OptionType_default,
      {
        option,
        value: settings[option.name],
        onChange: (key, value) => updateSetting(key, value)
      },
      option.name
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "settings-modal__buttons", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ButtonContainer_default, { resetSettings, saveSettings }) })
  ] });
});
var fontOptions = [
  {
    type: "input",
    name: "uifont",
    desc: "Changes the font of the Spotify app",
    defaultVal: "Segoe UI Variable Display",
    tippy: "This will only work if you have the font installed",
    popupModal: FontModal,
    run(value) {
      document.documentElement.style.setProperty("--FontFamily", value);
    }
  }
];

// src/js/menu/helpers/resetOptions.jsx
var resetOptions = (setSettings) => {
  ConfirmDialog_default({
    titleText: "Are you sure?",
    descriptionText: "This will reset all settings to default!",
    confirmText: "Reset",
    onConfirm: () => {
      try {
        Console_default.Log("Resetting settings");
        const allOptions2 = [
          ...Object.values(options_default).flat(),
          ...albumBannerOptions,
          ...windowsControlOptions
        ];
        const defaultSettings = {};
        allOptions2.forEach((option) => {
          const mainKey = option.name;
          defaultSettings[mainKey] = option.defaultVal;
          if (option.reveal) {
            option.reveal.forEach((subOption) => {
              defaultSettings[subOption.name] = option.defaultVal ? subOption.defaultVal : false;
            });
          }
        });
        Object.entries(defaultSettings).forEach(([key, value]) => {
          LocalStorage_default.set(key, value);
        });
        setSettings(defaultSettings);
        applyOptions_default(defaultSettings, Object.keys(defaultSettings));
      } catch (error) {
        Console_default.Error("Failed to reset settings:", error);
      }
    }
  });
};
var resetOptions_default = resetOptions;

// src/js/menu/helpers/saveOptions.jsx
var saveOptions = (settings) => {
  try {
    const changedOptions = [];
    Object.entries(settings).forEach(([key, value]) => {
      const storedValue = LocalStorage_default.get(key, null);
      if (JSON.stringify(storedValue) !== JSON.stringify(value)) {
        LocalStorage_default.set(key, value);
        changedOptions.push(key);
      }
    });
    if (changedOptions.length > 0) {
      Console_default.Log(`Saving settings: ${changedOptions.join(", ")}`);
      applyOptions_default(settings, changedOptions);
    }
    return settings;
  } catch (error) {
    Console_default.Error("Failed to save settings:", error);
    return settings;
  }
};
var saveOptions_default = saveOptions;

// src/js/menu/hooks/useSettings.jsx
var useSettings = () => {
  const allOptions2 = Object.values(options_default).flat();
  const [settings, setSettings] = (0, import_react19.useState)(() => getInitialOptions_default(allOptions2));
  const handleSettingChange = (0, import_react19.useCallback)(
    (key, value) => {
      setSettings((prev) => {
        const newSettings = { ...prev, [key]: value };
        const optionName = key;
        const changedOption = allOptions2.find((opt) => opt.name === optionName);
        if (changedOption?.reveal) {
          changedOption.reveal.forEach((subOption) => {
            const subKey = subOption.name;
            if (value) {
              newSettings[subKey] = subOption.defaultVal;
            } else {
              newSettings[subKey] = false;
            }
          });
        }
        if (value && changedOption?.incompatible) {
          changedOption.incompatible.forEach((incompName) => {
            newSettings[incompName] = false;
          });
        }
        return newSettings;
      });
    },
    [allOptions2]
  );
  return {
    settings,
    handleSettingChange,
    resetSettings: () => resetOptions_default(setSettings),
    saveSettings: () => {
      const updatedSettings = saveOptions_default(settings);
      setSettings(updatedSettings);
    }
  };
};
var useSettings_default = useSettings;

// src/js/menu/settingsmenu/Preview.jsx
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var Navbar = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-navbar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-navbar__item preview-navbar__item--left", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-navbar__item-history" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-navbar__item-button", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icons_default.React.settings, { size: 16 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-navbar__item-button", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icons_default.React.settings, { size: 16 }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-navbar__item preview-navbar__item--center", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-navbar__item-search", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icons_default.React.settings, { size: 16 }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { children: "Search" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-navbar__item preview-navbar__item--right", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-navbar__item-button", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icons_default.React.settings, { size: 16 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-navbar__item-windows-controls" })
    ] })
  ] });
};
var PlaylistItem = ({ name, info }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "playlist-item", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "playlist-item__image" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "playlist-item__info", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "playlist-item__name", children: name }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "playlist-item__description", children: info })
    ] })
  ] });
};
var Sidebar = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-sidebar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-sidebar__header", children: "Your Library" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "chips", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "chips__item chips__item--active", children: "Playlists" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "chips__item", children: "Artists" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "chips__item", children: "Podcasts" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-sidebar__search", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icons_default.React.settings, { size: 10 }),
      " "
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(PlaylistItem, { name: "Playlist 1", info: "Playlist.Username" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(PlaylistItem, { name: "Playlist 2", info: "Playlist.Username" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(PlaylistItem, { name: "Playlist 3", info: "Playlist.Username" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(PlaylistItem, { name: "Playlist 4", info: "Playlist.Spotify" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(PlaylistItem, { name: "Playlist 5", info: "Playlist.Spotify" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(PlaylistItem, { name: "Spotify", info: "Spotify" })
  ] });
};
var MainViewShortcutItem = ({ name }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "shortcut-item", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "shortcut-item__image" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "shortcut-item__text", children: name })
  ] });
};
var MainViewCarouselItem = ({ name }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "carousel-item", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "carousel-item__image" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "carousel-item__text", children: name })
  ] });
};
var MainView = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-main-view", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-main-view__background" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "chips", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "chips__item chips__item--active", children: "Home" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "chips__item", children: "Music" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "chips__item", children: "Podcasts" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "chips__item", children: "Audiobooks" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-main-view__shortcuts", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewShortcutItem, { name: "Playlist 1" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewShortcutItem, { name: "Playlist 2" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewShortcutItem, { name: "Playlist 3" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewShortcutItem, { name: "Playlist 4" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewShortcutItem, { name: "Playlist 5" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewShortcutItem, { name: "Playlist 6" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-main-view__header", children: "Made for you" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-main-view__carousel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Daily Mix 1" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Discover Weekly" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Release Radar" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "On Repeat" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Repeat Rewind" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Create a Blend" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-main-view__header", children: "Recently Played" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-main-view__carousel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Playlist 1" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Playlist 2" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Playlist 3" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Playlist 4" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Playlist 5" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Playlist 6" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-main-view__header", children: "Jump back in" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-main-view__carousel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Playlist 1" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Playlist 2" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Playlist 3" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Playlist 4" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Playlist 5" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainViewCarouselItem, { name: "Playlist 6" })
    ] })
  ] });
};
var NowPlayingBar = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_jsx_runtime21.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-now-playing-bar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-now-playing-bar__item preview-now-playing-bar__item--left", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-now-playing-bar__cover-art" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-now-playing-bar__info", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-now-playing-bar__info-title", children: "Song Title" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-now-playing-bar__info-artist", children: "Artist Name" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-now-playing-bar__button", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icons_default.React.settings, { size: 12 }),
        " "
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-now-playing-bar__item preview-now-playing-bar__item--center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-now-playing-bar__controls", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-now-playing-bar__button", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icons_default.React.settings, { size: 12 }),
          " "
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-now-playing-bar__button", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icons_default.React.settings, { size: 12 }),
          " "
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-now-playing-bar__button preview-now-playing-bar__button--play", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icons_default.React.settings, { size: 16 }),
          " "
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-now-playing-bar__button", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icons_default.React.settings, { size: 12 }),
          " "
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-now-playing-bar__button", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icons_default.React.settings, { size: 12 }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-now-playing-bar__progress", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-now-playing-bar__progress-time", children: "0:00" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-now-playing-bar__progress-bar" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-now-playing-bar__progress-time", children: "3:30" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-now-playing-bar__item preview-now-playing-bar__item--right", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-now-playing-bar__button", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icons_default.React.settings, { size: 12 }),
        " "
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-now-playing-bar__volume", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icons_default.React.settings, { size: 12 }),
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "preview-now-playing-bar__volume-bar" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-now-playing-bar__button", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icons_default.React.settings, { size: 12 }),
        " "
      ] })
    ] })
  ] }) });
};
var Preview = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h2", { className: "preview-title", children: "Preview" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "preview-spotify-app", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Navbar, {}),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Sidebar, {}),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MainView, {}),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(NowPlayingBar, {})
    ] })
  ] });
};
var Preview_default = Preview;

// src/js/menu/settingsmenu/SettingsMenu.jsx
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var SettingsMenu = (0, import_react20.memo)(() => {
  const { settings, handleSettingChange, resetSettings, saveSettings } = useSettings_default();
  const allCategories = ["All", ...Object.keys(options_default)];
  const [selectedCategory, setSelectedCategory] = (0, import_react20.useState)("All");
  const handleSelectCategory = (0, import_react20.useCallback)((category) => {
    setSelectedCategory(category);
  }, []);
  const filteredOptions = (0, import_react20.useMemo)(() => {
    if (selectedCategory === "All") {
      return Object.entries(options_default);
    }
    return Object.entries(options_default).filter(([category]) => category === selectedCategory);
  }, [selectedCategory]);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "settings-menu", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "settings-menu__carousel", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      CategoryCarousel_default,
      {
        categories: allCategories,
        selectedCategory,
        onSelectCategory: handleSelectCategory
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "settings-menu__options", children: filteredOptions.map(([category, categoryOptions]) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      RenderCategory_default,
      {
        category,
        categoryOptions,
        settings,
        onChange: handleSettingChange
      },
      category
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "settings-menu__preview", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Preview_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "settings-menu__buttons", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ButtonContainer_default, { resetSettings, saveSettings }) })
  ] });
});
var SettingsMenu_default = SettingsMenu;

// src/js/menu/settingsmenu/SettingsButton.jsx
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var SettingsButton = () => {
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
    import_react_dom3.default.createRoot(popoverElement).render(
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(Spicetify.ReactComponent.Menu, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          Spicetify.ReactComponent.MenuItem,
          {
            onClick: () => {
              Window_default.Reload();
              hideMenu();
            },
            leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              "svg",
              {
                viewBox: "0 0 16 16",
                width: "16",
                height: "16",
                fill: "currentColor",
                dangerouslySetInnerHTML: { __html: Spicetify.SVGIcons.repeat }
              }
            ),
            children: "Reload theme"
          },
          "reload-theme"
        ),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          Spicetify.ReactComponent.MenuItem,
          {
            onClick: () => {
              Window_default.Restart();
              hideMenu();
            },
            leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              "svg",
              {
                viewBox: "0 0 16 16",
                width: "16",
                height: "16",
                fill: "currentColor",
                dangerouslySetInnerHTML: { __html: Spicetify.SVGIcons.locked }
              }
            ),
            divider: "after",
            children: "Restart Spotify"
          },
          "restart-spotify"
        ),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
              hideMenu();
            },
            leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              "svg",
              {
                viewBox: "0 0 16 16",
                width: "16",
                height: "16",
                fill: "currentColor",
                dangerouslySetInnerHTML: { __html: Spicetify.SVGIcons.check }
              }
            ),
            divider: "after",
            children: "Confirm Dialog"
          },
          "confirm-dialog"
        ),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          Spicetify.ReactComponent.MenuItem,
          {
            onClick: () => {
              PopupModal_default({ title: "Theme Settings", content: SettingsMenu_default });
              hideMenu();
            },
            leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              "svg",
              {
                viewBox: "0 0 16 16",
                width: "16",
                height: "16",
                fill: "currentColor",
                dangerouslySetInnerHTML: { __html: Spicetify.SVGIcons.subtitles }
              }
            ),
            children: "Theme Settings"
          },
          "theme-settings-menu"
        ),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          Spicetify.ReactComponent.MenuItem,
          {
            onClick: () => {
              PopupModal_default({ title: "Debug Menu", content: DebugMenu_default });
              hideMenu();
            },
            leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              "svg",
              {
                viewBox: "0 0 16 16",
                width: "16",
                height: "16",
                fill: "currentColor",
                dangerouslySetInnerHTML: { __html: Spicetify.SVGIcons.menu }
              }
            ),
            children: "Debug Menu"
          },
          "debug-menu"
        )
      ] })
    );
  }
  const SettingsButton2 = new Spicetify.Topbar.Button(
    "Theme Settings",
    `<svg viewBox="0 0 16 16" width="16px" height="16px" fill="currentColor">${Icons_default.HTML.settings}</svg>`,
    () => {
      PopupModal_default({
        title: "Theme Settings",
        content: SettingsMenu_default,
        buttons: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Spicetify.ReactComponent.TooltipWrapper, { label: "GitHub", placement: "top", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          "button",
          {
            type: "button",
            className: "Modal__button Modal__button--github",
            onClick: () => window.open("https://github.com/veryboringhwl/spicetify"),
            children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Icons_default.React.github, { size: 18 })
          }
        ) }),
        icon: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Icons_default.React.settings, { size: 30 })
      });
    },
    false,
    true
  );
  SettingsButton2.element.oncontextmenu = showMenu;
  SettingsButton2.element.style.anchorName = "--SettingsButton";
  return SettingsButton2;
};
var SettingsButton_default = SettingsButton;

// src/js/app.jsx
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
async function theme() {
  const timeout = 5e3;
  await Promise.race([
    (async () => {
      await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));
      while (!(Spicetify.Snackbar.enqueueCustomSnackbar && Spicetify.Snackbar.enqueueSnackbar && Spicetify.Platform.ProductStateAPI.productStateApi)) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    })(),
    new Promise((_, reject) => setTimeout(() => reject("Initialization timeout"), timeout))
  ]).catch((error) => {
    console.log(
      `${error}: Failed to initialize after ${timeout / 1e3} seconds. Some features may not work.`
    );
    Notification_default({
      autoHideDuration: 1e4,
      isWarning: true,
      message: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("span", { children: [
        error,
        ": Failed to initialize after ",
        timeout / 1e3,
        " seconds. Some features may not work."
      ] })
    });
  });
  Console_default.Log("Spicetify theme initialising");
  Spicetify.Mousetrap.bind(["escape"], () => {
    Spicetify.PopupModal.hide();
  });
  const MIN_PATCH_VERSION = 62;
  const MAX_PATCH_VERSION = 64;
  const [major, minor, patch] = Spicetify.Platform.version.split(".").map(Number);
  const isSupportedVersion = patch >= MIN_PATCH_VERSION && patch <= MAX_PATCH_VERSION;
  if (!isSupportedVersion) {
    Notification_default({
      autoHideDuration: 5e3,
      isWarning: true,
      message: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_jsx_runtime24.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("span", { children: [
        "Theme supports Spotify v",
        major,
        ".",
        minor,
        ".",
        MIN_PATCH_VERSION,
        " to v",
        major,
        ".",
        minor,
        ".",
        MAX_PATCH_VERSION,
        ". Your version: ",
        major,
        ".",
        minor,
        ".",
        patch
      ] }) })
    });
  }
  Mousetrap_default();
  SettingsButton_default();
  initialiseOptions_default();
  Console_default.Log("Spicetify theme initialised");
}
theme();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZXh0ZXJuYWwtZ2xvYmFsLXBsdWdpbjpyZWFjdCIsICJleHRlcm5hbC1nbG9iYWwtcGx1Z2luOnJlYWN0LWRvbSIsICJleHRlcm5hbC1nbG9iYWwtcGx1Z2luOnJlYWN0L2pzeC1ydW50aW1lIiwgIi4uL3NyYy9qcy9jb21wb25lbnRzL1BvcHVwTW9kYWwuanN4IiwgIi4uL3NyYy9qcy9pY29ucy9JY29ucy5qc3giLCAiLi4vc3JjL2pzL2RlYnVnL0RlYnVnTWVudS5qc3giLCAiLi4vc3JjL2pzL2NvbXBvbmVudHMvTG9hZGluZ0luZGljYXRvci5qc3giLCAiLi4vc3JjL2pzL21lbnUvY29tcG9uZW50cy9PcHRpb25Sb3cuanN4IiwgIi4uL3NyYy9qcy9jb21wb25lbnRzL1RpcHB5QnV0dG9uLmpzeCIsICIuLi9zcmMvanMvbWVudS9jb21wb25lbnRzL1BvcHVwQnV0dG9uLmpzeCIsICIuLi9zcmMvanMvbWVudS9jb21wb25lbnRzL1JhZGlvQnV0dG9uLmpzeCIsICIuLi9zcmMvanMvbWVudS9jb21wb25lbnRzL1RvZ2dsZS5qc3giLCAiLi4vc3JjL2pzL3V0aWxzL0NvbnNvbGUuanN4IiwgIi4uL3NyYy9qcy91dGlscy9Ob3RpZmljYXRpb24uanN4IiwgIi4uL3NyYy9qcy9kZWJ1Zy9Nb3VzZXRyYXAuanN4IiwgIi4uL3NyYy9qcy91dGlscy9Mb2NhbFN0b3JhZ2UuanN4IiwgIi4uL3NyYy9qcy9tZW51L21vZGFsbWVudS9BbGJ1bUJhbm5lck1vZGFsLmpzeCIsICIuLi9zcmMvanMvbWVudS9jb21wb25lbnRzL0J1dHRvbkNvbnRhaW5lci5qc3giLCAiLi4vc3JjL2pzL21lbnUvY29tcG9uZW50cy9PcHRpb25UeXBlLmpzeCIsICIuLi9zcmMvanMvbWVudS9jb21wb25lbnRzL0Ryb3Bkb3duLmpzeCIsICIuLi9zcmMvanMvbWVudS9jb21wb25lbnRzL0lucHV0LmpzeCIsICIuLi9zcmMvanMvbWVudS9tb2RhbG1lbnUvdXNlTW9kYWxTZXR0aW5ncy5qc3giLCAiLi4vc3JjL2pzL21lbnUvaGVscGVycy9nZXRJbml0aWFsT3B0aW9ucy5qc3giLCAiLi4vc3JjL2pzL21lbnUvbW9kYWxtZW51L1dpbmRvd3NDb250cm9sTW9kYWwuanN4IiwgIi4uL3NyYy9qcy9mZWF0dXJlcy9Db2xvdXJTY2hlbWUuanN4IiwgIi4uL3NyYy9qcy9mZWF0dXJlcy9Db3ZlckFydEJhbm5lci5qc3giLCAiLi4vc3JjL2pzL2ZlYXR1cmVzL1Nwb3RpZnlNb2RlLmpzeCIsICIuLi9zcmMvanMvdXRpbHMvd2FpdEZvckVsZW1lbnRzLmpzeCIsICIuLi9zcmMvanMvZmVhdHVyZXMvVG9nZ2xlQXBwbGVNdXNpYy5qc3giLCAiLi4vc3JjL2pzL2ZlYXR1cmVzL1RvZ2dsZUxpYlhVSS5qc3giLCAiLi4vc3JjL2pzL2ZlYXR1cmVzL1ZvbFBlcmNlbnQuanN4IiwgIi4uL3NyYy9qcy9tZW51L3NldHRpbmdzbWVudS9vcHRpb25zLmpzeCIsICIuLi9zcmMvanMvbWVudS9oZWxwZXJzL2FwcGx5T3B0aW9ucy5qc3giLCAiLi4vc3JjL2pzL21lbnUvaGVscGVycy9pbml0aWFsaXNlT3B0aW9ucy5qc3giLCAiLi4vc3JjL2pzL21lbnUvc2V0dGluZ3NtZW51L1NldHRpbmdzQnV0dG9uLmpzeCIsICIuLi9zcmMvanMvY29tcG9uZW50cy9Db25maXJtRGlhbG9nLmpzeCIsICIuLi9zcmMvanMvdXRpbHMvV2luZG93LmpzeCIsICIuLi9zcmMvanMvbWVudS9zZXR0aW5nc21lbnUvU2V0dGluZ3NNZW51LmpzeCIsICIuLi9zcmMvanMvbWVudS9jb21wb25lbnRzL0NhdGVnb3J5Q2Fyb3VzZWwuanN4IiwgIi4uL3NyYy9qcy9tZW51L2NvbXBvbmVudHMvUmVuZGVyQ2F0ZWdvcnkuanN4IiwgIi4uL3NyYy9qcy9tZW51L2hvb2tzL3VzZVNldHRpbmdzLmpzeCIsICIuLi9zcmMvanMvbWVudS9tb2RhbG1lbnUvRm9udE1vZGFsLmpzeCIsICIuLi9zcmMvanMvbWVudS9oZWxwZXJzL3Jlc2V0T3B0aW9ucy5qc3giLCAiLi4vc3JjL2pzL21lbnUvaGVscGVycy9zYXZlT3B0aW9ucy5qc3giLCAiLi4vc3JjL2pzL21lbnUvc2V0dGluZ3NtZW51L1ByZXZpZXcuanN4IiwgIi4uL3NyYy9qcy9hcHAuanN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJtb2R1bGUuZXhwb3J0cyA9IFNwaWNldGlmeS5SZWFjdCIsICJtb2R1bGUuZXhwb3J0cyA9IFNwaWNldGlmeS5SZWFjdERPTSIsICJtb2R1bGUuZXhwb3J0cyA9IFNwaWNldGlmeS5SZWFjdEpTWCIsICJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBJY29ucyBmcm9tIFwiLi4vaWNvbnMvSWNvbnNcIjtcblxubGV0IG1vZGFsQ29udGFpbmVyID0gbnVsbDtcbmxldCBtb2RhbFJvb3QgPSBudWxsO1xuXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICBpZiAobW9kYWxSb290ICYmIG1vZGFsQ29udGFpbmVyKSB7XG4gICAgbW9kYWxSb290LnVubW91bnQoKTtcbiAgICBtb2RhbENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlRXNjS2V5KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgbW9kYWxDb250YWluZXIgPSBudWxsO1xuICAgIG1vZGFsUm9vdCA9IG51bGw7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZUVzY0tleSA9IChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbC1vdmVybGF5XCIpKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG59O1xuXG5jb25zdCBQb3B1cE1vZGFsID0gKHsgdGl0bGUgPSBcIlwiLCBjb250ZW50LCBpc0xhcmdlID0gdHJ1ZSwgYnV0dG9ucyA9IGZhbHNlLCBpY29uID0gXCJcIiB9ID0ge30pID0+IHtcbiAgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcHVwLW1vZGFsXCIpO1xuICBpZiAoIW1vZGFsQ29udGFpbmVyKSB7XG4gICAgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicG9wdXAtbW9kYWxcIik7XG4gICAgbW9kYWxDb250YWluZXIuaWQgPSBcInBvcHVwLW1vZGFsXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcik7XG4gIH1cblxuICBtb2RhbFJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KG1vZGFsQ29udGFpbmVyKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlRXNjS2V5KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXG4gIGNvbnN0IE1vZGFsQ29tcG9uZW50ID0gbWVtbygoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9kYWxfX2NvbnRhaW5lciR7aXNMYXJnZSA/IFwiIG1vZGFsX19jb250YWluZXItLWxhcmdlXCIgOiBcIlwifWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2hlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fdGl0bGVDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faWNvblwiPntpY29ufTwvZGl2PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2J1dHRvbkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICB7YnV0dG9uc31cbiAgICAgICAgICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlciBsYWJlbD1cIkNsb3NlXCIgcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbF9fYnV0dG9uIG1vZGFsX19idXR0b24tLWNsb3NlXCIgb25DbGljaz17KCkgPT4gY2xvc2VNb2RhbCgpfT5cbiAgICAgICAgICAgICAgICAgIDxJY29ucy5SZWFjdC5jbG9zZSBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9TcGljZXRpZnkuUmVhY3RDb21wb25lbnQuVG9vbHRpcFdyYXBwZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19jb250ZW50XCI+XG4gICAgICAgICAgICB7UmVhY3QuaXNWYWxpZEVsZW1lbnQoY29udGVudCkgPyBjb250ZW50IDogUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZW50KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgbW9kYWxSb290LnJlbmRlcig8TW9kYWxDb21wb25lbnQgLz4pO1xufTtcblxuUG9wdXBNb2RhbC5oaWRlID0gY2xvc2VNb2RhbDtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBNb2RhbDtcbiIsICJjb25zdCBJY29ucyA9IHtcbiAgLy8yNHB4XG4gIGVkaXRCdXR0b246XG4gICAgXCJNMTcuMzE4IDEuOTc1YTMuMzI5IDMuMzI5IDAgMTE0LjcwNyA0LjcwN0w4LjQ1MSAyMC4yNTZjLS40OS40OS0xLjA4Mi44NjctMS43MzUgMS4xMDNMMi4zNCAyMi45NGExIDEgMCAwMS0xLjI4LTEuMjhsMS41ODEtNC4zNzZhNC43MjYgNC43MjYgMCAwMTEuMTAzLTEuNzM1TDE3LjMxOCAxLjk3NXptMy4yOTMgMS40MTRhMS4zMjkgMS4zMjkgMCAwMC0xLjg4IDBMNS4xNTkgMTYuOTYzYy0uMjgzLjI4My0uNS42MjQtLjYzNiAxbC0uODU3IDIuMzcyIDIuMzcxLS44NTdhMi43MjYgMi43MjYgMCAwMDEuMDAxLS42MzZMMjAuNjExIDUuMjY4YTEuMzI5IDEuMzI5IDAgMDAwLTEuODc5elwiLFxuICAvLzI0cHhcbiAgc2V0dGluZ3M6XG4gICAgXCJNNy45NiA1LjMzYTIuNjcgMi42NyA5MCAxMDAgNS4zNCAyLjY3IDIuNjcgOTAgMDAwLTUuMzRaTTYuNjcgOEExLjMzIDEuMzMgOTAgMTE5LjMzIDggMS4zMyAxLjMzIDkwIDAxNi42NyA4Wm00LjgyLTQuODFhLjk1Ljk0IDkwIDAxLTEuMS0uNzVMMTAuMDUuNTVBLjQ3LjQ3IDkwIDAwOS42OC4xNyA4LjEgOC4xIDkwIDAwNi4zMi4xNy40Ny40NyA5MCAwMDUuOTYuNTVMNS42MSAyLjQ0YS45NS45NSA5MCAwMS0xLjI1LjcxTDIuNTUgMi41MWEuNDcuNDcgOTAgMDAtLjUxLjEzQzEuMjggMy40Ny43MSA0LjQ2LjM2IDUuNTNhLjQ3LjQ3IDkwIDAwLjE0LjUxTDEuOTcgNy4yOGEuOTQuOTQgOTAgMDEwIDEuNDNMLjUgOS45NWEuNDcuNDcgOTAgMDAtLjE0LjUxIDcuOTggNy45OCA5MCAwMDEuNjggMi45LjQ3LjQ3IDkwIDAwLjUxLjEzbDEuODEtLjY1YS45NC45NCA5MCAwMTEuMjUuNzJsLjM0IDEuODljLjA0LjE4LjE4LjMzLjM3LjM3YTguMSA4LjEgOTAgMDAzLjM2IDAgLjQ3LjQ3IDkwIDAwLjM3LS4zN2wuMzQtMS44OWEuOTUuOTUgOTAgMDExLjI1LS43MmwxLjgxLjY1Yy4xOC4wNi4zOC4wMS41MS0uMTMuNzYtLjg0IDEuMzQtMS44MiAxLjY4LTIuOWEuNDcuNDcgOTAgMDAtLjE0LS41TDE0LjAzIDguNzJhLjk0Ljk0IDkwIDAxMC0xLjQ0TDE1LjUgNi4wNGEuNDcuNDcgOTAgMDAuMTQtLjUgNy45OCA3Ljk4IDkwIDAwLTEuNjgtMi45LjQ3LjQ3IDkwIDAwLS41MS0uMTNsLTEuODEuNjVhLjk1Ljk1IDkwIDAxLS4xNS4wNFptLTguODIuNzggMS4yNS40NGEyLjI4IDIuMjggOTAgMDAzLTEuNzNsLjI0LTEuM2E2LjgxIDYuODEgOTAgMDExLjY4IDBsLjI0IDEuM2EyLjI4IDIuMjggOTAgMDAzLjAxIDEuNzNsMS4yNC0uNDRjLjM0LjQ0LjYzLjkzLjg0IDEuNDRsLTEgLjg1YTIuMjcgMi4yNyA5MCAwMDAgMy40OGwxIC44NWE2LjY1IDYuNjUgOTAgMDEtLjg0IDEuNDRsLTEuMjQtLjQ0QTIuMjggMi4yOCA5MCAwMDkuMDggMTMuMzJsLS4yNCAxLjI5YTYuOCA2LjggOTAgMDEtMS42OSAwbC0uMjMtMS4yOUEyLjI4IDIuMjggOTAgMDAzLjkxIDExLjU5bC0xLjI0LjQ0YTYuNjUgNi42NSA5MCAwMS0uODQtMS40NGwxLS44NmEyLjI3IDIuMjcgOTAgMDAwLTMuNDdsLTEtLjg1Yy4yMS0uNTEuNS0xIC44NC0xLjQ0WlwiLFxuICAvLzI0cHhcbiAgZ2l0aHViOlxuICAgIFwiTTEyLjIxMzUgMEMxOC45NDcgMCAyNC40MjY3IDUuNSAyNC40MDY2IDEyLjMwNDFjMCA1LjQzOTEtMy40OTgzIDEwLjA0MjgtOC4zNTEzIDExLjY3MjgtLjYwNjUuMTIyMy0uODI5LS4yNjUtLjgyOS0uNTkxIDAtLjQwNzIuMDItMS43MzE1LjAyLTMuMzgxNSAwLTEuMTYxMy0uMzg0LTEuODk0NS0uODI5LTIuMjgxNSAyLjczLS4zMDU4IDUuNTgxLTEuMzQ0NSA1LjU4MS02LjA3MDggMC0xLjM0NDUtLjQ2NS0yLjQ0NDUtMS4yNTM3LTMuMy4xMjEzLS4zMDU1LjU0NjMtMS41Njg4LS4xMjEyLTMuMjU5NSAwIDAtMS4wMzEyLS4zMjYtMy4zNTY3IDEuMjYzLS45NzA3LS4yNjQ4LTIuMDIxOS0uNDA3NS0zLjA1MzItLjQwNzVBMTEuNzQyNSAxMS43NDI1IDkwIDAwOS4xNiA2LjM1NTZjLTIuMzI1Mi0xLjU4OS0zLjM1NjUtMS4yNjMtMy4zNTY1LTEuMjYzLS42Njc1IDEuNjkwNy0uMjQyNyAyLjk1NC0uMTIxNSAzLjI1OTUtLjc2ODUuODU1NS0xLjI1MzUgMS45NTU1LTEuMjUzNSAzLjMgMCA0LjcyNjMgMi44NTA5IDUuNzg1NSA1LjU2MDcgNi4wNzA4LS4zNDM3LjMwNTUtLjY2NzUuODU1NS0uNzY4NSAxLjY1LS43MDc3LjMyNi0yLjQ2Ny44NTU1LTMuNTU4Ny0xLjAxODUgMCAwLS42NDcyLTEuMTgxNS0xLjg4MDctMS4yNjMgMCAwLTEuMTkzIDAtLjA4MS43NTM4IDAgMCAuODA5LjM2NjUgMS4zNTUgMS43OTI1IDAgMCAuNzA3NSAyLjIwMDIgNC4xMDUgMS40NjY3IDAgMS4wMTg4LjAyIDEuOTk2NS4wMiAyLjI4MTggMCAuMzI1OC0uMjIyMi43MTMtLjgyOS41OTA1QzMuNDk4MyAyMi4zNDcyIDAgMTcuNzQzMiAwIDEyLjMwNDIgMCA1LjUgNS40NTk3IDAgMTIuMjEzNSAwWlwiLFxuICAvLzMycHhcbiAgY2xvc2U6XG4gICAgXCJNMzEuMDk4IDI5Ljc5NCAxNi45NTUgMTUuNjUgMzEuMDk3IDEuNTEgMjkuNjgzLjA5MyAxNS41NCAxNC4yMzcgMS40LjA5NC0uMDE2IDEuNTA4IDE0LjEyNiAxNS42NS0uMDE2IDI5Ljc5NWwxLjQxNCAxLjQxNEwxNS41NCAxNy4wNjVsMTQuMTQ0IDE0LjE0M1wiLFxuICAvLzI0cHhcbiAgd2FybmluZzpcbiAgICBcIk0xMyAxNFY5SDExdjVabTAgMkgxMXYyaDJabTguODg0IDMuNUExIDEgMCAwMTIxIDIxSDNhMSAxIDAgMDEtLjg4NC0xLjQ2OGw5LTE3Yy4zNDYtLjY1NCAxLjQyMi0uNjU0IDEuNzY4IDBaXCIsXG4gIC8vMTZweFxuICBtb3JlOiBcIk0zIDhBMS41IDEuNSAwIDExMCA4YTEuNSAxLjUgMCAwMTMgMHptNi41IDBhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6TTE2IDhhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6XCIsXG4gIC8vMjRweFxuICBxdWVzdGlvbk1hcms6XG4gICAgXCJNMTIgMmM1LjUyMyAwIDEwIDQuNDc4IDEwIDEwcy00LjQ3NyAxMC0xMCAxMFMyIDE3LjUyMiAyIDEyIDYuNDc3IDIgMTIgMlptMCAxLjY2N2MtNC41OTUgMC04LjMzMyAzLjczOC04LjMzMyA4LjMzM1M3LjQwNSAyMC4zMzMgMTIgMjAuMzMzIDIwLjMzMyAxNi41OTUgMjAuMzMzIDEyYzAtNC41OTUtMy43MzgtOC4zMzMtOC4zMzMtOC4zMzNaTTEyIDE1LjVhMSAxIDAgMTEwIDIgMSAxIDAgMDEwLTJabTAtOC43NWEyLjc1IDIuNzUgMCAwMTIuNzUgMi43NWMwIDEuMDEtLjI5NyAxLjU3NC0xLjA1MSAyLjM1OWwtLjE2OS4xNzFjLS42MjIuNjIyLS43OC44ODYtLjc4IDEuNDdhLjc1Ljc1IDAgMDEtMS41IDBjMC0xLjAxLjI5Ny0xLjU3NCAxLjA1MS0yLjM1OWwuMTY5LS4xNzFjLjYyMi0uNjIyLjc4LS44ODYuNzgtMS40N2ExLjI1IDEuMjUgMCAwMC0yLjQ5My0uMTI4bC0uMDA3LjEyOGEuNzUuNzUgMCAwMS0xLjUgMEEyLjc1IDIuNzUgMCAwMTEyIDYuNzVaXCIsXG4gIC8vMjRweFxuICBkcm9wZG93bjpcbiAgICBcIk0yMC40NjE0IDYuMzQ2OWExLjUwNiAxLjUwNiA5MCAwMC0yLjExMjUuMTkxOUwxMiAxNC4xNTY0IDUuNjUxIDYuNTM4OWExLjQ5OTcgMS40OTk3IDkwIDEwLTIuMzAyOCAxLjkyMmw3LjUwMDQgOS4wMDA0YTEuNDk5MiAxLjQ5OTIgOTAgMDAyLjMwMjggMGw3LjUwMDQtOS4wMDA1YTEuNTAxOSAxLjUwMTkgOTAgMDAtLjE5MDQtMi4xMTM5WlwiLFxuICAvLzI0cHhcbiAgcGFsZXR0ZTpcbiAgICBcIk0xMiAyYzUuNDYxIDAgOS45NjUgNC4wMTIgOS45OTIgOC44NCAwIDMuMDUxLTIuNTA0IDUuNTU0LTUuNTU1IDUuNTU0SDE0LjQ0MWExLjY0IDEuNjQgMCAwMC0xLjY2OCAxLjY2OGMwIC40NzMuMTQ4LjgzNi40MzggMS4xMjUuMjU3LjI5LjQzNy42ODguNDM3IDEuMTI1QzEzLjY0OCAyMS4yNTQgMTIuOTI2IDIyIDEyIDIyIDYuNSAyMiAyIDE3LjUgMiAxMlM2LjUgMiAxMiAyWlwiLFxuICAvLzE2cHhcbiAgZHVwbGljYXRlOlxuICAgIFwiTTE1IDMuNWMwLS41LS41LTEtMS0xSDExVjFjMC0uNS0uNS0xLTEtMUgyQzEuNSAwIDEgLjUgMSAxVjExLjVjMCAuNS41IDEgMSAxSDQuNVYxNWMwIC41LjUgMSAxIDFIMTRjLjUgMCAxLS41IDEtMVpNMi41IDJjMC0uMjUuMjUtLjUuNS0uNUg5Yy4yNSAwIC41LjI1LjUuNXY4LjVjMCAuMjUtLjI1LjUtLjUuNUgzYy0uMjUgMC0uNS0uMjUtLjUtLjVabTQgMTIuNWMtLjI1IDAtLjUtLjI1LS41LS41VjEyLjVoNGMuNSAwIDEtLjUgMS0xVjRoMmMuMjUgMCAuNS4yNS41LjVWMTRjMCAuMjUtLjI1LjUtLjUuNVpcIixcbn07XG5cbmNvbnN0IFJlYWN0Q29tcG9uZW50ID0gKGljb24sIGRlZmF1bHRTaXplID0gMTYpID0+IHtcbiAgcmV0dXJuICh7IHNpemUgPSBkZWZhdWx0U2l6ZSwgZmlsbCA9IFwiY3VycmVudENvbG9yXCIgfSkgPT4gKFxuICAgIDxzdmcgdmlld0JveD17YDAgMCAke2RlZmF1bHRTaXplfSAke2RlZmF1bHRTaXplfWB9IHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IGZpbGw9e2ZpbGx9PlxuICAgICAgPHBhdGggZD17aWNvbn0gLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbkljb25zLlJlYWN0ID0ge1xuICBlZGl0QnV0dG9uOiBSZWFjdENvbXBvbmVudChJY29ucy5lZGl0QnV0dG9uLCAyNCksXG4gIHNldHRpbmdzOiBSZWFjdENvbXBvbmVudChJY29ucy5zZXR0aW5ncywgMTYpLFxuICBnaXRodWI6IFJlYWN0Q29tcG9uZW50KEljb25zLmdpdGh1YiwgMjQpLFxuICBjbG9zZTogUmVhY3RDb21wb25lbnQoSWNvbnMuY2xvc2UsIDMyKSxcbiAgd2FybmluZzogUmVhY3RDb21wb25lbnQoSWNvbnMud2FybmluZywgMjQpLFxuICBtb3JlOiBSZWFjdENvbXBvbmVudChJY29ucy5tb3JlLCAxNiksXG4gIHF1ZXN0aW9uTWFyazogUmVhY3RDb21wb25lbnQoSWNvbnMucXVlc3Rpb25NYXJrLCAyNCksXG4gIGRyb3Bkb3duOiBSZWFjdENvbXBvbmVudChJY29ucy5kcm9wZG93biwgMjQpLFxuICBwYWxldHRlOiBSZWFjdENvbXBvbmVudChJY29ucy5wYWxldHRlLCAyNCksXG4gIGR1cGxpY2F0ZTogUmVhY3RDb21wb25lbnQoSWNvbnMuZHVwbGljYXRlLCAxNiksXG59O1xuXG5JY29ucy5IVE1MID0ge1xuICBlZGl0QnV0dG9uOiBgPHBhdGggZD1cIiR7SWNvbnMuZWRpdEJ1dHRvbn1cIi8+YCxcbiAgc2V0dGluZ3M6IGA8cGF0aCBkPVwiJHtJY29ucy5zZXR0aW5nc31cIi8+YCxcbiAgZ2l0aHViOiBgPHBhdGggZD1cIiR7SWNvbnMuZ2l0aHVifVwiLz5gLFxuICBjbG9zZTogYDxwYXRoIGQ9XCIke0ljb25zLmNsb3NlfVwiLz5gLFxuICB3YXJuaW5nOiBgPHBhdGggZD1cIiR7SWNvbnMud2FybmluZ31cIi8+YCxcbiAgbW9yZTogYDxwYXRoIGQ9XCIke0ljb25zLm1vcmV9XCIvPmAsXG4gIHF1ZXN0aW9uTWFyazogYDxwYXRoIGQ9XCIke0ljb25zLnF1ZXN0aW9uTWFya31cIi8+YCxcbiAgZHJvcGRvd246IGA8cGF0aCBkPVwiJHtJY29ucy5kcm9wZG93bn1cIi8+YCxcbiAgcGFsZXR0ZTogYDxwYXRoIGQ9XCIke0ljb25zLnBhbGV0dGV9XCIvPmAsXG4gIGR1cGxpY2F0ZTogYDxwYXRoIGQ9XCIke0ljb25zLmR1cGxpY2F0ZX1cIi8+YCxcbn07XG5cbi8vIFVzYWdlOlxuLy8gPHN2Z1xuLy8gICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbi8vICAgd2lkdGg9XCIxNlwiXG4vLyAgIGhlaWdodD1cIjE2XCJcbi8vICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4vLyAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4vLyAgICAgX19odG1sOiBJY29ucy5IVE1MLm1vcmUsXG4vLyAgIH19XG4vLyAvPlxuLy8gT1I6XG4vLyA8SWNvbnMuUmVhY3QuZWRpdEJ1dHRvbiBzaXplPXsyNH0gZmlsbD1cIiNmZmZcIiAvPlxuXG5leHBvcnQgZGVmYXVsdCBJY29ucztcbiIsICJpbXBvcnQgeyBtZW1vLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5pbXBvcnQgSWNvbnMgZnJvbSBcIi4uL2ljb25zL0ljb25zXCI7XG5pbXBvcnQgT3B0aW9uUm93IGZyb20gXCIuLi9tZW51L2NvbXBvbmVudHMvT3B0aW9uUm93XCI7XG5pbXBvcnQgUmFkaW9CdXR0b24gZnJvbSBcIi4uL21lbnUvY29tcG9uZW50cy9SYWRpb0J1dHRvblwiO1xuaW1wb3J0IFRvZ2dsZSBmcm9tIFwiLi4vbWVudS9jb21wb25lbnRzL1RvZ2dsZVwiO1xuaW1wb3J0IENvbnNvbGUgZnJvbSBcIi4uL3V0aWxzL0NvbnNvbGVcIjtcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSBcIi4uL3V0aWxzL05vdGlmaWNhdGlvblwiO1xuXG5jb25zdCBEZWJ1Z01lbnUgPSBtZW1vKCgpID0+IHtcbiAgY29uc3QgW2xhc3RWZXJzaW9uLCBzZXRMYXN0VmVyc2lvbl0gPSB1c2VTdGF0ZShcIkxvYWRpbmcuLi5cIik7XG4gIGNvbnN0IFtsYXN0VXBkYXRlZCwgc2V0TGFzdFVwZGF0ZWRdID0gdXNlU3RhdGUoXCJMb2FkaW5nLi4uXCIpO1xuICBjb25zdCBbZW5hYmxlZCwgc2V0RW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZFJhZGlvLCBzZXRTZWxlY3RlZFJhZGlvXSA9IHVzZVN0YXRlKFwib3B0aW9uMVwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3Zlcnlib3Jpbmdod2wvc3BpY2V0aWZ5L3JlbGVhc2VzL2xhdGVzdFwiLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIHNldExhc3RWZXJzaW9uKGRhdGEudGFnX25hbWUpO1xuXG4gICAgICAgIGNvbnN0IHB1Ymxpc2hEYXRlID0gbmV3IERhdGUoZGF0YS5wdWJsaXNoZWRfYXQpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gcHVibGlzaERhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi1HQlwiLCBvcHRpb25zKTtcbiAgICAgICAgc2V0TGFzdFVwZGF0ZWQoZm9ybWF0dGVkRGF0ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBDb25zb2xlLkVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbGF0ZXN0IHZlcnNpb246XCIsIGVycm9yKTtcbiAgICAgICAgc2V0TGFzdFZlcnNpb24oXCJFcnJvciBmZXRjaGluZ1wiKTtcbiAgICAgICAgc2V0TGFzdFVwZGF0ZWQoXCJFcnJvciBmZXRjaGluZ1wiKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBJbmZvID0ge1xuICAgIFwiQ3VycmVudCBUaGVtZSBWZXJzaW9uXCI6IFwidjEuMi4wXCIsXG4gICAgXCJOZXdlc3QgVGhlbWUgVmVyc2lvblwiOiBsYXN0VmVyc2lvbixcbiAgICBcIkxhc3QgVXBkYXRlZFwiOiBsYXN0VXBkYXRlZCxcbiAgICBcIlNwb3RpZnkgVmVyc2lvblwiOiBTcGljZXRpZnkuUGxhdGZvcm0udmVyc2lvbixcbiAgICBcIlNwaWNldGlmeSBWZXJzaW9uXCI6IFNwaWNldGlmeS5Db25maWcudmVyc2lvbixcbiAgICBQbGF0Zm9ybTogU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXRmb3JtRGF0YS5hcHBfcGxhdGZvcm0sXG4gICAgT1M6IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF0Zm9ybURhdGEub3NfbmFtZSxcbiAgICBUaGVtZTogU3BpY2V0aWZ5LkNvbmZpZy5jdXJyZW50X3RoZW1lLFxuICAgIEV4dGVuc2lvbnM6IFNwaWNldGlmeS5Db25maWcuZXh0ZW5zaW9ucy5qb2luKFwiLCBcIiksXG4gICAgXCJDdXN0b20gYXBwc1wiOiBTcGljZXRpZnkuQ29uZmlnLmN1c3RvbV9hcHBzLmpvaW4oXCIsIFwiKSxcbiAgICBcIkNvbG91ciBTY2hlbWVcIjogU3BpY2V0aWZ5LkNvbmZpZy5jb2xvcl9zY2hlbWUsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLXZlcnNpb25cIj5cbiAgICAgIHtPYmplY3QuZW50cmllcyhJbmZvKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKFxuICAgICAgICA8cCBrZXk9e2tleX0gY2xhc3NOYW1lPVwidGhlbWUtaW5mby1pdGVtXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGhlbWUtaW5mby1rZXkgZW5jb3JlLXRleHQtYm9keS1tZWRpdW0tYm9sZFwiPntrZXl9OiA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGhlbWUtaW5mby12YWx1ZVwiPnt2YWx1ZX08L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICkpfVxuICAgICAgPHA+XG4gICAgICAgIFByZXNzIDxrYmQ+Rjg8L2tiZD4gdG8gcGF1c2Ugc2NyaXB0IGV4ZWN1dGlvbi5cbiAgICAgIDwvcD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIE5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uOiAxMDAwMCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGVidWcgTWVudSBub3RpZmljYXRpb24gbG9sb2xvbG9sXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFNwZWNpYWwgQnV0dG9uXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy13cmFwcGVyXCI+XG4gICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxJY29ucy5SZWFjdC5kdXBsaWNhdGUgc2l6ZT17NTB9IC8+XG4gICAgICA8SWNvbnMuUmVhY3QucGFsZXR0ZSBzaXplPXs1MH0gLz5cbiAgICAgIDxTcGljZXRpZnkuUmVhY3RDb21wb25lbnQuQ2FyZHMuRGVmYXVsdFxuICAgICAgICBpZD1cImNhcmQtaWRcIlxuICAgICAgICB0aXRsZT1cIkNhcmQgVGl0bGVcIlxuICAgICAgICBzdWJ0aXRsZT1cIkNhcmQgU3VidGl0bGVcIlxuICAgICAgICBtZWRpYT1cImh0dHBzOi8vcGxhY2Vob2xkLmNvLzEwMFwiXG4gICAgICAgIHNpemU9XCJzbVwiIC8vIFwic21cIiBvciBcIm1kXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJDYXJkIGNsaWNrZWRcIil9XG4gICAgICA+XG4gICAgICAgIDxTcGljZXRpZnkuUmVhY3RDb21wb25lbnQuQ2FyZHMuRGVmYXVsdC5Cb2R5PlxuICAgICAgICAgIEFkZGl0aW9uYWwgY29udGVudCBoZXJlXG4gICAgICAgIDwvU3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LkNhcmRzLkRlZmF1bHQuQm9keT5cbiAgICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5DYXJkcy5EZWZhdWx0LkZvb3Rlcj5cbiAgICAgICAgICBGb290ZXIgY29udGVudFxuICAgICAgICA8L1NwaWNldGlmeS5SZWFjdENvbXBvbmVudC5DYXJkcy5EZWZhdWx0LkZvb3Rlcj5cbiAgICAgIDwvU3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LkNhcmRzLkRlZmF1bHQ+XG4gICAgICA8U3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlRleHRDb21wb25lbnRcbiAgICAgICAgc2VtYW50aWNDb2xvcj1cInRleHRCYXNlXCJcbiAgICAgICAgdmFyaWFudD1cInZpb2xhXCJcbiAgICAgICAgd2VpZ2h0PVwiYm9va1wiXG4gICAgICA+XG4gICAgICAgIEhlbGxvIFdvcmxkXG4gICAgICA8L1NwaWNldGlmeS5SZWFjdENvbXBvbmVudC5UZXh0Q29tcG9uZW50PlxuICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlclxuICAgICAgICBsYWJlbD1cIkhlbGxvIFdvcmxkXCJcbiAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgdHJpZ2dlcj1cIm1vdXNlZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8ZGl2PkhvdmVyIG1lPC9kaXY+XG4gICAgICA8L1NwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlcj5cbiAgICAgIDxPcHRpb25Sb3cgbmFtZT17XCJCSVRDSFwifSBkZXNjPXtcIlJFRUVFRUVcIn0gdGlwcHk9e1wiSEVMTE9FXCJ9IHBvcHVwTW9kYWw9e0RlYnVnTWVudX0+XG4gICAgICAgIDxUb2dnbGUgdmFsdWU9e2VuYWJsZWR9IG9uQ2hhbmdlPXsoKSA9PiBzZXRFbmFibGVkKCFlbmFibGVkKX0gLz5cbiAgICAgIDwvT3B0aW9uUm93PlxuICAgICAgPFJhZGlvQnV0dG9uXG4gICAgICAgIGl0ZW1zPXtbXG4gICAgICAgICAgeyBsYWJlbDogXCJPcHRpb24gMVwiLCB2YWx1ZTogXCJvcHRpb24xXCIgfSxcbiAgICAgICAgICB7IGxhYmVsOiBcIk9wdGlvbiAyXCIsIHZhbHVlOiBcIm9wdGlvbjJcIiB9LFxuICAgICAgICAgIHsgbGFiZWw6IFwiT3B0aW9uIDNcIiwgdmFsdWU6IFwib3B0aW9uM1wiIH0sXG4gICAgICAgIF19XG4gICAgICAgIG5hbWU9XCJkZWJ1Z1JhZGlvXCJcbiAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkUmFkaW99XG4gICAgICAgIG9uQ2hhbmdlPXtzZXRTZWxlY3RlZFJhZGlvfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBEZWJ1Z01lbnU7XG4iLCAiY29uc3QgTG9hZGluZ0luZGljYXRvciA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWluZGljYXRvci1jb250YWluZXJcIj5cbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTIwIDQwXCIgY2xhc3NOYW1lPVwibG9hZGluZy1pbmRpY2F0b3JcIj5cbiAgICAgIDxjaXJjbGUgc3Ryb2tlPVwibm9uZVwiIGN4PVwiMjBcIiBjeT1cIjIwXCIgcj1cIjhcIiBjbGFzc05hbWU9XCJsb2FkaW5nLWluZGljYXRvci1jaXJjbGVcIiAvPlxuICAgICAgPGNpcmNsZSBzdHJva2U9XCJub25lXCIgY3g9XCI2MFwiIGN5PVwiMjBcIiByPVwiOFwiIGNsYXNzTmFtZT1cImxvYWRpbmctaW5kaWNhdG9yLWNpcmNsZVwiIC8+XG4gICAgICA8Y2lyY2xlIHN0cm9rZT1cIm5vbmVcIiBjeD1cIjEwMFwiIGN5PVwiMjBcIiByPVwiOFwiIGNsYXNzTmFtZT1cImxvYWRpbmctaW5kaWNhdG9yLWNpcmNsZVwiIC8+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ0luZGljYXRvcjtcbiIsICJpbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGlwcHlCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGlwcHlCdXR0b25cIjtcbmltcG9ydCBQb3B1cEJ1dHRvbiBmcm9tIFwiLi9Qb3B1cEJ1dHRvblwiO1xuXG5jb25zdCBPcHRpb25Sb3cgPSBtZW1vKCh7IG5hbWUsIGRlc2MsIHRpcHB5LCBjaGlsZHJlbiwgcG9wdXBNb2RhbCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGhlbWVPcHRpb25Sb3dcIiBkYXRhLW5hbWU9e25hbWV9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWVPcHRpb25Db250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lT3B0aW9uRGVzY1wiPntkZXNjfTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWVPcHRpb25Db250cm9sXCI+XG4gICAgICB7dGlwcHkgJiYgPFRpcHB5QnV0dG9uIHRpcHB5PXt0aXBweX0gLz59XG4gICAgICA8UG9wdXBCdXR0b24gbmFtZT17bmFtZX0gcG9wdXBNb2RhbD17cG9wdXBNb2RhbH0gLz5cblxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbikpO1xuXG5leHBvcnQgZGVmYXVsdCBPcHRpb25Sb3c7XG4iLCAiaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEljb25zIGZyb20gXCIuLi9pY29ucy9JY29uc1wiO1xuXG5jb25zdCBUaXBweUJ1dHRvbiA9IG1lbW8oKHsgdGlwcHkgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTcGljZXRpZnkuUmVhY3RDb21wb25lbnQuVG9vbHRpcFdyYXBwZXIgbGFiZWw9e3RpcHB5fSBwbGFjZW1lbnQ9XCJ0b3BcIiBzaG93RGVsYXk9ezB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLXRpcHB5XCI+XG4gICAgICAgIDxJY29ucy5SZWFjdC5xdWVzdGlvbk1hcmsgc2l6ZT17MjB9IGZpbGw9XCJ2YXIoLS1zcGljZS1zdWJ0ZXh0KVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1NwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlcj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUaXBweUJ1dHRvbjtcbiIsICJpbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9wdXBNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3B1cE1vZGFsXCI7XG5pbXBvcnQgSWNvbnMgZnJvbSBcIi4uLy4uL2ljb25zL0ljb25zXCI7XG5cbmNvbnN0IFBvcHVwQnV0dG9uID0gbWVtbygoeyBuYW1lLCBwb3B1cE1vZGFsIH0pID0+IHtcbiAgaWYgKCFwb3B1cE1vZGFsKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cInBvcHVwLWJ1dHRvblwiXG4gICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICBQb3B1cE1vZGFsKHtcbiAgICAgICAgICB0aXRsZTogbmFtZSxcbiAgICAgICAgICBjb250ZW50OiBwb3B1cE1vZGFsLFxuICAgICAgICAgIGlzTGFyZ2U6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgYXJpYS1sYWJlbD1cIk9wZW4gcG9wdXBcIlxuICAgID5cbiAgICAgIDxJY29ucy5SZWFjdC5lZGl0QnV0dG9uIHNpemU9ezE2fSAvPlxuICAgIDwvYnV0dG9uPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwQnV0dG9uO1xuIiwgImltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUmFkaW9CdXR0b24gPSBtZW1vKCh7IG9wdGlvbnMsIG5hbWUsIHNlbGVjdGVkLCBvbkNoYW5nZSwgZGlzYWJsZWQgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvLWJ1dHRvblwiPlxuICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICA8bGFiZWwga2V5PXtvcHRpb24udmFsdWV9IGNsYXNzTmFtZT1cInJhZGlvLWJ1dHRvbl9faXRlbVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpby1idXR0b25fX2lucHV0XCJcbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdmFsdWU9e29wdGlvbi52YWx1ZX1cbiAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZCA9PT0gb3B0aW9uLnZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYWRpby1idXR0b25fX3RleHRcIj57b3B0aW9uLmxhYmVsfTwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgKSl9XG4gIDwvZGl2PlxuKSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvQnV0dG9uO1xuIiwgImltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVG9nZ2xlID0gbWVtbygoeyB2YWx1ZSwgb25DaGFuZ2UsIGRpc2FibGVkIH0pID0+IChcbiAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0b2dnbGVcIiBvbkNsaWNrPXtvbkNoYW5nZX0gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b2dnbGVfX2JhY2tncm91bmRcIj5cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT17YHRvZ2dsZV9fc2xpZGVyJHt2YWx1ZSA/IFwiIHRvZ2dsZV9fc2xpZGVyLS1lbmFibGVkXCIgOiBcIlwifSR7ZGlzYWJsZWQgPyBcIiB0b2dnbGVfX3NsaWRlci0tZGlzYWJsZWRcIiA6IFwiXCJ9YH1cbiAgICAgIC8+XG4gICAgPC9zcGFuPlxuICA8L2J1dHRvbj5cbikpO1xuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGU7XG4iLCAiY29uc3QgQ29uc29sZSA9IHtcbiAgTG9nOiAoLi4ubWVzc2FnZXMpID0+XG4gICAgY29uc29sZS5sb2coXG4gICAgICBgJWNcdTI1Q0YgXHUxRDE3IFx1MjVDRiBbVGhlbWVdJWMke21lc3NhZ2VzLmpvaW4oXCIgXCIpfWAsXG4gICAgICBcImNvbG9yOiMyNzJhYjA7IGZvbnQtd2VpZ2h0OjEwMDA7IGJhY2tncm91bmQ6I2ZmZmZmZjsgcGFkZGluZzozcHg7IGJvcmRlcjoycHggc29saWQgIzI3MmFiMDsgYm9yZGVyLXJpZ2h0Om5vbmU7IGJvcmRlci1yYWRpdXM6M3B4IDAgMCAzcHg7XCIsXG4gICAgICBcImNvbG9yOiMwMDAwMDA7IGJhY2tncm91bmQ6I2ZmZmZmZjsgcGFkZGluZzozcHg7IGJvcmRlcjoycHggc29saWQgIzI3MmFiMDsgYm9yZGVyLWxlZnQ6bm9uZTsgYm9yZGVyLXJhZGl1czowIDNweCAzcHggMDtcIixcbiAgICApLFxuICBFcnJvcjogKC4uLm1lc3NhZ2VzKSA9PlxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgJWNcdTI1Q0YgXHUxRDE3IFx1MjVDRiBbVGhlbWVdJWMke21lc3NhZ2VzLmpvaW4oXCIgXCIpfWAsXG4gICAgICBcImNvbG9yOiNmZjYwNjA7IGZvbnQtd2VpZ2h0OjEwMDA7IGJhY2tncm91bmQ6I2ZmZmZmZjsgcGFkZGluZzozcHg7IGJvcmRlcjoycHggc29saWQgI2VlNjk2OTsgYm9yZGVyLXJpZ2h0Om5vbmU7IGJvcmRlci1yYWRpdXM6M3B4IDAgMCAzcHg7XCIsXG4gICAgICBcImNvbG9yOiMwMDAwMDA7IGJhY2tncm91bmQ6I2ZmZmZmZjsgcGFkZGluZzozcHg7IGJvcmRlcjoycHggc29saWQgI2VlNjk2OTsgYm9yZGVyLWxlZnQ6bm9uZTsgYm9yZGVyLXJhZGl1czowIDNweCAzcHggMDtcIixcbiAgICApLFxuICBXYXJuOiAoLi4ubWVzc2FnZXMpID0+XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYCVjXHUyNUNGIFx1MUQxNyBcdTI1Q0YgW1RoZW1lXSVjJHttZXNzYWdlcy5qb2luKFwiIFwiKX1gLFxuICAgICAgXCJjb2xvcjojZWU4ODYwOyBmb250LXdlaWdodDoxMDAwOyBiYWNrZ3JvdW5kOiNmZmZmZmY7IHBhZGRpbmc6M3B4OyBib3JkZXI6MnB4IHNvbGlkICNmZjg4NjA7IGJvcmRlci1yaWdodDpub25lOyBib3JkZXItcmFkaXVzOjNweCAwIDAgM3B4O1wiLFxuICAgICAgXCJjb2xvcjojMDAwMDAwOyBiYWNrZ3JvdW5kOiNmZmZmZmY7IHBhZGRpbmc6M3B4OyBib3JkZXI6MnB4IHNvbGlkICNmZjg4NjA7IGJvcmRlci1sZWZ0Om5vbmU7IGJvcmRlci1yYWRpdXM6MCAzcHggM3B4IDA7XCIsXG4gICAgKSxcbiAgRGVidWc6ICguLi5tZXNzYWdlcykgPT5cbiAgICBjb25zb2xlLmRlYnVnKFxuICAgICAgYCVjXHUyNUNGIFx1MUQxNyBcdTI1Q0YgW1RoZW1lXSVjJHttZXNzYWdlcy5qb2luKFwiIFwiKX1gLFxuICAgICAgXCJjb2xvcjojMjcyYWIwOyBmb250LXdlaWdodDoxMDAwOyBiYWNrZ3JvdW5kOiNmZmZmZmY7IHBhZGRpbmc6M3B4OyBib3JkZXI6MnB4IHNvbGlkICMyNzJhYjA7IGJvcmRlci1yaWdodDpub25lOyBib3JkZXItcmFkaXVzOjNweCAwIDAgM3B4O1wiLFxuICAgICAgXCJjb2xvcjojMDAwMDAwOyBiYWNrZ3JvdW5kOiNmZmZmZmY7IHBhZGRpbmc6M3B4OyBib3JkZXI6MnB4IHNvbGlkICMyNzJhYjA7IGJvcmRlci1sZWZ0Om5vbmU7IGJvcmRlci1yYWRpdXM6MCAzcHggM3B4IDA7XCIsXG4gICAgKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnNvbGU7XG4iLCAiaW1wb3J0IEljb25zIGZyb20gXCIuLi9pY29ucy9JY29uc1wiO1xuaW1wb3J0IENvbnNvbGUgZnJvbSBcIi4uL3V0aWxzL0NvbnNvbGVcIjtcblxuY29uc3QgTm90aWZpY2F0aW9uID0gKHtcbiAgbWVzc2FnZSA9IFwiXCIsXG4gIGtleVByZWZpeCA9IFwiY3VzdG9tLW5vdGlmXCIsXG4gIGF1dG9IaWRlRHVyYXRpb24gPSAzMDAwLFxuICBiYWNrZ3JvdW5kQ29sb3VyID0gXCIjZmZmXCIsXG4gIGNvbG91ciA9IFwiIzAwMFwiLFxuICBpc1dhcm5pbmcgPSBmYWxzZSxcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gaXNXYXJuaW5nID8gKFxuICAgIDw+XG4gICAgICA8SWNvbnMuUmVhY3Qud2FybmluZyBzaXplPXsyNH0gLz5cbiAgICAgIDxzcGFuPnttZXNzYWdlfTwvc3Bhbj5cbiAgICA8Lz5cbiAgKSA6IChcbiAgICA8c3Bhbj57bWVzc2FnZX08L3NwYW4+XG4gICk7XG5cbiAgY29uc3QgQmFja2dyb3VuZENvbG91ciA9IGlzV2FybmluZyA/IFwiI2ZmOTgwMFwiIDogYmFja2dyb3VuZENvbG91cjtcbiAgY29uc3QgQ29sb3VyID0gaXNXYXJuaW5nID8gXCIjZmZmXCIgOiBjb2xvdXI7XG5cbiAgdHJ5IHtcbiAgICBTcGljZXRpZnkuU25hY2tiYXIuZW5xdWV1ZUN1c3RvbVNuYWNrYmFyKGtleVByZWZpeCwge1xuICAgICAga2V5UHJlZml4LFxuICAgICAgYXV0b0hpZGVEdXJhdGlvbixcbiAgICAgIGNoaWxkcmVuOiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tbm90aWZpY2F0aW9uXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBnYXA6IFwiOHB4XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgY29sb3I6IENvbG91cixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogQmFja2dyb3VuZENvbG91cixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTRweCAxNnB4XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCIwLjg3NXJlbVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbnNvbGUuRXJyb3IoXCJFcnJvciBkaXNwbGF5aW5nIG5vdGlmaWNhdGlvbjpcIiwgZXJyb3IpO1xuICB9XG59O1xuXG4vLyBFeGFtcGxlIHVzYWdlOlxuLy8gTm90aWZpY2F0aW9uKHtcbi8vICAgYXV0b0hpZGVEdXJhdGlvbjogNTAwMCxcbi8vICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZjk4MDBcIixcbi8vICAgbWVzc2FnZTogKFxuLy8gICAgIDw+XG4vLyAgICAgICA8c3ZnXG4vLyAgICAgICAgIHdpZHRoPVwiMjBcIlxuLy8gICAgICAgICBoZWlnaHQ9XCJcIlxuLy8gICAgICAgICB2aWV3Qm94PVwiMCAwIDk2IDk2XCJcbi8vICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4vLyAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogSWNvbnMud2FybmluZyB9fVxuLy8gICAgICAgLz5cbi8vICAgICAgIDxzcGFuPlxuLy8gICAgICAgICBUaGVtZSBvbmx5IHN1cHBvcnRzIFNwb3RpZnkgdmVyc2lvbnMgZ3JlYXRlciB0aGFuIDEuMi41MC4wMDBcbi8vICAgICAgIDwvc3Bhbj5cbi8vICAgICA8Lz5cbi8vICAgKSxcbi8vIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XG4iLCAiaW1wb3J0IFBvcHVwTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBNb2RhbFwiO1xuaW1wb3J0IERlYnVnTWVudSBmcm9tIFwiLi9EZWJ1Z01lbnVcIjtcblxuY29uc3QgTW91c2V0cmFwID0gKCkgPT4ge1xuICBTcGljZXRpZnkuTW91c2V0cmFwLmJpbmQoXG4gICAgW1xuICAgICAgXCJ1cCB1cCBkb3duIGRvd24gbGVmdCByaWdodCBsZWZ0IHJpZ2h0IGIgYVwiLFxuICAgICAgXCJ2IGUgciBzIGkgbyBuXCIsXG4gICAgICBcInMgcCBvIHQgaSBmIHlcIixcbiAgICAgIFwicyBwIGkgYyBlIHQgaSBmIHlcIixcbiAgICAgIFwiZCBlIGIgdSBnXCIsXG4gICAgXSxcbiAgICAoKSA9PiB7XG4gICAgICBQb3B1cE1vZGFsKHtcbiAgICAgICAgdGl0bGU6IFwiVGhlbWUgVmVyc2lvblwiLFxuICAgICAgICBjb250ZW50OiBEZWJ1Z01lbnUsXG4gICAgICB9KTtcbiAgICB9LFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW91c2V0cmFwO1xuIiwgImltcG9ydCBDb25zb2xlIGZyb20gXCIuL0NvbnNvbGVcIjtcblxuY29uc3QgTG9jYWxTdG9yYWdlID0ge1xuICBnZXQoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0aGVtZToke2tleX1gKTtcbiAgICAgIHJldHVybiBpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbSAhPT0gbnVsbCA/IEpTT04ucGFyc2UoaXRlbSkgOiBkZWZhdWx0VmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGdldHRpbmcgJHtrZXl9IGZyb20gbG9jYWxTdG9yYWdlOmAsIGVycm9yKTtcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICB9LFxuXG4gIHNldChrZXksIHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aGVtZToke2tleX1gLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIENvbnNvbGUuRXJyb3IoYEVycm9yIHNldHRpbmcgJHtrZXl9IGluIGxvY2FsU3RvcmFnZTpgLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxTdG9yYWdlO1xuIiwgImltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b25Db250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uQ29udGFpbmVyXCI7XG5pbXBvcnQgT3B0aW9uVHlwZSBmcm9tIFwiLi4vY29tcG9uZW50cy9PcHRpb25UeXBlXCI7XG5pbXBvcnQgdXNlTW9kYWxTZXR0aW5ncyBmcm9tIFwiLi91c2VNb2RhbFNldHRpbmdzXCI7XG5cbmNvbnN0IEFsYnVtQmFubmVyTW9kYWwgPSBtZW1vKCgpID0+IHtcbiAgY29uc3QgeyBzZXR0aW5ncywgdXBkYXRlU2V0dGluZywgcmVzZXRTZXR0aW5ncywgc2F2ZVNldHRpbmdzIH0gPVxuICAgIHVzZU1vZGFsU2V0dGluZ3MoYWxidW1CYW5uZXJPcHRpb25zKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbW9kYWxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbW9kYWxfX29wdGlvbnNcIj5cbiAgICAgICAge2FsYnVtQmFubmVyT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgIDxPcHRpb25UeXBlXG4gICAgICAgICAgICBrZXk9e29wdGlvbi5uYW1lfVxuICAgICAgICAgICAgb3B0aW9uPXtvcHRpb259XG4gICAgICAgICAgICB2YWx1ZT17c2V0dGluZ3Nbb3B0aW9uLm5hbWVdfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhrZXksIHZhbHVlKSA9PiB1cGRhdGVTZXR0aW5nKGtleSwgdmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLW1vZGFsX19idXR0b25zXCI+XG4gICAgICAgIDxCdXR0b25Db250YWluZXIgcmVzZXRTZXR0aW5ncz17cmVzZXRTZXR0aW5nc30gc2F2ZVNldHRpbmdzPXtzYXZlU2V0dGluZ3N9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgYWxidW1CYW5uZXJPcHRpb25zID0gW1xuICB7XG4gICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICBuYW1lOiBcImFsYnVtLWJhbm5lci1wYWdlXCIsXG4gICAgZGVzYzogXCJQdXRzIGFsYnVtIGFydCBpbiBwbGFjZXNcIixcbiAgICBkZWZhdWx0VmFsOiB0cnVlLFxuICAgIHJ1bih2YWx1ZSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJhbGJ1bS1iYW5uZXItcGFnZVwiLCB2YWx1ZSk7XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwidG9nZ2xlXCIsXG4gICAgbmFtZTogXCJseXJpY3MtcGFnZVwiLFxuICAgIGRlc2M6IFwiQWRkcyBEeW5hbWljIGJhY2tncm91bmRzIHRvIEx5cmljcyBQYWdlXCIsXG4gICAgZGVmYXVsdFZhbDogdHJ1ZSxcbiAgICB0aXBweTogXCJJbmNsdWRlcyBTcG90aWZ5IEx5cmljcyBwYWdlIGFuZCBTcGljZXRpZnkncyBMeXJpY3MgUGx1c1wiLFxuICAgIHJ1bih2YWx1ZSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJseXJpY3MtcGFnZVwiLCB2YWx1ZSk7XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwidG9nZ2xlXCIsXG4gICAgbmFtZTogXCJwbGF5bGlzdC1wYWdlXCIsXG4gICAgZGVzYzogXCJBZGRzIER5bmFtaWMgYmFja2dyb3VuZHMgdG8geW91ciBQbGF5bGlzdCBQYWdlc1wiLFxuICAgIGRlZmF1bHRWYWw6IHRydWUsXG4gICAgcnVuKHZhbHVlKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcInBsYXlsaXN0LXBhZ2VcIiwgdmFsdWUpO1xuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcInRvZ2dsZVwiLFxuICAgIG5hbWU6IFwiYXJ0aXN0LXBhZ2VcIixcbiAgICBkZXNjOiBcIkFkZHMgRHluYW1pYyBiYWNrZ3JvdW5kcyB0byBBcnRpc3QgUGFnZXNcIixcbiAgICBkZWZhdWx0VmFsOiB0cnVlLFxuICAgIHJ1bih2YWx1ZSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJhcnRpc3QtcGFnZVwiLCB2YWx1ZSk7XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwidG9nZ2xlXCIsXG4gICAgbmFtZTogXCJhbGJ1bS1wYWdlXCIsXG4gICAgZGVzYzogXCJBZGRzIER5bmFtaWMgYmFja2dyb3VuZHMgdG8gQWxidW0gUGFnZXNcIixcbiAgICBkZWZhdWx0VmFsOiB0cnVlLFxuICAgIHJ1bih2YWx1ZSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJhbGJ1bS1wYWdlXCIsIHZhbHVlKTtcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICBuYW1lOiBcIm1pc2MtcGFnZVwiLFxuICAgIGRlc2M6IFwiQWRkcyBEeW5hbWljIGJhY2tncm91bmRzIHRvIE1pc2MgUGFnZXNcIixcbiAgICBkZWZhdWx0VmFsOiB0cnVlLFxuICAgIHRpcHB5OiBcIkVuYWJsZXMgYWxidW0gYXJ0IGZvciBTdGF0aW9uLCBDb2xsZWN0aW9uLCBTaG93LCBFcGlzb2RlLCBHZW5yZSwgVXNlclwiLFxuICAgIHJ1bih2YWx1ZSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJtaXNjLXBhZ2VcIiwgdmFsdWUpO1xuICAgIH0sXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBBbGJ1bUJhbm5lck1vZGFsO1xuIiwgImltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQnV0dG9uQ29udGFpbmVyID0gbWVtbygoeyByZXNldFNldHRpbmdzLCBzYXZlU2V0dGluZ3MgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyX19idXR0b24gYnV0dG9uLWNvbnRhaW5lcl9fYnV0dG9uLS1yZXNldFwiXG4gICAgICBvbkNsaWNrPXtyZXNldFNldHRpbmdzfVxuICAgID5cbiAgICAgIFJlc2V0XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lcl9fYnV0dG9uIGJ1dHRvbi1jb250YWluZXJfX2J1dHRvbi0tc2F2ZVwiXG4gICAgICBvbkNsaWNrPXtzYXZlU2V0dGluZ3N9XG4gICAgPlxuICAgICAgU2F2ZVxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbikpO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Db250YWluZXI7XG4iLCAiaW1wb3J0IHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9Ecm9wZG93blwiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XG5pbXBvcnQgT3B0aW9uUm93IGZyb20gXCIuL09wdGlvblJvd1wiO1xuaW1wb3J0IFJhZGlvQnV0dG9uIGZyb20gXCIuL1JhZGlvQnV0dG9uXCI7XG5pbXBvcnQgVG9nZ2xlIGZyb20gXCIuL1RvZ2dsZVwiO1xuXG5jb25zdCBPcHRpb25UeXBlID0gbWVtbygoeyBvcHRpb24sIHZhbHVlLCBvbkNoYW5nZSwgZGlzYWJsZWQgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBvcHRpb24udHlwZSA9PT0gXCJ0b2dnbGVcIiA/ICF2YWx1ZSA6IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgb25DaGFuZ2Uob3B0aW9uLm5hbWUsIG5ld1ZhbHVlKTtcbiAgICB9LFxuICAgIFtvcHRpb24ubmFtZSwgb3B0aW9uLnR5cGUsIHZhbHVlLCBvbkNoYW5nZV0sXG4gICk7XG5cbiAgbGV0IENvbXBvbmVudDtcbiAgY29uc3QgY29tcG9uZW50UHJvcHMgPSB7XG4gICAgdmFsdWUsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICBkaXNhYmxlZCxcbiAgfTtcblxuICBpZiAob3B0aW9uLnR5cGUgPT09IFwidG9nZ2xlXCIpIHtcbiAgICBDb21wb25lbnQgPSBUb2dnbGU7XG4gIH0gZWxzZSBpZiAob3B0aW9uLnR5cGUgPT09IFwiZHJvcGRvd25cIikge1xuICAgIENvbXBvbmVudCA9IERyb3Bkb3duO1xuICAgIGNvbXBvbmVudFByb3BzLm9wdGlvbnMgPSBvcHRpb24ub3B0aW9ucztcbiAgfSBlbHNlIGlmIChvcHRpb24udHlwZSA9PT0gXCJpbnB1dFwiKSB7XG4gICAgQ29tcG9uZW50ID0gSW5wdXQ7XG4gICAgY29tcG9uZW50UHJvcHMucGxhY2Vob2xkZXIgPSBvcHRpb24ucGxhY2Vob2xkZXI7XG4gIH0gZWxzZSBpZiAob3B0aW9uLnR5cGUgPT09IFwicmFkaW9idXR0b25cIikge1xuICAgIENvbXBvbmVudCA9IFJhZGlvQnV0dG9uO1xuICAgIGNvbXBvbmVudFByb3BzLm9wdGlvbnMgPSBvcHRpb24ub3B0aW9ucztcbiAgICBjb21wb25lbnRQcm9wcy5zZWxlY3RlZCA9IHZhbHVlOyAvLyBQYXNzIGN1cnJlbnQgdmFsdWUgYXMgJ3NlbGVjdGVkJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8T3B0aW9uUm93XG4gICAgICBuYW1lPXtvcHRpb24ubmFtZX1cbiAgICAgIGRlc2M9e29wdGlvbi5kZXNjfVxuICAgICAgdGlwcHk9e29wdGlvbi50aXBweX1cbiAgICAgIHBvcHVwTW9kYWw9e29wdGlvbi5wb3B1cE1vZGFsfVxuICAgID5cbiAgICAgIDxDb21wb25lbnQgey4uLmNvbXBvbmVudFByb3BzfSAvPlxuICAgIDwvT3B0aW9uUm93PlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE9wdGlvblR5cGU7XG4iLCAiaW1wb3J0IHsgbWVtbywgdXNlSWQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEljb25zIGZyb20gXCIuLi8uLi9pY29ucy9JY29uc1wiO1xuXG5jb25zdCBEcm9wZG93biA9IG1lbW8oKHsgdmFsdWUsIG9wdGlvbnMsIG9uQ2hhbmdlLCBkaXNhYmxlZCB9KSA9PiB7XG4gIGNvbnN0IHBvcG92ZXJJZCA9IHVzZUlkKCk7XG4gIGNvbnN0IHBvcG92ZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGFuY2hvck5hbWUgPSBgLS1kcm9wZG93bi1hbmNob3ItJHtwb3BvdmVySWQucmVwbGFjZSgvOi9nLCBcImlkXCIpfWA7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKG9wdGlvbikgPT4ge1xuICAgIG9uQ2hhbmdlPy4oeyB0YXJnZXQ6IHsgdmFsdWU6IG9wdGlvbi52YWx1ZSB9IH0pO1xuICAgIHBvcG92ZXJSZWYuY3VycmVudD8uaGlkZVBvcG92ZXIoKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RlZExhYmVsID0gb3B0aW9ucy5maW5kKChvcHQpID0+IG9wdC52YWx1ZSA9PT0gdmFsdWUpPy5sYWJlbCB8fCBcIlNlbGVjdC4uLlwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Bkcm9wZG93biR7ZGlzYWJsZWQgPyBcIiBkcm9wZG93bi0tZGlzYWJsZWRcIiA6IFwiXCJ9YH0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duX19idXR0b25cIlxuICAgICAgICBwb3BvdmVydGFyZ2V0PXtwb3BvdmVySWR9XG4gICAgICAgIHBvcG92ZXJ0YXJnZXRhY3Rpb249XCJ0b2dnbGVcIlxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHN0eWxlPXt7IGFuY2hvck5hbWU6IGFuY2hvck5hbWUgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bl9fdGV4dFwiPntzZWxlY3RlZExhYmVsfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duX19hcnJvd1wiPlxuICAgICAgICAgIDxJY29ucy5SZWFjdC5kcm9wZG93biBzaXplPXsxMn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXZcbiAgICAgICAgcG9wb3Zlcj1cImF1dG9cIlxuICAgICAgICBpZD17cG9wb3ZlcklkfVxuICAgICAgICByZWY9e3BvcG92ZXJSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duX19tZW51XCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0b3A6IGBjYWxjKGFuY2hvcigke2FuY2hvck5hbWV9IGJvdHRvbSkgKyA0cHgpYCxcbiAgICAgICAgICBsZWZ0OiBgYW5jaG9yKCR7YW5jaG9yTmFtZX0gbGVmdClgLFxuICAgICAgICAgIHdpZHRoOiBgYW5jaG9yLXNpemUoJHthbmNob3JOYW1lfSB3aWR0aClgLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd25fX29wdGlvbiR7dmFsdWUgPT09IG9wdGlvbi52YWx1ZSA/IFwiIGRyb3Bkb3duX19vcHRpb24tLXNlbGVjdGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3Qob3B0aW9uKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIiwgImltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSW5wdXQgPSBtZW1vKCh7IHZhbHVlLCBvbkNoYW5nZSwgcGxhY2Vob2xkZXIsIGRpc2FibGVkIH0pID0+IChcbiAgPGlucHV0XG4gICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICB2YWx1ZT17dmFsdWV9XG4gICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gIC8+XG4pKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gXCIuLi8uLi91dGlscy9Mb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCBnZXRJbml0aWFsT3B0aW9ucyBmcm9tIFwiLi4vaGVscGVycy9nZXRJbml0aWFsT3B0aW9uc1wiO1xuXG5jb25zdCB1c2VNb2RhbFNldHRpbmdzID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3QgW3NldHRpbmdzLCBzZXRTZXR0aW5nc10gPSB1c2VTdGF0ZSgoKSA9PiBnZXRJbml0aWFsT3B0aW9ucyhvcHRpb25zKSk7XG5cbiAgY29uc3QgdXBkYXRlU2V0dGluZyA9IHVzZUNhbGxiYWNrKChrZXksIHZhbHVlKSA9PiB7XG4gICAgc2V0U2V0dGluZ3MoKHByZXYpID0+ICh7IC4uLnByZXYsIFtrZXldOiB2YWx1ZSB9KSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZXNldFNldHRpbmdzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgIG9wdGlvbnMubWFwKChvcHRpb24pID0+IFtvcHRpb24ubmFtZSwgb3B0aW9uLmRlZmF1bHRWYWxdKSxcbiAgICApO1xuICAgIHNldFNldHRpbmdzKGRlZmF1bHRTZXR0aW5ncyk7XG5cbiAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgTG9jYWxTdG9yYWdlLnNldChvcHRpb24ubmFtZSwgb3B0aW9uLmRlZmF1bHRWYWwpO1xuICAgICAgaWYgKG9wdGlvbi5ydW4pIHtcbiAgICAgICAgb3B0aW9uLnJ1bihvcHRpb24uZGVmYXVsdFZhbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtvcHRpb25zXSk7XG5cbiAgY29uc3Qgc2F2ZVNldHRpbmdzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKHNldHRpbmdzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIExvY2FsU3RvcmFnZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25zLmZpbmQoKG9wdCkgPT4gb3B0Lm5hbWUgPT09IGtleSk7XG4gICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24ucnVuKSB7XG4gICAgICAgICAgb3B0aW9uLnJ1bih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW3NldHRpbmdzLCBvcHRpb25zXSk7XG5cbiAgcmV0dXJuIHsgc2V0dGluZ3MsIHVwZGF0ZVNldHRpbmcsIHJlc2V0U2V0dGluZ3MsIHNhdmVTZXR0aW5ncyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlTW9kYWxTZXR0aW5ncztcbiIsICJpbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gXCIuLi8uLi91dGlscy9Mb2NhbFN0b3JhZ2VcIjtcblxuZnVuY3Rpb24gZ2V0SW5pdGlhbE9wdGlvbnMob3B0aW9uTGlzdCkge1xuICBjb25zdCBhY2MgPSB7fTtcbiAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9uTGlzdCkge1xuICAgIGNvbnN0IG1haW5LZXkgPSBvcHRpb24ubmFtZTtcbiAgICBhY2NbbWFpbktleV0gPSBMb2NhbFN0b3JhZ2UuZ2V0KG1haW5LZXksIG9wdGlvbi5kZWZhdWx0VmFsKTtcbiAgICBpZiAob3B0aW9uLnJldmVhbCkge1xuICAgICAgZm9yIChjb25zdCBzdWJPcHRpb24gb2Ygb3B0aW9uLnJldmVhbCkge1xuICAgICAgICBjb25zdCBzdWJLZXkgPSBzdWJPcHRpb24ubmFtZTtcbiAgICAgICAgYWNjW3N1YktleV0gPSBhY2NbbWFpbktleV0gPyBMb2NhbFN0b3JhZ2UuZ2V0KHN1YktleSwgc3ViT3B0aW9uLmRlZmF1bHRWYWwpIDogZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhY2M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEluaXRpYWxPcHRpb25zO1xuIiwgImltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b25Db250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uQ29udGFpbmVyXCI7XG5pbXBvcnQgT3B0aW9uVHlwZSBmcm9tIFwiLi4vY29tcG9uZW50cy9PcHRpb25UeXBlXCI7XG5pbXBvcnQgdXNlTW9kYWxTZXR0aW5ncyBmcm9tIFwiLi91c2VNb2RhbFNldHRpbmdzXCI7XG5cbmNvbnN0IFdpbmRvd3NDb250cm9sTW9kYWwgPSBtZW1vKCgpID0+IHtcbiAgY29uc3QgeyBzZXR0aW5ncywgdXBkYXRlU2V0dGluZywgcmVzZXRTZXR0aW5ncywgc2F2ZVNldHRpbmdzIH0gPVxuICAgIHVzZU1vZGFsU2V0dGluZ3Mod2luZG93c0NvbnRyb2xPcHRpb25zKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbW9kYWxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbW9kYWxfX29wdGlvbnNcIj5cbiAgICAgICAge3dpbmRvd3NDb250cm9sT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgIDxPcHRpb25UeXBlXG4gICAgICAgICAgICBrZXk9e29wdGlvbi5uYW1lfVxuICAgICAgICAgICAgb3B0aW9uPXtvcHRpb259XG4gICAgICAgICAgICB2YWx1ZT17c2V0dGluZ3Nbb3B0aW9uLm5hbWVdfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhrZXksIHZhbHVlKSA9PiB1cGRhdGVTZXR0aW5nKGtleSwgdmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLW1vZGFsX19idXR0b25zXCI+XG4gICAgICAgIDxCdXR0b25Db250YWluZXIgcmVzZXRTZXR0aW5ncz17cmVzZXRTZXR0aW5nc30gc2F2ZVNldHRpbmdzPXtzYXZlU2V0dGluZ3N9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgY29uc3Qgd2luZG93c0NvbnRyb2xPcHRpb25zID0gW1xuICB7XG4gICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICBuYW1lOiBcIndpbmRvd3MtY29udHJvbFwiLFxuICAgIGRlc2M6IFwiRW5hYmxlIGN1c3RvbSBXaW5kb3dzIENvbnRyb2xzXCIsXG4gICAgZGVmYXVsdFZhbDogZmFsc2UsXG4gICAgcnVuOiAodmFsdWUpID0+IHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwid2luZG93cy1jb250cm9sXCIsIHZhbHVlKTtcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICBuYW1lOiBcImhpZGUtd2luZG93cy1jb250cm9sXCIsXG4gICAgZGVzYzogXCJSZW1vdmVzIFNwb3RpZnlzIFdpbmRvd3MgQ29udHJvbHMgY29tcGxldGVseVwiLFxuICAgIGRlZmF1bHRWYWw6IGZhbHNlLFxuICAgIHJ1bjogKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIldpbmRvd3NDb250cm9sXCIpKSB7XG4gICAgICAgIGNvbnN0IHRocmVlRG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQ0NJR3h0cEFyZVNkd1dSbzE0RkVcIik7XG4gICAgICAgIGNvbnN0IHdpbmRvd3NDb250cm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXRvcEJhci10b3BiYXJDb250ZW50UmlnaHRcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5Db250cm9sTWVzc2FnZUFQSS5fdXBkYXRlVWlDbGllbnQuc2V0QnV0dG9uc1Zpc2liaWxpdHkoe1xuICAgICAgICAgICAgc2hvd0J1dHRvbnM6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5Db250cm9sTWVzc2FnZUFQSS5fdXBkYXRlVWlDbGllbnQudXBkYXRlVGl0bGViYXJIZWlnaHQoeyBoZWlnaHQ6IDEgfSk7XG4gICAgICAgICAgaWYgKHRocmVlRG90cykgdGhyZWVEb3RzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBpZiAod2luZG93c0NvbnRyb2wpIHdpbmRvd3NDb250cm9sLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiOHB4XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLkNvbnRyb2xNZXNzYWdlQVBJLl91cGRhdGVVaUNsaWVudC5zZXRCdXR0b25zVmlzaWJpbGl0eSh7XG4gICAgICAgICAgICBzaG93QnV0dG9uczogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBTcGljZXRpZnkuUGxhdGZvcm0uQ29udHJvbE1lc3NhZ2VBUEkuX3VwZGF0ZVVpQ2xpZW50LnVwZGF0ZVRpdGxlYmFySGVpZ2h0KHsgaGVpZ2h0OiA2NCB9KTtcbiAgICAgICAgICBpZiAodGhyZWVEb3RzKSB0aHJlZURvdHMuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgaWYgKHdpbmRvd3NDb250cm9sKSB3aW5kb3dzQ29udHJvbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwiaW5wdXRcIixcbiAgICBuYW1lOiBcIndpbmRvd3MtY29udHJvbC1icmlnaHRuZXNzXCIsXG4gICAgZGVzYzogXCJTZXQgQnJpZ2h0bmVzc1wiLFxuICAgIGRlZmF1bHRWYWw6IFwiMi4xMlwiLFxuICAgIHJ1bih2YWx1ZSkge1xuICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ3aW5kb3dzLWNvbnRyb2xcIikpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS13aW5kb3dzLWNvbnRyb2wtYnJpZ2h0bmVzc1wiLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwiaW5wdXRcIixcbiAgICBuYW1lOiBcIndpbmRvd3MtY29udHJvbC10b3BcIixcbiAgICBkZXNjOiBcIlNldCBUb3BcIixcbiAgICBkZWZhdWx0VmFsOiBcIjE2cHhcIixcbiAgICBydW4odmFsdWUpIHtcbiAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwid2luZG93cy1jb250cm9sXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0td2luZG93cy1jb250cm9sLXRvcFwiLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwiaW5wdXRcIixcbiAgICBuYW1lOiBcIndpbmRvd3MtY29udHJvbC13aWR0aFwiLFxuICAgIGRlc2M6IFwiU2V0IFdpZHRoXCIsXG4gICAgZGVmYXVsdFZhbDogXCIxMzVweFwiLFxuICAgIHJ1bih2YWx1ZSkge1xuICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ3aW5kb3dzLWNvbnRyb2xcIikpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS13aW5kb3dzLWNvbnRyb2wtd2lkdGhcIiwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImlucHV0XCIsXG4gICAgbmFtZTogXCJ3aW5kb3dzLWNvbnRyb2wtaGVpZ2h0XCIsXG4gICAgZGVzYzogXCJTZXQgSGVpZ2h0XCIsXG4gICAgZGVmYXVsdFZhbDogXCIzMnB4XCIsXG4gICAgcnVuKHZhbHVlKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIndpbmRvd3MtY29udHJvbFwiKSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXdpbmRvd3MtY29udHJvbC1oZWlnaHRcIiwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3dzQ29udHJvbE1vZGFsO1xuIiwgImltcG9ydCBOb3RpZmljYXRpb24gZnJvbSBcIi4uL3V0aWxzL05vdGlmaWNhdGlvblwiO1xuXG5jb25zdCBDb2xvdXJTY2hlbWUgPSBhc3luYyAoc2NoZW1lKSA9PiB7XG4gIGlmIChzY2hlbWUgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgY29uc3Qgc2NoZW1lVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN0eWxlLmN1c3RvbUNvbG91clNjaGVtZVwiKTtcbiAgICBzY2hlbWVUYWc/LnJlbW92ZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdmVyeWJvcmluZ2h3bC9zcGljZXRpZnkvbWFpbi9kaXN0L2NvbG9yLmluaVwiLFxuICApO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgTm90aWZpY2F0aW9uKHtcbiAgICAgIGlzV2FybmluZzogdHJ1ZSxcbiAgICAgIGF1dG9IaWRlRHVyYXRpb246IDEwMDAwLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgXCJVbmFibGUgdG8gZmV0Y2ggdGhlIGNvbG91ciBzY2hlbWUgb3B0aW9ucy4gWW91IHdvbid0IGJlIGFibGUgdG8gY2hhbmdlIHRoZSBjb2xvdXIgc2NoZW1lIHVzaW5nIHRoZSBzZXR0aW5ncyBtZW51LlwiLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGluaUNvbnRlbnQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gIGNvbnN0IGNvbG91clNjaGVtZXMgPSBpbmlDb250ZW50LnNwbGl0KC9bXFxyXFxuXSsvKS5yZWR1Y2UoKGFjYywgbGluZSkgPT4ge1xuICAgIGNvbnN0IHRyaW1tZWRMaW5lID0gbGluZS50cmltKCk7XG4gICAgaWYgKHRyaW1tZWRMaW5lLnN0YXJ0c1dpdGgoXCI7XCIpKSByZXR1cm4gYWNjO1xuICAgIGNvbnN0IHNlY3Rpb25NYXRjaCA9IHRyaW1tZWRMaW5lLm1hdGNoKC9eXFxbKFteXFxdXSspXFxdJC8pO1xuICAgIGlmIChzZWN0aW9uTWF0Y2gpIHtcbiAgICAgIGFjY1tzZWN0aW9uTWF0Y2hbMV1dID0ge307XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbU1hdGNoID0gdHJpbW1lZExpbmUubWF0Y2goL14oW149XSs/KVxccyo9XFxzKiguKykkLyk7XG4gICAgaWYgKHBhcmFtTWF0Y2gpIHtcbiAgICAgIGNvbnN0IFssIGtleSwgdmFsdWVdID0gcGFyYW1NYXRjaDtcbiAgICAgIGNvbnN0IHNlY3Rpb24gPSBPYmplY3Qua2V5cyhhY2MpLnBvcCgpO1xuICAgICAgaWYgKHNlY3Rpb24pIGFjY1tzZWN0aW9uXVtrZXldID0gdmFsdWUuc3BsaXQoXCI7XCIpWzBdLnRyaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIGNvbnN0IGluamVjdFN0ciA9IGAke09iamVjdC5lbnRyaWVzKGNvbG91clNjaGVtZXNbc2NoZW1lXSkucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGNvbnN0IHJnYiA9XG4gICAgICB2YWx1ZS5sZW5ndGggPT09IDNcbiAgICAgICAgPyB2YWx1ZVxuICAgICAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgICAgICAubWFwKChjaGFyKSA9PiBOdW1iZXIucGFyc2VJbnQoY2hhciArIGNoYXIsIDE2KSlcbiAgICAgICAgICAgIC5qb2luKFwiLCBcIilcbiAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgICAgLm1hdGNoKC9cXHdcXHcvZylcbiAgICAgICAgICAgIC5tYXAoKHgpID0+IE51bWJlci5wYXJzZUludCh4LCAxNikpXG4gICAgICAgICAgICAuam9pbihcIiwgXCIpO1xuICAgIHJldHVybiBgJHthY2N9LS1zcGljZS0ke2tleX06IyR7dmFsdWV9Oy0tc3BpY2UtcmdiLSR7a2V5fToke3JnYn07YDtcbiAgfSwgXCI6cm9vdHtcIil9fWA7XG5cbiAgbGV0IHNjaGVtZVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZS5jdXN0b21Db2xvdXJTY2hlbWVcIik7XG4gIGlmICghc2NoZW1lVGFnKSB7XG4gICAgc2NoZW1lVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIHNjaGVtZVRhZy5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tQ29sb3VyU2NoZW1lXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NoZW1lVGFnKTtcbiAgfVxuICBzY2hlbWVUYWcudGV4dENvbnRlbnQgPSBpbmplY3RTdHI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvdXJTY2hlbWU7XG4iLCAiaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tIFwiLi4vdXRpbHMvTG9jYWxTdG9yYWdlXCI7XG5cbmNvbnN0IENvdmVyQXJ0QmFubmVyID0gYXN5bmMgKCkgPT4ge1xuICB3aGlsZSAoIVNwaWNldGlmeS5QbGF5ZXIuZGF0YT8uaXRlbSkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwKSk7XG4gIH1cblxuICBjb25zdCBjaGFubmVscyA9IHtcbiAgICBBbGJ1bTogeyByZWdleDogL15cXC9hbGJ1bVxcLy8sIGtleTogXCJhbGJ1bS1wYWdlXCIgfSxcbiAgICBBcnRpc3Q6IHsgcmVnZXg6IC9eXFwvYXJ0aXN0XFwvKD8hYXJ0aXN0c1xcYilcXHcrJC8sIGtleTogXCJhcnRpc3QtcGFnZVwiIH0sXG4gICAgTHlyaWNzOiB7IHJlZ2V4OiAvXlxcL2x5cmljcyQvLCBrZXk6IFwibHlyaWNzLXBhZ2VcIiB9LFxuICAgIEx5cmljc1BsdXM6IHsgcmVnZXg6IC9eXFwvbHlyaWNzLXBsdXMkLywga2V5OiBcImx5cmljcy1wYWdlXCIgfSxcbiAgICBQbGF5bGlzdDogeyByZWdleDogL15cXC9wbGF5bGlzdFxcLy8sIGtleTogXCJwbGF5bGlzdC1wYWdlXCIgfSxcbiAgICBTdGF0aW9uOiB7IHJlZ2V4OiAvXlxcL3N0YXRpb25cXC9wbGF5bGlzdFxcLy8sIGtleTogXCJtaXNjLXBhZ2VcIiB9LFxuICAgIENvbGxlY3Rpb246IHsgcmVnZXg6IC9eXFwvY29sbGVjdGlvblxcL3RyYWNrcyQvLCBrZXk6IFwibWlzYy1wYWdlXCIgfSxcbiAgICBTaG93OiB7IHJlZ2V4OiAvXlxcL3Nob3dcXC8vLCBrZXk6IFwibWlzYy1wYWdlXCIgfSxcbiAgICBFcGlzb2RlOiB7IHJlZ2V4OiAvXlxcL2VwaXNvZGVcXC8vLCBrZXk6IFwibWlzYy1wYWdlXCIgfSxcbiAgICBVc2VyOiB7IHJlZ2V4OiAvXlxcL3VzZXJcXC8oPyF1c2Vyc1xcYilcXHcrJC8sIGtleTogXCJtaXNjLXBhZ2VcIiB9LFxuICAgIEdlbnJlOiB7IHJlZ2V4OiAvXlxcL2dlbnJlXFwvLywga2V5OiBcIm1pc2MtcGFnZVwiIH0sXG4gIH07XG5cbiAgY29uc3QgYmFubmVyID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbm5lci1pbWFnZVwiKSB8fFxuICAgICgoKSA9PiB7XG4gICAgICBjb25zdCBuZXdCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3QmFubmVyLmNsYXNzTmFtZSA9IFwiYmFubmVyLWltYWdlXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuZGVyLW1haW4tdmlld1wiKT8uYXBwZW5kQ2hpbGQobmV3QmFubmVyKTtcbiAgICAgIHJldHVybiBuZXdCYW5uZXI7XG4gICAgfSkoKTtcblxuICBjb25zdCB1cGRhdGVCYW5uZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaW1hZ2VVcmwgPSBTcGljZXRpZnkuUGxheWVyLmRhdGE/Lml0ZW0/Lm1ldGFkYXRhPy5pbWFnZV94bGFyZ2VfdXJsO1xuICAgIGNvbnN0IHNob3dCYW5uZXIgPSBPYmplY3QudmFsdWVzKGNoYW5uZWxzKS5zb21lKFxuICAgICAgKHsgcmVnZXgsIGtleSB9KSA9PlxuICAgICAgICBMb2NhbFN0b3JhZ2UuZ2V0KGtleSwgZmFsc2UpICYmIHJlZ2V4LnRlc3QoU3BpY2V0aWZ5LlBsYXRmb3JtLkhpc3RvcnkubG9jYXRpb24ucGF0aG5hbWUpLFxuICAgICk7XG5cbiAgICBpZiAoc2hvd0Jhbm5lcikge1xuICAgICAgYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gaW1hZ2VVcmw7XG4gICAgICBpbWcub25sb2FkID0gKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1pbWFnZVwiLCBgdXJsKCR7aW1hZ2VVcmx9KWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfTtcblxuICBTcGljZXRpZnkuUGxhdGZvcm0uSGlzdG9yeS5saXN0ZW4odXBkYXRlQmFubmVyKTtcbiAgU3BpY2V0aWZ5LlBsYXllci5hZGRFdmVudExpc3RlbmVyKFwic29uZ2NoYW5nZVwiLCB1cGRhdGVCYW5uZXIpO1xuICB1cGRhdGVCYW5uZXIoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdmVyQXJ0QmFubmVyO1xuIiwgImNvbnN0IFNwb3RpZnlNb2RlID0gYXN5bmMgKG1vZGUpID0+IHtcbiAgaWYgKCFTcGljZXRpZnkuUGxhdGZvcm0uUHJvZHVjdFN0YXRlQVBJLnByb2R1Y3RTdGF0ZUFwaSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGVtcGxveWVlIGRvZXNudCBzZWVtIHRvIHdvcmsgMS4yLjU1K1xuICBjb25zdCBtb2RlUGFpcnMgPSB7XG4gICAgZGVmYXVsdDogeyBcImFwcC1kZXZlbG9wZXJcIjogXCIwXCIgfSxcbiAgICBkZXZlbG9wZXI6IHsgXCJhcHAtZGV2ZWxvcGVyXCI6IFwiMlwiIH0sXG4gIH07XG5cbiAgY29uc3QgcGFpcnMgPSBtb2RlUGFpcnNbbW9kZV0gfHwgbW9kZVBhaXJzLmRlZmF1bHQ7XG5cbiAgY29uc3Qgc2V0TW9kZSA9IGFzeW5jIChrZXksIHZhbHVlKSA9PiB7XG4gICAgYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLlByb2R1Y3RTdGF0ZUFQSS5wcm9kdWN0U3RhdGVBcGkucHV0VmFsdWVzKHtcbiAgICAgIHBhaXJzOiB7IFtrZXldOiB2YWx1ZSB9LFxuICAgIH0pO1xuICAgIHJldHVybiBTcGljZXRpZnkuUGxhdGZvcm0uUHJvZHVjdFN0YXRlQVBJLnByb2R1Y3RTdGF0ZUFwaS5zdWJWYWx1ZXMoXG4gICAgICB7IGtleXM6IFtrZXldIH0sXG4gICAgICBhc3luYyAobmV3VmFsdWVzKSA9PiB7XG4gICAgICAgIGlmIChuZXdWYWx1ZXNba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBhd2FpdCBTcGljZXRpZnkuUGxhdGZvcm0uUHJvZHVjdFN0YXRlQVBJLnByb2R1Y3RTdGF0ZUFwaS5wdXRWYWx1ZXMoe1xuICAgICAgICAgICAgcGFpcnM6IHsgW2tleV06IHZhbHVlIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICB3aW5kb3cuYXBwRGV2TGlzdGVuZXI/LmNhbmNlbCgpO1xuICB3aW5kb3cuYXBwRGV2TGlzdGVuZXIgPSBhd2FpdCBzZXRNb2RlKFwiYXBwLWRldmVsb3BlclwiLCBwYWlyc1tcImFwcC1kZXZlbG9wZXJcIl0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BvdGlmeU1vZGU7XG4iLCAiY29uc3Qgd2FpdEZvckVsZW1lbnRzID0gYXN5bmMgKHNlbGVjdG9yLCBtYXhBdHRlbXB0cyA9IDUwKSA9PiB7XG4gIGxldCBhdHRlbXB0cyA9IDE7XG5cbiAgd2hpbGUgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSAmJiBhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XG4gICAgYXR0ZW1wdHMgPSBhdHRlbXB0cyArIDE7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwKSk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIHx8IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3YWl0Rm9yRWxlbWVudHM7XG4iLCAiaW1wb3J0IENvbnNvbGUgZnJvbSBcIi4uL3V0aWxzL0NvbnNvbGVcIjtcbmltcG9ydCB3YWl0Rm9yRWxlbWVudHMgZnJvbSBcIi4uL3V0aWxzL3dhaXRGb3JFbGVtZW50c1wiO1xuXG5sZXQgdGV4dE9ic2VydmVyQXBwbGUgPSBudWxsO1xubGV0IHNpZGViYXJTdGF0ZUxpc3RlbmVyQXBwbGUgPSBudWxsO1xuXG5mdW5jdGlvbiBUb2dnbGVBcHBsZU11c2ljKGlzRW5hYmxlZCkge1xuICBkaXNhYmxlQXBwbGVNdXNpYygpO1xuICBpZiAoaXNFbmFibGVkKSB7XG4gICAgZW5hYmxlQXBwbGVNdXNpYygpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuYWJsZUFwcGxlTXVzaWMoKSB7XG4gIGNvbnN0IGdsb2JhbE5hdiA9IGF3YWl0IHdhaXRGb3JFbGVtZW50cyhcIi5Sb290X19nbG9iYWxOYXZcIik7XG5cbiAgY29uc3QgYWRkVGV4dFRvQnV0dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGdsb2JhbE5hdi5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW4tZ2xvYmFsTmF2LW5hdkxpbmssIC5fYjNoaG1iV3RPWThfMU0xbU0xSFwiKTtcbiAgICAvLyAubWFpbi1nbG9iYWxOYXYtbmF2TGluazogTmF2IExpbmtzXG4gICAgLy8gX2IzaGhtYld0T1k4XzFNMW1NMUg6IFNlYXJjaCB0YWJcbiAgICBmb3IgKGNvbnN0IGVsIG9mIGVsZW1lbnRzKSB7XG4gICAgICBpZiAoIWVsLnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1nbG9iYWxOYXYtaWNvblRleHRcIikpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGVsLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikgfHwgKGVsLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSA/IFwiU2VhcmNoXCIgOiBcIlwiKTtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwibWFpbi1nbG9iYWxOYXYtaWNvblRleHQgZW5jb3JlLXRleHQtYm9keS1tZWRpdW0tYm9sZFwiO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBhZGRUZXh0VG9CdXR0b25zKCk7XG4gIHRleHRPYnNlcnZlckFwcGxlID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoYWRkVGV4dFRvQnV0dG9ucyk7XG4gIHRleHRPYnNlcnZlckFwcGxlLm9ic2VydmUoZ2xvYmFsTmF2LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcblxuICBjb25zdCB1cGRhdGVDb2xsYXBzZWRDbGFzcyA9ICgpID0+IHtcbiAgICBjb25zdCBzaWRlYmFyU3RhdGUgPSBTcGljZXRpZnkuUGxhdGZvcm0uTG9jYWxTdG9yYWdlQVBJLmdldEl0ZW0oXCJsZWZ0LXNpZGViYXItc3RhdGVcIik7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWRcIiwgc2lkZWJhclN0YXRlID09PSAxKTtcbiAgfTtcblxuICBzaWRlYmFyU3RhdGVMaXN0ZW5lckFwcGxlID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmRhdGEua2V5ID09PSBcImxlZnQtc2lkZWJhci1zdGF0ZVwiKSB7XG4gICAgICB1cGRhdGVDb2xsYXBzZWRDbGFzcygpO1xuICAgIH1cbiAgfTtcblxuICBTcGljZXRpZnkuUGxhdGZvcm0uTG9jYWxTdG9yYWdlQVBJLmdldEV2ZW50cygpLmFkZExpc3RlbmVyKFwidXBkYXRlXCIsIHNpZGViYXJTdGF0ZUxpc3RlbmVyQXBwbGUpO1xuICB1cGRhdGVDb2xsYXBzZWRDbGFzcygpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlQXBwbGVNdXNpYygpIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZWRcIik7XG5cbiAgaWYgKHRleHRPYnNlcnZlckFwcGxlKSB7XG4gICAgQ29uc29sZS5Mb2coXCJSZW1vdmluZyBBcHBsZU11c2ljIG9ic2VydmVyXCIpO1xuICAgIHRleHRPYnNlcnZlckFwcGxlLmRpc2Nvbm5lY3QoKTtcbiAgICB0ZXh0T2JzZXJ2ZXJBcHBsZSA9IG51bGw7XG4gIH1cblxuICBpZiAoc2lkZWJhclN0YXRlTGlzdGVuZXJBcHBsZSkge1xuICAgIENvbnNvbGUuTG9nKFwiUmVtb3Zpbmcgc2lkZWJhciBzdGF0ZSBsaXN0ZW5lclwiKTtcbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uTG9jYWxTdG9yYWdlQVBJLmdldEV2ZW50cygpLnJlbW92ZUxpc3RlbmVyKFwidXBkYXRlXCIsIHNpZGViYXJTdGF0ZUxpc3RlbmVyKTtcbiAgICBzaWRlYmFyU3RhdGVMaXN0ZW5lckFwcGxlID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGljb25UZXh0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbi1nbG9iYWxOYXYtaWNvblRleHRcIik7XG4gIGZvciAoY29uc3QgZWwgb2YgaWNvblRleHRzKSB7XG4gICAgZWwucmVtb3ZlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlQXBwbGVNdXNpYztcbiIsICJpbXBvcnQgQ29uc29sZSBmcm9tIFwiLi4vdXRpbHMvQ29uc29sZVwiO1xuaW1wb3J0IHdhaXRGb3JFbGVtZW50cyBmcm9tIFwiLi4vdXRpbHMvd2FpdEZvckVsZW1lbnRzXCI7XG5cbmxldCB0ZXh0T2JzZXJ2ZXIgPSBudWxsO1xubGV0IHNpZGViYXJTdGF0ZUxpc3RlbmVyID0gbnVsbDtcblxuYXN5bmMgZnVuY3Rpb24gVG9nZ2xlTGliWFVJKGlzRW5hYmxlZCkge1xuICBkaXNhYmxlTGliWFVJKCk7XG4gIGlmIChpc0VuYWJsZWQpIHtcbiAgICBlbmFibGVMaWJYVUkoKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBlbmFibGVMaWJYVUkoKSB7XG4gIGNvbnN0IGdsb2JhbE5hdiA9IGF3YWl0IHdhaXRGb3JFbGVtZW50cyhcIi5Sb290X19nbG9iYWxOYXZcIik7XG5cbiAgY29uc3QgYWRkVGV4dFRvQnV0dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGdsb2JhbE5hdi5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW4tZ2xvYmFsTmF2LW5hdkxpbmssIC5fYjNoaG1iV3RPWThfMU0xbU0xSFwiKTtcbiAgICAvLyAubWFpbi1nbG9iYWxOYXYtbmF2TGluazogTmF2IExpbmtzXG4gICAgLy8gX2IzaGhtYld0T1k4XzFNMW1NMUg6IFNlYXJjaCB0YWJcbiAgICBmb3IgKGNvbnN0IGVsIG9mIGVsZW1lbnRzKSB7XG4gICAgICBpZiAoIWVsLnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1nbG9iYWxOYXYtaWNvblRleHRcIikpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGVsLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikgfHwgKGVsLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSA/IFwiU2VhcmNoXCIgOiBcIlwiKTtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwibWFpbi1nbG9iYWxOYXYtaWNvblRleHQgZW5jb3JlLXRleHQtYm9keS1tZWRpdW0tYm9sZFwiO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBhZGRUZXh0VG9CdXR0b25zKCk7XG4gIHRleHRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGFkZFRleHRUb0J1dHRvbnMpO1xuICB0ZXh0T2JzZXJ2ZXIub2JzZXJ2ZShnbG9iYWxOYXYsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuXG4gIGNvbnN0IHVwZGF0ZUNvbGxhcHNlZENsYXNzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNpZGViYXJTdGF0ZSA9IFNwaWNldGlmeS5QbGF0Zm9ybS5Mb2NhbFN0b3JhZ2VBUEkuZ2V0SXRlbShcImxlZnQtc2lkZWJhci1zdGF0ZVwiKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlZFwiLCBzaWRlYmFyU3RhdGUgPT09IDEpO1xuICB9O1xuXG4gIHNpZGViYXJTdGF0ZUxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmRhdGEua2V5ID09PSBcImxlZnQtc2lkZWJhci1zdGF0ZVwiKSB7XG4gICAgICB1cGRhdGVDb2xsYXBzZWRDbGFzcygpO1xuICAgIH1cbiAgfTtcblxuICBTcGljZXRpZnkuUGxhdGZvcm0uTG9jYWxTdG9yYWdlQVBJLmdldEV2ZW50cygpLmFkZExpc3RlbmVyKFwidXBkYXRlXCIsIHNpZGViYXJTdGF0ZUxpc3RlbmVyKTtcbiAgdXBkYXRlQ29sbGFwc2VkQ2xhc3MoKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUxpYlhVSSgpIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZWRcIik7XG5cbiAgaWYgKHRleHRPYnNlcnZlcikge1xuICAgIENvbnNvbGUuTG9nKFwiUmVtb3ZpbmcgbGlieCBvYnNlcnZlclwiKTtcbiAgICB0ZXh0T2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIHRleHRPYnNlcnZlciA9IG51bGw7XG4gIH1cblxuICBpZiAoc2lkZWJhclN0YXRlTGlzdGVuZXIpIHtcbiAgICBDb25zb2xlLkxvZyhcIlJlbW92aW5nIHNpZGViYXIgc3RhdGUgbGlzdGVuZXJcIik7XG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLkxvY2FsU3RvcmFnZUFQSS5nZXRFdmVudHMoKS5yZW1vdmVMaXN0ZW5lcihcInVwZGF0ZVwiLCBzaWRlYmFyU3RhdGVMaXN0ZW5lcik7XG4gICAgc2lkZWJhclN0YXRlTGlzdGVuZXIgPSBudWxsO1xuICB9XG5cbiAgY29uc3QgaWNvblRleHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluLWdsb2JhbE5hdi1pY29uVGV4dFwiKTtcbiAgZm9yIChjb25zdCBlbCBvZiBpY29uVGV4dHMpIHtcbiAgICBlbC5yZW1vdmUoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVMaWJYVUk7XG4iLCAiaW1wb3J0IHdhaXRGb3JFbGVtZW50cyBmcm9tIFwiLi4vdXRpbHMvd2FpdEZvckVsZW1lbnRzXCI7XG5cbmNvbnN0IFZvbFBlcmNlbnQgPSBhc3luYyAoaXNFbmFibGVkKSA9PiB7XG4gIGNvbnN0IHZvbHVtZUJhciA9IGF3YWl0IHdhaXRGb3JFbGVtZW50cyhcIi5tYWluLW5vd1BsYXlpbmdCYXItdm9sdW1lQmFyXCIpO1xuXG4gIGNvbnN0IHVwZGF0ZVZvbCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IHZvbHVtZUJhci5xdWVyeVNlbGVjdG9yKFwiLnZvbC1pbnB1dFwiKTtcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gTWF0aC5yb3VuZChTcGljZXRpZnkuUGxheWVyLmdldFZvbHVtZSgpICogMTAwKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKGlzRW5hYmxlZCkge1xuICAgIGlmICghdm9sdW1lQmFyLnF1ZXJ5U2VsZWN0b3IoXCIudm9sLXBlcmNlbnRcIikpIHtcbiAgICAgIHZvbHVtZUJhci5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgICAgIGBcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInZvbC1wZXJjZW50XCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidm9sLWlucHV0XCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogMzBweDsgZm9udC1zaXplOiAxNXB4OyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB0ZXh0LWFsaWduOiByaWdodDtcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNXB4O1wiPiU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdGAsXG4gICAgICApO1xuICAgICAgdm9sdW1lQmFyLnN0eWxlLmZsZXggPSBcIjAgMSAyMDBweFwiO1xuICAgICAgY29uc3QgaW5wdXQgPSB2b2x1bWVCYXIucXVlcnlTZWxlY3RvcihcIi52b2wtaW5wdXRcIik7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Vm9sID0gTnVtYmVyLnBhcnNlSW50KGlucHV0LnZhbHVlLCAxMCk7XG4gICAgICAgIGlmIChuZXdWb2wgPj0gMCAmJiBuZXdWb2wgPD0gMTAwKSB7XG4gICAgICAgICAgU3BpY2V0aWZ5LlBsYXllci5zZXRWb2x1bWUobmV3Vm9sIC8gMTAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5YmFja0FQSS5fZXZlbnRzLmFkZExpc3RlbmVyKFwidm9sdW1lXCIsIHVwZGF0ZVZvbCk7XG4gICAgICB1cGRhdGVWb2woKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgdm9sdW1lQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW5vd1BsYXlpbmdCYXItdm9sdW1lQmFyXCIpO1xuICAgIGlmICh2b2x1bWVCYXIpIHtcbiAgICAgIHZvbHVtZUJhci5xdWVyeVNlbGVjdG9yKFwiLnZvbC1wZXJjZW50XCIpPy5yZW1vdmUoKTtcbiAgICAgIHZvbHVtZUJhci5zdHlsZS5mbGV4ID0gXCJcIjtcbiAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5YmFja0FQSS5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKFwidm9sdW1lXCIsIHVwZGF0ZVZvbCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWb2xQZXJjZW50O1xuIiwgImltcG9ydCBEZWJ1Z01lbnUgZnJvbSBcIi4uLy4uL2RlYnVnL0RlYnVnTWVudVwiO1xuaW1wb3J0IENvbG91clNjaGVtZSBmcm9tIFwiLi4vLi4vZmVhdHVyZXMvQ29sb3VyU2NoZW1lXCI7XG5pbXBvcnQgQ292ZXJBcnRCYW5uZXIgZnJvbSBcIi4uLy4uL2ZlYXR1cmVzL0NvdmVyQXJ0QmFubmVyXCI7XG5pbXBvcnQgU3BvdGlmeU1vZGUgZnJvbSBcIi4uLy4uL2ZlYXR1cmVzL1Nwb3RpZnlNb2RlXCI7XG5pbXBvcnQgVG9nZ2xlQXBwbGVNdXNpYyBmcm9tIFwiLi4vLi4vZmVhdHVyZXMvVG9nZ2xlQXBwbGVNdXNpY1wiO1xuaW1wb3J0IFRvZ2dsZUxpYlhVSSBmcm9tIFwiLi4vLi4vZmVhdHVyZXMvVG9nZ2xlTGliWFVJXCI7XG5pbXBvcnQgVm9sUGVyY2VudCBmcm9tIFwiLi4vLi4vZmVhdHVyZXMvVm9sUGVyY2VudFwiO1xuaW1wb3J0IEFsYnVtQmFubmVyTW9kYWwgZnJvbSBcIi4uLy4uL21lbnUvbW9kYWxtZW51L0FsYnVtQmFubmVyTW9kYWxcIjtcbmltcG9ydCBXaW5kb3dzQ29udHJvbE1vZGFsIGZyb20gXCIuLi8uLi9tZW51L21vZGFsbWVudS9XaW5kb3dzQ29udHJvbE1vZGFsXCI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIEZlYXR1cmVzOiBbXG4gICAge1xuICAgICAgdHlwZTogXCJyYWRpb2J1dHRvblwiLFxuICAgICAgbmFtZTogXCJjb2xvdXItc2NoZW1lXCIsXG4gICAgICBkZXNjOiBcIkNvbG91ciBTY2hlbWU6XCIsXG4gICAgICBkZWZhdWx0VmFsOiBcImRlZmF1bHRcIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyB2YWx1ZTogXCJkZWZhdWx0XCIsIGxhYmVsOiBcIkRlZmF1bHRcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcImRhcmtcIiwgbGFiZWw6IFwiRGFya1wiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwibGlnaHRcIiwgbGFiZWw6IFwiTGlnaHRcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcImJsb29tXCIsIGxhYmVsOiBcIkJsb29tXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJzcG90aWZ5XCIsIGxhYmVsOiBcIlNwb3RpZnlcIiB9LFxuICAgICAgXSxcbiAgICAgIHRpcHB5OiBcIkRlZmF1bHQgdXNlcyB0aGUgY29sb3VyIHNjaGVtZSBzZXQgaW4gY29uZmlnLXhwdWkuaW5pXCIsXG4gICAgICBydW4odmFsdWUpIHtcbiAgICAgICAgQ29sb3VyU2NoZW1lKHZhbHVlKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiBcImRyb3Bkb3duXCIsXG4gICAgICBuYW1lOiBcInNwb3RpZnktbW9kZVwiLFxuICAgICAgZGVzYzogXCJTcG90aWZ5IG1vZGU6XCIsXG4gICAgICBkZWZhdWx0VmFsOiBcImRlZmF1bHRcIixcbiAgICAgIHRpcHB5OiBcIk9ubHkgdGFrZXMgZWZmZWN0IGFmdGVyIGEgcmVzdGFydFwiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IHZhbHVlOiBcImRlZmF1bHRcIiwgbGFiZWw6IFwiRGVmYXVsdFwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiZGV2ZWxvcGVyXCIsIGxhYmVsOiBcIkRldmVsb3BlclwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiZW1wbG95ZWVcIiwgbGFiZWw6IFwiRW1wbG95ZWVcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcImJvdGhcIiwgbGFiZWw6IFwiRGV2ICsgRW1wbFwiIH0sXG4gICAgICBdLFxuICAgICAgcnVuKHZhbHVlKSB7XG4gICAgICAgIFNwb3RpZnlNb2RlKHZhbHVlKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiBcInRvZ2dsZVwiLFxuICAgICAgbmFtZTogXCJhbGJ1bS1iYW5uZXItcGFnZVwiLFxuICAgICAgZGVzYzogXCJQdXRzIFRyYWNrIGNvdmVyIGFydCBpbiB2YXJpb3VzIHBhZ2VzXCIsXG4gICAgICBkZWZhdWx0VmFsOiB0cnVlLFxuICAgICAgcG9wdXBNb2RhbDogQWxidW1CYW5uZXJNb2RhbCxcbiAgICAgIHJ1bih2YWx1ZSkge1xuICAgICAgICBDb3ZlckFydEJhbm5lcih2YWx1ZSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICAgIG5hbWU6IFwidm9sdW1lLXBlcmNlbnRhZ2VcIixcbiAgICAgIGRlc2M6IFwiQWRkcyB2b2x1bWUgcGVyY2VudGFnZSBuZXh0IHRvIHZvbHVtZSBzbGlkZXJcIixcbiAgICAgIGRlZmF1bHRWYWw6IHRydWUsXG4gICAgICBydW4odmFsdWUpIHtcbiAgICAgICAgVm9sUGVyY2VudCh2YWx1ZSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICAgIG5hbWU6IFwid2luZG93cy1jb250cm9sXCIsXG4gICAgICBkZXNjOiBcIkFkanVzdHMgYnJpZ2h0bmVzcyBhbmQgcG9zaXRpb24gb2Ygd2luZG93cyBjb250cm9sc1wiLFxuICAgICAgZGVmYXVsdFZhbDogZmFsc2UsXG4gICAgICB0aXBweTogXCJUaGlzIHdpbGwgb3ZlcnJpZGUgdGhlIHRoZW1lcyBkZWZhdWx0IHdpbmRvd3MgY29udHJvbHNcIixcbiAgICAgIHBvcHVwTW9kYWw6IFdpbmRvd3NDb250cm9sTW9kYWwsXG4gICAgICBydW46ICh2YWx1ZSkgPT4ge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIndpbmRvd3MtY29udHJvbFwiLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJpbnB1dFwiLFxuICAgICAgbmFtZTogXCJzcG90aWZ5LWZvbnRcIixcbiAgICAgIGRlc2M6IFwiQ2hhbmdlcyB0aGUgZm9udCBvZiB0aGUgU3BvdGlmeSBhcHBcIixcbiAgICAgIGRlZmF1bHRWYWw6IFwiU3BvdGlmeU1peFVJXCIsXG4gICAgICBwbGFjZWhvbGRlcjogXCJTcG90aWZ5TWl4VUlcIixcbiAgICAgIHRpcHB5OiBcIlRoaXMgd2lsbCBvbmx5IHdvcmsgaWYgeW91IGhhdmUgdGhlIGZvbnQgaW5zdGFsbGVkIGxvY2FsbHlcIixcbiAgICAgIHJ1bih2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLUZvbnRGYW1pbHlcIiwgdmFsdWUpO1xuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBMYXlvdXRzOiBbXG4gICAge1xuICAgICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICAgIG5hbWU6IFwibGlieC11aVwiLFxuICAgICAgZGVzYzogXCJSZXN0b3JlcyB0aGUgb2xkIFVJID4yMDI0IChQcmUgR2xvYmFsIE5hdiBCYXIpXCIsXG4gICAgICBkZWZhdWx0VmFsOiBmYWxzZSxcbiAgICAgIGluY29tcGF0aWJsZTogW1wiQXBwbGVNdXNpY1wiXSxcbiAgICAgIHRpcHB5OiBcIkluY29tcGF0aWJsZSB3aXRoIEFwcGxlTXVzaWNcIixcbiAgICAgIHJ1bih2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImxpYngtdWlcIiwgdmFsdWUpO1xuICAgICAgICBUb2dnbGVMaWJYVUkodmFsdWUpO1xuICAgICAgfSxcbiAgICAgIHJldmVhbDogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICAgICAgICBuYW1lOiBcImhpZ2hsaWdodC1uYXZsaW5rc1wiLFxuICAgICAgICAgIGRlc2M6IFwiQWRkcyBoaWdobGlnaHRzIHRvIHRoZSBzZWxlY3RlZCBwYWdlXCIsXG4gICAgICAgICAgZGVmYXVsdFZhbDogdHJ1ZSxcbiAgICAgICAgICBydW4odmFsdWUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlnaGxpZ2h0LW5hdmxpbmtzXCIsIHZhbHVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICAgICAgICBuYW1lOiBcInByZS1saWJ4LXVpXCIsXG4gICAgICAgICAgZGVzYzogXCJSZXN0b3JlcyB0aGUgb2xkIFVJID4yMDIzIChQcmUgTGlicmFyeVgpXCIsXG4gICAgICAgICAgZGVmYXVsdFZhbDogZmFsc2UsXG4gICAgICAgICAgcnVuKHZhbHVlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcInByZS1saWJ4LXVpXCIsIHZhbHVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICAgICAgICBuYW1lOiBcImNvbXBhY3QtbGlicmFyeVwiLFxuICAgICAgICAgIGRlc2M6IFwiVXNlcyBjb21wYWN0IHNpZGViYXJcIixcbiAgICAgICAgICBkZWZhdWx0VmFsOiBmYWxzZSxcbiAgICAgICAgICB0aXBweTogXCJCcm9rZW4gaWYgbGlicmFyeSBpcyBjb2xsYXBzZWRcIixcbiAgICAgICAgICBydW4odmFsdWUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGFjdC1saWJyYXJ5XCIsIHZhbHVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXG4gICAgICBuYW1lOiBcImFwcGxlLW11c2ljLXVpXCIsXG4gICAgICBkZXNjOiBcIkNoYW5nZXMgdGhlIFVJIHRvIGxvb2sgbGlrZSBBcHBsZSBNdXNpY1wiLFxuICAgICAgZGVmYXVsdFZhbDogZmFsc2UsXG4gICAgICBpbmNvbXBhdGlibGU6IFtcIkxpYlhcIiwgXCJzd2l0Y2hsYXlvdXRcIiwgXCJUZXN0TGF5b3V0XCIsIFwiZ3JlZW5pY29uXCJdLFxuICAgICAgdGlwcHk6IFwiSW5jb21wYXRpYmxlIHdpdGggTGliWCwgU3dpdGNobGF5b3V0LCBncmVlbmljb24gYW5kIHRlc3RsYXlvdXRcIixcbiAgICAgIHJ1bih2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImFwcGxlLW11c2ljLXVpXCIsIHZhbHVlKTtcbiAgICAgICAgVG9nZ2xlQXBwbGVNdXNpYyh2YWx1ZSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICAgIG5hbWU6IFwibW9kZXJuLWxheW91dFwiLFxuICAgICAgZGVzYzogXCJSZW9yZGVycyBwbGF5IGJ1dHRvbiB0byBzdGFydCBhbmQgY292ZXIgYXJ0IHRvIG1pZGRsZVwiLFxuICAgICAgaW5jb21wYXRpYmxlOiBbXCJBcHBsZU11c2ljXCJdLFxuICAgICAgdGlwcHk6IFwiSW5jb21wYXRpYmxlIHdpdGggQXBwbGVNdXNpY1wiLFxuICAgICAgZGVmYXVsdFZhbDogdHJ1ZSxcbiAgICAgIHJ1bih2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIm1vZGVybi1sYXlvdXRcIiwgdmFsdWUpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXG4gICAgICBuYW1lOiBcInN3aXRjaC1ncmlkLWxheW91dFwiLFxuICAgICAgZGVzYzogXCJVc2VzIGRpZmZlcmVudCBncmlkIGxheW91dFwiLFxuICAgICAgaW5jb21wYXRpYmxlOiBbXCJBcHBsZU11c2ljXCJdLFxuICAgICAgdGlwcHk6IFwiSW5jb21wYXRpYmxlIHdpdGggQXBwbGVNdXNpY1wiLFxuICAgICAgZGVmYXVsdFZhbDogdHJ1ZSxcbiAgICAgIHJ1bih2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcInN3aXRjaC1ncmlkLWxheW91dFwiLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG4gIFNuaXBwZXRzOiBbXG4gICAge1xuICAgICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICAgIG5hbWU6IFwiaGlkZS10cmFja2xpc3QtbnVtYmVyc1wiLFxuICAgICAgZGVzYzogXCJIaWRlcyB0cmFja2xpc3QgbnVtYmVycyBpbiB2YXJpb3VzIHBhZ2VzXCIsXG4gICAgICBkZWZhdWx0VmFsOiB0cnVlLFxuICAgICAgcnVuKHZhbHVlKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS10cmFja2xpc3QtbnVtYmVyc1wiLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICAgIG5hbWU6IFwiZ3JlZW4tbmF2TGluay1pY29uc1wiLFxuICAgICAgZGVzYzogXCJNYWtlcyBOYXZsaW5rcyBncmVlblwiLFxuICAgICAgaW5jb21wYXRpYmxlOiBbXCJBcHBsZU11c2ljXCJdLFxuICAgICAgdGlwcHk6IFwiSW5jb21wYXRpYmxlIHdpdGggQXBwbGVNdXNpY1wiLFxuICAgICAgZGVmYXVsdFZhbDogdHJ1ZSxcbiAgICAgIHJ1bih2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImdyZWVuLW5hdkxpbmstaWNvbnNcIiwgdmFsdWUpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXG4gICAgICBuYW1lOiBcInRyYW5zcGFyZW50LXBsYXlidXR0b25cIixcbiAgICAgIGRlc2M6IFwiTWFrZSB0aGUgcGxheS9wYXVzZSBidXR0b24gdHJhbnNwYXJlbnRcIixcbiAgICAgIGRlZmF1bHRWYWw6IHRydWUsXG4gICAgICBydW4odmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ0cmFuc3BhcmVudC1wbGF5YnV0dG9uXCIsIHZhbHVlKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiBcInRvZ2dsZVwiLFxuICAgICAgbmFtZTogXCJseXJpY3Mtb25seS1ucHZcIixcbiAgICAgIGRlc2M6IFwiU2hvdyBseXJpY3Mgb25seSBpbiBOb3cgcGxheWluZyB2aWV3XCIsXG4gICAgICBkZWZhdWx0VmFsOiBmYWxzZSxcbiAgICAgIHJ1bih2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImx5cmljcy1vbmx5LW5wdlwiLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICAgIG5hbWU6IFwibm8tZ3JhZGllbnRcIixcbiAgICAgIGRlc2M6IFwiUmVtb3ZlIHRoZSBjb2xvdXJlZCBncmFkaWVudCBmcm9tIGhlYWRlclwiLFxuICAgICAgZGVmYXVsdFZhbDogdHJ1ZSxcbiAgICAgIHJ1bih2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIm5vLWdyYWRpZW50XCIsIHZhbHVlKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgVGVzdDogW1xuICAgIHtcbiAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXG4gICAgICBuYW1lOiBcInRlc3QtdG9nZ2xlXCIsXG4gICAgICBkZXNjOiBcInRlc3QtdG9nZ2xlXCIsXG4gICAgICBkZWZhdWx0VmFsOiB0cnVlLFxuICAgICAgcG9wdXBNb2RhbDogRGVidWdNZW51LFxuICAgICAgaW5jb21wYXRpYmxlOiBbXG4gICAgICAgIFwidGVzdC1pbmNvbXBhdGlibGUtdG9nZ2xlXCIsXG4gICAgICAgIFwidGVzdC1pbmNvbXBhdGlibGUtaW5wdXRcIixcbiAgICAgICAgXCJ0ZXN0LWluY29tcGF0aWJsZS1kcm9wZG93blwiLFxuICAgICAgXSxcbiAgICAgIHRpcHB5OiBcIkluY29tcGF0aWJsZSB3aXRoIHRlc3QtaW5jb21wYXRpYmxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiBcInRvZ2dsZVwiLFxuICAgICAgbmFtZTogXCJ0ZXN0LWluY29tcGF0aWJsZS10b2dnbGVcIixcbiAgICAgIGRlc2M6IFwidGVzdC1pbmNvbXBhdGlibGUtdG9nZ2xlXCIsXG4gICAgICBkZWZhdWx0VmFsOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJpbnB1dFwiLFxuICAgICAgbmFtZTogXCJ0ZXN0LWluY29tcGF0aWJsZS1pbnB1dFwiLFxuICAgICAgZGVzYzogXCJ0ZXN0LWluY29tcGF0aWJsZS1pbnB1dFwiLFxuICAgICAgZGVmYXVsdFZhbDogMSxcbiAgICAgIHBsYWNlaG9sZGVyOiBcImRvZXMgc29tZXRoaW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiBcImRyb3Bkb3duXCIsXG4gICAgICBuYW1lOiBcInRlc3QtaW5jb21wYXRpYmxlLWRyb3Bkb3duXCIsXG4gICAgICBkZXNjOiBcInRlc3QtaW5jb21wYXRpYmxlLWRyb3Bkb3duXCIsXG4gICAgICBkZWZhdWx0VmFsOiBcInRlc3QxXCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgdmFsdWU6IFwidGVzdDFcIiwgbGFiZWw6IFwidGVzdDFcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcInRlc3QyXCIsIGxhYmVsOiBcInRlc3QyXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJ0ZXN0M1wiLCBsYWJlbDogXCJ0ZXN0M1wiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwidGVzdDRcIiwgbGFiZWw6IFwidGVzdDRcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcbiAgICAgIG5hbWU6IFwidGVzdC1pbnB1dFwiLFxuICAgICAgZGVzYzogXCJ0ZXN0LWlucHV0XCIsXG4gICAgICBkZWZhdWx0VmFsOiAxLFxuICAgICAgcGxhY2Vob2xkZXI6IFwiZG9lcyBzb21ldGhpbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwiZHJvcGRvd25cIixcbiAgICAgIG5hbWU6IFwidGVzdC1kcm9wZG93blwiLFxuICAgICAgZGVzYzogXCJ0ZXN0LWRyb3Bkb3duXCIsXG4gICAgICBkZWZhdWx0VmFsOiBcInRlc3QxXCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgdmFsdWU6IFwidGVzdDFcIiwgbGFiZWw6IFwidGVzdDFcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcInRlc3QyXCIsIGxhYmVsOiBcInRlc3QyXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJ0ZXN0M1wiLCBsYWJlbDogXCJ0ZXN0M1wiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwidGVzdDRcIiwgbGFiZWw6IFwidGVzdDRcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwicmFkaW9idXR0b25cIixcbiAgICAgIG5hbWU6IFwidGVzdC1yYWRpb2J1dHRvblwiLFxuICAgICAgZGVzYzogXCJ0ZXN0LXJhZGlvYnV0dG9uXCIsXG4gICAgICBkZWZhdWx0VmFsOiBcInRlc3QxXCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgdmFsdWU6IFwidGVzdDFcIiwgbGFiZWw6IFwidGVzdDFcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcInRlc3QyXCIsIGxhYmVsOiBcInRlc3QyXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJ0ZXN0M1wiLCBsYWJlbDogXCJ0ZXN0M1wiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwidGVzdDRcIiwgbGFiZWw6IFwidGVzdDRcIiB9LFxuICAgICAgXSxcbiAgICAgIHJ1bih2YWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICAgIG5hbWU6IFwidGVzdC1yZXZlYWxcIixcbiAgICAgIGRlc2M6IFwidGVzdC1yZXZlYWxcIixcbiAgICAgIGRlZmF1bHRWYWw6IHRydWUsXG4gICAgICByZXZlYWw6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXG4gICAgICAgICAgbmFtZTogXCJyZXZlYWxlZC10b2dnbGVcIixcbiAgICAgICAgICBkZXNjOiBcInJldmVhbGVkLXRvZ2dsZVwiLFxuICAgICAgICAgIGRlZmF1bHRWYWw6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcImlucHV0XCIsXG4gICAgICAgICAgbmFtZTogXCJyZXZlYWxlZC1pbnB1dFwiLFxuICAgICAgICAgIGRlc2M6IFwicmV2ZWFsZWQtaW5wdXRcIixcbiAgICAgICAgICBkZWZhdWx0VmFsOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJkcm9wZG93blwiLFxuICAgICAgICAgIG5hbWU6IFwicmV2ZWFsZWQtZHJvcGRvd25cIixcbiAgICAgICAgICBkZXNjOiBcInJldmVhbGVkLWRyb3Bkb3duXCIsXG4gICAgICAgICAgZGVmYXVsdFZhbDogXCJ0ZXN0MVwiLFxuICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgIHsgdmFsdWU6IFwidGVzdDFcIiwgbGFiZWw6IFwidGVzdDFcIiB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogXCJ0ZXN0MlwiLCBsYWJlbDogXCJ0ZXN0MlwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcInRlc3QzXCIsIGxhYmVsOiBcInRlc3QzXCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwidGVzdDRcIiwgbGFiZWw6IFwidGVzdDRcIiB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBvcHRpb25zO1xuIiwgImltcG9ydCBDb25zb2xlIGZyb20gXCIuLi8uLi91dGlscy9Db25zb2xlXCI7XG5pbXBvcnQgb3B0aW9ucyBmcm9tIFwiLi4vc2V0dGluZ3NtZW51L29wdGlvbnNcIjtcblxuY29uc3QgYXBwbHlPcHRpb25zID0gKHNldHRpbmdzLCBjaGFuZ2VkT3B0aW9ucyA9IFtdKSA9PiB7XG4gIHRyeSB7XG4gICAgT2JqZWN0LnZhbHVlcyhvcHRpb25zKVxuICAgICAgLmZsYXQoKVxuICAgICAgLmZvckVhY2goKHsgbmFtZSwgcnVuIH0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gbmFtZTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzZXR0aW5nc1trZXldO1xuICAgICAgICBpZiAoY2hhbmdlZE9wdGlvbnMuaW5jbHVkZXMoa2V5KSAmJiBydW4pIHtcbiAgICAgICAgICBydW4odmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb25zb2xlLkVycm9yKFwiRmFpbGVkIHRvIGFwcGx5IG9wdGlvbnM6XCIsIGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwbHlPcHRpb25zO1xuIiwgImltcG9ydCBDb25zb2xlIGZyb20gXCIuLi8uLi91dGlscy9Db25zb2xlXCI7XG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gXCIuLi8uLi91dGlscy9Mb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IGFsYnVtQmFubmVyT3B0aW9ucyB9IGZyb20gXCIuLi9tb2RhbG1lbnUvQWxidW1CYW5uZXJNb2RhbFwiO1xuaW1wb3J0IHsgd2luZG93c0NvbnRyb2xPcHRpb25zIH0gZnJvbSBcIi4uL21vZGFsbWVudS9XaW5kb3dzQ29udHJvbE1vZGFsXCI7XG5pbXBvcnQgb3B0aW9ucyBmcm9tIFwiLi4vc2V0dGluZ3NtZW51L29wdGlvbnNcIjtcbmltcG9ydCBhcHBseU9wdGlvbnMgZnJvbSBcIi4vYXBwbHlPcHRpb25zXCI7XG5pbXBvcnQgZ2V0SW5pdGlhbE9wdGlvbnMgZnJvbSBcIi4vZ2V0SW5pdGlhbE9wdGlvbnNcIjtcblxuY29uc3QgaW5pdGlhbGlzZU9wdGlvbnMgPSAoKSA9PiB7XG4gIENvbnNvbGUuTG9nKFwiSW5pdGlhbGlzaW5nIG9wdGlvbnNcIik7XG4gIGNvbnN0IGxvYWRlZE9wdGlvbnMgPSBnZXRJbml0aWFsT3B0aW9ucyhPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZsYXQoKSk7XG4gIGNvbnN0IGFsbE9wdGlvbnMgPSBbXG4gICAgLi4uT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5mbGF0KCksXG4gICAgLi4ud2luZG93c0NvbnRyb2xPcHRpb25zLFxuICAgIC4uLmFsYnVtQmFubmVyT3B0aW9ucyxcbiAgXTtcblxuICBhbGxPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleSA9IG9wdGlvbi5uYW1lO1xuICAgIGlmIChMb2NhbFN0b3JhZ2UuZ2V0KGtleSwgbnVsbCkgPT09IG51bGwpIHtcbiAgICAgIExvY2FsU3RvcmFnZS5zZXQoa2V5LCBvcHRpb24uZGVmYXVsdFZhbCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbi5yZXZlYWwpIHtcbiAgICAgIG9wdGlvbi5yZXZlYWwuZm9yRWFjaCgoc3ViT3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YktleSA9IHN1Yk9wdGlvbi5uYW1lO1xuICAgICAgICBpZiAoTG9jYWxTdG9yYWdlLmdldChzdWJLZXksIG51bGwpID09PSBudWxsKSB7XG4gICAgICAgICAgTG9jYWxTdG9yYWdlLnNldChzdWJLZXksIGxvYWRlZE9wdGlvbnNba2V5XSA/IHN1Yk9wdGlvbi5kZWZhdWx0VmFsIDogZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGFsbE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5ID0gb3B0aW9uLm5hbWU7XG4gICAgY29uc3QgdmFsdWUgPSBMb2NhbFN0b3JhZ2UuZ2V0KGtleSwgb3B0aW9uLmRlZmF1bHRWYWwpO1xuICAgIGlmIChvcHRpb24ucnVuKSB7XG4gICAgICBvcHRpb24ucnVuKHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGFwcGx5T3B0aW9ucyhsb2FkZWRPcHRpb25zKTtcbiAgcmV0dXJuIGxvYWRlZE9wdGlvbnM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXNlT3B0aW9ucztcbiIsICJpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IENvbmZpcm1EaWFsb2cgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29uZmlybURpYWxvZ1wiO1xuaW1wb3J0IFBvcHVwTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9wdXBNb2RhbFwiO1xuaW1wb3J0IERlYnVnTWVudSBmcm9tIFwiLi4vLi4vZGVidWcvRGVidWdNZW51XCI7XG5pbXBvcnQgSWNvbnMgZnJvbSBcIi4uLy4uL2ljb25zL0ljb25zXCI7XG5pbXBvcnQgV2luZG93IGZyb20gXCIuLi8uLi91dGlscy9XaW5kb3dcIjtcbmltcG9ydCBTZXR0aW5nc01lbnUgZnJvbSBcIi4vU2V0dGluZ3NNZW51XCI7XG5cbmNvbnN0IFNldHRpbmdzQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBwb3BvdmVySWQgPSBcInNldHRpbmdzLW1lbnUtcG9wb3ZlclwiO1xuICBsZXQgcG9wb3ZlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3BvdmVySWQpO1xuXG4gIGNvbnN0IGhpZGVNZW51ID0gKCkgPT4ge1xuICAgIHBvcG92ZXJFbGVtZW50Py5oaWRlUG9wb3Zlcj8uKCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd01lbnUgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHBvcG92ZXJFbGVtZW50Py5zaG93UG9wb3Zlcj8uKCk7XG4gIH07XG5cbiAgaWYgKCFwb3BvdmVyRWxlbWVudCkge1xuICAgIHBvcG92ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwb3BvdmVyRWxlbWVudC5pZCA9IHBvcG92ZXJJZDtcbiAgICBwb3BvdmVyRWxlbWVudC5zdHlsZS50b3AgPSBcImNhbGMoYW5jaG9yKC0tU2V0dGluZ3NCdXR0b24gYm90dG9tKSArIDhweClcIjtcbiAgICBwb3BvdmVyRWxlbWVudC5zdHlsZS5sZWZ0ID0gXCJhbmNob3IoLS1TZXR0aW5nc0J1dHRvbiBsZWZ0KVwiO1xuICAgIHBvcG92ZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgcG9wb3ZlckVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbiAgICBwb3BvdmVyRWxlbWVudC5wb3BvdmVyID0gXCJhdXRvXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3BvdmVyRWxlbWVudCk7XG5cbiAgICBSZWFjdERPTS5jcmVhdGVSb290KHBvcG92ZXJFbGVtZW50KS5yZW5kZXIoXG4gICAgICA8U3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50Lk1lbnU+XG4gICAgICAgIDxTcGljZXRpZnkuUmVhY3RDb21wb25lbnQuTWVudUl0ZW1cbiAgICAgICAgICBrZXk9XCJyZWxvYWQtdGhlbWVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIFdpbmRvdy5SZWxvYWQoKTtcbiAgICAgICAgICAgIGhpZGVNZW51KCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBsZWFkaW5nSWNvbj17XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBTcGljZXRpZnkuU1ZHSWNvbnMucmVwZWF0IH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIFJlbG9hZCB0aGVtZVxuICAgICAgICA8L1NwaWNldGlmeS5SZWFjdENvbXBvbmVudC5NZW51SXRlbT5cbiAgICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5NZW51SXRlbVxuICAgICAgICAgIGtleT1cInJlc3RhcnQtc3BvdGlmeVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgV2luZG93LlJlc3RhcnQoKTtcbiAgICAgICAgICAgIGhpZGVNZW51KCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBsZWFkaW5nSWNvbj17XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBTcGljZXRpZnkuU1ZHSWNvbnMubG9ja2VkIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICBkaXZpZGVyPVwiYWZ0ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUmVzdGFydCBTcG90aWZ5XG4gICAgICAgIDwvU3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50Lk1lbnVJdGVtPlxuICAgICAgICA8U3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50Lk1lbnVJdGVtXG4gICAgICAgICAga2V5PVwiY29uZmlybS1kaWFsb2dcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIENvbmZpcm1EaWFsb2coe1xuICAgICAgICAgICAgICB0aXRsZVRleHQ6IFwiQ29uZmlybSBEaWFsb2dcIixcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0OiBcIkFyZSB5b3UgPGI+c3VyZTwvYj4/XCIsXG4gICAgICAgICAgICAgIG9uT3V0c2lkZTogKCkgPT4gU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJDbGlja2VkIG91dHNpZGVcIiksXG4gICAgICAgICAgICAgIGNvbmZpcm1MYWJlbDogXCJPa1wiLFxuICAgICAgICAgICAgICBhbGxvd0hUTUw6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGhpZGVNZW51KCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBsZWFkaW5nSWNvbj17XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBTcGljZXRpZnkuU1ZHSWNvbnMuY2hlY2sgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdmlkZXI9XCJhZnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICBDb25maXJtIERpYWxvZ1xuICAgICAgICA8L1NwaWNldGlmeS5SZWFjdENvbXBvbmVudC5NZW51SXRlbT5cbiAgICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5NZW51SXRlbVxuICAgICAgICAgIGtleT1cInRoZW1lLXNldHRpbmdzLW1lbnVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIFBvcHVwTW9kYWwoeyB0aXRsZTogXCJUaGVtZSBTZXR0aW5nc1wiLCBjb250ZW50OiBTZXR0aW5nc01lbnUgfSk7XG4gICAgICAgICAgICBoaWRlTWVudSgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgbGVhZGluZ0ljb249e1xuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogU3BpY2V0aWZ5LlNWR0ljb25zLnN1YnRpdGxlcyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICBUaGVtZSBTZXR0aW5nc1xuICAgICAgICA8L1NwaWNldGlmeS5SZWFjdENvbXBvbmVudC5NZW51SXRlbT5cbiAgICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5NZW51SXRlbVxuICAgICAgICAgIGtleT1cImRlYnVnLW1lbnVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIFBvcHVwTW9kYWwoeyB0aXRsZTogXCJEZWJ1ZyBNZW51XCIsIGNvbnRlbnQ6IERlYnVnTWVudSB9KTtcbiAgICAgICAgICAgIGhpZGVNZW51KCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBsZWFkaW5nSWNvbj17XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBTcGljZXRpZnkuU1ZHSWNvbnMubWVudSB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICBEZWJ1ZyBNZW51XG4gICAgICAgIDwvU3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50Lk1lbnVJdGVtPlxuICAgICAgPC9TcGljZXRpZnkuUmVhY3RDb21wb25lbnQuTWVudT4sXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IFNldHRpbmdzQnV0dG9uID0gbmV3IFNwaWNldGlmeS5Ub3BiYXIuQnV0dG9uKFxuICAgIFwiVGhlbWUgU2V0dGluZ3NcIixcbiAgICBgPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxNnB4XCIgaGVpZ2h0PVwiMTZweFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj4ke0ljb25zLkhUTUwuc2V0dGluZ3N9PC9zdmc+YCxcbiAgICAoKSA9PiB7XG4gICAgICBQb3B1cE1vZGFsKHtcbiAgICAgICAgdGl0bGU6IFwiVGhlbWUgU2V0dGluZ3NcIixcbiAgICAgICAgY29udGVudDogU2V0dGluZ3NNZW51LFxuICAgICAgICBidXR0b25zOiAoXG4gICAgICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlciBsYWJlbD1cIkdpdEh1YlwiIHBsYWNlbWVudD1cInRvcFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiTW9kYWxfX2J1dHRvbiBNb2RhbF9fYnV0dG9uLS1naXRodWJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihcImh0dHBzOi8vZ2l0aHViLmNvbS92ZXJ5Ym9yaW5naHdsL3NwaWNldGlmeVwiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb25zLlJlYWN0LmdpdGh1YiBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvU3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlRvb2x0aXBXcmFwcGVyPlxuICAgICAgICApLFxuICAgICAgICBpY29uOiA8SWNvbnMuUmVhY3Quc2V0dGluZ3Mgc2l6ZT17MzB9IC8+LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBmYWxzZSxcbiAgICB0cnVlLFxuICApO1xuXG4gIFNldHRpbmdzQnV0dG9uLmVsZW1lbnQub25jb250ZXh0bWVudSA9IHNob3dNZW51O1xuICBTZXR0aW5nc0J1dHRvbi5lbGVtZW50LnN0eWxlLmFuY2hvck5hbWUgPSBcIi0tU2V0dGluZ3NCdXR0b25cIjtcbiAgcmV0dXJuIFNldHRpbmdzQnV0dG9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NCdXR0b247XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuZnVuY3Rpb24gQ29uZmlybURpYWxvZyh7XG4gIHRpdGxlVGV4dCxcbiAgZGVzY3JpcHRpb25UZXh0LFxuICBjYW5jZWxUZXh0ID0gXCJDYW5jZWxcIixcbiAgY29uZmlybVRleHQgPSBcIkNvbmZpcm1cIixcbiAgb25Db25maXJtLFxuICBvbkNsb3NlLFxuICBvbk9wZW4sXG4gIG9uT3V0c2lkZSxcbiAgYWxsb3dIVE1MLFxufSkge1xuICBjb25zdCBDb25maXJtRGlhbG9nID0gUmVhY3QubWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBTcGljZXRpZnkuUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUmVhY3RNb2RhbFBvcnRhbDpsYXN0LW9mLXR5cGVcIik7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlKSBvbk9wZW4/LigpO1xuICAgIH0sIFtzdGF0ZSwgb25PcGVuXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5SZW1vdGVDb25maWdQcm92aWRlclxuICAgICAgICBjb25maWd1cmF0aW9uPXtTcGljZXRpZnkuUGxhdGZvcm0uUmVtb3RlQ29uZmlndXJhdGlvbn1cbiAgICAgID5cbiAgICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Db25maXJtRGlhbG9nXG4gICAgICAgICAgdGl0bGVUZXh0PXt0aXRsZVRleHR9XG4gICAgICAgICAgZGVzY3JpcHRpb25UZXh0PXtkZXNjcmlwdGlvblRleHR9XG4gICAgICAgICAgY2FuY2VsVGV4dD17Y2FuY2VsVGV4dH1cbiAgICAgICAgICBjb25maXJtVGV4dD17Y29uZmlybVRleHR9XG4gICAgICAgICAgaXNPcGVuPXtzdGF0ZX1cbiAgICAgICAgICBvbk91dHNpZGU9eygpID0+IHtcbiAgICAgICAgICAgIHNldFN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgIG9uT3V0c2lkZT8uKCk7XG4gICAgICAgICAgICBtZW51Py5yZW1vdmUoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHtcbiAgICAgICAgICAgIHNldFN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgIG9uQ2xvc2U/LigpO1xuICAgICAgICAgICAgbWVudT8ucmVtb3ZlKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNvbmZpcm09eygpID0+IHtcbiAgICAgICAgICAgIHNldFN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgIG9uQ29uZmlybT8uKCk7XG4gICAgICAgICAgICBtZW51Py5yZW1vdmUoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGFsbG93SFRNTD17YWxsb3dIVE1MfVxuICAgICAgICAvPlxuICAgICAgPC9TcGljZXRpZnkuUmVhY3RDb21wb25lbnQuUmVtb3RlQ29uZmlnUHJvdmlkZXI+XG4gICAgKTtcbiAgfSk7XG5cbiAgUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5yZW5kZXIoPENvbmZpcm1EaWFsb2cgLz4pO1xufVxuXG4vLyBFeGFtcGxlIHVzYWdlOlxuLy8gQ29uZmlybURpYWxvZyh7XG4vLyAgIHRpdGxlVGV4dDogXCJEZWJ1ZyBNZW51XCIsXG4vLyAgIGRlc2NyaXB0aW9uVGV4dDogXCJBcmUgeW91IDxiPnN1cmU8L2I+P1wiLFxuLy8gICBvbk91dHNpZGU6ICgpID0+IHtcbi8vICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkNsaWNrZWQgb3V0c2lkZVwiKTtcbi8vICAgfSxcbi8vICAgY29uZmlybVRleHQ6IFwiT2tcIixcbi8vICAgYWxsb3dIVE1MOiB0cnVlLFxuLy8gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1EaWFsb2c7XG4iLCAiY29uc3QgV2luZG93ID0ge1xuICBSZWxvYWQ6ICgpID0+IHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSxcbiAgUmVzdGFydDogKCkgPT4ge1xuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5VcGRhdGVBUEkuYXBwbHlVcGRhdGUoKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvdztcbiIsICJpbXBvcnQgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b25Db250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uQ29udGFpbmVyXCI7XG5pbXBvcnQgQ2F0ZWdvcnlDYXJvdXNlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXRlZ29yeUNhcm91c2VsXCI7XG5pbXBvcnQgUmVuZGVyQ2F0ZWdvcnkgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVuZGVyQ2F0ZWdvcnlcIjtcbmltcG9ydCB1c2VTZXR0aW5ncyBmcm9tIFwiLi4vaG9va3MvdXNlU2V0dGluZ3NcIjtcbmltcG9ydCBQcmV2aWV3IGZyb20gXCIuL1ByZXZpZXdcIjtcbmltcG9ydCBvcHRpb25zIGZyb20gXCIuL29wdGlvbnNcIjtcblxuY29uc3QgU2V0dGluZ3NNZW51ID0gbWVtbygoKSA9PiB7XG4gIGNvbnN0IHsgc2V0dGluZ3MsIGhhbmRsZVNldHRpbmdDaGFuZ2UsIHJlc2V0U2V0dGluZ3MsIHNhdmVTZXR0aW5ncyB9ID0gdXNlU2V0dGluZ3MoKTtcbiAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IFtcIkFsbFwiLCAuLi5PYmplY3Qua2V5cyhvcHRpb25zKV07XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdENhdGVnb3J5ID0gdXNlQ2FsbGJhY2soKGNhdGVnb3J5KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXRlZ29yeSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBmaWx0ZXJlZE9wdGlvbnMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRDYXRlZ29yeSA9PT0gXCJBbGxcIikge1xuICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMob3B0aW9ucykuZmlsdGVyKChbY2F0ZWdvcnldKSA9PiBjYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeSk7XG4gIH0sIFtzZWxlY3RlZENhdGVnb3J5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLW1lbnVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbWVudV9fY2Fyb3VzZWxcIj5cbiAgICAgICAgPENhdGVnb3J5Q2Fyb3VzZWxcbiAgICAgICAgICBjYXRlZ29yaWVzPXthbGxDYXRlZ29yaWVzfVxuICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnk9e3NlbGVjdGVkQ2F0ZWdvcnl9XG4gICAgICAgICAgb25TZWxlY3RDYXRlZ29yeT17aGFuZGxlU2VsZWN0Q2F0ZWdvcnl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbWVudV9fb3B0aW9uc1wiPlxuICAgICAgICB7ZmlsdGVyZWRPcHRpb25zLm1hcCgoW2NhdGVnb3J5LCBjYXRlZ29yeU9wdGlvbnNdKSA9PiAoXG4gICAgICAgICAgPFJlbmRlckNhdGVnb3J5XG4gICAgICAgICAgICBrZXk9e2NhdGVnb3J5fVxuICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxuICAgICAgICAgICAgY2F0ZWdvcnlPcHRpb25zPXtjYXRlZ29yeU9wdGlvbnN9XG4gICAgICAgICAgICBzZXR0aW5ncz17c2V0dGluZ3N9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2V0dGluZ0NoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy1tZW51X19wcmV2aWV3XCI+XG4gICAgICAgIDxQcmV2aWV3IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbWVudV9fYnV0dG9uc1wiPlxuICAgICAgICA8QnV0dG9uQ29udGFpbmVyIHJlc2V0U2V0dGluZ3M9e3Jlc2V0U2V0dGluZ3N9IHNhdmVTZXR0aW5ncz17c2F2ZVNldHRpbmdzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NNZW51O1xuIiwgImltcG9ydCB7IG1lbW8sIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENhdGVnb3J5Q2Fyb3VzZWwgPSBtZW1vKCh7IGNhdGVnb3JpZXMsIHNlbGVjdGVkQ2F0ZWdvcnksIG9uU2VsZWN0Q2F0ZWdvcnkgfSkgPT4ge1xuICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVdoZWVsID0gKGUpID0+IHtcbiAgICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCArPSBlLmRlbHRhWTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjYXJvdXNlbCA9IGNhcm91c2VsUmVmLmN1cnJlbnQ7XG4gICAgY2Fyb3VzZWw/LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVXaGVlbCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICByZXR1cm4gKCkgPT4gY2Fyb3VzZWw/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVXaGVlbCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWxcIiByZWY9e2Nhcm91c2VsUmVmfT5cbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGtleT17Y2F0ZWdvcnl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgY2Fyb3VzZWxfX2J1dHRvbiAke3NlbGVjdGVkQ2F0ZWdvcnkgPT09IGNhdGVnb3J5ID8gXCJjYXJvdXNlbF9fYnV0dG9uLS1hY3RpdmVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdENhdGVnb3J5KGNhdGVnb3J5KX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeUNhcm91c2VsO1xuIiwgImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgb3B0aW9ucyBmcm9tIFwiLi4vc2V0dGluZ3NtZW51L29wdGlvbnNcIjtcbmltcG9ydCBPcHRpb25UeXBlIGZyb20gXCIuL09wdGlvblR5cGVcIjtcblxuY29uc3QgYWxsT3B0aW9ucyA9IE9iamVjdC52YWx1ZXMob3B0aW9ucykuZmxhdCgpO1xuXG5jb25zdCBSZW5kZXJDYXRlZ29yeSA9IG1lbW8oKHsgY2F0ZWdvcnksIGNhdGVnb3J5T3B0aW9ucywgc2V0dGluZ3MsIG9uQ2hhbmdlIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2BvcHRpb25fX2NhdGVnb3J5IG9wdGlvbl9fY2F0ZWdvcnktLSR7Y2F0ZWdvcnkudG9Mb3dlckNhc2UoKX1gfT5cbiAgICA8aDIgY2xhc3NOYW1lPVwib3B0aW9uX19jYXRlZ29yeS10aXRsZVwiPntjYXRlZ29yeX08L2gyPlxuICAgIHtjYXRlZ29yeU9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc2V0dGluZ3Nbb3B0aW9uLm5hbWVdO1xuICAgICAgY29uc3QgZGlzYWJsZWQgPSBhbGxPcHRpb25zLnNvbWUoXG4gICAgICAgIChvKSA9PiBvLmluY29tcGF0aWJsZT8uaW5jbHVkZXMob3B0aW9uLm5hbWUpICYmIHNldHRpbmdzW28ubmFtZV0sXG4gICAgICApO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3B0aW9uLm5hbWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uX19pdGVtLS1tYWluXCI+XG4gICAgICAgICAgICA8T3B0aW9uVHlwZSBvcHRpb249e29wdGlvbn0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IGRpc2FibGVkPXtkaXNhYmxlZH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dmFsdWUgJiYgb3B0aW9uLnJldmVhbCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbl9faXRlbS0tcmV2ZWFsZWRcIj5cbiAgICAgICAgICAgICAge29wdGlvbi5yZXZlYWwubWFwKChzdWIpID0+IChcbiAgICAgICAgICAgICAgICA8T3B0aW9uVHlwZVxuICAgICAgICAgICAgICAgICAga2V5PXtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbj17c3VifVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NldHRpbmdzW3N1Yi5uYW1lXX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH0pfVxuICA8L2Rpdj5cbikpO1xuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJDYXRlZ29yeTtcbiIsICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBnZXRJbml0aWFsT3B0aW9ucyBmcm9tIFwiLi4vaGVscGVycy9nZXRJbml0aWFsT3B0aW9uc1wiO1xuaW1wb3J0IHJlc2V0T3B0aW9ucyBmcm9tIFwiLi4vaGVscGVycy9yZXNldE9wdGlvbnNcIjtcbmltcG9ydCBzYXZlT3B0aW9ucyBmcm9tIFwiLi4vaGVscGVycy9zYXZlT3B0aW9uc1wiO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSBcIi4uL3NldHRpbmdzbWVudS9vcHRpb25zXCI7XG5cbmNvbnN0IHVzZVNldHRpbmdzID0gKCkgPT4ge1xuICBjb25zdCBhbGxPcHRpb25zID0gT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5mbGF0KCk7XG4gIGNvbnN0IFtzZXR0aW5ncywgc2V0U2V0dGluZ3NdID0gdXNlU3RhdGUoKCkgPT4gZ2V0SW5pdGlhbE9wdGlvbnMoYWxsT3B0aW9ucykpO1xuXG4gIGNvbnN0IGhhbmRsZVNldHRpbmdDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgc2V0U2V0dGluZ3MoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgbmV3U2V0dGluZ3MgPSB7IC4uLnByZXYsIFtrZXldOiB2YWx1ZSB9O1xuICAgICAgICBjb25zdCBvcHRpb25OYW1lID0ga2V5O1xuXG4gICAgICAgIGNvbnN0IGNoYW5nZWRPcHRpb24gPSBhbGxPcHRpb25zLmZpbmQoKG9wdCkgPT4gb3B0Lm5hbWUgPT09IG9wdGlvbk5hbWUpO1xuXG4gICAgICAgIGlmIChjaGFuZ2VkT3B0aW9uPy5yZXZlYWwpIHtcbiAgICAgICAgICBjaGFuZ2VkT3B0aW9uLnJldmVhbC5mb3JFYWNoKChzdWJPcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YktleSA9IHN1Yk9wdGlvbi5uYW1lO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgIG5ld1NldHRpbmdzW3N1YktleV0gPSBzdWJPcHRpb24uZGVmYXVsdFZhbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ld1NldHRpbmdzW3N1YktleV0gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSAmJiBjaGFuZ2VkT3B0aW9uPy5pbmNvbXBhdGlibGUpIHtcbiAgICAgICAgICBjaGFuZ2VkT3B0aW9uLmluY29tcGF0aWJsZS5mb3JFYWNoKChpbmNvbXBOYW1lKSA9PiB7XG4gICAgICAgICAgICBuZXdTZXR0aW5nc1tpbmNvbXBOYW1lXSA9IGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1NldHRpbmdzO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBbYWxsT3B0aW9uc10sXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBzZXR0aW5ncyxcbiAgICBoYW5kbGVTZXR0aW5nQ2hhbmdlLFxuICAgIHJlc2V0U2V0dGluZ3M6ICgpID0+IHJlc2V0T3B0aW9ucyhzZXRTZXR0aW5ncyksXG4gICAgc2F2ZVNldHRpbmdzOiAoKSA9PiB7XG4gICAgICBjb25zdCB1cGRhdGVkU2V0dGluZ3MgPSBzYXZlT3B0aW9ucyhzZXR0aW5ncyk7XG4gICAgICBzZXRTZXR0aW5ncyh1cGRhdGVkU2V0dGluZ3MpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTZXR0aW5ncztcbiIsICJpbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvbkNvbnRhaW5lclwiO1xuaW1wb3J0IE9wdGlvblR5cGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvT3B0aW9uVHlwZVwiO1xuaW1wb3J0IHVzZU1vZGFsU2V0dGluZ3MgZnJvbSBcIi4vdXNlTW9kYWxTZXR0aW5nc1wiO1xuXG5jb25zdCBGb250TW9kYWwgPSBtZW1vKCgpID0+IHtcbiAgY29uc3QgeyBzZXR0aW5ncywgdXBkYXRlU2V0dGluZywgcmVzZXRTZXR0aW5ncywgc2F2ZVNldHRpbmdzIH0gPSB1c2VNb2RhbFNldHRpbmdzKGZvbnRPcHRpb25zKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbW9kYWxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbW9kYWxfX29wdGlvbnNcIj5cbiAgICAgICAge2ZvbnRPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgPE9wdGlvblR5cGVcbiAgICAgICAgICAgIGtleT17b3B0aW9uLm5hbWV9XG4gICAgICAgICAgICBvcHRpb249e29wdGlvbn1cbiAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5nc1tvcHRpb24ubmFtZV19XG4gICAgICAgICAgICBvbkNoYW5nZT17KGtleSwgdmFsdWUpID0+IHVwZGF0ZVNldHRpbmcoa2V5LCB2YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbW9kYWxfX2J1dHRvbnNcIj5cbiAgICAgICAgPEJ1dHRvbkNvbnRhaW5lciByZXNldFNldHRpbmdzPXtyZXNldFNldHRpbmdzfSBzYXZlU2V0dGluZ3M9e3NhdmVTZXR0aW5nc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmV4cG9ydCBjb25zdCBmb250T3B0aW9ucyA9IFtcbiAge1xuICAgIHR5cGU6IFwiaW5wdXRcIixcbiAgICBuYW1lOiBcInVpZm9udFwiLFxuICAgIGRlc2M6IFwiQ2hhbmdlcyB0aGUgZm9udCBvZiB0aGUgU3BvdGlmeSBhcHBcIixcbiAgICBkZWZhdWx0VmFsOiBcIlNlZ29lIFVJIFZhcmlhYmxlIERpc3BsYXlcIixcbiAgICB0aXBweTogXCJUaGlzIHdpbGwgb25seSB3b3JrIGlmIHlvdSBoYXZlIHRoZSBmb250IGluc3RhbGxlZFwiLFxuICAgIHBvcHVwTW9kYWw6IEZvbnRNb2RhbCxcbiAgICBydW4odmFsdWUpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tRm9udEZhbWlseVwiLCB2YWx1ZSk7XG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IEZvbnRNb2RhbDtcbiIsICJpbXBvcnQgQ29uZmlybURpYWxvZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db25maXJtRGlhbG9nXCI7XG5pbXBvcnQgQ29uc29sZSBmcm9tIFwiLi4vLi4vdXRpbHMvQ29uc29sZVwiO1xuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tIFwiLi4vLi4vdXRpbHMvTG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBhbGJ1bUJhbm5lck9wdGlvbnMgfSBmcm9tIFwiLi4vbW9kYWxtZW51L0FsYnVtQmFubmVyTW9kYWxcIjtcbmltcG9ydCB7IGZvbnRPcHRpb25zIH0gZnJvbSBcIi4uL21vZGFsbWVudS9Gb250TW9kYWxcIjtcbmltcG9ydCB7IHdpbmRvd3NDb250cm9sT3B0aW9ucyB9IGZyb20gXCIuLi9tb2RhbG1lbnUvV2luZG93c0NvbnRyb2xNb2RhbFwiO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSBcIi4uL3NldHRpbmdzbWVudS9vcHRpb25zXCI7XG5pbXBvcnQgYXBwbHlPcHRpb25zIGZyb20gXCIuL2FwcGx5T3B0aW9uc1wiO1xuXG5jb25zdCByZXNldE9wdGlvbnMgPSAoc2V0U2V0dGluZ3MpID0+IHtcbiAgQ29uZmlybURpYWxvZyh7XG4gICAgdGl0bGVUZXh0OiBcIkFyZSB5b3Ugc3VyZT9cIixcbiAgICBkZXNjcmlwdGlvblRleHQ6IFwiVGhpcyB3aWxsIHJlc2V0IGFsbCBzZXR0aW5ncyB0byBkZWZhdWx0IVwiLFxuICAgIGNvbmZpcm1UZXh0OiBcIlJlc2V0XCIsXG4gICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBDb25zb2xlLkxvZyhcIlJlc2V0dGluZyBzZXR0aW5nc1wiKTtcbiAgICAgICAgY29uc3QgYWxsT3B0aW9ucyA9IFtcbiAgICAgICAgICAuLi5PYmplY3QudmFsdWVzKG9wdGlvbnMpLmZsYXQoKSxcbiAgICAgICAgICAuLi5hbGJ1bUJhbm5lck9wdGlvbnMsXG4gICAgICAgICAgLi4ud2luZG93c0NvbnRyb2xPcHRpb25zLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSB7fTtcblxuICAgICAgICBhbGxPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IG1haW5LZXkgPSBvcHRpb24ubmFtZTtcbiAgICAgICAgICBkZWZhdWx0U2V0dGluZ3NbbWFpbktleV0gPSBvcHRpb24uZGVmYXVsdFZhbDtcbiAgICAgICAgICBpZiAob3B0aW9uLnJldmVhbCkge1xuICAgICAgICAgICAgb3B0aW9uLnJldmVhbC5mb3JFYWNoKChzdWJPcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgZGVmYXVsdFNldHRpbmdzW3N1Yk9wdGlvbi5uYW1lXSA9IG9wdGlvbi5kZWZhdWx0VmFsID8gc3ViT3B0aW9uLmRlZmF1bHRWYWwgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGVmYXVsdFNldHRpbmdzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0U2V0dGluZ3MoZGVmYXVsdFNldHRpbmdzKTtcbiAgICAgICAgYXBwbHlPcHRpb25zKGRlZmF1bHRTZXR0aW5ncywgT2JqZWN0LmtleXMoZGVmYXVsdFNldHRpbmdzKSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBDb25zb2xlLkVycm9yKFwiRmFpbGVkIHRvIHJlc2V0IHNldHRpbmdzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNldE9wdGlvbnM7XG4iLCAiaW1wb3J0IENvbnNvbGUgZnJvbSBcIi4uLy4uL3V0aWxzL0NvbnNvbGVcIjtcbmltcG9ydCBMb2NhbFN0b3JhZ2UgZnJvbSBcIi4uLy4uL3V0aWxzL0xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IGFwcGx5T3B0aW9ucyBmcm9tIFwiLi9hcHBseU9wdGlvbnNcIjtcblxuY29uc3Qgc2F2ZU9wdGlvbnMgPSAoc2V0dGluZ3MpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjaGFuZ2VkT3B0aW9ucyA9IFtdO1xuXG4gICAgT2JqZWN0LmVudHJpZXMoc2V0dGluZ3MpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgY29uc3Qgc3RvcmVkVmFsdWUgPSBMb2NhbFN0b3JhZ2UuZ2V0KGtleSwgbnVsbCk7XG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoc3RvcmVkVmFsdWUpICE9PSBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpIHtcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgY2hhbmdlZE9wdGlvbnMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNoYW5nZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIENvbnNvbGUuTG9nKGBTYXZpbmcgc2V0dGluZ3M6ICR7Y2hhbmdlZE9wdGlvbnMuam9pbihcIiwgXCIpfWApO1xuICAgICAgYXBwbHlPcHRpb25zKHNldHRpbmdzLCBjaGFuZ2VkT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldHRpbmdzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbnNvbGUuRXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSBzZXR0aW5nczpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBzZXR0aW5ncztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2F2ZU9wdGlvbnM7XG4iLCAiaW1wb3J0IEljb25zIGZyb20gXCIuLi8uLi9pY29ucy9JY29uc1wiO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LW5hdmJhclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LW5hdmJhcl9faXRlbSBwcmV2aWV3LW5hdmJhcl9faXRlbS0tbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctbmF2YmFyX19pdGVtLWhpc3RvcnlcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctbmF2YmFyX19pdGVtLWJ1dHRvblwiPlxuICAgICAgICAgIDxJY29ucy5SZWFjdC5zZXR0aW5ncyBzaXplPXsxNn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1uYXZiYXJfX2l0ZW0tYnV0dG9uXCI+XG4gICAgICAgICAgPEljb25zLlJlYWN0LnNldHRpbmdzIHNpemU9ezE2fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LW5hdmJhcl9faXRlbSBwcmV2aWV3LW5hdmJhcl9faXRlbS0tY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1uYXZiYXJfX2l0ZW0tc2VhcmNoXCI+XG4gICAgICAgICAgPEljb25zLlJlYWN0LnNldHRpbmdzIHNpemU9ezE2fSAvPlxuICAgICAgICAgIDxkaXY+U2VhcmNoPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctbmF2YmFyX19pdGVtIHByZXZpZXctbmF2YmFyX19pdGVtLS1yaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctbmF2YmFyX19pdGVtLWJ1dHRvblwiPlxuICAgICAgICAgIDxJY29ucy5SZWFjdC5zZXR0aW5ncyBzaXplPXsxNn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1uYXZiYXJfX2l0ZW0td2luZG93cy1jb250cm9sc1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFBsYXlsaXN0SXRlbSA9ICh7IG5hbWUsIGluZm8gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3QtaXRlbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdC1pdGVtX19pbWFnZVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0LWl0ZW1fX2luZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdC1pdGVtX19uYW1lXCI+e25hbWV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3QtaXRlbV9fZGVzY3JpcHRpb25cIj57aW5mb308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctc2lkZWJhclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LXNpZGViYXJfX2hlYWRlclwiPllvdXIgTGlicmFyeTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlwc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaXBzX19pdGVtIGNoaXBzX19pdGVtLS1hY3RpdmVcIj5QbGF5bGlzdHM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlwc19faXRlbVwiPkFydGlzdHM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlwc19faXRlbVwiPlBvZGNhc3RzPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1zaWRlYmFyX19zZWFyY2hcIj5cbiAgICAgICAgPEljb25zLlJlYWN0LnNldHRpbmdzIHNpemU9ezEwfSAvPiB7Lyogc2VhcmNoIEljb24gKi99XG4gICAgICA8L2Rpdj5cblxuICAgICAgPFBsYXlsaXN0SXRlbSBuYW1lPXtcIlBsYXlsaXN0IDFcIn0gaW5mbz17XCJQbGF5bGlzdC5Vc2VybmFtZVwifSAvPlxuICAgICAgPFBsYXlsaXN0SXRlbSBuYW1lPXtcIlBsYXlsaXN0IDJcIn0gaW5mbz17XCJQbGF5bGlzdC5Vc2VybmFtZVwifSAvPlxuICAgICAgPFBsYXlsaXN0SXRlbSBuYW1lPXtcIlBsYXlsaXN0IDNcIn0gaW5mbz17XCJQbGF5bGlzdC5Vc2VybmFtZVwifSAvPlxuICAgICAgPFBsYXlsaXN0SXRlbSBuYW1lPXtcIlBsYXlsaXN0IDRcIn0gaW5mbz17XCJQbGF5bGlzdC5TcG90aWZ5XCJ9IC8+XG4gICAgICA8UGxheWxpc3RJdGVtIG5hbWU9e1wiUGxheWxpc3QgNVwifSBpbmZvPXtcIlBsYXlsaXN0LlNwb3RpZnlcIn0gLz5cbiAgICAgIDxQbGF5bGlzdEl0ZW0gbmFtZT17XCJTcG90aWZ5XCJ9IGluZm89e1wiU3BvdGlmeVwifSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTWFpblZpZXdTaG9ydGN1dEl0ZW0gPSAoeyBuYW1lIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3J0Y3V0LWl0ZW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcnRjdXQtaXRlbV9faW1hZ2VcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9ydGN1dC1pdGVtX190ZXh0XCI+e25hbWV9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBNYWluVmlld0Nhcm91c2VsSXRlbSA9ICh7IG5hbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtX19pbWFnZVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW1fX3RleHRcIj57bmFtZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE1haW5WaWV3ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1tYWluLXZpZXdcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1tYWluLXZpZXdfX2JhY2tncm91bmRcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlwc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaXBzX19pdGVtIGNoaXBzX19pdGVtLS1hY3RpdmVcIj5Ib21lPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpcHNfX2l0ZW1cIj5NdXNpYzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaXBzX19pdGVtXCI+UG9kY2FzdHM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlwc19faXRlbVwiPkF1ZGlvYm9va3M8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LW1haW4tdmlld19fc2hvcnRjdXRzXCI+XG4gICAgICAgIDxNYWluVmlld1Nob3J0Y3V0SXRlbSBuYW1lPXtcIlBsYXlsaXN0IDFcIn0gLz5cbiAgICAgICAgPE1haW5WaWV3U2hvcnRjdXRJdGVtIG5hbWU9e1wiUGxheWxpc3QgMlwifSAvPlxuICAgICAgICA8TWFpblZpZXdTaG9ydGN1dEl0ZW0gbmFtZT17XCJQbGF5bGlzdCAzXCJ9IC8+XG4gICAgICAgIDxNYWluVmlld1Nob3J0Y3V0SXRlbSBuYW1lPXtcIlBsYXlsaXN0IDRcIn0gLz5cbiAgICAgICAgPE1haW5WaWV3U2hvcnRjdXRJdGVtIG5hbWU9e1wiUGxheWxpc3QgNVwifSAvPlxuICAgICAgICA8TWFpblZpZXdTaG9ydGN1dEl0ZW0gbmFtZT17XCJQbGF5bGlzdCA2XCJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1tYWluLXZpZXdfX2hlYWRlclwiPk1hZGUgZm9yIHlvdTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LW1haW4tdmlld19fY2Fyb3VzZWxcIj5cbiAgICAgICAgPE1haW5WaWV3Q2Fyb3VzZWxJdGVtIG5hbWU9e1wiRGFpbHkgTWl4IDFcIn0gLz5cbiAgICAgICAgPE1haW5WaWV3Q2Fyb3VzZWxJdGVtIG5hbWU9e1wiRGlzY292ZXIgV2Vla2x5XCJ9IC8+XG4gICAgICAgIDxNYWluVmlld0Nhcm91c2VsSXRlbSBuYW1lPXtcIlJlbGVhc2UgUmFkYXJcIn0gLz5cbiAgICAgICAgPE1haW5WaWV3Q2Fyb3VzZWxJdGVtIG5hbWU9e1wiT24gUmVwZWF0XCJ9IC8+XG4gICAgICAgIDxNYWluVmlld0Nhcm91c2VsSXRlbSBuYW1lPXtcIlJlcGVhdCBSZXdpbmRcIn0gLz5cbiAgICAgICAgPE1haW5WaWV3Q2Fyb3VzZWxJdGVtIG5hbWU9e1wiQ3JlYXRlIGEgQmxlbmRcIn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LW1haW4tdmlld19faGVhZGVyXCI+UmVjZW50bHkgUGxheWVkPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctbWFpbi12aWV3X19jYXJvdXNlbFwiPlxuICAgICAgICA8TWFpblZpZXdDYXJvdXNlbEl0ZW0gbmFtZT17XCJQbGF5bGlzdCAxXCJ9IC8+XG4gICAgICAgIDxNYWluVmlld0Nhcm91c2VsSXRlbSBuYW1lPXtcIlBsYXlsaXN0IDJcIn0gLz5cbiAgICAgICAgPE1haW5WaWV3Q2Fyb3VzZWxJdGVtIG5hbWU9e1wiUGxheWxpc3QgM1wifSAvPlxuICAgICAgICA8TWFpblZpZXdDYXJvdXNlbEl0ZW0gbmFtZT17XCJQbGF5bGlzdCA0XCJ9IC8+XG4gICAgICAgIDxNYWluVmlld0Nhcm91c2VsSXRlbSBuYW1lPXtcIlBsYXlsaXN0IDVcIn0gLz5cbiAgICAgICAgPE1haW5WaWV3Q2Fyb3VzZWxJdGVtIG5hbWU9e1wiUGxheWxpc3QgNlwifSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctbWFpbi12aWV3X19oZWFkZXJcIj5KdW1wIGJhY2sgaW48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1tYWluLXZpZXdfX2Nhcm91c2VsXCI+XG4gICAgICAgIDxNYWluVmlld0Nhcm91c2VsSXRlbSBuYW1lPXtcIlBsYXlsaXN0IDFcIn0gLz5cbiAgICAgICAgPE1haW5WaWV3Q2Fyb3VzZWxJdGVtIG5hbWU9e1wiUGxheWxpc3QgMlwifSAvPlxuICAgICAgICA8TWFpblZpZXdDYXJvdXNlbEl0ZW0gbmFtZT17XCJQbGF5bGlzdCAzXCJ9IC8+XG4gICAgICAgIDxNYWluVmlld0Nhcm91c2VsSXRlbSBuYW1lPXtcIlBsYXlsaXN0IDRcIn0gLz5cbiAgICAgICAgPE1haW5WaWV3Q2Fyb3VzZWxJdGVtIG5hbWU9e1wiUGxheWxpc3QgNVwifSAvPlxuICAgICAgICA8TWFpblZpZXdDYXJvdXNlbEl0ZW0gbmFtZT17XCJQbGF5bGlzdCA2XCJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE5vd1BsYXlpbmdCYXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1ub3ctcGxheWluZy1iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LW5vdy1wbGF5aW5nLWJhcl9faXRlbSBwcmV2aWV3LW5vdy1wbGF5aW5nLWJhcl9faXRlbS0tbGVmdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1ub3ctcGxheWluZy1iYXJfX2NvdmVyLWFydFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LW5vdy1wbGF5aW5nLWJhcl9faW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LW5vdy1wbGF5aW5nLWJhcl9faW5mby10aXRsZVwiPlNvbmcgVGl0bGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1ub3ctcGxheWluZy1iYXJfX2luZm8tYXJ0aXN0XCI+QXJ0aXN0IE5hbWU8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctbm93LXBsYXlpbmctYmFyX19idXR0b25cIj5cbiAgICAgICAgICAgIDxJY29ucy5SZWFjdC5zZXR0aW5ncyBzaXplPXsxMn0gLz4gey8qIEhlYXJ0IEljb24gKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctbm93LXBsYXlpbmctYmFyX19pdGVtIHByZXZpZXctbm93LXBsYXlpbmctYmFyX19pdGVtLS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctbm93LXBsYXlpbmctYmFyX19jb250cm9sc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LW5vdy1wbGF5aW5nLWJhcl9fYnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxJY29ucy5SZWFjdC5zZXR0aW5ncyBzaXplPXsxMn0gLz4gey8qIFNodWZmbGUgSWNvbiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LW5vdy1wbGF5aW5nLWJhcl9fYnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxJY29ucy5SZWFjdC5zZXR0aW5ncyBzaXplPXsxMn0gLz4gey8qIFByZXZpb3VzIEljb24gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1ub3ctcGxheWluZy1iYXJfX2J1dHRvbiBwcmV2aWV3LW5vdy1wbGF5aW5nLWJhcl9fYnV0dG9uLS1wbGF5XCI+XG4gICAgICAgICAgICAgIDxJY29ucy5SZWFjdC5zZXR0aW5ncyBzaXplPXsxNn0gLz4gey8qIFBsYXkvUGF1c2UgSWNvbiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LW5vdy1wbGF5aW5nLWJhcl9fYnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxJY29ucy5SZWFjdC5zZXR0aW5ncyBzaXplPXsxMn0gLz4gey8qIE5leHQgSWNvbiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LW5vdy1wbGF5aW5nLWJhcl9fYnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxJY29ucy5SZWFjdC5zZXR0aW5ncyBzaXplPXsxMn0gLz4gey8qIFJlcGVhdCBJY29uICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LW5vdy1wbGF5aW5nLWJhcl9fcHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1ub3ctcGxheWluZy1iYXJfX3Byb2dyZXNzLXRpbWVcIj4wOjAwPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctbm93LXBsYXlpbmctYmFyX19wcm9ncmVzcy1iYXJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LW5vdy1wbGF5aW5nLWJhcl9fcHJvZ3Jlc3MtdGltZVwiPjM6MzA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1ub3ctcGxheWluZy1iYXJfX2l0ZW0gcHJldmlldy1ub3ctcGxheWluZy1iYXJfX2l0ZW0tLXJpZ2h0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LW5vdy1wbGF5aW5nLWJhcl9fYnV0dG9uXCI+XG4gICAgICAgICAgICA8SWNvbnMuUmVhY3Quc2V0dGluZ3Mgc2l6ZT17MTJ9IC8+IHsvKiBRdWV1ZSBJY29uICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1ub3ctcGxheWluZy1iYXJfX3ZvbHVtZVwiPlxuICAgICAgICAgICAgPEljb25zLlJlYWN0LnNldHRpbmdzIHNpemU9ezEyfSAvPiB7LyogVm9sdW1lIEljb24gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctbm93LXBsYXlpbmctYmFyX192b2x1bWUtYmFyXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctbm93LXBsYXlpbmctYmFyX19idXR0b25cIj5cbiAgICAgICAgICAgIDxJY29ucy5SZWFjdC5zZXR0aW5ncyBzaXplPXsxMn0gLz4gey8qIEZ1bGxzY3JlZW4gSWNvbiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFByZXZpZXcgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwcmV2aWV3LXRpdGxlXCI+UHJldmlldzwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctc3BvdGlmeS1hcHBcIj5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8U2lkZWJhciAvPlxuICAgICAgICA8TWFpblZpZXcgLz5cbiAgICAgICAgPE5vd1BsYXlpbmdCYXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJldmlldztcbiIsICJpbXBvcnQgTW91c2V0cmFwIGZyb20gXCIuL2RlYnVnL01vdXNldHJhcFwiO1xuaW1wb3J0IGluaXRpYWxpc2VPcHRpb25zIGZyb20gXCIuL21lbnUvaGVscGVycy9pbml0aWFsaXNlT3B0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzQnV0dG9uIGZyb20gXCIuL21lbnUvc2V0dGluZ3NtZW51L1NldHRpbmdzQnV0dG9uXCI7XG5pbXBvcnQgQ29uc29sZSBmcm9tIFwiLi91dGlscy9Db25zb2xlXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gXCIuL3V0aWxzL05vdGlmaWNhdGlvblwiO1xuXG4vLyBydW4gbnB4IHJlYWN0LWRldnRvb2xzIGluIGEgdGVybWluYWwsIGFuZCBjb3B5LXBhc3RlIHRoZSBjb250ZW50cyBvZiBodHRwOi8vbG9jYWxob3N0OjgwOTcgaW50byB4cHVpLmpzXG4vLyBvciBhZGQgcmVhY3QgZGV2dG9vbHMgYXMgY2hyb21lIGV4dGVuc2lvblxuXG4vLyBUT0RPOlxuLy8gYWRkIHNhdmUgYW5kIHJlc2V0IGljb24gdG8gYnV0dG9uXG4vLyBNYWtlIG1lbnUgbG9vayBuaWNlci4gSXQgbG9va3MgbGlrZSBzaGl0IHJuXG4vLyBBZGQgdHlwZXMgb2YgaW5wdXQgKG51bWJlciwgc3RyaW5nKVxuLy8gVXNlIGVzYnVpbGQgZm9yIGNzcyBzbyBpIGNhbiB1c2UgYmlvbWVcbi8vIFJlZG8gYmFzaWNhbGx5IGFsbCBjc3MgYXMgaXRzIHZlcnkgbWVzc3lcbi8vIFJlZG8gYWxsIGNsYXNzbmFtZXNcbi8vIFVzZSBhYnNvbHV0ZSBwYXRoIGluc3RlYWQgb2YgcmVsYXRpdmUgZm9yIGltcG9ydHMgKGVzYnVpbGQtcGx1Z2luLWFsaWFzKVxuLy8uYm9keS1kcmFnLXRvcCBtYWtlIGl0IGJpZ2dlclxuLy8gVXNlIGN1c3RvbSBjb250ZXh0bWVudSBpY29uc1xuLy8gQXV0byB1cGRhdGUgdGhlbWU/XG4vLyBFVkVOVFVBTExZIFNXSVRDSCBUTyBUWVBFU0NSSVBUXG5cbmFzeW5jIGZ1bmN0aW9uIHRoZW1lKCkge1xuICBjb25zdCB0aW1lb3V0ID0gNTAwMDtcbiAgYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IFNwaWNldGlmeS5FdmVudHMud2VicGFja0xvYWRlZC5vbihyZXNvbHZlKSk7XG4gICAgICB3aGlsZSAoXG4gICAgICAgICEoXG4gICAgICAgICAgU3BpY2V0aWZ5LlNuYWNrYmFyLmVucXVldWVDdXN0b21TbmFja2JhciAmJlxuICAgICAgICAgIFNwaWNldGlmeS5TbmFja2Jhci5lbnF1ZXVlU25hY2tiYXIgJiZcbiAgICAgICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUHJvZHVjdFN0YXRlQVBJLnByb2R1Y3RTdGF0ZUFwaVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwKSk7XG4gICAgICB9XG4gICAgfSkoKSxcbiAgICBuZXcgUHJvbWlzZSgoXywgcmVqZWN0KSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChcIkluaXRpYWxpemF0aW9uIHRpbWVvdXRcIiksIHRpbWVvdXQpKSxcbiAgXSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBgJHtlcnJvcn06IEZhaWxlZCB0byBpbml0aWFsaXplIGFmdGVyICR7dGltZW91dCAvIDEwMDB9IHNlY29uZHMuIFNvbWUgZmVhdHVyZXMgbWF5IG5vdCB3b3JrLmAsXG4gICAgKTtcbiAgICBOb3RpZmljYXRpb24oe1xuICAgICAgYXV0b0hpZGVEdXJhdGlvbjogMTAwMDAsXG4gICAgICBpc1dhcm5pbmc6IHRydWUsXG4gICAgICBtZXNzYWdlOiAoXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtlcnJvcn06IEZhaWxlZCB0byBpbml0aWFsaXplIGFmdGVyIHt0aW1lb3V0IC8gMTAwMH0gc2Vjb25kcy4gU29tZSBmZWF0dXJlcyBtYXkgbm90IHdvcmsuXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICksXG4gICAgfSk7XG4gIH0pO1xuXG4gIENvbnNvbGUuTG9nKFwiU3BpY2V0aWZ5IHRoZW1lIGluaXRpYWxpc2luZ1wiKTtcblxuICBTcGljZXRpZnkuTW91c2V0cmFwLmJpbmQoW1wiZXNjYXBlXCJdLCAoKSA9PiB7XG4gICAgU3BpY2V0aWZ5LlBvcHVwTW9kYWwuaGlkZSgpO1xuICB9KTtcblxuICBjb25zdCBNSU5fUEFUQ0hfVkVSU0lPTiA9IDYyO1xuICBjb25zdCBNQVhfUEFUQ0hfVkVSU0lPTiA9IDY0O1xuICBjb25zdCBbbWFqb3IsIG1pbm9yLCBwYXRjaF0gPSBTcGljZXRpZnkuUGxhdGZvcm0udmVyc2lvbi5zcGxpdChcIi5cIikubWFwKE51bWJlcik7XG4gIGNvbnN0IGlzU3VwcG9ydGVkVmVyc2lvbiA9IHBhdGNoID49IE1JTl9QQVRDSF9WRVJTSU9OICYmIHBhdGNoIDw9IE1BWF9QQVRDSF9WRVJTSU9OO1xuXG4gIGlmICghaXNTdXBwb3J0ZWRWZXJzaW9uKSB7XG4gICAgTm90aWZpY2F0aW9uKHtcbiAgICAgIGF1dG9IaWRlRHVyYXRpb246IDUwMDAsXG4gICAgICBpc1dhcm5pbmc6IHRydWUsXG4gICAgICBtZXNzYWdlOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBUaGVtZSBzdXBwb3J0cyBTcG90aWZ5IHZ7bWFqb3J9LnttaW5vcn0ue01JTl9QQVRDSF9WRVJTSU9OfSB0byB2e21ham9yfS57bWlub3J9LlxuICAgICAgICAgICAge01BWF9QQVRDSF9WRVJTSU9OfS4gWW91ciB2ZXJzaW9uOiB7bWFqb3J9LnttaW5vcn0ue3BhdGNofVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC8+XG4gICAgICApLFxuICAgIH0pO1xuICB9XG5cbiAgTW91c2V0cmFwKCk7XG4gIFNldHRpbmdzQnV0dG9uKCk7XG4gIGluaXRpYWxpc2VPcHRpb25zKCk7XG5cbiAgQ29uc29sZS5Mb2coXCJTcGljZXRpZnkgdGhlbWUgaW5pdGlhbGlzZWRcIik7XG59XG5cbnRoZW1lKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLFdBQU8sVUFBVSxVQUFVO0FBQUE7QUFBQTs7O0FDQTNCO0FBQUE7QUFBQSxXQUFPLFVBQVUsVUFBVTtBQUFBO0FBQUE7OztBQ0EzQjtBQUFBO0FBQUEsV0FBTyxVQUFVLFVBQVU7QUFBQTtBQUFBOzs7QUNBM0IsbUJBQTRCO0FBQzVCLHVCQUFxQjs7O0FDa0NmO0FBbkNOLElBQU0sUUFBUTtBQUFBO0FBQUEsRUFFWixZQUNFO0FBQUE7QUFBQSxFQUVGLFVBQ0U7QUFBQTtBQUFBLEVBRUYsUUFDRTtBQUFBO0FBQUEsRUFFRixPQUNFO0FBQUE7QUFBQSxFQUVGLFNBQ0U7QUFBQTtBQUFBLEVBRUYsTUFBTTtBQUFBO0FBQUEsRUFFTixjQUNFO0FBQUE7QUFBQSxFQUVGLFVBQ0U7QUFBQTtBQUFBLEVBRUYsU0FDRTtBQUFBO0FBQUEsRUFFRixXQUNFO0FBQ0o7QUFFQSxJQUFNLGlCQUFpQixDQUFDLE1BQU0sY0FBYyxPQUFPO0FBQ2pELFNBQU8sQ0FBQyxF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TSxxQkFBcUIsU0FBUyxxQkFBcUIsU0FBUztBQUVsRSxNQUFJLENBQUMsb0JBQW9CO0FBQ3ZCLHlCQUFhO0FBQUEsTUFDWCxrQkFBa0I7QUFBQSxNQUNsQixXQUFXO0FBQUEsTUFDWCxTQUNFLCtFQUNFLHlEQUFDLFVBQUs7QUFBQTtBQUFBLFFBQ3FCO0FBQUEsUUFBTTtBQUFBLFFBQUU7QUFBQSxRQUFNO0FBQUEsUUFBRTtBQUFBLFFBQWtCO0FBQUEsUUFBTTtBQUFBLFFBQU07QUFBQSxRQUFFO0FBQUEsUUFBTTtBQUFBLFFBQzlFO0FBQUEsUUFBa0I7QUFBQSxRQUFpQjtBQUFBLFFBQU07QUFBQSxRQUFFO0FBQUEsUUFBTTtBQUFBLFFBQUU7QUFBQSxTQUN0RCxHQUNGO0FBQUEsSUFFSixDQUFDO0FBQUEsRUFDSDtBQUVBLG9CQUFVO0FBQ1YseUJBQWU7QUFDZiw0QkFBa0I7QUFFbEIsa0JBQVEsSUFBSSw2QkFBNkI7QUFDM0M7QUFFQSxNQUFNOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfanN4X3J1bnRpbWUiLCAiUmVhY3RET00iLCAiUmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgIm9wdGlvbnMiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgIm9wdGlvbnMiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAib3B0aW9ucyIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfcmVhY3QiLCAib3B0aW9ucyIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJzY2hlbWVUYWciLCAic2lkZWJhclN0YXRlTGlzdGVuZXIiLCAidm9sdW1lQmFyIiwgImFsbE9wdGlvbnMiLCAiaW1wb3J0X3JlYWN0X2RvbSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0X2RvbSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiQ29uZmlybURpYWxvZyIsICJSZWFjdCIsICJSZWFjdERPTSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgIlJlYWN0IiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImFsbE9wdGlvbnMiLCAiYWxsT3B0aW9ucyIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJSZWFjdERPTSIsICJTZXR0aW5nc0J1dHRvbiIsICJpbXBvcnRfanN4X3J1bnRpbWUiXQp9Cg==
