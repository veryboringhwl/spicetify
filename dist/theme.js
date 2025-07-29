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
  //16px
  questionMark: "M8 13.6875a5.6875 5.6875 90 110-11.375 5.6875 5.6875 90 010 11.375zM1 8a7 7 90 1014 0A7 7 90 001 8zm6.3438-.875V11.5h1.3125V7.125H7.3438zm0-2.6478v1.3125h1.3125V4.4772H7.3438z",
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
  questionMark: ReactComponent(Icons.questionMark, 16),
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

// src/js/debug/TestMenu.jsx
var import_react6 = __toESM(require_react(), 1);

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

// src/js/menu/components/Dropdown.jsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var Dropdown = (0, import_react2.memo)(({ value, options: options2, onChange, disabled }) => {
  const popoverId = (0, import_react2.useId)();
  const popoverRef = (0, import_react2.useRef)(null);
  const anchorName = `--dropdown-anchor-${popoverId.replace(/:/g, "id")}`;
  const handleSelect = (option) => {
    onChange?.(option.value);
    popoverRef.current?.hidePopover();
  };
  const selectedLabel = options2.find((opt) => opt.value === value)?.label || "Select...";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: `dropdown ${disabled ? "dropdown--disabled" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "button",
      {
        className: "dropdown__button",
        popovertarget: popoverId,
        popovertargetaction: "toggle",
        disabled,
        style: { anchorName },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "dropdown__text", children: selectedLabel }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "dropdown__arrow", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icons_default.React.dropdown, { size: 12 }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
        children: options2.map((option) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_react3 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var Input = (0, import_react3.memo)(({ value, onChange, placeholder, disabled }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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

// src/js/menu/components/RadioButton.jsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var RadioButton = (0, import_react4.memo)(({ options: options2, selected, onChange, disabled }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "radio-button", children: options2.map((option) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: "radio-button__item", children: [
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "input",
    {
      className: "radio-button__input",
      type: "radio",
      value: option.value,
      checked: selected === option.value,
      onChange: (e) => onChange(e.target.value),
      disabled
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "radio-button__text", children: option.label })
] }, option.value)) }));
var RadioButton_default = RadioButton;

// src/js/menu/components/Toggle.jsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var Toggle = (0, import_react5.memo)(({ value, onChange, disabled }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { className: "toggle", onClick: onChange, disabled, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "toggle__background", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "span",
  {
    className: `toggle__slider${value ? " toggle__slider--enabled" : ""}${disabled ? " toggle__slider--disabled" : ""}`
  }
) }) }));
var Toggle_default = Toggle;

// src/js/debug/TestMenu.jsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var TestMenu = (0, import_react6.memo)(() => {
  const [lastVersion, setLastVersion] = (0, import_react6.useState)("Loading...");
  const [lastUpdated, setLastUpdated] = (0, import_react6.useState)("Loading...");
  const [toggleValue, setToggleValue] = (0, import_react6.useState)(false);
  const [inputValue, setInputValue] = (0, import_react6.useState)("test");
  const [radioValue, setRadioValue] = (0, import_react6.useState)("option1");
  const [dropdownValue, setDropdownValue] = (0, import_react6.useState)("option1");
  const [sliderValue, setSliderValue] = (0, import_react6.useState)(10);
  const [seekedSliderValue, setSeekedSliderValue] = (0, import_react6.useState)(10);
  (0, import_react6.useEffect)(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/veryboringhwl/spicetify/releases/latest"
        );
        const data = await response.json();
        setLastVersion(data.tag_name);
        const publishDate = new Date(data.published_at);
        const options2 = { year: "numeric", month: "long", day: "numeric" };
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "theme-version", children: Object.entries(Info).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "theme-info-item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "theme-info-key encore-text-body-medium-bold", children: [
        key,
        ":",
        " "
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "theme-info-value", children: value })
    ] }, key)) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "theme-test-menu", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { children: "Component Test Menu" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { children: "Toggle Component" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        Toggle_default,
        {
          value: toggleValue,
          onChange: setToggleValue,
          ariaLabel: "Test Toggle"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
        "Current Toggle Value: ",
        toggleValue.toString()
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { children: "Input Component" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        Input_default,
        {
          value: inputValue,
          onChange: setInputValue,
          placeholder: "Type something..."
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
        "Current Input Value: ",
        inputValue
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { children: "Radio Button Component" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        RadioButton_default,
        {
          name: "test-radio",
          options: [
            { label: "Radio Button Item 1", value: "option1" },
            { label: "Radio Button Item 2", value: "option2" },
            { label: "Radio Button Item 3", value: "option3" }
          ],
          selectedValue: radioValue,
          onChange: setRadioValue
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
        "Current Radio Button Value: ",
        radioValue
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { children: "Dropdown Component" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        Dropdown_default,
        {
          options: [
            { label: "Dropdown Item 1", value: "option1" },
            { label: "Dropdown Item 2", value: "option2" },
            { label: "Dropdown Item 3", value: "option3" }
          ],
          value: dropdownValue,
          onChange: setDropdownValue
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
        "Current Dropdown Value: ",
        dropdownValue
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { children: "Slider Component" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        Slider,
        {
          value: sliderValue,
          min: 10,
          max: 100,
          step: 1,
          onChange: setSliderValue,
          onRelease: () => setSeekedSliderValue(sliderValue)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
        "Current Slider Value (onChange): ",
        sliderValue.toFixed(2),
        " | Seeked Slider Value (onRelease): ",
        seekedSliderValue.toFixed(2)
      ] })
    ] })
  ] });
});
var TestMenu_default = TestMenu;

// src/js/debug/Mousetrap.jsx
var Mousetrap = () => {
  Spicetify.Mousetrap.bind(
    [
      "up up down down left right left right b a",
      "v e r s i o n",
      "s p o t i f y",
      "s p i c e t i f y",
      "d e b u g",
      "t e s t"
    ],
    () => {
      PopupModal_default({
        title: "Theme Version",
        content: TestMenu_default
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
var import_react7 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var ButtonContainer = (0, import_react7.memo)(({ resetSettings, saveSettings }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "button-container", children: [
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "button",
    {
      className: "button-container__button button-container__button--reset",
      onClick: resetSettings,
      children: "Reset"
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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

// src/js/menu/components/OptionRow.jsx
var import_react10 = __toESM(require_react(), 1);

// src/js/components/TippyButton.jsx
var import_react8 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var TippyButton = (0, import_react8.memo)(({ tippy }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Spicetify.ReactComponent.TooltipWrapper, { label: tippy, placement: "top", showDelay: 0, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "info-tippy", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Icons_default.React.questionMark, { size: 20, fill: "var(--spice-subtext)" }) }) });
});
var TippyButton_default = TippyButton;

// src/js/menu/components/PopupButton.jsx
var import_react9 = __toESM(require_react(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var PopupButton = (0, import_react9.memo)(({ name, popupModal }) => {
  if (!popupModal) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "button",
    {
      className: "popup-button",
      onClick: () => PopupModal_default({
        title: name,
        content: popupModal,
        isLarge: false
      }),
      "aria-label": "Open popup",
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icons_default.React.editButton, { size: 16 })
    }
  );
});
var PopupButton_default = PopupButton;

// src/js/menu/components/OptionRow.jsx
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var OptionRow = (0, import_react10.memo)(({ name, desc, tippy, children, popupModal }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "option__content", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "option__desc", children: desc }),
    tippy && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TippyButton_default, { tippy })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "option__control", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PopupButton_default, { name, popupModal }),
    children
  ] })
] }));
var OptionRow_default = OptionRow;

// src/js/menu/components/OptionType.jsx
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var OptionType = (0, import_react11.memo)(({ option, value, onChange, disabled }) => {
  const handleChange = (0, import_react11.useCallback)(
    (ValueFromComponent) => {
      const newValue = option.type === "toggle" ? !value : ValueFromComponent;
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    OptionRow_default,
    {
      name: option.name,
      desc: option.desc,
      tippy: option.tippy,
      popupModal: option.popupModal,
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Component, { ...componentProps })
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
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var AlbumBannerModal = (0, import_react13.memo)(() => {
  const { settings, updateSetting, resetSettings, saveSettings } = useModalSettings_default(albumBannerOptions);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "settings-modal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "settings-modal__options", children: albumBannerOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      OptionType_default,
      {
        option,
        value: settings[option.name],
        onChange: (key, value) => updateSetting(key, value)
      },
      option.name
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "settings-modal__buttons", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ButtonContainer_default, { resetSettings, saveSettings }) })
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
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var WindowsControlModal = (0, import_react14.memo)(() => {
  const { settings, updateSetting, resetSettings, saveSettings } = useModalSettings_default(windowsControlOptions);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "settings-modal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "settings-modal__options", children: windowsControlOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      OptionType_default,
      {
        option,
        value: settings[option.name],
        onChange: (key, value) => updateSetting(key, value)
      },
      option.name
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "settings-modal__buttons", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ButtonContainer_default, { resetSettings, saveSettings }) })
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

// src/js/utils/Notification.jsx
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var Notification = ({
  message = "",
  keyPrefix = "custom-notif",
  autoHideDuration = 3e3,
  backgroundColour = "#fff",
  colour = "#000",
  isWarning = false
} = {}) => {
  const content = isWarning ? /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Icons_default.React.warning, { size: 24 }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: message })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: message });
  const BackgroundColour = isWarning ? "#ff9800" : backgroundColour;
  const Colour = isWarning ? "#fff" : colour;
  try {
    Spicetify.Snackbar.enqueueCustomSnackbar(keyPrefix, {
      keyPrefix,
      autoHideDuration,
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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

// src/js/features/ColourScheme.jsx
var cachedIniContent = null;
var cachedColourSchemes = null;
var ColourScheme = async (scheme) => {
  if (scheme === "default") {
    const schemeTag2 = document.querySelector("style.customColourScheme");
    schemeTag2?.remove();
    return;
  }
  let iniContent = cachedIniContent;
  let colourSchemes = cachedColourSchemes;
  if (!iniContent) {
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
    iniContent = await response.text();
    cachedIniContent = iniContent;
  }
  if (!colourSchemes) {
    colourSchemes = iniContent.split(/[\r\n]+/).reduce((acc, line) => {
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
    cachedColourSchemes = colourSchemes;
  }
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
    Home: { regex: /^\/$/, key: "home-page" },
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
    document.querySelector(".before-scroll-node")?.appendChild(newBanner);
    return newBanner;
  })();
  const updateBanner = () => {
    const imageUrl = Spicetify.Player.data?.item?.metadata?.image_xlarge_url;
    const showBanner = Object.values(channels).some(
      ({ regex, key }) => LocalStorage_default.get(key, false) && regex.test(Spicetify.Platform.History.location.pathname)
    );
    if (imageUrl) {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => document.documentElement.style.setProperty("--image", `url(${imageUrl})`);
    } else {
      document.documentElement.style.setProperty("--image", "none");
    }
    if (showBanner) {
      banner.style.display = "";
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
  Spicetify.Platform.ControlMessageAPI._updateUiClient.updateTitlebarHeight({ height: 40 });
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
  Spicetify.Platform.ControlMessageAPI._updateUiClient.updateTitlebarHeight({ height: 64 });
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
        `<div class="vol-percent" style="display: inline-flex; align-items: center;">
					<input type="text" class="vol-input" 
						style="width: 30px; font-size: 15px; border: none; background: transparent; text-align: right;">
					<span style="font-size: 15px;">%</span>
				</div>`
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
      desc: "Colour Scheme",
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
      desc: "Spotify mode",
      defaultVal: "default",
      tippy: "Only takes effect after a restart",
      options: [
        { value: "default", label: "Default" },
        { value: "developer", label: "Developer" }
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
        document.documentElement.classList.toggle("album-banner-page", value);
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
      desc: "Spotify font",
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
      popupModal: TestMenu_default,
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
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
function ConfirmDialog({
  titleText,
  descriptionText,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onConfirm,
  onClose: onClose2,
  onOpen,
  onOutside,
  confirmLabel,
  allowHTML
}) {
  const ConfirmDialog2 = (0, import_react15.memo)(() => {
    const [state, setState] = (0, import_react15.useState)(true);
    const menu = document.querySelector(".ReactModalPortal:last-of-type");
    (0, import_react15.useEffect)(() => {
      if (state) onOpen?.();
    }, [state, onOpen]);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      Spicetify.ReactComponent.RemoteConfigProvider,
      {
        configuration: Spicetify.Platform.RemoteConfiguration,
        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
              onClose2?.();
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
      }
    );
  });
  import_react_dom2.default.createRoot(document.createElement("div")).render(/* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ConfirmDialog2, {}));
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

// src/js/menu/modalmenu/FontModal.jsx
var import_react16 = __toESM(require_react(), 1);
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var FontModal = (0, import_react16.memo)(() => {
  const { settings, updateSetting, resetSettings, saveSettings } = useModalSettings_default(fontOptions);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "settings-modal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "settings-modal__options", children: fontOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      OptionType_default,
      {
        option,
        value: settings[option.name],
        onChange: (key, value) => updateSetting(key, value)
      },
      option.name
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "settings-modal__buttons", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ButtonContainer_default, { resetSettings, saveSettings }) })
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

// src/js/menu/settingsmenu/SettingsMenu.jsx
var import_react21 = __toESM(require_react(), 1);

// src/js/menu/components/CategoryCarousel.jsx
var import_react17 = __toESM(require_react(), 1);
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var CategoryCarousel = (0, import_react17.memo)(({ categories, selectedCategory, onSelectCategory }) => {
  const carouselRef = (0, import_react17.useRef)(null);
  (0, import_react17.useEffect)(() => {
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
var import_react18 = __toESM(require_react(), 1);
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var allOptions = Object.values(options_default).flat();
var RenderCategory = (0, import_react18.memo)(({ category, categoryOptions, settings, onChange }) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: `option__category option__category--${category.toLowerCase()}`, children: [
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { className: "option__category-title", children: category }),
  categoryOptions.map((option) => {
    const value = settings[option.name];
    const disabled = allOptions.some(
      (o) => o.incompatible?.includes(option.name) && settings[o.name]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_react18.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "option__item option__item--main", "data-name": option.name, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(OptionType_default, { option, value, onChange, disabled }) }),
      value && option.reveal && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "option__item option__item--revealed", "data-name": option.name, children: option.reveal.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
var import_react20 = __toESM(require_react(), 1);
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var PlaylistIcon = () => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { viewBox: "0 0 16 16", width: "50%", height: "50%", fill: "currentColor", style: { opacity: 0.5 }, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z" }) });
var TrackIcon = () => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { viewBox: "0 0 24 24", width: "50%", height: "50%", fill: "currentColor", style: { opacity: 0.5 }, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M12 3v10.55A4.001 4.001 0 1 0 14 17V7h4V3h-6z" }) });
var Navbar = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "navbar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "navbar__item navbar__item--left", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "navbar__item-history", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "navbar__item-history-button", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { viewBox: "0 0 24 24", width: 16, height: 16, fill: "currentcolor", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M10.295 19.715a1 1 0 0 0 1.404-1.424l-5.37-5.292h13.67a1 1 0 0 0 0-2H6.336L11.7 5.714a1 1 0 0 0-1.404-1.424L3.37 11.112a1.25 1.25 0 0 0 0 1.78z" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "navbar__item-history-button", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { viewBox: "0 0 24 24", width: 16, height: 16, fill: "currentcolor", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M13.705 4.284A1 1 0 1 0 12.3 5.708L17.67 11H4a1 1 0 1 0 0 2h13.665L12.3 18.285a1 1 0 0 0 1.403 1.424l6.925-6.822a1.25 1.25 0 0 0 0-1.78z" }) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "navbar__item-button", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { viewBox: "0 0 76.465 68.262", width: 16, height: 16, fill: "currentcolor", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M61.49 55.095a6.5 6.5 0 016.5 6.5 6.5 6.5 0 01-6.5 6.5 6.5 6.5 0 01-6.5-6.501 6.5 6.5 0 016.5-6.5Zm-38.274 0a6.5 6.5 0 016.5 6.5 6.5 6.5 0 01-6.5 6.5 6.5 6.5 0 01-6.5-6.501 6.5 6.5 0 016.5-6.5ZM17.591 10.984l4.064 20.91H61.064l6.393-20.91H17.59ZM.001 0H15.455l.872 4.485H76.242l-10.35 33.91H22.918l1.2 6.172h43.61v6.5H18.76L10.097 6.5H0V0Z" }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "navbar__item navbar__item--center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "navbar__item-button navbar__item-button--active", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { viewBox: "0 0 24 24", width: 16, height: 16, fill: "currentcolor", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "navbar__item-search", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { viewBox: "0 0 24 24", width: 16, height: 16, fill: "currentcolor", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { children: "Search" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "navbar__item navbar__item--right", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "navbar__item-button", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Icons_default.React.settings, { size: 16 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "navbar__item-windows-controls", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "navbar__item-windows-controls-btn", onClick: (e) => onMinimize(id, e), children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { width: "12", height: "12", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("line", { x1: "1", y1: "6", x2: "11", y2: "6", stroke: "currentColor", strokeWidth: ".9" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "navbar__item-windows-controls-btn", onClick: (e) => onMaximize(id, e), children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("svg", { width: "12", height: "12", fill: "none", stroke: "currentColor", strokeWidth: ".9", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("rect", { x: "1.5", y: "3.5", width: "7", height: "7" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("polyline", { points: "3.5,3.5 3.5,1.5 10.5,1.5 10.5,8.5 8.5,8.5" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "navbar__item-windows-controls-btn", onClick: (e) => onClose(id, e), children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { width: "12", height: "12", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M1,1 L11,11 M1,11 L11,1", stroke: "currentColor", strokeWidth: "1.1" }) }) })
      ] })
    ] })
  ] });
};
var SidebarPlaylistItem = ({ name, info }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "playlist-item", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "playlist-item__image", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PlaylistIcon, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "playlist-item__info", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "playlist-item__name", children: name }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "playlist-item__description", children: info })
    ] })
  ] });
};
var Sidebar = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "sidebar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "sidebar__header", children: "Your Library" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "chips", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "chips__item chips__item--active", children: "Playlists" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "chips__item", children: "Artists" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "chips__item", children: "Podcasts" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "sidebar__search", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { viewBox: "0 0 16 16", width: 10, height: 10, fill: "currentcolor", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SidebarPlaylistItem, { name: "Playlist 1", info: "Playlist.Username" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SidebarPlaylistItem, { name: "Playlist 2", info: "Playlist.Username" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SidebarPlaylistItem, { name: "Playlist 3", info: "Playlist.Username" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SidebarPlaylistItem, { name: "Playlist 4", info: "Playlist.Spotify" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SidebarPlaylistItem, { name: "Playlist 5", info: "Playlist.Spotify" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SidebarPlaylistItem, { name: "Spotify", info: "Spotify" })
  ] });
};
var NowPlayingBarButton = ({ path, path2 }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "now-playing-bar__button", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("svg", { viewBox: "0 0 16 16", width: 12, height: 12, fill: "currentcolor", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: path }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: path2 })
  ] }) });
};
var NowPlayingBar = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "now-playing-bar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "now-playing-bar__item now-playing-bar__item--left", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "now-playing-bar__cover-art", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TrackIcon, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "now-playing-bar__info", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "now-playing-bar__info-title", children: "Track Title" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "now-playing-bar__info-artist", children: "Artist Name" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        NowPlayingBarButton,
        {
          path: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "now-playing-bar__item now-playing-bar__item--center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "now-playing-bar__controls", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          NowPlayingBarButton,
          {
            path: "M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z",
            path2: "m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          NowPlayingBarButton,
          {
            path: "M2.0625 15a.75.75 90 101.5 0V3a.75.75 90 10-1.5 0v12ZM15.5625 14.2898c0 1.068-1.209 1.689-2.0775 1.0665L5.6325 9.726a1.3125 1.3125 90 01.0562-2.1713l7.8525-5.037c.8738-.561 2.0212.0668 2.0212 1.1048v10.6673Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "now-playing-bar__button now-playing-bar__button--play", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { viewBox: "0 0 16 16", width: 16, height: 16, fill: "currentcolor", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M3.3333 3.516c0-1.138 1.2173-1.8613 2.2167-1.318l8.2413 4.484c1.044.5687 1.044 2.0673 0 2.6353L5.55 13.8013C4.5507 14.3453 3.3333 13.6213 3.3333 12.484V3.516Z" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          NowPlayingBarButton,
          {
            path: "M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          NowPlayingBarButton,
          {
            path: "M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "now-playing-bar__progress", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "now-playing-bar__progress-time", children: "0:00" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "now-playing-bar__progress-bar" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "now-playing-bar__progress-time", children: "3:30" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "now-playing-bar__item now-playing-bar__item--right", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        NowPlayingBarButton,
        {
          path: "M15 15H1v-1.5h14zm0-4.5H1V9h14zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5m2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2z"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "now-playing-bar__volume", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { viewBox: "0 0 16 16", width: 12, height: 12, fill: "currentcolor", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "now-playing-bar__volume-bar" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        NowPlayingBarButton,
        {
          path: "M0.25 3C0.25 2.0335 1.0335 1.25 2 1.25H5.375V2.75H2C1.86193 2.75 1.75 2.86193 1.75 3V5.42857H0.25V3ZM14 2.75H10.625V1.25H14C14.9665 1.25 15.75 2.0335 15.75 3V5.42857H14.25V3C14.25 2.86193 14.1381 2.75 14 2.75ZM1.75 10.5714V13C1.75 13.1381 1.86193 13.25 2 13.25H5.375V14.75H2C1.0335 14.75 0.25 13.9665 0.25 13V10.5714H1.75ZM14.25 13V10.5714H15.75V13C15.75 13.9665 14.9665 14.75 14 14.75H10.625V13.25H14C14.1381 13.25 14.25 13.1381 14.25 13Z"
        }
      )
    ] })
  ] }) });
};
var MainHomeShortcutItem = ({ name }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "shortcut-item", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "shortcut-item__image", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PlaylistIcon, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "shortcut-item__text", children: name })
  ] });
};
var MainHomeCarouselItem = ({ name }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "carousel-item", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "carousel-item__image", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TrackIcon, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "carousel-item__text", children: name })
  ] });
};
var MainHome = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "main-view main-home", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "main-home__background" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "chips", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "chips__item chips__item--active", children: "Home" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "chips__item", children: "Music" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "chips__item", children: "Podcasts" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "chips__item", children: "Audiobooks" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "main-home__shortcuts", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeShortcutItem, { name: "Playlist 1" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeShortcutItem, { name: "Playlist 2" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeShortcutItem, { name: "Playlist 3" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeShortcutItem, { name: "Playlist 4" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeShortcutItem, { name: "Playlist 5" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeShortcutItem, { name: "Playlist 6" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "main-home__header", children: "Made for you" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "main-home__carousel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Daily Mix 1" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Discover Weekly" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Release Radar" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "On Repeat" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Repeat Rewind" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Create a Blend" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "main-home__header", children: "Recently Played" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "main-home__carousel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 1" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 2" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 3" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 4" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 5" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 6" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "main-home__header", children: "Jump back in" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "main-home__carousel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 1" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 2" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 3" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 4" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 5" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 6" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "main-home__header", children: "Jump back in" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "main-home__carousel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 1" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 2" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 3" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 4" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 5" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHomeCarouselItem, { name: "Playlist 6" })
    ] })
  ] });
};
var PlaylistTrack = ({ num, title, artist, album, time }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "playlist-track", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "playlist-track__number", children: num }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "playlist-track__info", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "playlist-track__image", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TrackIcon, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "playlist-track__details", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "playlist-track__title", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "playlist-track__artist", children: artist })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "playlist-track__album", children: album }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "playlist-track__time", children: time })
  ] });
};
var MainPlaylist = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "main-view main-playlist", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "main-playlist__background" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "main-playlist__header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "main-playlist__image", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PlaylistIcon, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "main-playlist__info", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "main-playlist__type", children: "Playlist" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "main-playlist__title", children: "My Playlist" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "main-playlist__owner", children: "Username" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "main-playlist__stats", children: "50 songs, 3 hr 20 min" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "main-playlist__controls", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "main-playlist__play-button", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { viewBox: "0 0 24 24", width: 16, height: 16, fill: "currentcolor", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "main-playlist__like-button", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Icons_default.React.settings, { size: 12 }),
        " "
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "main-playlist__more-button", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Icons_default.React.settings, { size: 12 }),
        " "
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "main-playlist__tracklist", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "playlist-track playlist-track--header", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "playlist-track__number", children: "#" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "playlist-track__info", children: "Title" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "playlist-track__album", children: "Album" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "playlist-track__time", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("svg", { viewBox: "0 0 16 16", width: 12, height: 12, fill: "currentcolor", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z" })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PlaylistTrack, { num: 1, title: "Track 1", artist: "Artist 1", album: "Album 1", time: "3:45" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PlaylistTrack, { num: 2, title: "Track 2", artist: "Artist 1", album: "Album 1", time: "4:10" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PlaylistTrack, { num: 3, title: "Track 3", artist: "Artist 2", album: "Album 2", time: "2:59" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PlaylistTrack, { num: 4, title: "Track 4", artist: "Artist 2", album: "Album 2", time: "5:02" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PlaylistTrack, { num: 5, title: "Track 5", artist: "Artist 3", album: "Album 3", time: "3:15" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PlaylistTrack, { num: 6, title: "Track 6", artist: "Artist 3", album: "Album 3", time: "4:20" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PlaylistTrack, { num: 7, title: "Track 7", artist: "Artist 3", album: "Album 3", time: "2:45" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PlaylistTrack, { num: 8, title: "Track 8", artist: "Artist 4", album: "Album 4", time: "3:30" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PlaylistTrack, { num: 9, title: "Track 9", artist: "Artist 5", album: "Album 5", time: "3:15" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PlaylistTrack, { num: 10, title: "Track 10", artist: "Artist 6", album: "Album 6", time: "3:15" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PlaylistTrack, { num: 11, title: "Track 11", artist: "Artist 6", album: "Album 6", time: "2:45" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PlaylistTrack, { num: 12, title: "Track 12", artist: "Artist 7", album: "Album 7", time: "3:30" })
    ] })
  ] });
};
var Preview = ({ settings }) => {
  const [selectedRadio, setSelectedRadio] = (0, import_react20.useState)("home");
  console.log("Settings:", settings);
  const dataParts = [];
  for (const key in settings) {
    if (key === "colour-scheme" || key === "spotify-font" || key === "spotify-mode" || key === "volume-percentage" || key === "test-toggle" || key === "test-incompatible-toggle" || key === "test-incompatible-input" || key === "test-incompatible-dropdown" || key === "test-input" || key === "test-dropdown" || key === "test-reveal" || key === "revealed-toggle" || key === "revealed-input" || key === "revealed-dropdown" || key === "test-radiobutton")
      continue;
    const value = settings[key];
    if (typeof value === "boolean" && value) {
      dataParts.push(key);
    } else if (value !== null && value !== void 0 && typeof value !== "boolean") {
      dataParts.push(`${key}-${value}`);
    }
  }
  const dataString = dataParts.join(" ");
  const colourScheme = settings["colour-scheme"];
  const spotifyFont = settings["spotify-font"];
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "preview__header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h2", { children: "Preview" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        RadioButton_default,
        {
          options: [
            { label: "Home", value: "home" },
            { label: "Playlist", value: "playlist" }
          ],
          name: "debugRadio",
          selected: selectedRadio,
          onChange: setSelectedRadio
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      "div",
      {
        className: "preview__spotify-app",
        "colour-scheme": colourScheme,
        data: dataString.trim(),
        style: { "--preview-font-family": spotifyFont },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Navbar, {}),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Sidebar, {}),
          selectedRadio === "playlist" ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainPlaylist, {}) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MainHome, {}),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(NowPlayingBar, {})
        ]
      }
    )
  ] });
};
var Preview_default = Preview;

// src/js/menu/settingsmenu/SettingsMenu.jsx
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var SettingsMenu = (0, import_react21.memo)(() => {
  const { settings, handleSettingChange, resetSettings, saveSettings } = useSettings_default();
  const allCategories = ["All", ...Object.keys(options_default)];
  const [selectedCategory, setSelectedCategory] = (0, import_react21.useState)("All");
  const handleSelectCategory = (0, import_react21.useCallback)((category) => {
    setSelectedCategory(category);
  }, []);
  const filteredOptions = (0, import_react21.useMemo)(() => {
    if (selectedCategory === "All") {
      return Object.entries(options_default);
    }
    return Object.entries(options_default).filter(([category]) => category === selectedCategory);
  }, [selectedCategory]);
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "settings-menu", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "settings-menu__carousel", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      CategoryCarousel_default,
      {
        categories: allCategories,
        selectedCategory,
        onSelectCategory: handleSelectCategory
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "settings-menu__options", children: filteredOptions.map(([category, categoryOptions]) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      RenderCategory_default,
      {
        category,
        categoryOptions,
        settings,
        onChange: handleSettingChange
      },
      category
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "settings-menu__preview", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Preview_default, { settings }) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "settings-menu__buttons", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ButtonContainer_default, { resetSettings, saveSettings }) })
  ] });
});
var SettingsMenu_default = SettingsMenu;

// src/js/menu/settingsmenu/SettingsButton.jsx
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
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
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Spicetify.ReactComponent.Menu, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          Spicetify.ReactComponent.MenuItem,
          {
            onClick: () => {
              hideMenu();
              resetOptions_default(() => {
              });
            },
            leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
              "svg",
              {
                viewBox: "0 0 16 16",
                width: "16",
                height: "16",
                fill: "currentColor",
                dangerouslySetInnerHTML: { __html: Spicetify.SVGIcons.repeat }
              }
            ),
            children: "Reset theme"
          },
          "reset-theme"
        ),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          Spicetify.ReactComponent.MenuItem,
          {
            onClick: () => {
              Window_default.Reload();
              hideMenu();
            },
            leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
              "svg",
              {
                viewBox: "0 0 16 16",
                width: "16",
                height: "16",
                fill: "currentColor",
                dangerouslySetInnerHTML: { __html: Spicetify.SVGIcons.repeat }
              }
            ),
            children: "Reload Spotify"
          },
          "reload-spotify"
        ),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          Spicetify.ReactComponent.MenuItem,
          {
            onClick: () => {
              Window_default.Restart();
              hideMenu();
            },
            leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
            leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          Spicetify.ReactComponent.MenuItem,
          {
            onClick: () => {
              PopupModal_default({ title: "Theme Settings", content: SettingsMenu_default });
              hideMenu();
            },
            leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          Spicetify.ReactComponent.MenuItem,
          {
            onClick: () => {
              PopupModal_default({ title: "Test Menu", content: TestMenu_default });
              hideMenu();
            },
            leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
              "svg",
              {
                viewBox: "0 0 16 16",
                width: "16",
                height: "16",
                fill: "currentColor",
                dangerouslySetInnerHTML: { __html: Spicetify.SVGIcons.menu }
              }
            ),
            children: "Test Menu"
          },
          "test-menu"
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
        buttons: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Spicetify.ReactComponent.TooltipWrapper, { label: "GitHub", placement: "top", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          "button",
          {
            className: "modal__button modal__button--github",
            onClick: () => window.open("https://github.com/veryboringhwl/spicetify"),
            children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Icons_default.React.github, { size: 18 })
          }
        ) }),
        icon: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Icons_default.React.settings, { size: 30 })
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
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
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
      message: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("span", { children: [
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
  const MIN_PATCH_VERSION = 66;
  const MAX_PATCH_VERSION = 67;
  const [major, minor, patch] = Spicetify.Platform.version.split(".").map(Number);
  const isSupportedVersion = patch >= MIN_PATCH_VERSION && patch <= MAX_PATCH_VERSION;
  if (!isSupportedVersion) {
    Notification_default({
      autoHideDuration: 5e3,
      isWarning: true,
      message: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_jsx_runtime23.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("span", { children: [
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZXh0ZXJuYWwtZ2xvYmFsLXBsdWdpbjpyZWFjdCIsICJleHRlcm5hbC1nbG9iYWwtcGx1Z2luOnJlYWN0LWRvbSIsICJleHRlcm5hbC1nbG9iYWwtcGx1Z2luOnJlYWN0L2pzeC1ydW50aW1lIiwgIi4uL3NyYy9qcy9jb21wb25lbnRzL1BvcHVwTW9kYWwuanN4IiwgIi4uL3NyYy9qcy9pY29ucy9JY29ucy5qc3giLCAiLi4vc3JjL2pzL2RlYnVnL1Rlc3RNZW51LmpzeCIsICIuLi9zcmMvanMvdXRpbHMvQ29uc29sZS5qc3giLCAiLi4vc3JjL2pzL21lbnUvY29tcG9uZW50cy9Ecm9wZG93bi5qc3giLCAiLi4vc3JjL2pzL21lbnUvY29tcG9uZW50cy9JbnB1dC5qc3giLCAiLi4vc3JjL2pzL21lbnUvY29tcG9uZW50cy9SYWRpb0J1dHRvbi5qc3giLCAiLi4vc3JjL2pzL21lbnUvY29tcG9uZW50cy9Ub2dnbGUuanN4IiwgIi4uL3NyYy9qcy9kZWJ1Zy9Nb3VzZXRyYXAuanN4IiwgIi4uL3NyYy9qcy91dGlscy9Mb2NhbFN0b3JhZ2UuanN4IiwgIi4uL3NyYy9qcy9tZW51L21vZGFsbWVudS9BbGJ1bUJhbm5lck1vZGFsLmpzeCIsICIuLi9zcmMvanMvbWVudS9jb21wb25lbnRzL0J1dHRvbkNvbnRhaW5lci5qc3giLCAiLi4vc3JjL2pzL21lbnUvY29tcG9uZW50cy9PcHRpb25UeXBlLmpzeCIsICIuLi9zcmMvanMvbWVudS9jb21wb25lbnRzL09wdGlvblJvdy5qc3giLCAiLi4vc3JjL2pzL2NvbXBvbmVudHMvVGlwcHlCdXR0b24uanN4IiwgIi4uL3NyYy9qcy9tZW51L2NvbXBvbmVudHMvUG9wdXBCdXR0b24uanN4IiwgIi4uL3NyYy9qcy9tZW51L21vZGFsbWVudS91c2VNb2RhbFNldHRpbmdzLmpzeCIsICIuLi9zcmMvanMvbWVudS9oZWxwZXJzL2dldEluaXRpYWxPcHRpb25zLmpzeCIsICIuLi9zcmMvanMvbWVudS9tb2RhbG1lbnUvV2luZG93c0NvbnRyb2xNb2RhbC5qc3giLCAiLi4vc3JjL2pzL3V0aWxzL05vdGlmaWNhdGlvbi5qc3giLCAiLi4vc3JjL2pzL2ZlYXR1cmVzL0NvbG91clNjaGVtZS5qc3giLCAiLi4vc3JjL2pzL2ZlYXR1cmVzL0NvdmVyQXJ0QmFubmVyLmpzeCIsICIuLi9zcmMvanMvZmVhdHVyZXMvU3BvdGlmeU1vZGUuanN4IiwgIi4uL3NyYy9qcy91dGlscy93YWl0Rm9yRWxlbWVudHMuanN4IiwgIi4uL3NyYy9qcy9mZWF0dXJlcy9Ub2dnbGVBcHBsZU11c2ljLmpzeCIsICIuLi9zcmMvanMvZmVhdHVyZXMvVG9nZ2xlTGliWFVJLmpzeCIsICIuLi9zcmMvanMvZmVhdHVyZXMvVm9sUGVyY2VudC5qc3giLCAiLi4vc3JjL2pzL21lbnUvc2V0dGluZ3NtZW51L29wdGlvbnMuanN4IiwgIi4uL3NyYy9qcy9tZW51L2hlbHBlcnMvYXBwbHlPcHRpb25zLmpzeCIsICIuLi9zcmMvanMvbWVudS9oZWxwZXJzL2luaXRpYWxpc2VPcHRpb25zLmpzeCIsICIuLi9zcmMvanMvbWVudS9zZXR0aW5nc21lbnUvU2V0dGluZ3NCdXR0b24uanN4IiwgIi4uL3NyYy9qcy9jb21wb25lbnRzL0NvbmZpcm1EaWFsb2cuanN4IiwgIi4uL3NyYy9qcy91dGlscy9XaW5kb3cuanN4IiwgIi4uL3NyYy9qcy9tZW51L21vZGFsbWVudS9Gb250TW9kYWwuanN4IiwgIi4uL3NyYy9qcy9tZW51L2hlbHBlcnMvcmVzZXRPcHRpb25zLmpzeCIsICIuLi9zcmMvanMvbWVudS9zZXR0aW5nc21lbnUvU2V0dGluZ3NNZW51LmpzeCIsICIuLi9zcmMvanMvbWVudS9jb21wb25lbnRzL0NhdGVnb3J5Q2Fyb3VzZWwuanN4IiwgIi4uL3NyYy9qcy9tZW51L2NvbXBvbmVudHMvUmVuZGVyQ2F0ZWdvcnkuanN4IiwgIi4uL3NyYy9qcy9tZW51L2hvb2tzL3VzZVNldHRpbmdzLmpzeCIsICIuLi9zcmMvanMvbWVudS9oZWxwZXJzL3NhdmVPcHRpb25zLmpzeCIsICIuLi9zcmMvanMvbWVudS9zZXR0aW5nc21lbnUvUHJldmlldy5qc3giLCAiLi4vc3JjL2pzL2FwcC5qc3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIm1vZHVsZS5leHBvcnRzID0gU3BpY2V0aWZ5LlJlYWN0IiwgIm1vZHVsZS5leHBvcnRzID0gU3BpY2V0aWZ5LlJlYWN0RE9NIiwgIm1vZHVsZS5leHBvcnRzID0gU3BpY2V0aWZ5LlJlYWN0SlNYIiwgImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEljb25zIGZyb20gXCIuLi9pY29ucy9JY29uc1wiO1xuXG5sZXQgbW9kYWxDb250YWluZXIgPSBudWxsO1xubGV0IG1vZGFsUm9vdCA9IG51bGw7XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gIGlmIChtb2RhbFJvb3QgJiYgbW9kYWxDb250YWluZXIpIHtcbiAgICBtb2RhbFJvb3QudW5tb3VudCgpO1xuICAgIG1vZGFsQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NLZXkpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICBtb2RhbENvbnRhaW5lciA9IG51bGw7XG4gICAgbW9kYWxSb290ID0gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgaGFuZGxlRXNjS2V5ID0gKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsLW92ZXJsYXlcIikpIHtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH1cbn07XG5cbmNvbnN0IFBvcHVwTW9kYWwgPSAoeyB0aXRsZSA9IFwiXCIsIGNvbnRlbnQsIGlzTGFyZ2UgPSB0cnVlLCBidXR0b25zID0gZmFsc2UsIGljb24gPSBcIlwiIH0gPSB7fSkgPT4ge1xuICBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdXAtbW9kYWxcIik7XG4gIGlmICghbW9kYWxDb250YWluZXIpIHtcbiAgICBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwb3B1cC1tb2RhbFwiKTtcbiAgICBtb2RhbENvbnRhaW5lci5pZCA9IFwicG9wdXAtbW9kYWxcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKTtcbiAgfVxuXG4gIG1vZGFsUm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QobW9kYWxDb250YWluZXIpO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NLZXkpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG5cbiAgY29uc3QgTW9kYWxDb21wb25lbnQgPSBtZW1vKCgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb2RhbF9fY29udGFpbmVyJHtpc0xhcmdlID8gXCIgbW9kYWxfX2NvbnRhaW5lci0tbGFyZ2VcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX190aXRsZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19pY29uXCI+e2ljb259PC9kaXY+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtb2RhbF9fdGl0bGVcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fYnV0dG9uQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIHtidXR0b25zfVxuICAgICAgICAgICAgICA8U3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlRvb2x0aXBXcmFwcGVyIGxhYmVsPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsX19idXR0b24gbW9kYWxfX2J1dHRvbi0tY2xvc2VcIiBvbkNsaWNrPXsoKSA9PiBjbG9zZU1vZGFsKCl9PlxuICAgICAgICAgICAgICAgICAgPEljb25zLlJlYWN0LmNsb3NlIHNpemU9ezE4fSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L1NwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIHtSZWFjdC5pc1ZhbGlkRWxlbWVudChjb250ZW50KSA/IGNvbnRlbnQgOiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbnRlbnQpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApKTtcblxuICBtb2RhbFJvb3QucmVuZGVyKDxNb2RhbENvbXBvbmVudCAvPik7XG59O1xuXG5Qb3B1cE1vZGFsLmhpZGUgPSBjbG9zZU1vZGFsO1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1cE1vZGFsO1xuIiwgImNvbnN0IEljb25zID0ge1xuICAvLzI0cHhcbiAgZWRpdEJ1dHRvbjpcbiAgICBcIk0xNy4zMTggMS45NzVhMy4zMjkgMy4zMjkgMCAxMTQuNzA3IDQuNzA3TDguNDUxIDIwLjI1NmMtLjQ5LjQ5LTEuMDgyLjg2Ny0xLjczNSAxLjEwM0wyLjM0IDIyLjk0YTEgMSAwIDAxLTEuMjgtMS4yOGwxLjU4MS00LjM3NmE0LjcyNiA0LjcyNiAwIDAxMS4xMDMtMS43MzVMMTcuMzE4IDEuOTc1em0zLjI5MyAxLjQxNGExLjMyOSAxLjMyOSAwIDAwLTEuODggMEw1LjE1OSAxNi45NjNjLS4yODMuMjgzLS41LjYyNC0uNjM2IDFsLS44NTcgMi4zNzIgMi4zNzEtLjg1N2EyLjcyNiAyLjcyNiAwIDAwMS4wMDEtLjYzNkwyMC42MTEgNS4yNjhhMS4zMjkgMS4zMjkgMCAwMDAtMS44Nzl6XCIsXG4gIC8vMjRweFxuICBzZXR0aW5nczpcbiAgICBcIk03Ljk2IDUuMzNhMi42NyAyLjY3IDkwIDEwMCA1LjM0IDIuNjcgMi42NyA5MCAwMDAtNS4zNFpNNi42NyA4QTEuMzMgMS4zMyA5MCAxMTkuMzMgOCAxLjMzIDEuMzMgOTAgMDE2LjY3IDhabTQuODItNC44MWEuOTUuOTQgOTAgMDEtMS4xLS43NUwxMC4wNS41NUEuNDcuNDcgOTAgMDA5LjY4LjE3IDguMSA4LjEgOTAgMDA2LjMyLjE3LjQ3LjQ3IDkwIDAwNS45Ni41NUw1LjYxIDIuNDRhLjk1Ljk1IDkwIDAxLTEuMjUuNzFMMi41NSAyLjUxYS40Ny40NyA5MCAwMC0uNTEuMTNDMS4yOCAzLjQ3LjcxIDQuNDYuMzYgNS41M2EuNDcuNDcgOTAgMDAuMTQuNTFMMS45NyA3LjI4YS45NC45NCA5MCAwMTAgMS40M0wuNSA5Ljk1YS40Ny40NyA5MCAwMC0uMTQuNTEgNy45OCA3Ljk4IDkwIDAwMS42OCAyLjkuNDcuNDcgOTAgMDAuNTEuMTNsMS44MS0uNjVhLjk0Ljk0IDkwIDAxMS4yNS43MmwuMzQgMS44OWMuMDQuMTguMTguMzMuMzcuMzdhOC4xIDguMSA5MCAwMDMuMzYgMCAuNDcuNDcgOTAgMDAuMzctLjM3bC4zNC0xLjg5YS45NS45NSA5MCAwMTEuMjUtLjcybDEuODEuNjVjLjE4LjA2LjM4LjAxLjUxLS4xMy43Ni0uODQgMS4zNC0xLjgyIDEuNjgtMi45YS40Ny40NyA5MCAwMC0uMTQtLjVMMTQuMDMgOC43MmEuOTQuOTQgOTAgMDEwLTEuNDRMMTUuNSA2LjA0YS40Ny40NyA5MCAwMC4xNC0uNSA3Ljk4IDcuOTggOTAgMDAtMS42OC0yLjkuNDcuNDcgOTAgMDAtLjUxLS4xM2wtMS44MS42NWEuOTUuOTUgOTAgMDEtLjE1LjA0Wm0tOC44Mi43OCAxLjI1LjQ0YTIuMjggMi4yOCA5MCAwMDMtMS43M2wuMjQtMS4zYTYuODEgNi44MSA5MCAwMTEuNjggMGwuMjQgMS4zYTIuMjggMi4yOCA5MCAwMDMuMDEgMS43M2wxLjI0LS40NGMuMzQuNDQuNjMuOTMuODQgMS40NGwtMSAuODVhMi4yNyAyLjI3IDkwIDAwMCAzLjQ4bDEgLjg1YTYuNjUgNi42NSA5MCAwMS0uODQgMS40NGwtMS4yNC0uNDRBMi4yOCAyLjI4IDkwIDAwOS4wOCAxMy4zMmwtLjI0IDEuMjlhNi44IDYuOCA5MCAwMS0xLjY5IDBsLS4yMy0xLjI5QTIuMjggMi4yOCA5MCAwMDMuOTEgMTEuNTlsLTEuMjQuNDRhNi42NSA2LjY1IDkwIDAxLS44NC0xLjQ0bDEtLjg2YTIuMjcgMi4yNyA5MCAwMDAtMy40N2wtMS0uODVjLjIxLS41MS41LTEgLjg0LTEuNDRaXCIsXG4gIC8vMjRweFxuICBnaXRodWI6XG4gICAgXCJNMTIuMjEzNSAwQzE4Ljk0NyAwIDI0LjQyNjcgNS41IDI0LjQwNjYgMTIuMzA0MWMwIDUuNDM5MS0zLjQ5ODMgMTAuMDQyOC04LjM1MTMgMTEuNjcyOC0uNjA2NS4xMjIzLS44MjktLjI2NS0uODI5LS41OTEgMC0uNDA3Mi4wMi0xLjczMTUuMDItMy4zODE1IDAtMS4xNjEzLS4zODQtMS44OTQ1LS44MjktMi4yODE1IDIuNzMtLjMwNTggNS41ODEtMS4zNDQ1IDUuNTgxLTYuMDcwOCAwLTEuMzQ0NS0uNDY1LTIuNDQ0NS0xLjI1MzctMy4zLjEyMTMtLjMwNTUuNTQ2My0xLjU2ODgtLjEyMTItMy4yNTk1IDAgMC0xLjAzMTItLjMyNi0zLjM1NjcgMS4yNjMtLjk3MDctLjI2NDgtMi4wMjE5LS40MDc1LTMuMDUzMi0uNDA3NUExMS43NDI1IDExLjc0MjUgOTAgMDA5LjE2IDYuMzU1NmMtMi4zMjUyLTEuNTg5LTMuMzU2NS0xLjI2My0zLjM1NjUtMS4yNjMtLjY2NzUgMS42OTA3LS4yNDI3IDIuOTU0LS4xMjE1IDMuMjU5NS0uNzY4NS44NTU1LTEuMjUzNSAxLjk1NTUtMS4yNTM1IDMuMyAwIDQuNzI2MyAyLjg1MDkgNS43ODU1IDUuNTYwNyA2LjA3MDgtLjM0MzcuMzA1NS0uNjY3NS44NTU1LS43Njg1IDEuNjUtLjcwNzcuMzI2LTIuNDY3Ljg1NTUtMy41NTg3LTEuMDE4NSAwIDAtLjY0NzItMS4xODE1LTEuODgwNy0xLjI2MyAwIDAtMS4xOTMgMC0uMDgxLjc1MzggMCAwIC44MDkuMzY2NSAxLjM1NSAxLjc5MjUgMCAwIC43MDc1IDIuMjAwMiA0LjEwNSAxLjQ2NjcgMCAxLjAxODguMDIgMS45OTY1LjAyIDIuMjgxOCAwIC4zMjU4LS4yMjIyLjcxMy0uODI5LjU5MDVDMy40OTgzIDIyLjM0NzIgMCAxNy43NDMyIDAgMTIuMzA0MiAwIDUuNSA1LjQ1OTcgMCAxMi4yMTM1IDBaXCIsXG4gIC8vMzJweFxuICBjbG9zZTpcbiAgICBcIk0zMS4wOTggMjkuNzk0IDE2Ljk1NSAxNS42NSAzMS4wOTcgMS41MSAyOS42ODMuMDkzIDE1LjU0IDE0LjIzNyAxLjQuMDk0LS4wMTYgMS41MDggMTQuMTI2IDE1LjY1LS4wMTYgMjkuNzk1bDEuNDE0IDEuNDE0TDE1LjU0IDE3LjA2NWwxNC4xNDQgMTQuMTQzXCIsXG4gIC8vMjRweFxuICB3YXJuaW5nOlxuICAgIFwiTTEzIDE0VjlIMTF2NVptMCAySDExdjJoMlptOC44ODQgMy41QTEgMSAwIDAxMjEgMjFIM2ExIDEgMCAwMS0uODg0LTEuNDY4bDktMTdjLjM0Ni0uNjU0IDEuNDIyLS42NTQgMS43NjggMFpcIixcbiAgLy8xNnB4XG4gIG1vcmU6IFwiTTMgOEExLjUgMS41IDAgMTEwIDhhMS41IDEuNSAwIDAxMyAwem02LjUgMGExLjUgMS41IDAgMTEtMyAwIDEuNSAxLjUgMCAwMTMgMHpNMTYgOGExLjUgMS41IDAgMTEtMyAwIDEuNSAxLjUgMCAwMTMgMHpcIixcbiAgLy8xNnB4XG4gIHF1ZXN0aW9uTWFyazpcbiAgICBcIk04IDEzLjY4NzVhNS42ODc1IDUuNjg3NSA5MCAxMTAtMTEuMzc1IDUuNjg3NSA1LjY4NzUgOTAgMDEwIDExLjM3NXpNMSA4YTcgNyA5MCAxMDE0IDBBNyA3IDkwIDAwMSA4em02LjM0MzgtLjg3NVYxMS41aDEuMzEyNVY3LjEyNUg3LjM0Mzh6bTAtMi42NDc4djEuMzEyNWgxLjMxMjVWNC40NzcySDcuMzQzOHpcIixcbiAgLy8yNHB4XG4gIGRyb3Bkb3duOlxuICAgIFwiTTIwLjQ2MTQgNi4zNDY5YTEuNTA2IDEuNTA2IDkwIDAwLTIuMTEyNS4xOTE5TDEyIDE0LjE1NjQgNS42NTEgNi41Mzg5YTEuNDk5NyAxLjQ5OTcgOTAgMTAtMi4zMDI4IDEuOTIybDcuNTAwNCA5LjAwMDRhMS40OTkyIDEuNDk5MiA5MCAwMDIuMzAyOCAwbDcuNTAwNC05LjAwMDVhMS41MDE5IDEuNTAxOSA5MCAwMC0uMTkwNC0yLjExMzlaXCIsXG4gIC8vMjRweFxuICBwYWxldHRlOlxuICAgIFwiTTEyIDJjNS40NjEgMCA5Ljk2NSA0LjAxMiA5Ljk5MiA4Ljg0IDAgMy4wNTEtMi41MDQgNS41NTQtNS41NTUgNS41NTRIMTQuNDQxYTEuNjQgMS42NCAwIDAwLTEuNjY4IDEuNjY4YzAgLjQ3My4xNDguODM2LjQzOCAxLjEyNS4yNTcuMjkuNDM3LjY4OC40MzcgMS4xMjVDMTMuNjQ4IDIxLjI1NCAxMi45MjYgMjIgMTIgMjIgNi41IDIyIDIgMTcuNSAyIDEyUzYuNSAyIDEyIDJaXCIsXG4gIC8vMTZweFxuICBkdXBsaWNhdGU6XG4gICAgXCJNMTUgMy41YzAtLjUtLjUtMS0xLTFIMTFWMWMwLS41LS41LTEtMS0xSDJDMS41IDAgMSAuNSAxIDFWMTEuNWMwIC41LjUgMSAxIDFINC41VjE1YzAgLjUuNSAxIDEgMUgxNGMuNSAwIDEtLjUgMS0xWk0yLjUgMmMwLS4yNS4yNS0uNS41LS41SDljLjI1IDAgLjUuMjUuNS41djguNWMwIC4yNS0uMjUuNS0uNS41SDNjLS4yNSAwLS41LS4yNS0uNS0uNVptNCAxMi41Yy0uMjUgMC0uNS0uMjUtLjUtLjVWMTIuNWg0Yy41IDAgMS0uNSAxLTFWNGgyYy4yNSAwIC41LjI1LjUuNVYxNGMwIC4yNS0uMjUuNS0uNS41WlwiLFxufTtcblxuY29uc3QgUmVhY3RDb21wb25lbnQgPSAoaWNvbiwgZGVmYXVsdFNpemUgPSAxNikgPT4ge1xuICByZXR1cm4gKHsgc2l6ZSA9IGRlZmF1bHRTaXplLCBmaWxsID0gXCJjdXJyZW50Q29sb3JcIiB9KSA9PiAoXG4gICAgPHN2ZyB2aWV3Qm94PXtgMCAwICR7ZGVmYXVsdFNpemV9ICR7ZGVmYXVsdFNpemV9YH0gd2lkdGg9e3NpemV9IGhlaWdodD17c2l6ZX0gZmlsbD17ZmlsbH0+XG4gICAgICA8cGF0aCBkPXtpY29ufSAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuSWNvbnMuUmVhY3QgPSB7XG4gIGVkaXRCdXR0b246IFJlYWN0Q29tcG9uZW50KEljb25zLmVkaXRCdXR0b24sIDI0KSxcbiAgc2V0dGluZ3M6IFJlYWN0Q29tcG9uZW50KEljb25zLnNldHRpbmdzLCAxNiksXG4gIGdpdGh1YjogUmVhY3RDb21wb25lbnQoSWNvbnMuZ2l0aHViLCAyNCksXG4gIGNsb3NlOiBSZWFjdENvbXBvbmVudChJY29ucy5jbG9zZSwgMzIpLFxuICB3YXJuaW5nOiBSZWFjdENvbXBvbmVudChJY29ucy53YXJuaW5nLCAyNCksXG4gIG1vcmU6IFJlYWN0Q29tcG9uZW50KEljb25zLm1vcmUsIDE2KSxcbiAgcXVlc3Rpb25NYXJrOiBSZWFjdENvbXBvbmVudChJY29ucy5xdWVzdGlvbk1hcmssIDE2KSxcbiAgZHJvcGRvd246IFJlYWN0Q29tcG9uZW50KEljb25zLmRyb3Bkb3duLCAyNCksXG4gIHBhbGV0dGU6IFJlYWN0Q29tcG9uZW50KEljb25zLnBhbGV0dGUsIDI0KSxcbiAgZHVwbGljYXRlOiBSZWFjdENvbXBvbmVudChJY29ucy5kdXBsaWNhdGUsIDE2KSxcbn07XG5cbkljb25zLkhUTUwgPSB7XG4gIGVkaXRCdXR0b246IGA8cGF0aCBkPVwiJHtJY29ucy5lZGl0QnV0dG9ufVwiLz5gLFxuICBzZXR0aW5nczogYDxwYXRoIGQ9XCIke0ljb25zLnNldHRpbmdzfVwiLz5gLFxuICBnaXRodWI6IGA8cGF0aCBkPVwiJHtJY29ucy5naXRodWJ9XCIvPmAsXG4gIGNsb3NlOiBgPHBhdGggZD1cIiR7SWNvbnMuY2xvc2V9XCIvPmAsXG4gIHdhcm5pbmc6IGA8cGF0aCBkPVwiJHtJY29ucy53YXJuaW5nfVwiLz5gLFxuICBtb3JlOiBgPHBhdGggZD1cIiR7SWNvbnMubW9yZX1cIi8+YCxcbiAgcXVlc3Rpb25NYXJrOiBgPHBhdGggZD1cIiR7SWNvbnMucXVlc3Rpb25NYXJrfVwiLz5gLFxuICBkcm9wZG93bjogYDxwYXRoIGQ9XCIke0ljb25zLmRyb3Bkb3dufVwiLz5gLFxuICBwYWxldHRlOiBgPHBhdGggZD1cIiR7SWNvbnMucGFsZXR0ZX1cIi8+YCxcbiAgZHVwbGljYXRlOiBgPHBhdGggZD1cIiR7SWNvbnMuZHVwbGljYXRlfVwiLz5gLFxufTtcblxuLy8gVXNhZ2U6XG4vLyA8c3ZnXG4vLyAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuLy8gICB3aWR0aD1cIjE2XCJcbi8vICAgaGVpZ2h0PVwiMTZcIlxuLy8gICBmaWxsPVwiY3VycmVudENvbG9yXCJcbi8vICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbi8vICAgICBfX2h0bWw6IEljb25zLkhUTUwubW9yZSxcbi8vICAgfX1cbi8vIC8+XG4vLyBPUjpcbi8vIDxJY29ucy5SZWFjdC5lZGl0QnV0dG9uIHNpemU9ezI0fSBmaWxsPVwiI2ZmZlwiIC8+XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zO1xuIiwgImltcG9ydCB7IG1lbW8sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnNvbGUgZnJvbSBcIi4uL3V0aWxzL0NvbnNvbGUuanN4XCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vbWVudS9jb21wb25lbnRzL0Ryb3Bkb3duLmpzeFwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL21lbnUvY29tcG9uZW50cy9JbnB1dC5qc3hcIjtcclxuaW1wb3J0IFJhZGlvQnV0dG9uIGZyb20gXCIuLi9tZW51L2NvbXBvbmVudHMvUmFkaW9CdXR0b24uanN4XCI7XHJcbmltcG9ydCBUb2dnbGUgZnJvbSBcIi4uL21lbnUvY29tcG9uZW50cy9Ub2dnbGUuanN4XCI7XHJcblxyXG5jb25zdCBUZXN0TWVudSA9IG1lbW8oKCkgPT4ge1xyXG5cdGNvbnN0IFtsYXN0VmVyc2lvbiwgc2V0TGFzdFZlcnNpb25dID0gdXNlU3RhdGUoXCJMb2FkaW5nLi4uXCIpO1xyXG5cdGNvbnN0IFtsYXN0VXBkYXRlZCwgc2V0TGFzdFVwZGF0ZWRdID0gdXNlU3RhdGUoXCJMb2FkaW5nLi4uXCIpO1xyXG5cclxuXHRjb25zdCBbdG9nZ2xlVmFsdWUsIHNldFRvZ2dsZVZhbHVlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcInRlc3RcIik7XHJcblx0Y29uc3QgW3JhZGlvVmFsdWUsIHNldFJhZGlvVmFsdWVdID0gdXNlU3RhdGUoXCJvcHRpb24xXCIpO1xyXG5cdGNvbnN0IFtkcm9wZG93blZhbHVlLCBzZXREcm9wZG93blZhbHVlXSA9IHVzZVN0YXRlKFwib3B0aW9uMVwiKTtcclxuXHRjb25zdCBbc2xpZGVyVmFsdWUsIHNldFNsaWRlclZhbHVlXSA9IHVzZVN0YXRlKDEwKTtcclxuXHRjb25zdCBbc2Vla2VkU2xpZGVyVmFsdWUsIHNldFNlZWtlZFNsaWRlclZhbHVlXSA9IHVzZVN0YXRlKDEwKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG5cdFx0XHRcdFx0XCJodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3Zlcnlib3Jpbmdod2wvc3BpY2V0aWZ5L3JlbGVhc2VzL2xhdGVzdFwiLFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0XHRzZXRMYXN0VmVyc2lvbihkYXRhLnRhZ19uYW1lKTtcclxuXHRcdFx0XHRjb25zdCBwdWJsaXNoRGF0ZSA9IG5ldyBEYXRlKGRhdGEucHVibGlzaGVkX2F0KTtcclxuXHRcdFx0XHRjb25zdCBvcHRpb25zID0geyB5ZWFyOiBcIm51bWVyaWNcIiwgbW9udGg6IFwibG9uZ1wiLCBkYXk6IFwibnVtZXJpY1wiIH07XHJcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVkRGF0ZSA9IHB1Ymxpc2hEYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tR0JcIiwgb3B0aW9ucyk7XHJcblx0XHRcdFx0c2V0TGFzdFVwZGF0ZWQoZm9ybWF0dGVkRGF0ZSk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0Q29uc29sZS5FcnJvcihcIkVycm9yIGZldGNoaW5nIGxhdGVzdCB2ZXJzaW9uOlwiLCBlcnJvcik7XHJcblx0XHRcdFx0c2V0TGFzdFZlcnNpb24oXCJFcnJvciBmZXRjaGluZ1wiKTtcclxuXHRcdFx0XHRzZXRMYXN0VXBkYXRlZChcIkVycm9yIGZldGNoaW5nXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0ZmV0Y2hEYXRhKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBJbmZvID0ge1xyXG5cdFx0XCJDdXJyZW50IFRoZW1lIFZlcnNpb25cIjogXCJ2MS4yLjBcIixcclxuXHRcdFwiTmV3ZXN0IFRoZW1lIFZlcnNpb25cIjogbGFzdFZlcnNpb24sXHJcblx0XHRcIkxhc3QgVXBkYXRlZFwiOiBsYXN0VXBkYXRlZCxcclxuXHRcdFwiU3BvdGlmeSBWZXJzaW9uXCI6IFNwaWNldGlmeS5QbGF0Zm9ybS52ZXJzaW9uLFxyXG5cdFx0XCJTcGljZXRpZnkgVmVyc2lvblwiOiBTcGljZXRpZnkuQ29uZmlnLnZlcnNpb24sXHJcblx0XHRQbGF0Zm9ybTogU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXRmb3JtRGF0YS5hcHBfcGxhdGZvcm0sXHJcblx0XHRPUzogU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXRmb3JtRGF0YS5vc19uYW1lLFxyXG5cdFx0VGhlbWU6IFNwaWNldGlmeS5Db25maWcuY3VycmVudF90aGVtZSxcclxuXHRcdEV4dGVuc2lvbnM6IFNwaWNldGlmeS5Db25maWcuZXh0ZW5zaW9ucy5qb2luKFwiLCBcIiksXHJcblx0XHRcIkN1c3RvbSBhcHBzXCI6IFNwaWNldGlmeS5Db25maWcuY3VzdG9tX2FwcHMuam9pbihcIiwgXCIpLFxyXG5cdFx0XCJDb2xvdXIgU2NoZW1lXCI6IFNwaWNldGlmeS5Db25maWcuY29sb3Jfc2NoZW1lLFxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLXZlcnNpb25cIj5cclxuXHRcdFx0XHR7T2JqZWN0LmVudHJpZXMoSW5mbykubWFwKChba2V5LCB2YWx1ZV0pID0+IChcclxuXHRcdFx0XHRcdDxwIGtleT17a2V5fSBjbGFzc05hbWU9XCJ0aGVtZS1pbmZvLWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGhlbWUtaW5mby1rZXkgZW5jb3JlLXRleHQtYm9keS1tZWRpdW0tYm9sZFwiPlxyXG5cdFx0XHRcdFx0XHRcdHtrZXl9OntcIiBcIn1cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aGVtZS1pbmZvLXZhbHVlXCI+e3ZhbHVlfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtdGVzdC1tZW51XCI+XHJcblx0XHRcdFx0PGgyPkNvbXBvbmVudCBUZXN0IE1lbnU8L2gyPlxyXG5cclxuXHRcdFx0XHQ8aDM+VG9nZ2xlIENvbXBvbmVudDwvaDM+XHJcblx0XHRcdFx0PFRvZ2dsZVxyXG5cdFx0XHRcdFx0dmFsdWU9e3RvZ2dsZVZhbHVlfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e3NldFRvZ2dsZVZhbHVlfVxyXG5cdFx0XHRcdFx0YXJpYUxhYmVsPVwiVGVzdCBUb2dnbGVcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PHA+Q3VycmVudCBUb2dnbGUgVmFsdWU6IHt0b2dnbGVWYWx1ZS50b1N0cmluZygpfTwvcD5cclxuXHJcblx0XHRcdFx0PGgzPklucHV0IENvbXBvbmVudDwvaDM+XHJcblx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHR2YWx1ZT17aW5wdXRWYWx1ZX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtzZXRJbnB1dFZhbHVlfVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJUeXBlIHNvbWV0aGluZy4uLlwiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8cD5DdXJyZW50IElucHV0IFZhbHVlOiB7aW5wdXRWYWx1ZX08L3A+XHJcblxyXG5cdFx0XHRcdDxoMz5SYWRpbyBCdXR0b24gQ29tcG9uZW50PC9oMz5cclxuXHRcdFx0XHQ8UmFkaW9CdXR0b25cclxuXHRcdFx0XHRcdG5hbWU9XCJ0ZXN0LXJhZGlvXCJcclxuXHRcdFx0XHRcdG9wdGlvbnM9e1tcclxuXHRcdFx0XHRcdFx0eyBsYWJlbDogXCJSYWRpbyBCdXR0b24gSXRlbSAxXCIsIHZhbHVlOiBcIm9wdGlvbjFcIiB9LFxyXG5cdFx0XHRcdFx0XHR7IGxhYmVsOiBcIlJhZGlvIEJ1dHRvbiBJdGVtIDJcIiwgdmFsdWU6IFwib3B0aW9uMlwiIH0sXHJcblx0XHRcdFx0XHRcdHsgbGFiZWw6IFwiUmFkaW8gQnV0dG9uIEl0ZW0gM1wiLCB2YWx1ZTogXCJvcHRpb24zXCIgfSxcclxuXHRcdFx0XHRcdF19XHJcblx0XHRcdFx0XHRzZWxlY3RlZFZhbHVlPXtyYWRpb1ZhbHVlfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e3NldFJhZGlvVmFsdWV9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8cD5DdXJyZW50IFJhZGlvIEJ1dHRvbiBWYWx1ZToge3JhZGlvVmFsdWV9PC9wPlxyXG5cclxuXHRcdFx0XHQ8aDM+RHJvcGRvd24gQ29tcG9uZW50PC9oMz5cclxuXHRcdFx0XHQ8RHJvcGRvd25cclxuXHRcdFx0XHRcdG9wdGlvbnM9e1tcclxuXHRcdFx0XHRcdFx0eyBsYWJlbDogXCJEcm9wZG93biBJdGVtIDFcIiwgdmFsdWU6IFwib3B0aW9uMVwiIH0sXHJcblx0XHRcdFx0XHRcdHsgbGFiZWw6IFwiRHJvcGRvd24gSXRlbSAyXCIsIHZhbHVlOiBcIm9wdGlvbjJcIiB9LFxyXG5cdFx0XHRcdFx0XHR7IGxhYmVsOiBcIkRyb3Bkb3duIEl0ZW0gM1wiLCB2YWx1ZTogXCJvcHRpb24zXCIgfSxcclxuXHRcdFx0XHRcdF19XHJcblx0XHRcdFx0XHR2YWx1ZT17ZHJvcGRvd25WYWx1ZX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtzZXREcm9wZG93blZhbHVlfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PHA+Q3VycmVudCBEcm9wZG93biBWYWx1ZToge2Ryb3Bkb3duVmFsdWV9PC9wPlxyXG5cclxuXHRcdFx0XHQ8aDM+U2xpZGVyIENvbXBvbmVudDwvaDM+XHJcblx0XHRcdFx0PFNsaWRlclxyXG5cdFx0XHRcdFx0dmFsdWU9e3NsaWRlclZhbHVlfVxyXG5cdFx0XHRcdFx0bWluPXsxMH1cclxuXHRcdFx0XHRcdG1heD17MTAwfVxyXG5cdFx0XHRcdFx0c3RlcD17MX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtzZXRTbGlkZXJWYWx1ZX1cclxuXHRcdFx0XHRcdG9uUmVsZWFzZT17KCkgPT4gc2V0U2Vla2VkU2xpZGVyVmFsdWUoc2xpZGVyVmFsdWUpfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRDdXJyZW50IFNsaWRlciBWYWx1ZSAob25DaGFuZ2UpOiB7c2xpZGVyVmFsdWUudG9GaXhlZCgyKX0gfCBTZWVrZWRcclxuXHRcdFx0XHRcdFNsaWRlciBWYWx1ZSAob25SZWxlYXNlKToge3NlZWtlZFNsaWRlclZhbHVlLnRvRml4ZWQoMil9XHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdE1lbnU7XHJcbiIsICJjb25zdCBDb25zb2xlID0ge1xuICBMb2c6ICguLi5tZXNzYWdlcykgPT5cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGAlY1x1MjVDRiBcdTFEMTcgXHUyNUNGIFtUaGVtZV0lYyR7bWVzc2FnZXMuam9pbihcIiBcIil9YCxcbiAgICAgIFwiY29sb3I6IzI3MmFiMDsgZm9udC13ZWlnaHQ6MTAwMDsgYmFja2dyb3VuZDojZmZmZmZmOyBwYWRkaW5nOjNweDsgYm9yZGVyOjJweCBzb2xpZCAjMjcyYWIwOyBib3JkZXItcmlnaHQ6bm9uZTsgYm9yZGVyLXJhZGl1czozcHggMCAwIDNweDtcIixcbiAgICAgIFwiY29sb3I6IzAwMDAwMDsgYmFja2dyb3VuZDojZmZmZmZmOyBwYWRkaW5nOjNweDsgYm9yZGVyOjJweCBzb2xpZCAjMjcyYWIwOyBib3JkZXItbGVmdDpub25lOyBib3JkZXItcmFkaXVzOjAgM3B4IDNweCAwO1wiLFxuICAgICksXG4gIEVycm9yOiAoLi4ubWVzc2FnZXMpID0+XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGAlY1x1MjVDRiBcdTFEMTcgXHUyNUNGIFtUaGVtZV0lYyR7bWVzc2FnZXMuam9pbihcIiBcIil9YCxcbiAgICAgIFwiY29sb3I6I2ZmNjA2MDsgZm9udC13ZWlnaHQ6MTAwMDsgYmFja2dyb3VuZDojZmZmZmZmOyBwYWRkaW5nOjNweDsgYm9yZGVyOjJweCBzb2xpZCAjZWU2OTY5OyBib3JkZXItcmlnaHQ6bm9uZTsgYm9yZGVyLXJhZGl1czozcHggMCAwIDNweDtcIixcbiAgICAgIFwiY29sb3I6IzAwMDAwMDsgYmFja2dyb3VuZDojZmZmZmZmOyBwYWRkaW5nOjNweDsgYm9yZGVyOjJweCBzb2xpZCAjZWU2OTY5OyBib3JkZXItbGVmdDpub25lOyBib3JkZXItcmFkaXVzOjAgM3B4IDNweCAwO1wiLFxuICAgICksXG4gIFdhcm46ICguLi5tZXNzYWdlcykgPT5cbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgJWNcdTI1Q0YgXHUxRDE3IFx1MjVDRiBbVGhlbWVdJWMke21lc3NhZ2VzLmpvaW4oXCIgXCIpfWAsXG4gICAgICBcImNvbG9yOiNlZTg4NjA7IGZvbnQtd2VpZ2h0OjEwMDA7IGJhY2tncm91bmQ6I2ZmZmZmZjsgcGFkZGluZzozcHg7IGJvcmRlcjoycHggc29saWQgI2ZmODg2MDsgYm9yZGVyLXJpZ2h0Om5vbmU7IGJvcmRlci1yYWRpdXM6M3B4IDAgMCAzcHg7XCIsXG4gICAgICBcImNvbG9yOiMwMDAwMDA7IGJhY2tncm91bmQ6I2ZmZmZmZjsgcGFkZGluZzozcHg7IGJvcmRlcjoycHggc29saWQgI2ZmODg2MDsgYm9yZGVyLWxlZnQ6bm9uZTsgYm9yZGVyLXJhZGl1czowIDNweCAzcHggMDtcIixcbiAgICApLFxuICBEZWJ1ZzogKC4uLm1lc3NhZ2VzKSA9PlxuICAgIGNvbnNvbGUuZGVidWcoXG4gICAgICBgJWNcdTI1Q0YgXHUxRDE3IFx1MjVDRiBbVGhlbWVdJWMke21lc3NhZ2VzLmpvaW4oXCIgXCIpfWAsXG4gICAgICBcImNvbG9yOiMyNzJhYjA7IGZvbnQtd2VpZ2h0OjEwMDA7IGJhY2tncm91bmQ6I2ZmZmZmZjsgcGFkZGluZzozcHg7IGJvcmRlcjoycHggc29saWQgIzI3MmFiMDsgYm9yZGVyLXJpZ2h0Om5vbmU7IGJvcmRlci1yYWRpdXM6M3B4IDAgMCAzcHg7XCIsXG4gICAgICBcImNvbG9yOiMwMDAwMDA7IGJhY2tncm91bmQ6I2ZmZmZmZjsgcGFkZGluZzozcHg7IGJvcmRlcjoycHggc29saWQgIzI3MmFiMDsgYm9yZGVyLWxlZnQ6bm9uZTsgYm9yZGVyLXJhZGl1czowIDNweCAzcHggMDtcIixcbiAgICApLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uc29sZTtcbiIsICJpbXBvcnQgeyBtZW1vLCB1c2VJZCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSWNvbnMgZnJvbSBcIi4uLy4uL2ljb25zL0ljb25zXCI7XG5cbmNvbnN0IERyb3Bkb3duID0gbWVtbygoeyB2YWx1ZSwgb3B0aW9ucywgb25DaGFuZ2UsIGRpc2FibGVkIH0pID0+IHtcbiAgY29uc3QgcG9wb3ZlcklkID0gdXNlSWQoKTtcbiAgY29uc3QgcG9wb3ZlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgYW5jaG9yTmFtZSA9IGAtLWRyb3Bkb3duLWFuY2hvci0ke3BvcG92ZXJJZC5yZXBsYWNlKC86L2csIFwiaWRcIil9YDtcblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAob3B0aW9uKSA9PiB7XG4gICAgb25DaGFuZ2U/LihvcHRpb24udmFsdWUpO1xuICAgIHBvcG92ZXJSZWYuY3VycmVudD8uaGlkZVBvcG92ZXIoKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RlZExhYmVsID0gb3B0aW9ucy5maW5kKChvcHQpID0+IG9wdC52YWx1ZSA9PT0gdmFsdWUpPy5sYWJlbCB8fCBcIlNlbGVjdC4uLlwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Bkcm9wZG93biAke2Rpc2FibGVkID8gXCJkcm9wZG93bi0tZGlzYWJsZWRcIiA6IFwiXCJ9YH0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duX19idXR0b25cIlxuICAgICAgICBwb3BvdmVydGFyZ2V0PXtwb3BvdmVySWR9XG4gICAgICAgIHBvcG92ZXJ0YXJnZXRhY3Rpb249XCJ0b2dnbGVcIlxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHN0eWxlPXt7IGFuY2hvck5hbWU6IGFuY2hvck5hbWUgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bl9fdGV4dFwiPntzZWxlY3RlZExhYmVsfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duX19hcnJvd1wiPlxuICAgICAgICAgIDxJY29ucy5SZWFjdC5kcm9wZG93biBzaXplPXsxMn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXZcbiAgICAgICAgcG9wb3Zlcj1cImF1dG9cIlxuICAgICAgICBpZD17cG9wb3ZlcklkfVxuICAgICAgICByZWY9e3BvcG92ZXJSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duX19tZW51XCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0b3A6IGBjYWxjKGFuY2hvcigke2FuY2hvck5hbWV9IGJvdHRvbSkgKyA0cHgpYCxcbiAgICAgICAgICBsZWZ0OiBgYW5jaG9yKCR7YW5jaG9yTmFtZX0gbGVmdClgLFxuICAgICAgICAgIHdpZHRoOiBgYW5jaG9yLXNpemUoJHthbmNob3JOYW1lfSB3aWR0aClgLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd25fX29wdGlvbiR7dmFsdWUgPT09IG9wdGlvbi52YWx1ZSA/IFwiIGRyb3Bkb3duX19vcHRpb24tLXNlbGVjdGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3Qob3B0aW9uKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIiwgImltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IElucHV0ID0gbWVtbygoeyB2YWx1ZSwgb25DaGFuZ2UsIHBsYWNlaG9sZGVyLCBkaXNhYmxlZCB9KSA9PiAoXHJcbiAgPGlucHV0XHJcbiAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICB0eXBlPVwidGV4dFwiXHJcbiAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgLz5cclxuKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcclxuIiwgImltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFJhZGlvQnV0dG9uID0gbWVtbygoeyBvcHRpb25zLCBzZWxlY3RlZCwgb25DaGFuZ2UsIGRpc2FibGVkIH0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvLWJ1dHRvblwiPlxyXG4gICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgPGxhYmVsIGtleT17b3B0aW9uLnZhbHVlfSBjbGFzc05hbWU9XCJyYWRpby1idXR0b25fX2l0ZW1cIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJhZGlvLWJ1dHRvbl9faW5wdXRcIlxyXG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgIHZhbHVlPXtvcHRpb24udmFsdWV9XHJcbiAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZCA9PT0gb3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYWRpby1idXR0b25fX3RleHRcIj57b3B0aW9uLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICkpfVxyXG4gIDwvZGl2PlxyXG4pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhZGlvQnV0dG9uO1xyXG4iLCAiaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVG9nZ2xlID0gbWVtbygoeyB2YWx1ZSwgb25DaGFuZ2UsIGRpc2FibGVkIH0pID0+IChcclxuICA8YnV0dG9uIGNsYXNzTmFtZT1cInRvZ2dsZVwiIG9uQ2xpY2s9e29uQ2hhbmdlfSBkaXNhYmxlZD17ZGlzYWJsZWR9PlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwidG9nZ2xlX19iYWNrZ3JvdW5kXCI+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgdG9nZ2xlX19zbGlkZXIke3ZhbHVlID8gXCIgdG9nZ2xlX19zbGlkZXItLWVuYWJsZWRcIiA6IFwiXCJ9JHtkaXNhYmxlZCA/IFwiIHRvZ2dsZV9fc2xpZGVyLS1kaXNhYmxlZFwiIDogXCJcIn1gfVxyXG4gICAgICAvPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG4pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZTtcclxuIiwgImltcG9ydCBQb3B1cE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwTW9kYWxcIjtcbmltcG9ydCBUZXN0TWVudSBmcm9tIFwiLi9UZXN0TWVudVwiO1xuXG5jb25zdCBNb3VzZXRyYXAgPSAoKSA9PiB7XG4gIFNwaWNldGlmeS5Nb3VzZXRyYXAuYmluZChcbiAgICBbXG4gICAgICBcInVwIHVwIGRvd24gZG93biBsZWZ0IHJpZ2h0IGxlZnQgcmlnaHQgYiBhXCIsXG4gICAgICBcInYgZSByIHMgaSBvIG5cIixcbiAgICAgIFwicyBwIG8gdCBpIGYgeVwiLFxuICAgICAgXCJzIHAgaSBjIGUgdCBpIGYgeVwiLFxuICAgICAgXCJkIGUgYiB1IGdcIixcbiAgICAgIFwidCBlIHMgdFwiLFxuICAgIF0sXG4gICAgKCkgPT4ge1xuICAgICAgUG9wdXBNb2RhbCh7XG4gICAgICAgIHRpdGxlOiBcIlRoZW1lIFZlcnNpb25cIixcbiAgICAgICAgY29udGVudDogVGVzdE1lbnUsXG4gICAgICB9KTtcbiAgICB9LFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW91c2V0cmFwO1xuIiwgImltcG9ydCBDb25zb2xlIGZyb20gXCIuL0NvbnNvbGVcIjtcblxuY29uc3QgTG9jYWxTdG9yYWdlID0ge1xuICBnZXQoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0aGVtZToke2tleX1gKTtcbiAgICAgIHJldHVybiBpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbSAhPT0gbnVsbCA/IEpTT04ucGFyc2UoaXRlbSkgOiBkZWZhdWx0VmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGdldHRpbmcgJHtrZXl9IGZyb20gbG9jYWxTdG9yYWdlOmAsIGVycm9yKTtcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICB9LFxuXG4gIHNldChrZXksIHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aGVtZToke2tleX1gLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIENvbnNvbGUuRXJyb3IoYEVycm9yIHNldHRpbmcgJHtrZXl9IGluIGxvY2FsU3RvcmFnZTpgLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxTdG9yYWdlO1xuIiwgImltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbkNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25Db250YWluZXJcIjtcclxuaW1wb3J0IE9wdGlvblR5cGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvT3B0aW9uVHlwZVwiO1xyXG5pbXBvcnQgdXNlTW9kYWxTZXR0aW5ncyBmcm9tIFwiLi91c2VNb2RhbFNldHRpbmdzXCI7XHJcblxyXG5jb25zdCBBbGJ1bUJhbm5lck1vZGFsID0gbWVtbygoKSA9PiB7XHJcbiAgY29uc3QgeyBzZXR0aW5ncywgdXBkYXRlU2V0dGluZywgcmVzZXRTZXR0aW5ncywgc2F2ZVNldHRpbmdzIH0gPVxyXG4gICAgdXNlTW9kYWxTZXR0aW5ncyhhbGJ1bUJhbm5lck9wdGlvbnMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy1tb2RhbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLW1vZGFsX19vcHRpb25zXCI+XHJcbiAgICAgICAge2FsYnVtQmFubmVyT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgPE9wdGlvblR5cGVcclxuICAgICAgICAgICAga2V5PXtvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgb3B0aW9uPXtvcHRpb259XHJcbiAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5nc1tvcHRpb24ubmFtZV19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoa2V5LCB2YWx1ZSkgPT4gdXBkYXRlU2V0dGluZyhrZXksIHZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLW1vZGFsX19idXR0b25zXCI+XHJcbiAgICAgICAgPEJ1dHRvbkNvbnRhaW5lciByZXNldFNldHRpbmdzPXtyZXNldFNldHRpbmdzfSBzYXZlU2V0dGluZ3M9e3NhdmVTZXR0aW5nc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhbGJ1bUJhbm5lck9wdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgdHlwZTogXCJ0b2dnbGVcIixcclxuICAgIG5hbWU6IFwiYWxidW0tYmFubmVyLXBhZ2VcIixcclxuICAgIGRlc2M6IFwiUHV0cyBhbGJ1bSBhcnQgaW4gcGxhY2VzXCIsXHJcbiAgICBkZWZhdWx0VmFsOiB0cnVlLFxyXG4gICAgcnVuKHZhbHVlKSB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYWxidW0tYmFubmVyLXBhZ2VcIiwgdmFsdWUpO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwidG9nZ2xlXCIsXHJcbiAgICBuYW1lOiBcImx5cmljcy1wYWdlXCIsXHJcbiAgICBkZXNjOiBcIkFkZHMgRHluYW1pYyBiYWNrZ3JvdW5kcyB0byBMeXJpY3MgUGFnZVwiLFxyXG4gICAgZGVmYXVsdFZhbDogdHJ1ZSxcclxuICAgIHRpcHB5OiBcIkluY2x1ZGVzIFNwb3RpZnkgTHlyaWNzIHBhZ2UgYW5kIFNwaWNldGlmeSdzIEx5cmljcyBQbHVzXCIsXHJcbiAgICBydW4odmFsdWUpIHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJseXJpY3MtcGFnZVwiLCB2YWx1ZSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJ0b2dnbGVcIixcclxuICAgIG5hbWU6IFwicGxheWxpc3QtcGFnZVwiLFxyXG4gICAgZGVzYzogXCJBZGRzIER5bmFtaWMgYmFja2dyb3VuZHMgdG8geW91ciBQbGF5bGlzdCBQYWdlc1wiLFxyXG4gICAgZGVmYXVsdFZhbDogdHJ1ZSxcclxuICAgIHJ1bih2YWx1ZSkge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcInBsYXlsaXN0LXBhZ2VcIiwgdmFsdWUpO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwidG9nZ2xlXCIsXHJcbiAgICBuYW1lOiBcImFydGlzdC1wYWdlXCIsXHJcbiAgICBkZXNjOiBcIkFkZHMgRHluYW1pYyBiYWNrZ3JvdW5kcyB0byBBcnRpc3QgUGFnZXNcIixcclxuICAgIGRlZmF1bHRWYWw6IHRydWUsXHJcbiAgICBydW4odmFsdWUpIHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJhcnRpc3QtcGFnZVwiLCB2YWx1ZSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJ0b2dnbGVcIixcclxuICAgIG5hbWU6IFwiYWxidW0tcGFnZVwiLFxyXG4gICAgZGVzYzogXCJBZGRzIER5bmFtaWMgYmFja2dyb3VuZHMgdG8gQWxidW0gUGFnZXNcIixcclxuICAgIGRlZmF1bHRWYWw6IHRydWUsXHJcbiAgICBydW4odmFsdWUpIHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJhbGJ1bS1wYWdlXCIsIHZhbHVlKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcInRvZ2dsZVwiLFxyXG4gICAgbmFtZTogXCJtaXNjLXBhZ2VcIixcclxuICAgIGRlc2M6IFwiQWRkcyBEeW5hbWljIGJhY2tncm91bmRzIHRvIE1pc2MgUGFnZXNcIixcclxuICAgIGRlZmF1bHRWYWw6IHRydWUsXHJcbiAgICB0aXBweTogXCJFbmFibGVzIGFsYnVtIGFydCBmb3IgU3RhdGlvbiwgQ29sbGVjdGlvbiwgU2hvdywgRXBpc29kZSwgR2VucmUsIFVzZXJcIixcclxuICAgIHJ1bih2YWx1ZSkge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIm1pc2MtcGFnZVwiLCB2YWx1ZSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGJ1bUJhbm5lck1vZGFsO1xyXG4iLCAiaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBCdXR0b25Db250YWluZXIgPSBtZW1vKCh7IHJlc2V0U2V0dGluZ3MsIHNhdmVTZXR0aW5ncyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJfX2J1dHRvbiBidXR0b24tY29udGFpbmVyX19idXR0b24tLXJlc2V0XCJcbiAgICAgIG9uQ2xpY2s9e3Jlc2V0U2V0dGluZ3N9XG4gICAgPlxuICAgICAgUmVzZXRcbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyX19idXR0b24gYnV0dG9uLWNvbnRhaW5lcl9fYnV0dG9uLS1zYXZlXCJcbiAgICAgIG9uQ2xpY2s9e3NhdmVTZXR0aW5nc31cbiAgICA+XG4gICAgICBTYXZlXG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuKSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkNvbnRhaW5lcjtcbiIsICJpbXBvcnQgeyBtZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4vRHJvcGRvd25cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XHJcbmltcG9ydCBPcHRpb25Sb3cgZnJvbSBcIi4vT3B0aW9uUm93XCI7XHJcbmltcG9ydCBSYWRpb0J1dHRvbiBmcm9tIFwiLi9SYWRpb0J1dHRvblwiO1xyXG5pbXBvcnQgVG9nZ2xlIGZyb20gXCIuL1RvZ2dsZVwiO1xyXG5cclxuY29uc3QgT3B0aW9uVHlwZSA9IG1lbW8oKHsgb3B0aW9uLCB2YWx1ZSwgb25DaGFuZ2UsIGRpc2FibGVkIH0pID0+IHtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChWYWx1ZUZyb21Db21wb25lbnQpID0+IHtcclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBvcHRpb24udHlwZSA9PT0gXCJ0b2dnbGVcIiA/ICF2YWx1ZSA6IFZhbHVlRnJvbUNvbXBvbmVudDtcclxuICAgICAgb25DaGFuZ2Uob3B0aW9uLm5hbWUsIG5ld1ZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBbb3B0aW9uLm5hbWUsIG9wdGlvbi50eXBlLCB2YWx1ZSwgb25DaGFuZ2VdLFxyXG4gICk7XHJcblxyXG4gIGxldCBDb21wb25lbnQ7XHJcbiAgY29uc3QgY29tcG9uZW50UHJvcHMgPSB7XHJcbiAgICB2YWx1ZSxcclxuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXHJcbiAgICBkaXNhYmxlZCxcclxuICB9O1xyXG5cclxuICBpZiAob3B0aW9uLnR5cGUgPT09IFwidG9nZ2xlXCIpIHtcclxuICAgIENvbXBvbmVudCA9IFRvZ2dsZTtcclxuICB9IGVsc2UgaWYgKG9wdGlvbi50eXBlID09PSBcImRyb3Bkb3duXCIpIHtcclxuICAgIENvbXBvbmVudCA9IERyb3Bkb3duO1xyXG4gICAgY29tcG9uZW50UHJvcHMub3B0aW9ucyA9IG9wdGlvbi5vcHRpb25zO1xyXG4gIH0gZWxzZSBpZiAob3B0aW9uLnR5cGUgPT09IFwiaW5wdXRcIikge1xyXG4gICAgQ29tcG9uZW50ID0gSW5wdXQ7XHJcbiAgICBjb21wb25lbnRQcm9wcy5wbGFjZWhvbGRlciA9IG9wdGlvbi5wbGFjZWhvbGRlcjtcclxuICB9IGVsc2UgaWYgKG9wdGlvbi50eXBlID09PSBcInJhZGlvYnV0dG9uXCIpIHtcclxuICAgIENvbXBvbmVudCA9IFJhZGlvQnV0dG9uO1xyXG4gICAgY29tcG9uZW50UHJvcHMub3B0aW9ucyA9IG9wdGlvbi5vcHRpb25zO1xyXG4gICAgY29tcG9uZW50UHJvcHMuc2VsZWN0ZWQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8T3B0aW9uUm93XHJcbiAgICAgIG5hbWU9e29wdGlvbi5uYW1lfVxyXG4gICAgICBkZXNjPXtvcHRpb24uZGVzY31cclxuICAgICAgdGlwcHk9e29wdGlvbi50aXBweX1cclxuICAgICAgcG9wdXBNb2RhbD17b3B0aW9uLnBvcHVwTW9kYWx9XHJcbiAgICA+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLmNvbXBvbmVudFByb3BzfSAvPlxyXG4gICAgPC9PcHRpb25Sb3c+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcHRpb25UeXBlO1xyXG4iLCAiaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVGlwcHlCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGlwcHlCdXR0b25cIjtcclxuaW1wb3J0IFBvcHVwQnV0dG9uIGZyb20gXCIuL1BvcHVwQnV0dG9uXCI7XHJcblxyXG5jb25zdCBPcHRpb25Sb3cgPSBtZW1vKCh7IG5hbWUsIGRlc2MsIHRpcHB5LCBjaGlsZHJlbiwgcG9wdXBNb2RhbCB9KSA9PiAoXHJcbiAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uX19jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uX19kZXNjXCI+e2Rlc2N9PC9kaXY+XHJcbiAgICAgIHt0aXBweSAmJiA8VGlwcHlCdXR0b24gdGlwcHk9e3RpcHB5fSAvPn1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25fX2NvbnRyb2xcIj5cclxuICAgICAgPFBvcHVwQnV0dG9uIG5hbWU9e25hbWV9IHBvcHVwTW9kYWw9e3BvcHVwTW9kYWx9IC8+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIDwvPlxyXG4pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wdGlvblJvdztcclxuIiwgImltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJY29ucyBmcm9tIFwiLi4vaWNvbnMvSWNvbnNcIjtcblxuY29uc3QgVGlwcHlCdXR0b24gPSBtZW1vKCh7IHRpcHB5IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlRvb2x0aXBXcmFwcGVyIGxhYmVsPXt0aXBweX0gcGxhY2VtZW50PVwidG9wXCIgc2hvd0RlbGF5PXswfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby10aXBweVwiPlxuICAgICAgICA8SWNvbnMuUmVhY3QucXVlc3Rpb25NYXJrIHNpemU9ezIwfSBmaWxsPVwidmFyKC0tc3BpY2Utc3VidGV4dClcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9TcGljZXRpZnkuUmVhY3RDb21wb25lbnQuVG9vbHRpcFdyYXBwZXI+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVGlwcHlCdXR0b247XG4iLCAiaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvcHVwTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9wdXBNb2RhbFwiO1xuaW1wb3J0IEljb25zIGZyb20gXCIuLi8uLi9pY29ucy9JY29uc1wiO1xuXG5jb25zdCBQb3B1cEJ1dHRvbiA9IG1lbW8oKHsgbmFtZSwgcG9wdXBNb2RhbCB9KSA9PiB7XG4gIGlmICghcG9wdXBNb2RhbCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJwb3B1cC1idXR0b25cIlxuICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgUG9wdXBNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6IG5hbWUsXG4gICAgICAgICAgY29udGVudDogcG9wdXBNb2RhbCxcbiAgICAgICAgICBpc0xhcmdlOiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGFyaWEtbGFiZWw9XCJPcGVuIHBvcHVwXCJcbiAgICA+XG4gICAgICA8SWNvbnMuUmVhY3QuZWRpdEJ1dHRvbiBzaXplPXsxNn0gLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1cEJ1dHRvbjtcbiIsICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2NhbFN0b3JhZ2UgZnJvbSBcIi4uLy4uL3V0aWxzL0xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IGdldEluaXRpYWxPcHRpb25zIGZyb20gXCIuLi9oZWxwZXJzL2dldEluaXRpYWxPcHRpb25zXCI7XG5cbmNvbnN0IHVzZU1vZGFsU2V0dGluZ3MgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCBbc2V0dGluZ3MsIHNldFNldHRpbmdzXSA9IHVzZVN0YXRlKCgpID0+IGdldEluaXRpYWxPcHRpb25zKG9wdGlvbnMpKTtcblxuICBjb25zdCB1cGRhdGVTZXR0aW5nID0gdXNlQ2FsbGJhY2soKGtleSwgdmFsdWUpID0+IHtcbiAgICBzZXRTZXR0aW5ncygocHJldikgPT4gKHsgLi4ucHJldiwgW2tleV06IHZhbHVlIH0pKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlc2V0U2V0dGluZ3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gW29wdGlvbi5uYW1lLCBvcHRpb24uZGVmYXVsdFZhbF0pLFxuICAgICk7XG4gICAgc2V0U2V0dGluZ3MoZGVmYXVsdFNldHRpbmdzKTtcblxuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBMb2NhbFN0b3JhZ2Uuc2V0KG9wdGlvbi5uYW1lLCBvcHRpb24uZGVmYXVsdFZhbCk7XG4gICAgICBpZiAob3B0aW9uLnJ1bikge1xuICAgICAgICBvcHRpb24ucnVuKG9wdGlvbi5kZWZhdWx0VmFsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW29wdGlvbnNdKTtcblxuICBjb25zdCBzYXZlU2V0dGluZ3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoc2V0dGluZ3MpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgTG9jYWxTdG9yYWdlLnNldChrZXksIHZhbHVlKTtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnMuZmluZCgob3B0KSA9PiBvcHQubmFtZSA9PT0ga2V5KTtcbiAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbi5ydW4pIHtcbiAgICAgICAgICBvcHRpb24ucnVuKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LCBbc2V0dGluZ3MsIG9wdGlvbnNdKTtcblxuICByZXR1cm4geyBzZXR0aW5ncywgdXBkYXRlU2V0dGluZywgcmVzZXRTZXR0aW5ncywgc2F2ZVNldHRpbmdzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VNb2RhbFNldHRpbmdzO1xuIiwgImltcG9ydCBMb2NhbFN0b3JhZ2UgZnJvbSBcIi4uLy4uL3V0aWxzL0xvY2FsU3RvcmFnZVwiO1xuXG5mdW5jdGlvbiBnZXRJbml0aWFsT3B0aW9ucyhvcHRpb25MaXN0KSB7XG4gIGNvbnN0IGFjYyA9IHt9O1xuICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25MaXN0KSB7XG4gICAgY29uc3QgbWFpbktleSA9IG9wdGlvbi5uYW1lO1xuICAgIGFjY1ttYWluS2V5XSA9IExvY2FsU3RvcmFnZS5nZXQobWFpbktleSwgb3B0aW9uLmRlZmF1bHRWYWwpO1xuICAgIGlmIChvcHRpb24ucmV2ZWFsKSB7XG4gICAgICBmb3IgKGNvbnN0IHN1Yk9wdGlvbiBvZiBvcHRpb24ucmV2ZWFsKSB7XG4gICAgICAgIGNvbnN0IHN1YktleSA9IHN1Yk9wdGlvbi5uYW1lO1xuICAgICAgICBhY2Nbc3ViS2V5XSA9IGFjY1ttYWluS2V5XSA/IExvY2FsU3RvcmFnZS5nZXQoc3ViS2V5LCBzdWJPcHRpb24uZGVmYXVsdFZhbCkgOiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFjYztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0SW5pdGlhbE9wdGlvbnM7XG4iLCAiaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvbkNvbnRhaW5lclwiO1xyXG5pbXBvcnQgT3B0aW9uVHlwZSBmcm9tIFwiLi4vY29tcG9uZW50cy9PcHRpb25UeXBlXCI7XHJcbmltcG9ydCB1c2VNb2RhbFNldHRpbmdzIGZyb20gXCIuL3VzZU1vZGFsU2V0dGluZ3NcIjtcclxuXHJcbmNvbnN0IFdpbmRvd3NDb250cm9sTW9kYWwgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCB7IHNldHRpbmdzLCB1cGRhdGVTZXR0aW5nLCByZXNldFNldHRpbmdzLCBzYXZlU2V0dGluZ3MgfSA9XHJcbiAgICB1c2VNb2RhbFNldHRpbmdzKHdpbmRvd3NDb250cm9sT3B0aW9ucyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLW1vZGFsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbW9kYWxfX29wdGlvbnNcIj5cclxuICAgICAgICB7d2luZG93c0NvbnRyb2xPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICA8T3B0aW9uVHlwZVxyXG4gICAgICAgICAgICBrZXk9e29wdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICBvcHRpb249e29wdGlvbn1cclxuICAgICAgICAgICAgdmFsdWU9e3NldHRpbmdzW29wdGlvbi5uYW1lXX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhrZXksIHZhbHVlKSA9PiB1cGRhdGVTZXR0aW5nKGtleSwgdmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbW9kYWxfX2J1dHRvbnNcIj5cclxuICAgICAgICA8QnV0dG9uQ29udGFpbmVyIHJlc2V0U2V0dGluZ3M9e3Jlc2V0U2V0dGluZ3N9IHNhdmVTZXR0aW5ncz17c2F2ZVNldHRpbmdzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpbmRvd3NDb250cm9sT3B0aW9ucyA9IFtcclxuICB7XHJcbiAgICB0eXBlOiBcInRvZ2dsZVwiLFxyXG4gICAgbmFtZTogXCJ3aW5kb3dzLWNvbnRyb2xcIixcclxuICAgIGRlc2M6IFwiRW5hYmxlIGN1c3RvbSBXaW5kb3dzIENvbnRyb2xzXCIsXHJcbiAgICBkZWZhdWx0VmFsOiBmYWxzZSxcclxuICAgIHJ1bjogKHZhbHVlKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwid2luZG93cy1jb250cm9sXCIsIHZhbHVlKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcInRvZ2dsZVwiLFxyXG4gICAgbmFtZTogXCJoaWRlLXdpbmRvd3MtY29udHJvbFwiLFxyXG4gICAgZGVzYzogXCJSZW1vdmVzIFNwb3RpZnlzIFdpbmRvd3MgQ29udHJvbHMgY29tcGxldGVseVwiLFxyXG4gICAgZGVmYXVsdFZhbDogZmFsc2UsXHJcbiAgICBydW46ICh2YWx1ZSkgPT4ge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIldpbmRvd3NDb250cm9sXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdGhyZWVEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5DQ0lHeHRwQXJlU2R3V1JvMTRGRVwiKTtcclxuICAgICAgICBjb25zdCB3aW5kb3dzQ29udHJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi10b3BCYXItdG9wYmFyQ29udGVudFJpZ2h0XCIpO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLkNvbnRyb2xNZXNzYWdlQVBJLl91cGRhdGVVaUNsaWVudC5zZXRCdXR0b25zVmlzaWJpbGl0eSh7XHJcbiAgICAgICAgICAgIHNob3dCdXR0b25zOiBmYWxzZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLkNvbnRyb2xNZXNzYWdlQVBJLl91cGRhdGVVaUNsaWVudC51cGRhdGVUaXRsZWJhckhlaWdodCh7IGhlaWdodDogMSB9KTtcclxuICAgICAgICAgIGlmICh0aHJlZURvdHMpIHRocmVlRG90cy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICBpZiAod2luZG93c0NvbnRyb2wpIHdpbmRvd3NDb250cm9sLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiOHB4XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5Db250cm9sTWVzc2FnZUFQSS5fdXBkYXRlVWlDbGllbnQuc2V0QnV0dG9uc1Zpc2liaWxpdHkoe1xyXG4gICAgICAgICAgICBzaG93QnV0dG9uczogdHJ1ZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLkNvbnRyb2xNZXNzYWdlQVBJLl91cGRhdGVVaUNsaWVudC51cGRhdGVUaXRsZWJhckhlaWdodCh7IGhlaWdodDogNjQgfSk7XHJcbiAgICAgICAgICBpZiAodGhyZWVEb3RzKSB0aHJlZURvdHMuc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICAgICAgICBpZiAod2luZG93c0NvbnRyb2wpIHdpbmRvd3NDb250cm9sLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgbmFtZTogXCJ3aW5kb3dzLWNvbnRyb2wtYnJpZ2h0bmVzc1wiLFxyXG4gICAgZGVzYzogXCJTZXQgQnJpZ2h0bmVzc1wiLFxyXG4gICAgZGVmYXVsdFZhbDogXCIyLjEyXCIsXHJcbiAgICBydW4odmFsdWUpIHtcclxuICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ3aW5kb3dzLWNvbnRyb2xcIikpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXdpbmRvd3MtY29udHJvbC1icmlnaHRuZXNzXCIsIHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgIG5hbWU6IFwid2luZG93cy1jb250cm9sLXRvcFwiLFxyXG4gICAgZGVzYzogXCJTZXQgVG9wXCIsXHJcbiAgICBkZWZhdWx0VmFsOiBcIjE2cHhcIixcclxuICAgIHJ1bih2YWx1ZSkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIndpbmRvd3MtY29udHJvbFwiKSkge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0td2luZG93cy1jb250cm9sLXRvcFwiLCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICBuYW1lOiBcIndpbmRvd3MtY29udHJvbC13aWR0aFwiLFxyXG4gICAgZGVzYzogXCJTZXQgV2lkdGhcIixcclxuICAgIGRlZmF1bHRWYWw6IFwiMTM1cHhcIixcclxuICAgIHJ1bih2YWx1ZSkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIndpbmRvd3MtY29udHJvbFwiKSkge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0td2luZG93cy1jb250cm9sLXdpZHRoXCIsIHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgIG5hbWU6IFwid2luZG93cy1jb250cm9sLWhlaWdodFwiLFxyXG4gICAgZGVzYzogXCJTZXQgSGVpZ2h0XCIsXHJcbiAgICBkZWZhdWx0VmFsOiBcIjMycHhcIixcclxuICAgIHJ1bih2YWx1ZSkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIndpbmRvd3MtY29udHJvbFwiKSkge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0td2luZG93cy1jb250cm9sLWhlaWdodFwiLCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpbmRvd3NDb250cm9sTW9kYWw7XHJcbiIsICJpbXBvcnQgSWNvbnMgZnJvbSBcIi4uL2ljb25zL0ljb25zXCI7XG5pbXBvcnQgQ29uc29sZSBmcm9tIFwiLi4vdXRpbHMvQ29uc29sZVwiO1xuXG5jb25zdCBOb3RpZmljYXRpb24gPSAoe1xuICBtZXNzYWdlID0gXCJcIixcbiAga2V5UHJlZml4ID0gXCJjdXN0b20tbm90aWZcIixcbiAgYXV0b0hpZGVEdXJhdGlvbiA9IDMwMDAsXG4gIGJhY2tncm91bmRDb2xvdXIgPSBcIiNmZmZcIixcbiAgY29sb3VyID0gXCIjMDAwXCIsXG4gIGlzV2FybmluZyA9IGZhbHNlLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBpc1dhcm5pbmcgPyAoXG4gICAgPD5cbiAgICAgIDxJY29ucy5SZWFjdC53YXJuaW5nIHNpemU9ezI0fSAvPlxuICAgICAgPHNwYW4+e21lc3NhZ2V9PC9zcGFuPlxuICAgIDwvPlxuICApIDogKFxuICAgIDxzcGFuPnttZXNzYWdlfTwvc3Bhbj5cbiAgKTtcblxuICBjb25zdCBCYWNrZ3JvdW5kQ29sb3VyID0gaXNXYXJuaW5nID8gXCIjZmY5ODAwXCIgOiBiYWNrZ3JvdW5kQ29sb3VyO1xuICBjb25zdCBDb2xvdXIgPSBpc1dhcm5pbmcgPyBcIiNmZmZcIiA6IGNvbG91cjtcblxuICB0cnkge1xuICAgIFNwaWNldGlmeS5TbmFja2Jhci5lbnF1ZXVlQ3VzdG9tU25hY2tiYXIoa2V5UHJlZml4LCB7XG4gICAgICBrZXlQcmVmaXgsXG4gICAgICBhdXRvSGlkZUR1cmF0aW9uLFxuICAgICAgY2hpbGRyZW46IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1ub3RpZmljYXRpb25cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGdhcDogXCI4cHhcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBjb2xvcjogQ29sb3VyLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBCYWNrZ3JvdW5kQ29sb3VyLFxuICAgICAgICAgICAgcGFkZGluZzogXCIxNHB4IDE2cHhcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuODc1cmVtXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICksXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29uc29sZS5FcnJvcihcIkVycm9yIGRpc3BsYXlpbmcgbm90aWZpY2F0aW9uOlwiLCBlcnJvcik7XG4gIH1cbn07XG5cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBOb3RpZmljYXRpb24oe1xuLy8gICBhdXRvSGlkZUR1cmF0aW9uOiA1MDAwLFxuLy8gICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmOTgwMFwiLFxuLy8gICBtZXNzYWdlOiAoXG4vLyAgICAgPD5cbi8vICAgICAgIDxzdmdcbi8vICAgICAgICAgd2lkdGg9XCIyMFwiXG4vLyAgICAgICAgIGhlaWdodD1cIlwiXG4vLyAgICAgICAgIHZpZXdCb3g9XCIwIDAgOTYgOTZcIlxuLy8gICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbi8vICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBJY29ucy53YXJuaW5nIH19XG4vLyAgICAgICAvPlxuLy8gICAgICAgPHNwYW4+XG4vLyAgICAgICAgIFRoZW1lIG9ubHkgc3VwcG9ydHMgU3BvdGlmeSB2ZXJzaW9ucyBncmVhdGVyIHRoYW4gMS4yLjUwLjAwMFxuLy8gICAgICAgPC9zcGFuPlxuLy8gICAgIDwvPlxuLy8gICApLFxuLy8gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbjtcbiIsICJpbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gXCIuLi91dGlscy9Ob3RpZmljYXRpb25cIjtcblxubGV0IGNhY2hlZEluaUNvbnRlbnQgPSBudWxsO1xubGV0IGNhY2hlZENvbG91clNjaGVtZXMgPSBudWxsO1xuXG5jb25zdCBDb2xvdXJTY2hlbWUgPSBhc3luYyAoc2NoZW1lKSA9PiB7XG4gIGlmIChzY2hlbWUgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgY29uc3Qgc2NoZW1lVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN0eWxlLmN1c3RvbUNvbG91clNjaGVtZVwiKTtcbiAgICBzY2hlbWVUYWc/LnJlbW92ZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBpbmlDb250ZW50ID0gY2FjaGVkSW5pQ29udGVudDtcbiAgbGV0IGNvbG91clNjaGVtZXMgPSBjYWNoZWRDb2xvdXJTY2hlbWVzO1xuXG4gIGlmICghaW5pQ29udGVudCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS92ZXJ5Ym9yaW5naHdsL3NwaWNldGlmeS9tYWluL2Rpc3QvY29sb3IuaW5pXCIsXG4gICAgKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBOb3RpZmljYXRpb24oe1xuICAgICAgICBpc1dhcm5pbmc6IHRydWUsXG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb246IDEwMDAwLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgIFwiVW5hYmxlIHRvIGZldGNoIHRoZSBjb2xvdXIgc2NoZW1lIG9wdGlvbnMuIFlvdSB3b24ndCBiZSBhYmxlIHRvIGNoYW5nZSB0aGUgY29sb3VyIHNjaGVtZSB1c2luZyB0aGUgc2V0dGluZ3MgbWVudS5cIixcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbmlDb250ZW50ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNhY2hlZEluaUNvbnRlbnQgPSBpbmlDb250ZW50O1xuICB9XG5cbiAgaWYgKCFjb2xvdXJTY2hlbWVzKSB7XG4gICAgY29sb3VyU2NoZW1lcyA9IGluaUNvbnRlbnQuc3BsaXQoL1tcXHJcXG5dKy8pLnJlZHVjZSgoYWNjLCBsaW5lKSA9PiB7XG4gICAgICBjb25zdCB0cmltbWVkTGluZSA9IGxpbmUudHJpbSgpO1xuICAgICAgaWYgKHRyaW1tZWRMaW5lLnN0YXJ0c1dpdGgoXCI7XCIpKSByZXR1cm4gYWNjO1xuICAgICAgY29uc3Qgc2VjdGlvbk1hdGNoID0gdHJpbW1lZExpbmUubWF0Y2goL15cXFsoW15cXF1dKylcXF0kLyk7XG4gICAgICBpZiAoc2VjdGlvbk1hdGNoKSB7XG4gICAgICAgIGFjY1tzZWN0aW9uTWF0Y2hbMV1dID0ge307XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICBjb25zdCBwYXJhbU1hdGNoID0gdHJpbW1lZExpbmUubWF0Y2goL14oW149XSs/KVxccyo9XFxzKiguKykkLyk7XG4gICAgICBpZiAocGFyYW1NYXRjaCkge1xuICAgICAgICBjb25zdCBbLCBrZXksIHZhbHVlXSA9IHBhcmFtTWF0Y2g7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBPYmplY3Qua2V5cyhhY2MpLnBvcCgpO1xuICAgICAgICBpZiAoc2VjdGlvbikgYWNjW3NlY3Rpb25dW2tleV0gPSB2YWx1ZS5zcGxpdChcIjtcIilbMF0udHJpbSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gICAgY2FjaGVkQ29sb3VyU2NoZW1lcyA9IGNvbG91clNjaGVtZXM7XG4gIH1cblxuICBjb25zdCBpbmplY3RTdHIgPSBgJHtPYmplY3QuZW50cmllcyhjb2xvdXJTY2hlbWVzW3NjaGVtZV0pLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBjb25zdCByZ2IgPVxuICAgICAgdmFsdWUubGVuZ3RoID09PSAzXG4gICAgICAgID8gdmFsdWVcbiAgICAgICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAgICAgLm1hcCgoY2hhcikgPT4gTnVtYmVyLnBhcnNlSW50KGNoYXIgKyBjaGFyLCAxNikpXG4gICAgICAgICAgICAuam9pbihcIiwgXCIpXG4gICAgICAgIDogdmFsdWVcbiAgICAgICAgICAgIC5tYXRjaCgvXFx3XFx3L2cpXG4gICAgICAgICAgICAubWFwKCh4KSA9PiBOdW1iZXIucGFyc2VJbnQoeCwgMTYpKVxuICAgICAgICAgICAgLmpvaW4oXCIsIFwiKTtcbiAgICByZXR1cm4gYCR7YWNjfS0tc3BpY2UtJHtrZXl9OiMke3ZhbHVlfTstLXNwaWNlLXJnYi0ke2tleX06JHtyZ2J9O2A7XG4gIH0sIFwiOnJvb3R7XCIpfX1gO1xuXG4gIGxldCBzY2hlbWVUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGUuY3VzdG9tQ29sb3VyU2NoZW1lXCIpO1xuICBpZiAoIXNjaGVtZVRhZykge1xuICAgIHNjaGVtZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBzY2hlbWVUYWcuY2xhc3NMaXN0LmFkZChcImN1c3RvbUNvbG91clNjaGVtZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjaGVtZVRhZyk7XG4gIH1cbiAgc2NoZW1lVGFnLnRleHRDb250ZW50ID0gaW5qZWN0U3RyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3VyU2NoZW1lO1xuIiwgImltcG9ydCBMb2NhbFN0b3JhZ2UgZnJvbSBcIi4uL3V0aWxzL0xvY2FsU3RvcmFnZVwiO1xyXG5cclxuY29uc3QgQ292ZXJBcnRCYW5uZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgd2hpbGUgKCFTcGljZXRpZnkuUGxheWVyLmRhdGE/Lml0ZW0pIHtcclxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFubmVscyA9IHtcclxuICAgIEFsYnVtOiB7IHJlZ2V4OiAvXlxcL2FsYnVtXFwvLywga2V5OiBcImFsYnVtLXBhZ2VcIiB9LFxyXG4gICAgQXJ0aXN0OiB7IHJlZ2V4OiAvXlxcL2FydGlzdFxcLyg/IWFydGlzdHNcXGIpXFx3KyQvLCBrZXk6IFwiYXJ0aXN0LXBhZ2VcIiB9LFxyXG4gICAgSG9tZTogeyByZWdleDogL15cXC8kLywga2V5OiBcImhvbWUtcGFnZVwiIH0sXHJcbiAgICBMeXJpY3M6IHsgcmVnZXg6IC9eXFwvbHlyaWNzJC8sIGtleTogXCJseXJpY3MtcGFnZVwiIH0sXHJcbiAgICBMeXJpY3NQbHVzOiB7IHJlZ2V4OiAvXlxcL2x5cmljcy1wbHVzJC8sIGtleTogXCJseXJpY3MtcGFnZVwiIH0sXHJcbiAgICBQbGF5bGlzdDogeyByZWdleDogL15cXC9wbGF5bGlzdFxcLy8sIGtleTogXCJwbGF5bGlzdC1wYWdlXCIgfSxcclxuICAgIFN0YXRpb246IHsgcmVnZXg6IC9eXFwvc3RhdGlvblxcL3BsYXlsaXN0XFwvLywga2V5OiBcIm1pc2MtcGFnZVwiIH0sXHJcbiAgICBDb2xsZWN0aW9uOiB7IHJlZ2V4OiAvXlxcL2NvbGxlY3Rpb25cXC90cmFja3MkLywga2V5OiBcIm1pc2MtcGFnZVwiIH0sXHJcbiAgICBTaG93OiB7IHJlZ2V4OiAvXlxcL3Nob3dcXC8vLCBrZXk6IFwibWlzYy1wYWdlXCIgfSxcclxuICAgIEVwaXNvZGU6IHsgcmVnZXg6IC9eXFwvZXBpc29kZVxcLy8sIGtleTogXCJtaXNjLXBhZ2VcIiB9LFxyXG4gICAgVXNlcjogeyByZWdleDogL15cXC91c2VyXFwvKD8hdXNlcnNcXGIpXFx3KyQvLCBrZXk6IFwibWlzYy1wYWdlXCIgfSxcclxuICAgIEdlbnJlOiB7IHJlZ2V4OiAvXlxcL2dlbnJlXFwvLywga2V5OiBcIm1pc2MtcGFnZVwiIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYmFubmVyID1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFubmVyLWltYWdlXCIpIHx8XHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBuZXdCYW5uZXIuY2xhc3NOYW1lID0gXCJiYW5uZXItaW1hZ2VcIjtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZWZvcmUtc2Nyb2xsLW5vZGVcIik/LmFwcGVuZENoaWxkKG5ld0Jhbm5lcik7XHJcbiAgICAgIHJldHVybiBuZXdCYW5uZXI7XHJcbiAgICB9KSgpO1xyXG5cclxuICBjb25zdCB1cGRhdGVCYW5uZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZVVybCA9IFNwaWNldGlmeS5QbGF5ZXIuZGF0YT8uaXRlbT8ubWV0YWRhdGE/LmltYWdlX3hsYXJnZV91cmw7XHJcbiAgICBjb25zdCBzaG93QmFubmVyID0gT2JqZWN0LnZhbHVlcyhjaGFubmVscykuc29tZShcclxuICAgICAgKHsgcmVnZXgsIGtleSB9KSA9PlxyXG4gICAgICAgIExvY2FsU3RvcmFnZS5nZXQoa2V5LCBmYWxzZSkgJiYgcmVnZXgudGVzdChTcGljZXRpZnkuUGxhdGZvcm0uSGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSksXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChpbWFnZVVybCkge1xyXG4gICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgaW1nLnNyYyA9IGltYWdlVXJsO1xyXG4gICAgICBpbWcub25sb2FkID0gKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1pbWFnZVwiLCBgdXJsKCR7aW1hZ2VVcmx9KWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1pbWFnZVwiLCBcIm5vbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNob3dCYW5uZXIpIHtcclxuICAgICAgYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBTcGljZXRpZnkuUGxhdGZvcm0uSGlzdG9yeS5saXN0ZW4odXBkYXRlQmFubmVyKTtcclxuICBTcGljZXRpZnkuUGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzb25nY2hhbmdlXCIsIHVwZGF0ZUJhbm5lcik7XHJcbiAgdXBkYXRlQmFubmVyKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3ZlckFydEJhbm5lcjtcclxuIiwgImNvbnN0IFNwb3RpZnlNb2RlID0gYXN5bmMgKG1vZGUpID0+IHtcbiAgaWYgKCFTcGljZXRpZnkuUGxhdGZvcm0uUHJvZHVjdFN0YXRlQVBJLnByb2R1Y3RTdGF0ZUFwaSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGVtcGxveWVlIGRvZXNudCBzZWVtIHRvIHdvcmsgMS4yLjU1K1xuICBjb25zdCBtb2RlUGFpcnMgPSB7XG4gICAgZGVmYXVsdDogeyBcImFwcC1kZXZlbG9wZXJcIjogXCIwXCIgfSxcbiAgICBkZXZlbG9wZXI6IHsgXCJhcHAtZGV2ZWxvcGVyXCI6IFwiMlwiIH0sXG4gIH07XG5cbiAgY29uc3QgcGFpcnMgPSBtb2RlUGFpcnNbbW9kZV0gfHwgbW9kZVBhaXJzLmRlZmF1bHQ7XG5cbiAgY29uc3Qgc2V0TW9kZSA9IGFzeW5jIChrZXksIHZhbHVlKSA9PiB7XG4gICAgYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLlByb2R1Y3RTdGF0ZUFQSS5wcm9kdWN0U3RhdGVBcGkucHV0VmFsdWVzKHtcbiAgICAgIHBhaXJzOiB7IFtrZXldOiB2YWx1ZSB9LFxuICAgIH0pO1xuICAgIHJldHVybiBTcGljZXRpZnkuUGxhdGZvcm0uUHJvZHVjdFN0YXRlQVBJLnByb2R1Y3RTdGF0ZUFwaS5zdWJWYWx1ZXMoXG4gICAgICB7IGtleXM6IFtrZXldIH0sXG4gICAgICBhc3luYyAobmV3VmFsdWVzKSA9PiB7XG4gICAgICAgIGlmIChuZXdWYWx1ZXNba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBhd2FpdCBTcGljZXRpZnkuUGxhdGZvcm0uUHJvZHVjdFN0YXRlQVBJLnByb2R1Y3RTdGF0ZUFwaS5wdXRWYWx1ZXMoe1xuICAgICAgICAgICAgcGFpcnM6IHsgW2tleV06IHZhbHVlIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICB3aW5kb3cuYXBwRGV2TGlzdGVuZXI/LmNhbmNlbCgpO1xuICB3aW5kb3cuYXBwRGV2TGlzdGVuZXIgPSBhd2FpdCBzZXRNb2RlKFwiYXBwLWRldmVsb3BlclwiLCBwYWlyc1tcImFwcC1kZXZlbG9wZXJcIl0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BvdGlmeU1vZGU7XG4iLCAiY29uc3Qgd2FpdEZvckVsZW1lbnRzID0gYXN5bmMgKHNlbGVjdG9yLCBtYXhBdHRlbXB0cyA9IDUwKSA9PiB7XG4gIGxldCBhdHRlbXB0cyA9IDE7XG5cbiAgd2hpbGUgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSAmJiBhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XG4gICAgYXR0ZW1wdHMgPSBhdHRlbXB0cyArIDE7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwKSk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIHx8IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3YWl0Rm9yRWxlbWVudHM7XG4iLCAiaW1wb3J0IENvbnNvbGUgZnJvbSBcIi4uL3V0aWxzL0NvbnNvbGVcIjtcbmltcG9ydCB3YWl0Rm9yRWxlbWVudHMgZnJvbSBcIi4uL3V0aWxzL3dhaXRGb3JFbGVtZW50c1wiO1xuXG5sZXQgdGV4dE9ic2VydmVyQXBwbGUgPSBudWxsO1xubGV0IHNpZGViYXJTdGF0ZUxpc3RlbmVyQXBwbGUgPSBudWxsO1xuXG5mdW5jdGlvbiBUb2dnbGVBcHBsZU11c2ljKGlzRW5hYmxlZCkge1xuICBkaXNhYmxlQXBwbGVNdXNpYygpO1xuICBpZiAoaXNFbmFibGVkKSB7XG4gICAgZW5hYmxlQXBwbGVNdXNpYygpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuYWJsZUFwcGxlTXVzaWMoKSB7XG4gIGNvbnN0IGdsb2JhbE5hdiA9IGF3YWl0IHdhaXRGb3JFbGVtZW50cyhcIi5Sb290X19nbG9iYWxOYXZcIik7XG5cbiAgY29uc3QgYWRkVGV4dFRvQnV0dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGdsb2JhbE5hdi5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW4tZ2xvYmFsTmF2LW5hdkxpbmssIC5fYjNoaG1iV3RPWThfMU0xbU0xSFwiKTtcbiAgICAvLyAubWFpbi1nbG9iYWxOYXYtbmF2TGluazogTmF2IExpbmtzXG4gICAgLy8gX2IzaGhtYld0T1k4XzFNMW1NMUg6IFNlYXJjaCB0YWJcbiAgICBmb3IgKGNvbnN0IGVsIG9mIGVsZW1lbnRzKSB7XG4gICAgICBpZiAoIWVsLnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1nbG9iYWxOYXYtaWNvblRleHRcIikpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGVsLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikgfHwgKGVsLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSA/IFwiU2VhcmNoXCIgOiBcIlwiKTtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwibWFpbi1nbG9iYWxOYXYtaWNvblRleHQgZW5jb3JlLXRleHQtYm9keS1tZWRpdW0tYm9sZFwiO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBhZGRUZXh0VG9CdXR0b25zKCk7XG4gIHRleHRPYnNlcnZlckFwcGxlID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoYWRkVGV4dFRvQnV0dG9ucyk7XG4gIHRleHRPYnNlcnZlckFwcGxlLm9ic2VydmUoZ2xvYmFsTmF2LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcblxuICBjb25zdCB1cGRhdGVDb2xsYXBzZWRDbGFzcyA9ICgpID0+IHtcbiAgICBjb25zdCBzaWRlYmFyU3RhdGUgPSBTcGljZXRpZnkuUGxhdGZvcm0uTG9jYWxTdG9yYWdlQVBJLmdldEl0ZW0oXCJsZWZ0LXNpZGViYXItc3RhdGVcIik7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWRcIiwgc2lkZWJhclN0YXRlID09PSAxKTtcbiAgfTtcblxuICBzaWRlYmFyU3RhdGVMaXN0ZW5lckFwcGxlID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmRhdGEua2V5ID09PSBcImxlZnQtc2lkZWJhci1zdGF0ZVwiKSB7XG4gICAgICB1cGRhdGVDb2xsYXBzZWRDbGFzcygpO1xuICAgIH1cbiAgfTtcblxuICBTcGljZXRpZnkuUGxhdGZvcm0uTG9jYWxTdG9yYWdlQVBJLmdldEV2ZW50cygpLmFkZExpc3RlbmVyKFwidXBkYXRlXCIsIHNpZGViYXJTdGF0ZUxpc3RlbmVyQXBwbGUpO1xuICB1cGRhdGVDb2xsYXBzZWRDbGFzcygpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlQXBwbGVNdXNpYygpIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZWRcIik7XG5cbiAgaWYgKHRleHRPYnNlcnZlckFwcGxlKSB7XG4gICAgQ29uc29sZS5Mb2coXCJSZW1vdmluZyBBcHBsZU11c2ljIG9ic2VydmVyXCIpO1xuICAgIHRleHRPYnNlcnZlckFwcGxlLmRpc2Nvbm5lY3QoKTtcbiAgICB0ZXh0T2JzZXJ2ZXJBcHBsZSA9IG51bGw7XG4gIH1cblxuICBpZiAoc2lkZWJhclN0YXRlTGlzdGVuZXJBcHBsZSkge1xuICAgIENvbnNvbGUuTG9nKFwiUmVtb3Zpbmcgc2lkZWJhciBzdGF0ZSBsaXN0ZW5lclwiKTtcbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uTG9jYWxTdG9yYWdlQVBJLmdldEV2ZW50cygpLnJlbW92ZUxpc3RlbmVyKFwidXBkYXRlXCIsIHNpZGViYXJTdGF0ZUxpc3RlbmVyKTtcbiAgICBzaWRlYmFyU3RhdGVMaXN0ZW5lckFwcGxlID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGljb25UZXh0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbi1nbG9iYWxOYXYtaWNvblRleHRcIik7XG4gIGZvciAoY29uc3QgZWwgb2YgaWNvblRleHRzKSB7XG4gICAgZWwucmVtb3ZlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlQXBwbGVNdXNpYztcbiIsICJpbXBvcnQgQ29uc29sZSBmcm9tIFwiLi4vdXRpbHMvQ29uc29sZVwiO1xuaW1wb3J0IHdhaXRGb3JFbGVtZW50cyBmcm9tIFwiLi4vdXRpbHMvd2FpdEZvckVsZW1lbnRzXCI7XG5cbmxldCB0ZXh0T2JzZXJ2ZXIgPSBudWxsO1xubGV0IHNpZGViYXJTdGF0ZUxpc3RlbmVyID0gbnVsbDtcblxuYXN5bmMgZnVuY3Rpb24gVG9nZ2xlTGliWFVJKGlzRW5hYmxlZCkge1xuICBkaXNhYmxlTGliWFVJKCk7XG4gIGlmIChpc0VuYWJsZWQpIHtcbiAgICBlbmFibGVMaWJYVUkoKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBlbmFibGVMaWJYVUkoKSB7XG4gIGNvbnN0IGdsb2JhbE5hdiA9IGF3YWl0IHdhaXRGb3JFbGVtZW50cyhcIi5Sb290X19nbG9iYWxOYXZcIik7XG5cbiAgY29uc3QgYWRkVGV4dFRvQnV0dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGdsb2JhbE5hdi5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW4tZ2xvYmFsTmF2LW5hdkxpbmssIC5fYjNoaG1iV3RPWThfMU0xbU0xSFwiKTtcbiAgICAvLyAubWFpbi1nbG9iYWxOYXYtbmF2TGluazogTmF2IExpbmtzXG4gICAgLy8gX2IzaGhtYld0T1k4XzFNMW1NMUg6IFNlYXJjaCB0YWJcbiAgICBmb3IgKGNvbnN0IGVsIG9mIGVsZW1lbnRzKSB7XG4gICAgICBpZiAoIWVsLnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1nbG9iYWxOYXYtaWNvblRleHRcIikpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGVsLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikgfHwgKGVsLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSA/IFwiU2VhcmNoXCIgOiBcIlwiKTtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwibWFpbi1nbG9iYWxOYXYtaWNvblRleHQgZW5jb3JlLXRleHQtYm9keS1tZWRpdW0tYm9sZFwiO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBhZGRUZXh0VG9CdXR0b25zKCk7XG4gIHRleHRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGFkZFRleHRUb0J1dHRvbnMpO1xuICB0ZXh0T2JzZXJ2ZXIub2JzZXJ2ZShnbG9iYWxOYXYsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuXG4gIGNvbnN0IHVwZGF0ZUNvbGxhcHNlZENsYXNzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNpZGViYXJTdGF0ZSA9IFNwaWNldGlmeS5QbGF0Zm9ybS5Mb2NhbFN0b3JhZ2VBUEkuZ2V0SXRlbShcImxlZnQtc2lkZWJhci1zdGF0ZVwiKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlZFwiLCBzaWRlYmFyU3RhdGUgPT09IDEpO1xuICB9O1xuXG4gIHNpZGViYXJTdGF0ZUxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmRhdGEua2V5ID09PSBcImxlZnQtc2lkZWJhci1zdGF0ZVwiKSB7XG4gICAgICB1cGRhdGVDb2xsYXBzZWRDbGFzcygpO1xuICAgIH1cbiAgfTtcblxuICBTcGljZXRpZnkuUGxhdGZvcm0uQ29udHJvbE1lc3NhZ2VBUEkuX3VwZGF0ZVVpQ2xpZW50LnVwZGF0ZVRpdGxlYmFySGVpZ2h0KHsgaGVpZ2h0OiA0MCB9KTtcbiAgU3BpY2V0aWZ5LlBsYXRmb3JtLkxvY2FsU3RvcmFnZUFQSS5nZXRFdmVudHMoKS5hZGRMaXN0ZW5lcihcInVwZGF0ZVwiLCBzaWRlYmFyU3RhdGVMaXN0ZW5lcik7XG4gIHVwZGF0ZUNvbGxhcHNlZENsYXNzKCk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVMaWJYVUkoKSB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xuXG4gIGlmICh0ZXh0T2JzZXJ2ZXIpIHtcbiAgICBDb25zb2xlLkxvZyhcIlJlbW92aW5nIGxpYnggb2JzZXJ2ZXJcIik7XG4gICAgdGV4dE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB0ZXh0T2JzZXJ2ZXIgPSBudWxsO1xuICB9XG5cbiAgaWYgKHNpZGViYXJTdGF0ZUxpc3RlbmVyKSB7XG4gICAgQ29uc29sZS5Mb2coXCJSZW1vdmluZyBzaWRlYmFyIHN0YXRlIGxpc3RlbmVyXCIpO1xuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5Mb2NhbFN0b3JhZ2VBUEkuZ2V0RXZlbnRzKCkucmVtb3ZlTGlzdGVuZXIoXCJ1cGRhdGVcIiwgc2lkZWJhclN0YXRlTGlzdGVuZXIpO1xuICAgIHNpZGViYXJTdGF0ZUxpc3RlbmVyID0gbnVsbDtcbiAgfVxuXG4gIFNwaWNldGlmeS5QbGF0Zm9ybS5Db250cm9sTWVzc2FnZUFQSS5fdXBkYXRlVWlDbGllbnQudXBkYXRlVGl0bGViYXJIZWlnaHQoeyBoZWlnaHQ6IDY0IH0pO1xuXG4gIGNvbnN0IGljb25UZXh0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbi1nbG9iYWxOYXYtaWNvblRleHRcIik7XG4gIGZvciAoY29uc3QgZWwgb2YgaWNvblRleHRzKSB7XG4gICAgZWwucmVtb3ZlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlTGliWFVJO1xuIiwgImltcG9ydCB3YWl0Rm9yRWxlbWVudHMgZnJvbSBcIi4uL3V0aWxzL3dhaXRGb3JFbGVtZW50c1wiO1xuXG5jb25zdCBWb2xQZXJjZW50ID0gYXN5bmMgKGlzRW5hYmxlZCkgPT4ge1xuICBjb25zdCB2b2x1bWVCYXIgPSBhd2FpdCB3YWl0Rm9yRWxlbWVudHMoXCIubWFpbi1ub3dQbGF5aW5nQmFyLXZvbHVtZUJhclwiKTtcblxuICBjb25zdCB1cGRhdGVWb2wgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSB2b2x1bWVCYXIucXVlcnlTZWxlY3RvcihcIi52b2wtaW5wdXRcIik7XG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IE1hdGgucm91bmQoU3BpY2V0aWZ5LlBsYXllci5nZXRWb2x1bWUoKSAqIDEwMCk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChpc0VuYWJsZWQpIHtcbiAgICBpZiAoIXZvbHVtZUJhci5xdWVyeVNlbGVjdG9yKFwiLnZvbC1wZXJjZW50XCIpKSB7XG4gICAgICB2b2x1bWVCYXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgICBgPGRpdiBjbGFzcz1cInZvbC1wZXJjZW50XCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInZvbC1pbnB1dFwiIFxuXHRcdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogMzBweDsgZm9udC1zaXplOiAxNXB4OyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB0ZXh0LWFsaWduOiByaWdodDtcIj5cblx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTVweDtcIj4lPC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5gLFxuICAgICAgKTtcbiAgICAgIHZvbHVtZUJhci5zdHlsZS5mbGV4ID0gXCIwIDEgMjAwcHhcIjtcbiAgICAgIGNvbnN0IGlucHV0ID0gdm9sdW1lQmFyLnF1ZXJ5U2VsZWN0b3IoXCIudm9sLWlucHV0XCIpO1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1ZvbCA9IE51bWJlci5wYXJzZUludChpbnB1dC52YWx1ZSwgMTApO1xuICAgICAgICBpZiAobmV3Vm9sID49IDAgJiYgbmV3Vm9sIDw9IDEwMCkge1xuICAgICAgICAgIFNwaWNldGlmeS5QbGF5ZXIuc2V0Vm9sdW1lKG5ld1ZvbCAvIDEwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWJhY2tBUEkuX2V2ZW50cy5hZGRMaXN0ZW5lcihcInZvbHVtZVwiLCB1cGRhdGVWb2wpO1xuICAgICAgdXBkYXRlVm9sKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZvbHVtZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1ub3dQbGF5aW5nQmFyLXZvbHVtZUJhclwiKTtcbiAgICBpZiAodm9sdW1lQmFyKSB7XG4gICAgICB2b2x1bWVCYXIucXVlcnlTZWxlY3RvcihcIi52b2wtcGVyY2VudFwiKT8ucmVtb3ZlKCk7XG4gICAgICB2b2x1bWVCYXIuc3R5bGUuZmxleCA9IFwiXCI7XG4gICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWJhY2tBUEkuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcihcInZvbHVtZVwiLCB1cGRhdGVWb2wpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVm9sUGVyY2VudDtcbiIsICJpbXBvcnQgVGVzdE1lbnUgZnJvbSBcIi4uLy4uL2RlYnVnL1Rlc3RNZW51XCI7XHJcbmltcG9ydCBDb2xvdXJTY2hlbWUgZnJvbSBcIi4uLy4uL2ZlYXR1cmVzL0NvbG91clNjaGVtZVwiO1xyXG5pbXBvcnQgQ292ZXJBcnRCYW5uZXIgZnJvbSBcIi4uLy4uL2ZlYXR1cmVzL0NvdmVyQXJ0QmFubmVyXCI7XHJcbmltcG9ydCBTcG90aWZ5TW9kZSBmcm9tIFwiLi4vLi4vZmVhdHVyZXMvU3BvdGlmeU1vZGVcIjtcclxuaW1wb3J0IFRvZ2dsZUFwcGxlTXVzaWMgZnJvbSBcIi4uLy4uL2ZlYXR1cmVzL1RvZ2dsZUFwcGxlTXVzaWNcIjtcclxuaW1wb3J0IFRvZ2dsZUxpYlhVSSBmcm9tIFwiLi4vLi4vZmVhdHVyZXMvVG9nZ2xlTGliWFVJXCI7XHJcbmltcG9ydCBWb2xQZXJjZW50IGZyb20gXCIuLi8uLi9mZWF0dXJlcy9Wb2xQZXJjZW50XCI7XHJcbmltcG9ydCBBbGJ1bUJhbm5lck1vZGFsIGZyb20gXCIuLi8uLi9tZW51L21vZGFsbWVudS9BbGJ1bUJhbm5lck1vZGFsXCI7XHJcbmltcG9ydCBXaW5kb3dzQ29udHJvbE1vZGFsIGZyb20gXCIuLi8uLi9tZW51L21vZGFsbWVudS9XaW5kb3dzQ29udHJvbE1vZGFsXCI7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIEZlYXR1cmVzOiBbXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6IFwicmFkaW9idXR0b25cIixcclxuICAgICAgbmFtZTogXCJjb2xvdXItc2NoZW1lXCIsXHJcbiAgICAgIGRlc2M6IFwiQ29sb3VyIFNjaGVtZVwiLFxyXG4gICAgICBkZWZhdWx0VmFsOiBcImRlZmF1bHRcIixcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHsgdmFsdWU6IFwiZGVmYXVsdFwiLCBsYWJlbDogXCJEZWZhdWx0XCIgfSxcclxuICAgICAgICB7IHZhbHVlOiBcImRhcmtcIiwgbGFiZWw6IFwiRGFya1wiIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogXCJsaWdodFwiLCBsYWJlbDogXCJMaWdodFwiIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogXCJibG9vbVwiLCBsYWJlbDogXCJCbG9vbVwiIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogXCJzcG90aWZ5XCIsIGxhYmVsOiBcIlNwb3RpZnlcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICB0aXBweTogXCJEZWZhdWx0IHVzZXMgdGhlIGNvbG91ciBzY2hlbWUgc2V0IGluIGNvbmZpZy14cHVpLmluaVwiLFxyXG4gICAgICBydW4odmFsdWUpIHtcclxuICAgICAgICBDb2xvdXJTY2hlbWUodmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdHlwZTogXCJkcm9wZG93blwiLFxyXG4gICAgICBuYW1lOiBcInNwb3RpZnktbW9kZVwiLFxyXG4gICAgICBkZXNjOiBcIlNwb3RpZnkgbW9kZVwiLFxyXG4gICAgICBkZWZhdWx0VmFsOiBcImRlZmF1bHRcIixcclxuICAgICAgdGlwcHk6IFwiT25seSB0YWtlcyBlZmZlY3QgYWZ0ZXIgYSByZXN0YXJ0XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7IHZhbHVlOiBcImRlZmF1bHRcIiwgbGFiZWw6IFwiRGVmYXVsdFwiIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogXCJkZXZlbG9wZXJcIiwgbGFiZWw6IFwiRGV2ZWxvcGVyXCIgfSxcclxuICAgICAgXSxcclxuICAgICAgcnVuKHZhbHVlKSB7XHJcbiAgICAgICAgU3BvdGlmeU1vZGUodmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdHlwZTogXCJ0b2dnbGVcIixcclxuICAgICAgbmFtZTogXCJhbGJ1bS1iYW5uZXItcGFnZVwiLFxyXG4gICAgICBkZXNjOiBcIlB1dHMgVHJhY2sgY292ZXIgYXJ0IGluIHZhcmlvdXMgcGFnZXNcIixcclxuICAgICAgZGVmYXVsdFZhbDogdHJ1ZSxcclxuICAgICAgcG9wdXBNb2RhbDogQWxidW1CYW5uZXJNb2RhbCxcclxuICAgICAgcnVuKHZhbHVlKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJhbGJ1bS1iYW5uZXItcGFnZVwiLCB2YWx1ZSk7XHJcbiAgICAgICAgQ292ZXJBcnRCYW5uZXIodmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdHlwZTogXCJ0b2dnbGVcIixcclxuICAgICAgbmFtZTogXCJ2b2x1bWUtcGVyY2VudGFnZVwiLFxyXG4gICAgICBkZXNjOiBcIkFkZHMgdm9sdW1lIHBlcmNlbnRhZ2UgbmV4dCB0byB2b2x1bWUgc2xpZGVyXCIsXHJcbiAgICAgIGRlZmF1bHRWYWw6IHRydWUsXHJcbiAgICAgIHJ1bih2YWx1ZSkge1xyXG4gICAgICAgIFZvbFBlcmNlbnQodmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdHlwZTogXCJ0b2dnbGVcIixcclxuICAgICAgbmFtZTogXCJ3aW5kb3dzLWNvbnRyb2xcIixcclxuICAgICAgZGVzYzogXCJBZGp1c3RzIGJyaWdodG5lc3MgYW5kIHBvc2l0aW9uIG9mIHdpbmRvd3MgY29udHJvbHNcIixcclxuICAgICAgZGVmYXVsdFZhbDogZmFsc2UsXHJcbiAgICAgIHRpcHB5OiBcIlRoaXMgd2lsbCBvdmVycmlkZSB0aGUgdGhlbWVzIGRlZmF1bHQgd2luZG93cyBjb250cm9sc1wiLFxyXG4gICAgICBwb3B1cE1vZGFsOiBXaW5kb3dzQ29udHJvbE1vZGFsLFxyXG4gICAgICBydW46ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwid2luZG93cy1jb250cm9sXCIsIHZhbHVlKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgbmFtZTogXCJzcG90aWZ5LWZvbnRcIixcclxuICAgICAgZGVzYzogXCJTcG90aWZ5IGZvbnRcIixcclxuICAgICAgZGVmYXVsdFZhbDogXCJTcG90aWZ5TWl4VUlcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiU3BvdGlmeU1peFVJXCIsXHJcbiAgICAgIHRpcHB5OiBcIlRoaXMgd2lsbCBvbmx5IHdvcmsgaWYgeW91IGhhdmUgdGhlIGZvbnQgaW5zdGFsbGVkIGxvY2FsbHlcIixcclxuICAgICAgcnVuKHZhbHVlKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1Gb250RmFtaWx5XCIsIHZhbHVlKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBMYXlvdXRzOiBbXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXHJcbiAgICAgIG5hbWU6IFwibGlieC11aVwiLFxyXG4gICAgICBkZXNjOiBcIlJlc3RvcmVzIHRoZSBvbGQgVUkgPjIwMjQgKFByZSBHbG9iYWwgTmF2IEJhcilcIixcclxuICAgICAgZGVmYXVsdFZhbDogZmFsc2UsXHJcbiAgICAgIGluY29tcGF0aWJsZTogW1wiQXBwbGVNdXNpY1wiXSxcclxuICAgICAgdGlwcHk6IFwiSW5jb21wYXRpYmxlIHdpdGggQXBwbGVNdXNpY1wiLFxyXG4gICAgICBydW4odmFsdWUpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImxpYngtdWlcIiwgdmFsdWUpO1xyXG4gICAgICAgIFRvZ2dsZUxpYlhVSSh2YWx1ZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJldmVhbDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXHJcbiAgICAgICAgICBuYW1lOiBcImhpZ2hsaWdodC1uYXZsaW5rc1wiLFxyXG4gICAgICAgICAgZGVzYzogXCJBZGRzIGhpZ2hsaWdodHMgdG8gdGhlIHNlbGVjdGVkIHBhZ2VcIixcclxuICAgICAgICAgIGRlZmF1bHRWYWw6IHRydWUsXHJcbiAgICAgICAgICBydW4odmFsdWUpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJoaWdobGlnaHQtbmF2bGlua3NcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXHJcbiAgICAgICAgICBuYW1lOiBcInByZS1saWJ4LXVpXCIsXHJcbiAgICAgICAgICBkZXNjOiBcIlJlc3RvcmVzIHRoZSBvbGQgVUkgPjIwMjMgKFByZSBMaWJyYXJ5WClcIixcclxuICAgICAgICAgIGRlZmF1bHRWYWw6IGZhbHNlLFxyXG4gICAgICAgICAgcnVuKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwicHJlLWxpYngtdWlcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXHJcbiAgICAgICAgICBuYW1lOiBcImNvbXBhY3QtbGlicmFyeVwiLFxyXG4gICAgICAgICAgZGVzYzogXCJVc2VzIGNvbXBhY3Qgc2lkZWJhclwiLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbDogZmFsc2UsXHJcbiAgICAgICAgICB0aXBweTogXCJCcm9rZW4gaWYgbGlicmFyeSBpcyBjb2xsYXBzZWRcIixcclxuICAgICAgICAgIHJ1bih2YWx1ZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBhY3QtbGlicmFyeVwiLCB2YWx1ZSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0eXBlOiBcInRvZ2dsZVwiLFxyXG4gICAgICBuYW1lOiBcImFwcGxlLW11c2ljLXVpXCIsXHJcbiAgICAgIGRlc2M6IFwiQ2hhbmdlcyB0aGUgVUkgdG8gbG9vayBsaWtlIEFwcGxlIE11c2ljXCIsXHJcbiAgICAgIGRlZmF1bHRWYWw6IGZhbHNlLFxyXG4gICAgICBpbmNvbXBhdGlibGU6IFtcIkxpYlhcIiwgXCJzd2l0Y2hsYXlvdXRcIiwgXCJUZXN0TGF5b3V0XCIsIFwiZ3JlZW5pY29uXCJdLFxyXG4gICAgICB0aXBweTogXCJJbmNvbXBhdGlibGUgd2l0aCBMaWJYLCBTd2l0Y2hsYXlvdXQsIGdyZWVuaWNvbiBhbmQgdGVzdGxheW91dFwiLFxyXG4gICAgICBydW4odmFsdWUpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImFwcGxlLW11c2ljLXVpXCIsIHZhbHVlKTtcclxuICAgICAgICBUb2dnbGVBcHBsZU11c2ljKHZhbHVlKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXHJcbiAgICAgIG5hbWU6IFwibW9kZXJuLWxheW91dFwiLFxyXG4gICAgICBkZXNjOiBcIlJlb3JkZXJzIHBsYXkgYnV0dG9uIHRvIHN0YXJ0IGFuZCBjb3ZlciBhcnQgdG8gbWlkZGxlXCIsXHJcbiAgICAgIGluY29tcGF0aWJsZTogW1wiQXBwbGVNdXNpY1wiXSxcclxuICAgICAgdGlwcHk6IFwiSW5jb21wYXRpYmxlIHdpdGggQXBwbGVNdXNpY1wiLFxyXG4gICAgICBkZWZhdWx0VmFsOiB0cnVlLFxyXG4gICAgICBydW4odmFsdWUpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIm1vZGVybi1sYXlvdXRcIiwgdmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdHlwZTogXCJ0b2dnbGVcIixcclxuICAgICAgbmFtZTogXCJzd2l0Y2gtZ3JpZC1sYXlvdXRcIixcclxuICAgICAgZGVzYzogXCJVc2VzIGRpZmZlcmVudCBncmlkIGxheW91dFwiLFxyXG4gICAgICBpbmNvbXBhdGlibGU6IFtcIkFwcGxlTXVzaWNcIl0sXHJcbiAgICAgIHRpcHB5OiBcIkluY29tcGF0aWJsZSB3aXRoIEFwcGxlTXVzaWNcIixcclxuICAgICAgZGVmYXVsdFZhbDogdHJ1ZSxcclxuICAgICAgcnVuKHZhbHVlKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJzd2l0Y2gtZ3JpZC1sYXlvdXRcIiwgdmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIFNuaXBwZXRzOiBbXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXHJcbiAgICAgIG5hbWU6IFwiaGlkZS10cmFja2xpc3QtbnVtYmVyc1wiLFxyXG4gICAgICBkZXNjOiBcIkhpZGVzIHRyYWNrbGlzdCBudW1iZXJzIGluIHZhcmlvdXMgcGFnZXNcIixcclxuICAgICAgZGVmYXVsdFZhbDogdHJ1ZSxcclxuICAgICAgcnVuKHZhbHVlKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLXRyYWNrbGlzdC1udW1iZXJzXCIsIHZhbHVlKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXHJcbiAgICAgIG5hbWU6IFwiZ3JlZW4tbmF2TGluay1pY29uc1wiLFxyXG4gICAgICBkZXNjOiBcIk1ha2VzIE5hdmxpbmtzIGdyZWVuXCIsXHJcbiAgICAgIGluY29tcGF0aWJsZTogW1wiQXBwbGVNdXNpY1wiXSxcclxuICAgICAgdGlwcHk6IFwiSW5jb21wYXRpYmxlIHdpdGggQXBwbGVNdXNpY1wiLFxyXG4gICAgICBkZWZhdWx0VmFsOiB0cnVlLFxyXG4gICAgICBydW4odmFsdWUpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImdyZWVuLW5hdkxpbmstaWNvbnNcIiwgdmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdHlwZTogXCJ0b2dnbGVcIixcclxuICAgICAgbmFtZTogXCJ0cmFuc3BhcmVudC1wbGF5YnV0dG9uXCIsXHJcbiAgICAgIGRlc2M6IFwiTWFrZSB0aGUgcGxheS9wYXVzZSBidXR0b24gdHJhbnNwYXJlbnRcIixcclxuICAgICAgZGVmYXVsdFZhbDogdHJ1ZSxcclxuICAgICAgcnVuKHZhbHVlKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ0cmFuc3BhcmVudC1wbGF5YnV0dG9uXCIsIHZhbHVlKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXHJcbiAgICAgIG5hbWU6IFwibHlyaWNzLW9ubHktbnB2XCIsXHJcbiAgICAgIGRlc2M6IFwiU2hvdyBseXJpY3Mgb25seSBpbiBOb3cgcGxheWluZyB2aWV3XCIsXHJcbiAgICAgIGRlZmF1bHRWYWw6IGZhbHNlLFxyXG4gICAgICBydW4odmFsdWUpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImx5cmljcy1vbmx5LW5wdlwiLCB2YWx1ZSk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0eXBlOiBcInRvZ2dsZVwiLFxyXG4gICAgICBuYW1lOiBcIm5vLWdyYWRpZW50XCIsXHJcbiAgICAgIGRlc2M6IFwiUmVtb3ZlIHRoZSBjb2xvdXJlZCBncmFkaWVudCBmcm9tIGhlYWRlclwiLFxyXG4gICAgICBkZWZhdWx0VmFsOiB0cnVlLFxyXG4gICAgICBydW4odmFsdWUpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIm5vLWdyYWRpZW50XCIsIHZhbHVlKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBUZXN0OiBbXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6IFwidG9nZ2xlXCIsXHJcbiAgICAgIG5hbWU6IFwidGVzdC10b2dnbGVcIixcclxuICAgICAgZGVzYzogXCJ0ZXN0LXRvZ2dsZVwiLFxyXG4gICAgICBkZWZhdWx0VmFsOiB0cnVlLFxyXG4gICAgICBwb3B1cE1vZGFsOiBUZXN0TWVudSxcclxuICAgICAgaW5jb21wYXRpYmxlOiBbXHJcbiAgICAgICAgXCJ0ZXN0LWluY29tcGF0aWJsZS10b2dnbGVcIixcclxuICAgICAgICBcInRlc3QtaW5jb21wYXRpYmxlLWlucHV0XCIsXHJcbiAgICAgICAgXCJ0ZXN0LWluY29tcGF0aWJsZS1kcm9wZG93blwiLFxyXG4gICAgICBdLFxyXG4gICAgICB0aXBweTogXCJJbmNvbXBhdGlibGUgd2l0aCB0ZXN0LWluY29tcGF0aWJsZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdHlwZTogXCJ0b2dnbGVcIixcclxuICAgICAgbmFtZTogXCJ0ZXN0LWluY29tcGF0aWJsZS10b2dnbGVcIixcclxuICAgICAgZGVzYzogXCJ0ZXN0LWluY29tcGF0aWJsZS10b2dnbGVcIixcclxuICAgICAgZGVmYXVsdFZhbDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgbmFtZTogXCJ0ZXN0LWluY29tcGF0aWJsZS1pbnB1dFwiLFxyXG4gICAgICBkZXNjOiBcInRlc3QtaW5jb21wYXRpYmxlLWlucHV0XCIsXHJcbiAgICAgIGRlZmF1bHRWYWw6IDEsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcImRvZXMgc29tZXRoaW5nXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0eXBlOiBcImRyb3Bkb3duXCIsXHJcbiAgICAgIG5hbWU6IFwidGVzdC1pbmNvbXBhdGlibGUtZHJvcGRvd25cIixcclxuICAgICAgZGVzYzogXCJ0ZXN0LWluY29tcGF0aWJsZS1kcm9wZG93blwiLFxyXG4gICAgICBkZWZhdWx0VmFsOiBcInRlc3QxXCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7IHZhbHVlOiBcInRlc3QxXCIsIGxhYmVsOiBcInRlc3QxXCIgfSxcclxuICAgICAgICB7IHZhbHVlOiBcInRlc3QyXCIsIGxhYmVsOiBcInRlc3QyXCIgfSxcclxuICAgICAgICB7IHZhbHVlOiBcInRlc3QzXCIsIGxhYmVsOiBcInRlc3QzXCIgfSxcclxuICAgICAgICB7IHZhbHVlOiBcInRlc3Q0XCIsIGxhYmVsOiBcInRlc3Q0XCIgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgbmFtZTogXCJ0ZXN0LWlucHV0XCIsXHJcbiAgICAgIGRlc2M6IFwidGVzdC1pbnB1dFwiLFxyXG4gICAgICBkZWZhdWx0VmFsOiAxLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJkb2VzIHNvbWV0aGluZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdHlwZTogXCJkcm9wZG93blwiLFxyXG4gICAgICBuYW1lOiBcInRlc3QtZHJvcGRvd25cIixcclxuICAgICAgZGVzYzogXCJ0ZXN0LWRyb3Bkb3duXCIsXHJcbiAgICAgIGRlZmF1bHRWYWw6IFwidGVzdDFcIixcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHsgdmFsdWU6IFwidGVzdDFcIiwgbGFiZWw6IFwidGVzdDFcIiB9LFxyXG4gICAgICAgIHsgdmFsdWU6IFwidGVzdDJcIiwgbGFiZWw6IFwidGVzdDJcIiB9LFxyXG4gICAgICAgIHsgdmFsdWU6IFwidGVzdDNcIiwgbGFiZWw6IFwidGVzdDNcIiB9LFxyXG4gICAgICAgIHsgdmFsdWU6IFwidGVzdDRcIiwgbGFiZWw6IFwidGVzdDRcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdHlwZTogXCJyYWRpb2J1dHRvblwiLFxyXG4gICAgICBuYW1lOiBcInRlc3QtcmFkaW9idXR0b25cIixcclxuICAgICAgZGVzYzogXCJ0ZXN0LXJhZGlvYnV0dG9uXCIsXHJcbiAgICAgIGRlZmF1bHRWYWw6IFwidGVzdDFcIixcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHsgdmFsdWU6IFwidGVzdDFcIiwgbGFiZWw6IFwidGVzdDFcIiB9LFxyXG4gICAgICAgIHsgdmFsdWU6IFwidGVzdDJcIiwgbGFiZWw6IFwidGVzdDJcIiB9LFxyXG4gICAgICAgIHsgdmFsdWU6IFwidGVzdDNcIiwgbGFiZWw6IFwidGVzdDNcIiB9LFxyXG4gICAgICAgIHsgdmFsdWU6IFwidGVzdDRcIiwgbGFiZWw6IFwidGVzdDRcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICBydW4odmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0eXBlOiBcInRvZ2dsZVwiLFxyXG4gICAgICBuYW1lOiBcInRlc3QtcmV2ZWFsXCIsXHJcbiAgICAgIGRlc2M6IFwidGVzdC1yZXZlYWxcIixcclxuICAgICAgZGVmYXVsdFZhbDogdHJ1ZSxcclxuICAgICAgcmV2ZWFsOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogXCJ0b2dnbGVcIixcclxuICAgICAgICAgIG5hbWU6IFwicmV2ZWFsZWQtdG9nZ2xlXCIsXHJcbiAgICAgICAgICBkZXNjOiBcInJldmVhbGVkLXRvZ2dsZVwiLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICAgIG5hbWU6IFwicmV2ZWFsZWQtaW5wdXRcIixcclxuICAgICAgICAgIGRlc2M6IFwicmV2ZWFsZWQtaW5wdXRcIixcclxuICAgICAgICAgIGRlZmF1bHRWYWw6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiBcImRyb3Bkb3duXCIsXHJcbiAgICAgICAgICBuYW1lOiBcInJldmVhbGVkLWRyb3Bkb3duXCIsXHJcbiAgICAgICAgICBkZXNjOiBcInJldmVhbGVkLWRyb3Bkb3duXCIsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsOiBcInRlc3QxXCIsXHJcbiAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwidGVzdDFcIiwgbGFiZWw6IFwidGVzdDFcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcInRlc3QyXCIsIGxhYmVsOiBcInRlc3QyXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJ0ZXN0M1wiLCBsYWJlbDogXCJ0ZXN0M1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwidGVzdDRcIiwgbGFiZWw6IFwidGVzdDRcIiB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3B0aW9ucztcclxuIiwgImltcG9ydCBDb25zb2xlIGZyb20gXCIuLi8uLi91dGlscy9Db25zb2xlXCI7XG5pbXBvcnQgb3B0aW9ucyBmcm9tIFwiLi4vc2V0dGluZ3NtZW51L29wdGlvbnNcIjtcblxuY29uc3QgYXBwbHlPcHRpb25zID0gKHNldHRpbmdzLCBjaGFuZ2VkT3B0aW9ucyA9IFtdKSA9PiB7XG4gIHRyeSB7XG4gICAgT2JqZWN0LnZhbHVlcyhvcHRpb25zKVxuICAgICAgLmZsYXQoKVxuICAgICAgLmZvckVhY2goKHsgbmFtZSwgcnVuIH0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gbmFtZTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzZXR0aW5nc1trZXldO1xuICAgICAgICBpZiAoY2hhbmdlZE9wdGlvbnMuaW5jbHVkZXMoa2V5KSAmJiBydW4pIHtcbiAgICAgICAgICBydW4odmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb25zb2xlLkVycm9yKFwiRmFpbGVkIHRvIGFwcGx5IG9wdGlvbnM6XCIsIGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwbHlPcHRpb25zO1xuIiwgImltcG9ydCBDb25zb2xlIGZyb20gXCIuLi8uLi91dGlscy9Db25zb2xlXCI7XG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gXCIuLi8uLi91dGlscy9Mb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IGFsYnVtQmFubmVyT3B0aW9ucyB9IGZyb20gXCIuLi9tb2RhbG1lbnUvQWxidW1CYW5uZXJNb2RhbFwiO1xuaW1wb3J0IHsgd2luZG93c0NvbnRyb2xPcHRpb25zIH0gZnJvbSBcIi4uL21vZGFsbWVudS9XaW5kb3dzQ29udHJvbE1vZGFsXCI7XG5pbXBvcnQgb3B0aW9ucyBmcm9tIFwiLi4vc2V0dGluZ3NtZW51L29wdGlvbnNcIjtcbmltcG9ydCBhcHBseU9wdGlvbnMgZnJvbSBcIi4vYXBwbHlPcHRpb25zXCI7XG5pbXBvcnQgZ2V0SW5pdGlhbE9wdGlvbnMgZnJvbSBcIi4vZ2V0SW5pdGlhbE9wdGlvbnNcIjtcblxuY29uc3QgaW5pdGlhbGlzZU9wdGlvbnMgPSAoKSA9PiB7XG4gIENvbnNvbGUuTG9nKFwiSW5pdGlhbGlzaW5nIG9wdGlvbnNcIik7XG4gIGNvbnN0IGxvYWRlZE9wdGlvbnMgPSBnZXRJbml0aWFsT3B0aW9ucyhPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZsYXQoKSk7XG4gIGNvbnN0IGFsbE9wdGlvbnMgPSBbXG4gICAgLi4uT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5mbGF0KCksXG4gICAgLi4ud2luZG93c0NvbnRyb2xPcHRpb25zLFxuICAgIC4uLmFsYnVtQmFubmVyT3B0aW9ucyxcbiAgXTtcblxuICBhbGxPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleSA9IG9wdGlvbi5uYW1lO1xuICAgIGlmIChMb2NhbFN0b3JhZ2UuZ2V0KGtleSwgbnVsbCkgPT09IG51bGwpIHtcbiAgICAgIExvY2FsU3RvcmFnZS5zZXQoa2V5LCBvcHRpb24uZGVmYXVsdFZhbCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbi5yZXZlYWwpIHtcbiAgICAgIG9wdGlvbi5yZXZlYWwuZm9yRWFjaCgoc3ViT3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YktleSA9IHN1Yk9wdGlvbi5uYW1lO1xuICAgICAgICBpZiAoTG9jYWxTdG9yYWdlLmdldChzdWJLZXksIG51bGwpID09PSBudWxsKSB7XG4gICAgICAgICAgTG9jYWxTdG9yYWdlLnNldChzdWJLZXksIGxvYWRlZE9wdGlvbnNba2V5XSA/IHN1Yk9wdGlvbi5kZWZhdWx0VmFsIDogZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGFsbE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5ID0gb3B0aW9uLm5hbWU7XG4gICAgY29uc3QgdmFsdWUgPSBMb2NhbFN0b3JhZ2UuZ2V0KGtleSwgb3B0aW9uLmRlZmF1bHRWYWwpO1xuICAgIGlmIChvcHRpb24ucnVuKSB7XG4gICAgICBvcHRpb24ucnVuKHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGFwcGx5T3B0aW9ucyhsb2FkZWRPcHRpb25zKTtcbiAgcmV0dXJuIGxvYWRlZE9wdGlvbnM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXNlT3B0aW9ucztcbiIsICJpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQ29uZmlybURpYWxvZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db25maXJtRGlhbG9nXCI7XHJcbmltcG9ydCBQb3B1cE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BvcHVwTW9kYWxcIjtcclxuaW1wb3J0IFRlc3RNZW51IGZyb20gXCIuLi8uLi9kZWJ1Zy9UZXN0TWVudVwiO1xyXG5pbXBvcnQgSWNvbnMgZnJvbSBcIi4uLy4uL2ljb25zL0ljb25zXCI7XHJcbmltcG9ydCBXaW5kb3cgZnJvbSBcIi4uLy4uL3V0aWxzL1dpbmRvd1wiO1xyXG5pbXBvcnQgcmVzZXRPcHRpb25zIGZyb20gXCIuLi9oZWxwZXJzL3Jlc2V0T3B0aW9uc1wiO1xyXG5pbXBvcnQgU2V0dGluZ3NNZW51IGZyb20gXCIuL1NldHRpbmdzTWVudVwiO1xyXG5cclxuY29uc3QgU2V0dGluZ3NCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgcG9wb3ZlcklkID0gXCJzZXR0aW5ncy1tZW51LXBvcG92ZXJcIjtcclxuICBsZXQgcG9wb3ZlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3BvdmVySWQpO1xyXG5cclxuICBjb25zdCBoaWRlTWVudSA9ICgpID0+IHtcclxuICAgIHBvcG92ZXJFbGVtZW50Py5oaWRlUG9wb3Zlcj8uKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd01lbnUgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwb3BvdmVyRWxlbWVudD8uc2hvd1BvcG92ZXI/LigpO1xyXG4gIH07XHJcblxyXG4gIGlmICghcG9wb3ZlckVsZW1lbnQpIHtcclxuICAgIHBvcG92ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBvcG92ZXJFbGVtZW50LmlkID0gcG9wb3ZlcklkO1xyXG4gICAgcG9wb3ZlckVsZW1lbnQuc3R5bGUudG9wID0gXCJjYWxjKGFuY2hvcigtLVNldHRpbmdzQnV0dG9uIGJvdHRvbSkgKyA4cHgpXCI7XHJcbiAgICBwb3BvdmVyRWxlbWVudC5zdHlsZS5sZWZ0ID0gXCJhbmNob3IoLS1TZXR0aW5nc0J1dHRvbiBsZWZ0KVwiO1xyXG4gICAgcG9wb3ZlckVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgIHBvcG92ZXJFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICBwb3BvdmVyRWxlbWVudC5wb3BvdmVyID0gXCJhdXRvXCI7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcG92ZXJFbGVtZW50KTtcclxuXHJcbiAgICBSZWFjdERPTS5jcmVhdGVSb290KHBvcG92ZXJFbGVtZW50KS5yZW5kZXIoXHJcbiAgICAgIDxTcGljZXRpZnkuUmVhY3RDb21wb25lbnQuTWVudT5cclxuICAgICAgICA8U3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50Lk1lbnVJdGVtXHJcbiAgICAgICAgICBrZXk9XCJyZXNldC10aGVtZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGhpZGVNZW51KCk7XHJcbiAgICAgICAgICAgIHJlc2V0T3B0aW9ucygoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgbGVhZGluZ0ljb249e1xyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogU3BpY2V0aWZ5LlNWR0ljb25zLnJlcGVhdCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlc2V0IHRoZW1lXHJcbiAgICAgICAgPC9TcGljZXRpZnkuUmVhY3RDb21wb25lbnQuTWVudUl0ZW0+XHJcbiAgICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5NZW51SXRlbVxyXG4gICAgICAgICAga2V5PVwicmVsb2FkLXNwb3RpZnlcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBXaW5kb3cuUmVsb2FkKCk7XHJcbiAgICAgICAgICAgIGhpZGVNZW51KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgbGVhZGluZ0ljb249e1xyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogU3BpY2V0aWZ5LlNWR0ljb25zLnJlcGVhdCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlbG9hZCBTcG90aWZ5XHJcbiAgICAgICAgPC9TcGljZXRpZnkuUmVhY3RDb21wb25lbnQuTWVudUl0ZW0+XHJcbiAgICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5NZW51SXRlbVxyXG4gICAgICAgICAga2V5PVwicmVzdGFydC1zcG90aWZ5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgV2luZG93LlJlc3RhcnQoKTtcclxuICAgICAgICAgICAgaGlkZU1lbnUoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBsZWFkaW5nSWNvbj17XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBTcGljZXRpZnkuU1ZHSWNvbnMubG9ja2VkIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXZpZGVyPVwiYWZ0ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlc3RhcnQgU3BvdGlmeVxyXG4gICAgICAgIDwvU3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50Lk1lbnVJdGVtPlxyXG4gICAgICAgIDxTcGljZXRpZnkuUmVhY3RDb21wb25lbnQuTWVudUl0ZW1cclxuICAgICAgICAgIGtleT1cImNvbmZpcm0tZGlhbG9nXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgQ29uZmlybURpYWxvZyh7XHJcbiAgICAgICAgICAgICAgdGl0bGVUZXh0OiBcIkNvbmZpcm0gRGlhbG9nXCIsXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0OiBcIkFyZSB5b3UgPGI+c3VyZTwvYj4/XCIsXHJcbiAgICAgICAgICAgICAgb25PdXRzaWRlOiAoKSA9PiBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkNsaWNrZWQgb3V0c2lkZVwiKSxcclxuICAgICAgICAgICAgICBjb25maXJtTGFiZWw6IFwiT2tcIixcclxuICAgICAgICAgICAgICBhbGxvd0hUTUw6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBoaWRlTWVudSgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGxlYWRpbmdJY29uPXtcclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IFNwaWNldGlmeS5TVkdJY29ucy5jaGVjayB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGl2aWRlcj1cImFmdGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBDb25maXJtIERpYWxvZ1xyXG4gICAgICAgIDwvU3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50Lk1lbnVJdGVtPlxyXG4gICAgICAgIDxTcGljZXRpZnkuUmVhY3RDb21wb25lbnQuTWVudUl0ZW1cclxuICAgICAgICAgIGtleT1cInRoZW1lLXNldHRpbmdzLW1lbnVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBQb3B1cE1vZGFsKHsgdGl0bGU6IFwiVGhlbWUgU2V0dGluZ3NcIiwgY29udGVudDogU2V0dGluZ3NNZW51IH0pO1xyXG4gICAgICAgICAgICBoaWRlTWVudSgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGxlYWRpbmdJY29uPXtcclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IFNwaWNldGlmeS5TVkdJY29ucy5zdWJ0aXRsZXMgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBUaGVtZSBTZXR0aW5nc1xyXG4gICAgICAgIDwvU3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50Lk1lbnVJdGVtPlxyXG4gICAgICAgIDxTcGljZXRpZnkuUmVhY3RDb21wb25lbnQuTWVudUl0ZW1cclxuICAgICAgICAgIGtleT1cInRlc3QtbWVudVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIFBvcHVwTW9kYWwoeyB0aXRsZTogXCJUZXN0IE1lbnVcIiwgY29udGVudDogVGVzdE1lbnUgfSk7XHJcbiAgICAgICAgICAgIGhpZGVNZW51KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgbGVhZGluZ0ljb249e1xyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogU3BpY2V0aWZ5LlNWR0ljb25zLm1lbnUgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBUZXN0IE1lbnVcclxuICAgICAgICA8L1NwaWNldGlmeS5SZWFjdENvbXBvbmVudC5NZW51SXRlbT5cclxuICAgICAgPC9TcGljZXRpZnkuUmVhY3RDb21wb25lbnQuTWVudT4sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgU2V0dGluZ3NCdXR0b24gPSBuZXcgU3BpY2V0aWZ5LlRvcGJhci5CdXR0b24oXHJcbiAgICBcIlRoZW1lIFNldHRpbmdzXCIsXHJcbiAgICBgPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxNnB4XCIgaGVpZ2h0PVwiMTZweFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj4ke0ljb25zLkhUTUwuc2V0dGluZ3N9PC9zdmc+YCxcclxuICAgICgpID0+IHtcclxuICAgICAgUG9wdXBNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6IFwiVGhlbWUgU2V0dGluZ3NcIixcclxuICAgICAgICBjb250ZW50OiBTZXR0aW5nc01lbnUsXHJcbiAgICAgICAgYnV0dG9uczogKFxyXG4gICAgICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlciBsYWJlbD1cIkdpdEh1YlwiIHBsYWNlbWVudD1cInRvcFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWxfX2J1dHRvbiBtb2RhbF9fYnV0dG9uLS1naXRodWJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9naXRodWIuY29tL3Zlcnlib3Jpbmdod2wvc3BpY2V0aWZ5XCIpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEljb25zLlJlYWN0LmdpdGh1YiBzaXplPXsxOH0gLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L1NwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlcj5cclxuICAgICAgICApLFxyXG4gICAgICAgIGljb246IDxJY29ucy5SZWFjdC5zZXR0aW5ncyBzaXplPXszMH0gLz4sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGZhbHNlLFxyXG4gICAgdHJ1ZSxcclxuICApO1xyXG5cclxuICBTZXR0aW5nc0J1dHRvbi5lbGVtZW50Lm9uY29udGV4dG1lbnUgPSBzaG93TWVudTtcclxuICBTZXR0aW5nc0J1dHRvbi5lbGVtZW50LnN0eWxlLmFuY2hvck5hbWUgPSBcIi0tU2V0dGluZ3NCdXR0b25cIjtcclxuICByZXR1cm4gU2V0dGluZ3NCdXR0b247XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc0J1dHRvbjtcclxuIiwgImltcG9ydCB7IG1lbW8sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmZ1bmN0aW9uIENvbmZpcm1EaWFsb2coe1xuICB0aXRsZVRleHQsXG4gIGRlc2NyaXB0aW9uVGV4dCxcbiAgY2FuY2VsVGV4dCA9IFwiQ2FuY2VsXCIsXG4gIGNvbmZpcm1UZXh0ID0gXCJDb25maXJtXCIsXG4gIG9uQ29uZmlybSxcbiAgb25DbG9zZSxcbiAgb25PcGVuLFxuICBvbk91dHNpZGUsXG4gIGNvbmZpcm1MYWJlbCxcbiAgYWxsb3dIVE1MLFxufSkge1xuICBjb25zdCBDb25maXJtRGlhbG9nID0gbWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5SZWFjdE1vZGFsUG9ydGFsOmxhc3Qtb2YtdHlwZVwiKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUpIG9uT3Blbj8uKCk7XG4gICAgfSwgW3N0YXRlLCBvbk9wZW5dKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlJlbW90ZUNvbmZpZ1Byb3ZpZGVyXG4gICAgICAgIGNvbmZpZ3VyYXRpb249e1NwaWNldGlmeS5QbGF0Zm9ybS5SZW1vdGVDb25maWd1cmF0aW9ufVxuICAgICAgPlxuICAgICAgICA8U3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LkNvbmZpcm1EaWFsb2dcbiAgICAgICAgICB0aXRsZVRleHQ9e3RpdGxlVGV4dH1cbiAgICAgICAgICBkZXNjcmlwdGlvblRleHQ9e2Rlc2NyaXB0aW9uVGV4dH1cbiAgICAgICAgICBjYW5jZWxUZXh0PXtjYW5jZWxUZXh0fVxuICAgICAgICAgIGNvbmZpcm1UZXh0PXtjb25maXJtVGV4dH1cbiAgICAgICAgICBpc09wZW49e3N0YXRlfVxuICAgICAgICAgIG9uT3V0c2lkZT17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgb25PdXRzaWRlPy4oKTtcbiAgICAgICAgICAgIG1lbnU/LnJlbW92ZSgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbG9zZT17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgb25DbG9zZT8uKCk7XG4gICAgICAgICAgICBtZW51Py5yZW1vdmUoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgb25Db25maXJtPy4oKTtcbiAgICAgICAgICAgIG1lbnU/LnJlbW92ZSgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY29uZmlybUxhYmVsPXtjb25maXJtTGFiZWx9XG4gICAgICAgICAgYWxsb3dIVE1MPXthbGxvd0hUTUx9XG4gICAgICAgIC8+XG4gICAgICA8L1NwaWNldGlmeS5SZWFjdENvbXBvbmVudC5SZW1vdGVDb25maWdQcm92aWRlcj5cbiAgICApO1xuICB9KTtcblxuICBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLnJlbmRlcig8Q29uZmlybURpYWxvZyAvPik7XG59XG5cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBDb25maXJtRGlhbG9nKHtcbi8vICAgdGl0bGVUZXh0OiBcIkRlYnVnIE1lbnVcIixcbi8vICAgZGVzY3JpcHRpb25UZXh0OiBcIkFyZSB5b3UgPGI+c3VyZTwvYj4/XCIsXG4vLyAgIG9uT3V0c2lkZTogKCkgPT4ge1xuLy8gICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiQ2xpY2tlZCBvdXRzaWRlXCIpO1xuLy8gICB9LFxuLy8gICBjb25maXJtVGV4dDogXCJPa1wiLFxuLy8gICBhbGxvd0hUTUw6IHRydWUsXG4vLyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybURpYWxvZztcbiIsICJjb25zdCBXaW5kb3cgPSB7XG4gIFJlbG9hZDogKCkgPT4ge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9LFxuICBSZXN0YXJ0OiAoKSA9PiB7XG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlVwZGF0ZUFQSS5hcHBseVVwZGF0ZSgpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2luZG93O1xuIiwgImltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbkNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25Db250YWluZXJcIjtcclxuaW1wb3J0IE9wdGlvblR5cGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvT3B0aW9uVHlwZVwiO1xyXG5pbXBvcnQgdXNlTW9kYWxTZXR0aW5ncyBmcm9tIFwiLi91c2VNb2RhbFNldHRpbmdzXCI7XHJcblxyXG5jb25zdCBGb250TW9kYWwgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCB7IHNldHRpbmdzLCB1cGRhdGVTZXR0aW5nLCByZXNldFNldHRpbmdzLCBzYXZlU2V0dGluZ3MgfSA9IHVzZU1vZGFsU2V0dGluZ3MoZm9udE9wdGlvbnMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy1tb2RhbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLW1vZGFsX19vcHRpb25zXCI+XHJcbiAgICAgICAge2ZvbnRPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICA8T3B0aW9uVHlwZVxyXG4gICAgICAgICAgICBrZXk9e29wdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICBvcHRpb249e29wdGlvbn1cclxuICAgICAgICAgICAgdmFsdWU9e3NldHRpbmdzW29wdGlvbi5uYW1lXX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhrZXksIHZhbHVlKSA9PiB1cGRhdGVTZXR0aW5nKGtleSwgdmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbW9kYWxfX2J1dHRvbnNcIj5cclxuICAgICAgICA8QnV0dG9uQ29udGFpbmVyIHJlc2V0U2V0dGluZ3M9e3Jlc2V0U2V0dGluZ3N9IHNhdmVTZXR0aW5ncz17c2F2ZVNldHRpbmdzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbnRPcHRpb25zID0gW1xyXG4gIHtcclxuICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgIG5hbWU6IFwidWlmb250XCIsXHJcbiAgICBkZXNjOiBcIkNoYW5nZXMgdGhlIGZvbnQgb2YgdGhlIFNwb3RpZnkgYXBwXCIsXHJcbiAgICBkZWZhdWx0VmFsOiBcIlNlZ29lIFVJIFZhcmlhYmxlIERpc3BsYXlcIixcclxuICAgIHRpcHB5OiBcIlRoaXMgd2lsbCBvbmx5IHdvcmsgaWYgeW91IGhhdmUgdGhlIGZvbnQgaW5zdGFsbGVkXCIsXHJcbiAgICBwb3B1cE1vZGFsOiBGb250TW9kYWwsXHJcbiAgICBydW4odmFsdWUpIHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1Gb250RmFtaWx5XCIsIHZhbHVlKTtcclxuICAgIH0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbnRNb2RhbDtcclxuIiwgImltcG9ydCBDb25maXJtRGlhbG9nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbmZpcm1EaWFsb2dcIjtcbmltcG9ydCBDb25zb2xlIGZyb20gXCIuLi8uLi91dGlscy9Db25zb2xlXCI7XG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gXCIuLi8uLi91dGlscy9Mb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IGFsYnVtQmFubmVyT3B0aW9ucyB9IGZyb20gXCIuLi9tb2RhbG1lbnUvQWxidW1CYW5uZXJNb2RhbFwiO1xuaW1wb3J0IHsgZm9udE9wdGlvbnMgfSBmcm9tIFwiLi4vbW9kYWxtZW51L0ZvbnRNb2RhbFwiO1xuaW1wb3J0IHsgd2luZG93c0NvbnRyb2xPcHRpb25zIH0gZnJvbSBcIi4uL21vZGFsbWVudS9XaW5kb3dzQ29udHJvbE1vZGFsXCI7XG5pbXBvcnQgb3B0aW9ucyBmcm9tIFwiLi4vc2V0dGluZ3NtZW51L29wdGlvbnNcIjtcbmltcG9ydCBhcHBseU9wdGlvbnMgZnJvbSBcIi4vYXBwbHlPcHRpb25zXCI7XG5cbmNvbnN0IHJlc2V0T3B0aW9ucyA9IChzZXRTZXR0aW5ncykgPT4ge1xuICBDb25maXJtRGlhbG9nKHtcbiAgICB0aXRsZVRleHQ6IFwiQXJlIHlvdSBzdXJlP1wiLFxuICAgIGRlc2NyaXB0aW9uVGV4dDogXCJUaGlzIHdpbGwgcmVzZXQgYWxsIHNldHRpbmdzIHRvIGRlZmF1bHQhXCIsXG4gICAgY29uZmlybVRleHQ6IFwiUmVzZXRcIixcbiAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIENvbnNvbGUuTG9nKFwiUmVzZXR0aW5nIHNldHRpbmdzXCIpO1xuICAgICAgICBjb25zdCBhbGxPcHRpb25zID0gW1xuICAgICAgICAgIC4uLk9iamVjdC52YWx1ZXMob3B0aW9ucykuZmxhdCgpLFxuICAgICAgICAgIC4uLmFsYnVtQmFubmVyT3B0aW9ucyxcbiAgICAgICAgICAuLi53aW5kb3dzQ29udHJvbE9wdGlvbnMsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHt9O1xuXG4gICAgICAgIGFsbE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWFpbktleSA9IG9wdGlvbi5uYW1lO1xuICAgICAgICAgIGRlZmF1bHRTZXR0aW5nc1ttYWluS2V5XSA9IG9wdGlvbi5kZWZhdWx0VmFsO1xuICAgICAgICAgIGlmIChvcHRpb24ucmV2ZWFsKSB7XG4gICAgICAgICAgICBvcHRpb24ucmV2ZWFsLmZvckVhY2goKHN1Yk9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICBkZWZhdWx0U2V0dGluZ3Nbc3ViT3B0aW9uLm5hbWVdID0gb3B0aW9uLmRlZmF1bHRWYWwgPyBzdWJPcHRpb24uZGVmYXVsdFZhbCA6IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhkZWZhdWx0U2V0dGluZ3MpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgIExvY2FsU3RvcmFnZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTZXR0aW5ncyhkZWZhdWx0U2V0dGluZ3MpO1xuICAgICAgICBhcHBseU9wdGlvbnMoZGVmYXVsdFNldHRpbmdzLCBPYmplY3Qua2V5cyhkZWZhdWx0U2V0dGluZ3MpKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIENvbnNvbGUuRXJyb3IoXCJGYWlsZWQgdG8gcmVzZXQgc2V0dGluZ3M6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2V0T3B0aW9ucztcbiIsICJpbXBvcnQgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbkNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25Db250YWluZXJcIjtcclxuaW1wb3J0IENhdGVnb3J5Q2Fyb3VzZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2F0ZWdvcnlDYXJvdXNlbFwiO1xyXG5pbXBvcnQgUmVuZGVyQ2F0ZWdvcnkgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVuZGVyQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IHVzZVNldHRpbmdzIGZyb20gXCIuLi9ob29rcy91c2VTZXR0aW5nc1wiO1xyXG5pbXBvcnQgUHJldmlldyBmcm9tIFwiLi9QcmV2aWV3XCI7XHJcbmltcG9ydCBvcHRpb25zIGZyb20gXCIuL29wdGlvbnNcIjtcclxuXHJcbmNvbnN0IFNldHRpbmdzTWVudSA9IG1lbW8oKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2V0dGluZ3MsIGhhbmRsZVNldHRpbmdDaGFuZ2UsIHJlc2V0U2V0dGluZ3MsIHNhdmVTZXR0aW5ncyB9ID0gdXNlU2V0dGluZ3MoKTtcclxuICBjb25zdCBhbGxDYXRlZ29yaWVzID0gW1wiQWxsXCIsIC4uLk9iamVjdC5rZXlzKG9wdGlvbnMpXTtcclxuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIkFsbFwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0Q2F0ZWdvcnkgPSB1c2VDYWxsYmFjaygoY2F0ZWdvcnkpID0+IHtcclxuICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRPcHRpb25zID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRDYXRlZ29yeSA9PT0gXCJBbGxcIikge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMob3B0aW9ucykuZmlsdGVyKChbY2F0ZWdvcnldKSA9PiBjYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeSk7XHJcbiAgfSwgW3NlbGVjdGVkQ2F0ZWdvcnldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbWVudVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLW1lbnVfX2Nhcm91c2VsXCI+XHJcbiAgICAgICAgPENhdGVnb3J5Q2Fyb3VzZWxcclxuICAgICAgICAgIGNhdGVnb3JpZXM9e2FsbENhdGVnb3JpZXN9XHJcbiAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5PXtzZWxlY3RlZENhdGVnb3J5fVxyXG4gICAgICAgICAgb25TZWxlY3RDYXRlZ29yeT17aGFuZGxlU2VsZWN0Q2F0ZWdvcnl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbWVudV9fb3B0aW9uc1wiPlxyXG4gICAgICAgIHtmaWx0ZXJlZE9wdGlvbnMubWFwKChbY2F0ZWdvcnksIGNhdGVnb3J5T3B0aW9uc10pID0+IChcclxuICAgICAgICAgIDxSZW5kZXJDYXRlZ29yeVxyXG4gICAgICAgICAgICBrZXk9e2NhdGVnb3J5fVxyXG4gICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgIGNhdGVnb3J5T3B0aW9ucz17Y2F0ZWdvcnlPcHRpb25zfVxyXG4gICAgICAgICAgICBzZXR0aW5ncz17c2V0dGluZ3N9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZXR0aW5nQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbWVudV9fcHJldmlld1wiPlxyXG4gICAgICAgIDxQcmV2aWV3IHNldHRpbmdzPXtzZXR0aW5nc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbWVudV9fYnV0dG9uc1wiPlxyXG4gICAgICAgIDxCdXR0b25Db250YWluZXIgcmVzZXRTZXR0aW5ncz17cmVzZXRTZXR0aW5nc30gc2F2ZVNldHRpbmdzPXtzYXZlU2V0dGluZ3N9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc01lbnU7XHJcbiIsICJpbXBvcnQgeyBtZW1vLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDYXRlZ29yeUNhcm91c2VsID0gbWVtbygoeyBjYXRlZ29yaWVzLCBzZWxlY3RlZENhdGVnb3J5LCBvblNlbGVjdENhdGVnb3J5IH0pID0+IHtcbiAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVXaGVlbCA9IChlKSA9PiB7XG4gICAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbExlZnQgKz0gZS5kZWx0YVk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2Fyb3VzZWwgPSBjYXJvdXNlbFJlZi5jdXJyZW50O1xuICAgIGNhcm91c2VsPy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlV2hlZWwsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgcmV0dXJuICgpID0+IGNhcm91c2VsPy5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlV2hlZWwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsXCIgcmVmPXtjYXJvdXNlbFJlZn0+XG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBrZXk9e2NhdGVnb3J5fVxuICAgICAgICAgIGNsYXNzTmFtZT17YGNhcm91c2VsX19idXR0b24gJHtzZWxlY3RlZENhdGVnb3J5ID09PSBjYXRlZ29yeSA/IFwiY2Fyb3VzZWxfX2J1dHRvbi0tYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3RDYXRlZ29yeShjYXRlZ29yeSl9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlDYXJvdXNlbDtcbiIsICJpbXBvcnQgeyBGcmFnbWVudCwgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgb3B0aW9ucyBmcm9tIFwiLi4vc2V0dGluZ3NtZW51L29wdGlvbnNcIjtcclxuaW1wb3J0IE9wdGlvblR5cGUgZnJvbSBcIi4vT3B0aW9uVHlwZVwiO1xyXG5cclxuY29uc3QgYWxsT3B0aW9ucyA9IE9iamVjdC52YWx1ZXMob3B0aW9ucykuZmxhdCgpO1xyXG5cclxuY29uc3QgUmVuZGVyQ2F0ZWdvcnkgPSBtZW1vKCh7IGNhdGVnb3J5LCBjYXRlZ29yeU9wdGlvbnMsIHNldHRpbmdzLCBvbkNoYW5nZSB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e2BvcHRpb25fX2NhdGVnb3J5IG9wdGlvbl9fY2F0ZWdvcnktLSR7Y2F0ZWdvcnkudG9Mb3dlckNhc2UoKX1gfT5cclxuICAgIDxoMiBjbGFzc05hbWU9XCJvcHRpb25fX2NhdGVnb3J5LXRpdGxlXCI+e2NhdGVnb3J5fTwvaDI+XHJcbiAgICB7Y2F0ZWdvcnlPcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gc2V0dGluZ3Nbb3B0aW9uLm5hbWVdO1xyXG4gICAgICBjb25zdCBkaXNhYmxlZCA9IGFsbE9wdGlvbnMuc29tZShcclxuICAgICAgICAobykgPT4gby5pbmNvbXBhdGlibGU/LmluY2x1ZGVzKG9wdGlvbi5uYW1lKSAmJiBzZXR0aW5nc1tvLm5hbWVdLFxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudCBrZXk9e29wdGlvbi5uYW1lfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uX19pdGVtIG9wdGlvbl9faXRlbS0tbWFpblwiIGRhdGEtbmFtZT17b3B0aW9uLm5hbWV9PlxyXG4gICAgICAgICAgICA8T3B0aW9uVHlwZSBvcHRpb249e29wdGlvbn0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IGRpc2FibGVkPXtkaXNhYmxlZH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3ZhbHVlICYmIG9wdGlvbi5yZXZlYWwgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbl9faXRlbSBvcHRpb25fX2l0ZW0tLXJldmVhbGVkXCIgZGF0YS1uYW1lPXtvcHRpb24ubmFtZX0+XHJcbiAgICAgICAgICAgICAge29wdGlvbi5yZXZlYWwubWFwKChzdWIpID0+IChcclxuICAgICAgICAgICAgICAgIDxPcHRpb25UeXBlXHJcbiAgICAgICAgICAgICAgICAgIGtleT17c3ViLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbj17c3VifVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2V0dGluZ3Nbc3ViLm5hbWVdfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICApO1xyXG4gICAgfSl9XHJcbiAgPC9kaXY+XHJcbikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyQ2F0ZWdvcnk7XHJcbiIsICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBnZXRJbml0aWFsT3B0aW9ucyBmcm9tIFwiLi4vaGVscGVycy9nZXRJbml0aWFsT3B0aW9uc1wiO1xuaW1wb3J0IHJlc2V0T3B0aW9ucyBmcm9tIFwiLi4vaGVscGVycy9yZXNldE9wdGlvbnNcIjtcbmltcG9ydCBzYXZlT3B0aW9ucyBmcm9tIFwiLi4vaGVscGVycy9zYXZlT3B0aW9uc1wiO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSBcIi4uL3NldHRpbmdzbWVudS9vcHRpb25zXCI7XG5cbmNvbnN0IHVzZVNldHRpbmdzID0gKCkgPT4ge1xuICBjb25zdCBhbGxPcHRpb25zID0gT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5mbGF0KCk7XG4gIGNvbnN0IFtzZXR0aW5ncywgc2V0U2V0dGluZ3NdID0gdXNlU3RhdGUoKCkgPT4gZ2V0SW5pdGlhbE9wdGlvbnMoYWxsT3B0aW9ucykpO1xuXG4gIGNvbnN0IGhhbmRsZVNldHRpbmdDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgc2V0U2V0dGluZ3MoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgbmV3U2V0dGluZ3MgPSB7IC4uLnByZXYsIFtrZXldOiB2YWx1ZSB9O1xuICAgICAgICBjb25zdCBvcHRpb25OYW1lID0ga2V5O1xuXG4gICAgICAgIGNvbnN0IGNoYW5nZWRPcHRpb24gPSBhbGxPcHRpb25zLmZpbmQoKG9wdCkgPT4gb3B0Lm5hbWUgPT09IG9wdGlvbk5hbWUpO1xuXG4gICAgICAgIGlmIChjaGFuZ2VkT3B0aW9uPy5yZXZlYWwpIHtcbiAgICAgICAgICBjaGFuZ2VkT3B0aW9uLnJldmVhbC5mb3JFYWNoKChzdWJPcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YktleSA9IHN1Yk9wdGlvbi5uYW1lO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgIG5ld1NldHRpbmdzW3N1YktleV0gPSBzdWJPcHRpb24uZGVmYXVsdFZhbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ld1NldHRpbmdzW3N1YktleV0gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSAmJiBjaGFuZ2VkT3B0aW9uPy5pbmNvbXBhdGlibGUpIHtcbiAgICAgICAgICBjaGFuZ2VkT3B0aW9uLmluY29tcGF0aWJsZS5mb3JFYWNoKChpbmNvbXBOYW1lKSA9PiB7XG4gICAgICAgICAgICBuZXdTZXR0aW5nc1tpbmNvbXBOYW1lXSA9IGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1NldHRpbmdzO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBbYWxsT3B0aW9uc10sXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBzZXR0aW5ncyxcbiAgICBoYW5kbGVTZXR0aW5nQ2hhbmdlLFxuICAgIHJlc2V0U2V0dGluZ3M6ICgpID0+IHJlc2V0T3B0aW9ucyhzZXRTZXR0aW5ncyksXG4gICAgc2F2ZVNldHRpbmdzOiAoKSA9PiB7XG4gICAgICBjb25zdCB1cGRhdGVkU2V0dGluZ3MgPSBzYXZlT3B0aW9ucyhzZXR0aW5ncyk7XG4gICAgICBzZXRTZXR0aW5ncyh1cGRhdGVkU2V0dGluZ3MpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTZXR0aW5ncztcbiIsICJpbXBvcnQgQ29uc29sZSBmcm9tIFwiLi4vLi4vdXRpbHMvQ29uc29sZVwiO1xuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tIFwiLi4vLi4vdXRpbHMvTG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgYXBwbHlPcHRpb25zIGZyb20gXCIuL2FwcGx5T3B0aW9uc1wiO1xuXG5jb25zdCBzYXZlT3B0aW9ucyA9IChzZXR0aW5ncykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNoYW5nZWRPcHRpb25zID0gW107XG5cbiAgICBPYmplY3QuZW50cmllcyhzZXR0aW5ncykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBjb25zdCBzdG9yZWRWYWx1ZSA9IExvY2FsU3RvcmFnZS5nZXQoa2V5LCBudWxsKTtcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShzdG9yZWRWYWx1ZSkgIT09IEpTT04uc3RyaW5naWZ5KHZhbHVlKSkge1xuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICBjaGFuZ2VkT3B0aW9ucy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY2hhbmdlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgQ29uc29sZS5Mb2coYFNhdmluZyBzZXR0aW5nczogJHtjaGFuZ2VkT3B0aW9ucy5qb2luKFwiLCBcIil9YCk7XG4gICAgICBhcHBseU9wdGlvbnMoc2V0dGluZ3MsIGNoYW5nZWRPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2V0dGluZ3M7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29uc29sZS5FcnJvcihcIkZhaWxlZCB0byBzYXZlIHNldHRpbmdzOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHNldHRpbmdzO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzYXZlT3B0aW9ucztcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSWNvbnMgZnJvbSBcIi4uLy4uL2ljb25zL0ljb25zXCI7XHJcbmltcG9ydCBSYWRpb0J1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9SYWRpb0J1dHRvblwiO1xyXG5cclxuY29uc3QgUGxheWxpc3RJY29uID0gKCkgPT4gKFxyXG4gIDxzdmcgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiNTAlXCIgaGVpZ2h0PVwiNTAlXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHN0eWxlPXt7IG9wYWNpdHk6IDAuNSB9fT5cclxuICAgIDxwYXRoIGQ9XCJNMTUgMTQuNUg1VjEzaDEwdjEuNXptMC01Ljc1SDV2LTEuNWgxMHYxLjV6TTE1IDNINVYxLjVoMTBWM3pNMyAzSDFWMS41aDJWM3ptMCAxMS41SDFWMTNoMnYxLjV6bTAtNS43NUgxdi0xLjVoMnYxLjV6XCIgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IFRyYWNrSWNvbiA9ICgpID0+IChcclxuICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjUwJVwiIGhlaWdodD1cIjUwJVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBzdHlsZT17eyBvcGFjaXR5OiAwLjUgfX0+XHJcbiAgICA8cGF0aCBkPVwiTTEyIDN2MTAuNTVBNC4wMDEgNC4wMDEgMCAxIDAgMTQgMTdWN2g0VjNoLTZ6XCIgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfX2l0ZW0gbmF2YmFyX19pdGVtLS1sZWZ0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfX2l0ZW0taGlzdG9yeVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfX2l0ZW0taGlzdG9yeS1idXR0b25cIj5cclxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PXtcIjAgMCAyNCAyNFwifSB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IGZpbGw9XCJjdXJyZW50Y29sb3JcIj5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwLjI5NSAxOS43MTVhMSAxIDAgMCAwIDEuNDA0LTEuNDI0bC01LjM3LTUuMjkyaDEzLjY3YTEgMSAwIDAgMCAwLTJINi4zMzZMMTEuNyA1LjcxNGExIDEgMCAwIDAtMS40MDQtMS40MjRMMy4zNyAxMS4xMTJhMS4yNSAxLjI1IDAgMCAwIDAgMS43OHpcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfX2l0ZW0taGlzdG9yeS1idXR0b25cIj5cclxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PXtcIjAgMCAyNCAyNFwifSB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IGZpbGw9XCJjdXJyZW50Y29sb3JcIj5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEzLjcwNSA0LjI4NEExIDEgMCAxIDAgMTIuMyA1LjcwOEwxNy42NyAxMUg0YTEgMSAwIDEgMCAwIDJoMTMuNjY1TDEyLjMgMTguMjg1YTEgMSAwIDAgMCAxLjQwMyAxLjQyNGw2LjkyNS02LjgyMmExLjI1IDEuMjUgMCAwIDAgMC0xLjc4elwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfX2l0ZW0tYnV0dG9uXCI+XHJcbiAgICAgICAgICA8c3ZnIHZpZXdCb3g9e1wiMCAwIDc2LjQ2NSA2OC4yNjJcIn0gd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBmaWxsPVwiY3VycmVudGNvbG9yXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNjEuNDkgNTUuMDk1YTYuNSA2LjUgMCAwMTYuNSA2LjUgNi41IDYuNSAwIDAxLTYuNSA2LjUgNi41IDYuNSAwIDAxLTYuNS02LjUwMSA2LjUgNi41IDAgMDE2LjUtNi41Wm0tMzguMjc0IDBhNi41IDYuNSAwIDAxNi41IDYuNSA2LjUgNi41IDAgMDEtNi41IDYuNSA2LjUgNi41IDAgMDEtNi41LTYuNTAxIDYuNSA2LjUgMCAwMTYuNS02LjVaTTE3LjU5MSAxMC45ODRsNC4wNjQgMjAuOTFINjEuMDY0bDYuMzkzLTIwLjkxSDE3LjU5Wk0uMDAxIDBIMTUuNDU1bC44NzIgNC40ODVINzYuMjQybC0xMC4zNSAzMy45MUgyMi45MThsMS4yIDYuMTcyaDQzLjYxdjYuNUgxOC43NkwxMC4wOTcgNi41SDBWMFpcIiAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9faXRlbSBuYXZiYXJfX2l0ZW0tLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX19pdGVtLWJ1dHRvbiBuYXZiYXJfX2l0ZW0tYnV0dG9uLS1hY3RpdmVcIj5cclxuICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gZmlsbD1cImN1cnJlbnRjb2xvclwiPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEzLjUgMS41MTVhMyAzIDAgMCAwLTMgMEwzIDUuODQ1YTIgMiAwIDAgMC0xIDEuNzMyVjIxYTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xdi02aDR2NmExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMVY3LjU3N2EyIDIgMCAwIDAtMS0xLjczMmwtNy41LTQuMzN6XCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX19pdGVtLXNlYXJjaFwiPlxyXG4gICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBmaWxsPVwiY3VycmVudGNvbG9yXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAuNTMzIDEuMjc4OTNDNS4zNTIxNSAxLjI3ODkzIDEuMTI1OTggNS40MTg4NyAxLjEyNTk4IDEwLjU1NzlDMS4xMjU5OCAxNS42OTcgNS4zNTIxNSAxOS44MzY5IDEwLjUzMyAxOS44MzY5QzEyLjc2NyAxOS44MzY5IDE0LjgyMzUgMTkuMDY3MSAxNi40NDAyIDE3Ljc3OTRMMjAuNzkyOSAyMi4xMzJDMjEuMTgzNCAyMi41MjI2IDIxLjgxNjYgMjIuNTIyNiAyMi4yMDcxIDIyLjEzMkMyMi41OTc2IDIxLjc0MTUgMjIuNTk3NiAyMS4xMDgzIDIyLjIwNzEgMjAuNzE3OEwxNy44NjM0IDE2LjM3NDFDMTkuMTYxNiAxNC43ODQ5IDE5Ljk0IDEyLjc2MzQgMTkuOTQgMTAuNTU3OUMxOS45NCA1LjQxODg3IDE1LjcxMzggMS4yNzg5MyAxMC41MzMgMS4yNzg5M1pNMy4xMjU5OCAxMC41NTc5QzMuMTI1OTggNi41NTIyNiA2LjQyNzY4IDMuMjc4OTMgMTAuNTMzIDMuMjc4OTNDMTQuNjM4MyAzLjI3ODkzIDE3Ljk0IDYuNTUyMjYgMTcuOTQgMTAuNTU3OUMxNy45NCAxNC41NjM2IDE0LjYzODMgMTcuODM2OSAxMC41MzMgMTcuODM2OUM2LjQyNzY4IDE3LjgzNjkgMy4xMjU5OCAxNC41NjM2IDMuMTI1OTggMTAuNTU3OVpcIiAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8ZGl2PlNlYXJjaDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfX2l0ZW0gbmF2YmFyX19pdGVtLS1yaWdodFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX19pdGVtLWJ1dHRvblwiPlxyXG4gICAgICAgICAgPEljb25zLlJlYWN0LnNldHRpbmdzIHNpemU9ezE2fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX19pdGVtLXdpbmRvd3MtY29udHJvbHNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX19pdGVtLXdpbmRvd3MtY29udHJvbHMtYnRuXCIgb25DbGljaz17KGUpID0+IG9uTWluaW1pemUoaWQsIGUpfT5cclxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIj5cclxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjFcIiB5MT1cIjZcIiB4Mj1cIjExXCIgeTI9XCI2XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIuOVwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9faXRlbS13aW5kb3dzLWNvbnRyb2xzLWJ0blwiIG9uQ2xpY2s9eyhlKSA9PiBvbk1heGltaXplKGlkLCBlKX0+XHJcbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIi45XCI+XHJcbiAgICAgICAgICAgICAgPHJlY3QgeD1cIjEuNVwiIHk9XCIzLjVcIiB3aWR0aD1cIjdcIiBoZWlnaHQ9XCI3XCIgLz5cclxuICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMy41LDMuNSAzLjUsMS41IDEwLjUsMS41IDEwLjUsOC41IDguNSw4LjVcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfX2l0ZW0td2luZG93cy1jb250cm9scy1idG5cIiBvbkNsaWNrPXsoZSkgPT4gb25DbG9zZShpZCwgZSl9PlxyXG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMSwxIEwxMSwxMSBNMSwxMSBMMTEsMVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMS4xXCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2lkZWJhclBsYXlsaXN0SXRlbSA9ICh7IG5hbWUsIGluZm8gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0LWl0ZW1cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdC1pdGVtX19pbWFnZVwiPlxyXG4gICAgICAgIDxQbGF5bGlzdEljb24gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3QtaXRlbV9faW5mb1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3QtaXRlbV9fbmFtZVwiPntuYW1lfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3QtaXRlbV9fZGVzY3JpcHRpb25cIj57aW5mb308L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhcl9faGVhZGVyXCI+WW91ciBMaWJyYXJ5PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpcHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaXBzX19pdGVtIGNoaXBzX19pdGVtLS1hY3RpdmVcIj5QbGF5bGlzdHM8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaXBzX19pdGVtXCI+QXJ0aXN0czwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpcHNfX2l0ZW1cIj5Qb2RjYXN0czwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX19zZWFyY2hcIj5cclxuICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD17MTB9IGhlaWdodD17MTB9IGZpbGw9XCJjdXJyZW50Y29sb3JcIj5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNNyAxLjc1YTUuMjUgNS4yNSAwIDEgMCAwIDEwLjUgNS4yNSA1LjI1IDAgMCAwIDAtMTAuNXpNLjI1IDdhNi43NSA2Ljc1IDAgMSAxIDEyLjA5NiA0LjEybDMuMTg0IDMuMTg1YS43NS43NSAwIDEgMS0xLjA2IDEuMDZMMTEuMzA0IDEyLjJBNi43NSA2Ljc1IDAgMCAxIC4yNSA3elwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U2lkZWJhclBsYXlsaXN0SXRlbSBuYW1lPXtcIlBsYXlsaXN0IDFcIn0gaW5mbz17XCJQbGF5bGlzdC5Vc2VybmFtZVwifSAvPlxyXG4gICAgICA8U2lkZWJhclBsYXlsaXN0SXRlbSBuYW1lPXtcIlBsYXlsaXN0IDJcIn0gaW5mbz17XCJQbGF5bGlzdC5Vc2VybmFtZVwifSAvPlxyXG4gICAgICA8U2lkZWJhclBsYXlsaXN0SXRlbSBuYW1lPXtcIlBsYXlsaXN0IDNcIn0gaW5mbz17XCJQbGF5bGlzdC5Vc2VybmFtZVwifSAvPlxyXG4gICAgICA8U2lkZWJhclBsYXlsaXN0SXRlbSBuYW1lPXtcIlBsYXlsaXN0IDRcIn0gaW5mbz17XCJQbGF5bGlzdC5TcG90aWZ5XCJ9IC8+XHJcbiAgICAgIDxTaWRlYmFyUGxheWxpc3RJdGVtIG5hbWU9e1wiUGxheWxpc3QgNVwifSBpbmZvPXtcIlBsYXlsaXN0LlNwb3RpZnlcIn0gLz5cclxuICAgICAgPFNpZGViYXJQbGF5bGlzdEl0ZW0gbmFtZT17XCJTcG90aWZ5XCJ9IGluZm89e1wiU3BvdGlmeVwifSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE5vd1BsYXlpbmdCYXJCdXR0b24gPSAoeyBwYXRoLCBwYXRoMiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibm93LXBsYXlpbmctYmFyX19idXR0b25cIj5cclxuICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9ezEyfSBoZWlnaHQ9ezEyfSBmaWxsPVwiY3VycmVudGNvbG9yXCI+XHJcbiAgICAgICAgPHBhdGggZD17cGF0aH0gLz5cclxuICAgICAgICA8cGF0aCBkPXtwYXRoMn0gLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTm93UGxheWluZ0JhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3ctcGxheWluZy1iYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdy1wbGF5aW5nLWJhcl9faXRlbSBub3ctcGxheWluZy1iYXJfX2l0ZW0tLWxlZnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm93LXBsYXlpbmctYmFyX19jb3Zlci1hcnRcIj5cclxuICAgICAgICAgICAgPFRyYWNrSWNvbiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdy1wbGF5aW5nLWJhcl9faW5mb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdy1wbGF5aW5nLWJhcl9faW5mby10aXRsZVwiPlRyYWNrIFRpdGxlPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm93LXBsYXlpbmctYmFyX19pbmZvLWFydGlzdFwiPkFydGlzdCBOYW1lPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxOb3dQbGF5aW5nQmFyQnV0dG9uXHJcbiAgICAgICAgICAgIHBhdGg9e1xyXG4gICAgICAgICAgICAgIFwiTTAgOGE4IDggMCAxIDEgMTYgMEE4IDggMCAwIDEgMCA4em0xMS43NDgtMS45N2EuNzUuNzUgMCAwIDAtMS4wNi0xLjA2bC00LjQ3IDQuNDctMS40MDUtMS40MDZhLjc1Ljc1IDAgMSAwLTEuMDYxIDEuMDZsMi40NjYgMi40NjcgNS41My01LjUzelwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3ctcGxheWluZy1iYXJfX2l0ZW0gbm93LXBsYXlpbmctYmFyX19pdGVtLS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm93LXBsYXlpbmctYmFyX19jb250cm9sc1wiPlxyXG4gICAgICAgICAgICA8Tm93UGxheWluZ0JhckJ1dHRvblxyXG4gICAgICAgICAgICAgIHBhdGg9e1xyXG4gICAgICAgICAgICAgICAgXCJNMTMuMTUxLjkyMmEuNzUuNzUgMCAxIDAtMS4wNiAxLjA2TDEzLjEwOSAzSDExLjE2YTMuNzUgMy43NSAwIDAgMC0yLjg3MyAxLjM0bC02LjE3MyA3LjM1NkEyLjI1IDIuMjUgMCAwIDEgLjM5IDEyLjVIMFYxNGguMzkxYTMuNzUgMy43NSAwIDAgMCAyLjg3My0xLjM0bDYuMTczLTcuMzU2YTIuMjUgMi4yNSAwIDAgMSAxLjcyNC0uODA0aDEuOTQ3bC0xLjAxNyAxLjAxOGEuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDE1Ljk4IDMuNzUgMTMuMTUuOTIyek0uMzkxIDMuNUgwVjJoLjM5MWMxLjEwOSAwIDIuMTYuNDkgMi44NzMgMS4zNEw0Ljg5IDUuMjc3bC0uOTc5IDEuMTY3LTEuNzk2LTIuMTRBMi4yNSAyLjI1IDAgMCAwIC4zOSAzLjV6XCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcGF0aDI9e1xyXG4gICAgICAgICAgICAgICAgXCJtNy41IDEwLjcyMy45OC0xLjE2Ny45NTcgMS4xNGEyLjI1IDIuMjUgMCAwIDAgMS43MjQuODA0aDEuOTQ3bC0xLjAxNy0xLjAxOGEuNzUuNzUgMCAxIDEgMS4wNi0xLjA2bDIuODI5IDIuODI4LTIuODI5IDIuODI4YS43NS43NSAwIDEgMS0xLjA2LTEuMDZMMTMuMTA5IDEzSDExLjE2YTMuNzUgMy43NSAwIDAgMS0yLjg3My0xLjM0bC0uNzg3LS45Mzh6XCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxOb3dQbGF5aW5nQmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgcGF0aD17XHJcbiAgICAgICAgICAgICAgICBcIk0yLjA2MjUgMTVhLjc1Ljc1IDkwIDEwMS41IDBWM2EuNzUuNzUgOTAgMTAtMS41IDB2MTJaTTE1LjU2MjUgMTQuMjg5OGMwIDEuMDY4LTEuMjA5IDEuNjg5LTIuMDc3NSAxLjA2NjVMNS42MzI1IDkuNzI2YTEuMzEyNSAxLjMxMjUgOTAgMDEuMDU2Mi0yLjE3MTNsNy44NTI1LTUuMDM3Yy44NzM4LS41NjEgMi4wMjEyLjA2NjggMi4wMjEyIDEuMTA0OHYxMC42NjczWlwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdy1wbGF5aW5nLWJhcl9fYnV0dG9uIG5vdy1wbGF5aW5nLWJhcl9fYnV0dG9uLS1wbGF5XCI+XHJcbiAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBmaWxsPVwiY3VycmVudGNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMuMzMzMyAzLjUxNmMwLTEuMTM4IDEuMjE3My0xLjg2MTMgMi4yMTY3LTEuMzE4bDguMjQxMyA0LjQ4NGMxLjA0NC41Njg3IDEuMDQ0IDIuMDY3MyAwIDIuNjM1M0w1LjU1IDEzLjgwMTNDNC41NTA3IDE0LjM0NTMgMy4zMzMzIDEzLjYyMTMgMy4zMzMzIDEyLjQ4NFYzLjUxNlpcIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE5vd1BsYXlpbmdCYXJCdXR0b25cclxuICAgICAgICAgICAgICBwYXRoPXtcclxuICAgICAgICAgICAgICAgIFwiTTEyLjcgMWEuNy43IDAgMCAwLS43Ljd2NS4xNUwyLjA1IDEuMTA3QS43LjcgMCAwIDAgMSAxLjcxMnYxMi41NzVhLjcuNyAwIDAgMCAxLjA1LjYwN0wxMiA5LjE0OVYxNC4zYS43LjcgMCAwIDAgLjcuN2gxLjZhLjcuNyAwIDAgMCAuNy0uN1YxLjdhLjcuNyAwIDAgMC0uNy0uN2gtMS42elwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Tm93UGxheWluZ0JhckJ1dHRvblxyXG4gICAgICAgICAgICAgIHBhdGg9e1xyXG4gICAgICAgICAgICAgICAgXCJNMCA0Ljc1QTMuNzUgMy43NSAwIDAgMSAzLjc1IDFoOC41QTMuNzUgMy43NSAwIDAgMSAxNiA0Ljc1djVhMy43NSAzLjc1IDAgMCAxLTMuNzUgMy43NUg5LjgxbDEuMDE4IDEuMDE4YS43NS43NSAwIDEgMS0xLjA2IDEuMDZMNi45MzkgMTIuNzVsMi44MjktMi44MjhhLjc1Ljc1IDAgMSAxIDEuMDYgMS4wNkw5LjgxMSAxMmgyLjQzOWEyLjI1IDIuMjUgMCAwIDAgMi4yNS0yLjI1di01YTIuMjUgMi4yNSAwIDAgMC0yLjI1LTIuMjVoLTguNUEyLjI1IDIuMjUgMCAwIDAgMS41IDQuNzV2NUEyLjI1IDIuMjUgMCAwIDAgMy43NSAxMkg1djEuNUgzLjc1QTMuNzUgMy43NSAwIDAgMSAwIDkuNzV2LTV6XCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm93LXBsYXlpbmctYmFyX19wcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdy1wbGF5aW5nLWJhcl9fcHJvZ3Jlc3MtdGltZVwiPjA6MDA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3ctcGxheWluZy1iYXJfX3Byb2dyZXNzLWJhclwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm93LXBsYXlpbmctYmFyX19wcm9ncmVzcy10aW1lXCI+MzozMDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3ctcGxheWluZy1iYXJfX2l0ZW0gbm93LXBsYXlpbmctYmFyX19pdGVtLS1yaWdodFwiPlxyXG4gICAgICAgICAgPE5vd1BsYXlpbmdCYXJCdXR0b25cclxuICAgICAgICAgICAgcGF0aD17XHJcbiAgICAgICAgICAgICAgXCJNMTUgMTVIMXYtMS41aDE0em0wLTQuNUgxVjloMTR6bS0xNC03QTIuNSAyLjUgMCAwIDEgMy41IDFoOWEyLjUgMi41IDAgMCAxIDAgNWgtOUEyLjUgMi41IDAgMCAxIDEgMy41bTIuNS0xYTEgMSAwIDAgMCAwIDJoOWExIDEgMCAxIDAgMC0yelwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdy1wbGF5aW5nLWJhcl9fdm9sdW1lXCI+XHJcbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPXsxMn0gaGVpZ2h0PXsxMn0gZmlsbD1cImN1cnJlbnRjb2xvclwiPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOS43NDEuODVhLjc1Ljc1IDAgMCAxIC4zNzUuNjV2MTNhLjc1Ljc1IDAgMCAxLTEuMTI1LjY1bC02LjkyNS00YTMuNjQyIDMuNjQyIDAgMCAxLTEuMzMtNC45NjcgMy42MzkgMy42MzkgMCAwIDEgMS4zMy0xLjMzMmw2LjkyNS00YS43NS43NSAwIDAgMSAuNzUgMHptLTYuOTI0IDUuM2EyLjEzOSAyLjEzOSAwIDAgMCAwIDMuN2w1LjggMy4zNVYyLjhsLTUuOCAzLjM1em04LjY4MyA2LjA4N2E0LjUwMiA0LjUwMiAwIDAgMCAwLTguNDc0djEuNjVhMi45OTkgMi45OTkgMCAwIDEgMCA1LjE3NXYxLjY0OXpcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3ctcGxheWluZy1iYXJfX3ZvbHVtZS1iYXJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Tm93UGxheWluZ0JhckJ1dHRvblxyXG4gICAgICAgICAgICBwYXRoPXtcclxuICAgICAgICAgICAgICBcIk0wLjI1IDNDMC4yNSAyLjAzMzUgMS4wMzM1IDEuMjUgMiAxLjI1SDUuMzc1VjIuNzVIMkMxLjg2MTkzIDIuNzUgMS43NSAyLjg2MTkzIDEuNzUgM1Y1LjQyODU3SDAuMjVWM1pNMTQgMi43NUgxMC42MjVWMS4yNUgxNEMxNC45NjY1IDEuMjUgMTUuNzUgMi4wMzM1IDE1Ljc1IDNWNS40Mjg1N0gxNC4yNVYzQzE0LjI1IDIuODYxOTMgMTQuMTM4MSAyLjc1IDE0IDIuNzVaTTEuNzUgMTAuNTcxNFYxM0MxLjc1IDEzLjEzODEgMS44NjE5MyAxMy4yNSAyIDEzLjI1SDUuMzc1VjE0Ljc1SDJDMS4wMzM1IDE0Ljc1IDAuMjUgMTMuOTY2NSAwLjI1IDEzVjEwLjU3MTRIMS43NVpNMTQuMjUgMTNWMTAuNTcxNEgxNS43NVYxM0MxNS43NSAxMy45NjY1IDE0Ljk2NjUgMTQuNzUgMTQgMTQuNzVIMTAuNjI1VjEzLjI1SDE0QzE0LjEzODEgMTMuMjUgMTQuMjUgMTMuMTM4MSAxNC4yNSAxM1pcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBNYWluSG9tZVNob3J0Y3V0SXRlbSA9ICh7IG5hbWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3J0Y3V0LWl0ZW1cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9ydGN1dC1pdGVtX19pbWFnZVwiPlxyXG4gICAgICAgIDxQbGF5bGlzdEljb24gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcnRjdXQtaXRlbV9fdGV4dFwiPntuYW1lfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE1haW5Ib21lQ2Fyb3VzZWxJdGVtID0gKHsgbmFtZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW1fX2ltYWdlXCI+XHJcbiAgICAgICAgPFRyYWNrSWNvbiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtX190ZXh0XCI+e25hbWV9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTWFpbkhvbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi12aWV3IG1haW4taG9tZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taG9tZV9fYmFja2dyb3VuZFwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpcHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaXBzX19pdGVtIGNoaXBzX19pdGVtLS1hY3RpdmVcIj5Ib21lPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlwc19faXRlbVwiPk11c2ljPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlwc19faXRlbVwiPlBvZGNhc3RzPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlwc19faXRlbVwiPkF1ZGlvYm9va3M8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ob21lX19zaG9ydGN1dHNcIj5cclxuICAgICAgICA8TWFpbkhvbWVTaG9ydGN1dEl0ZW0gbmFtZT17XCJQbGF5bGlzdCAxXCJ9IC8+XHJcbiAgICAgICAgPE1haW5Ib21lU2hvcnRjdXRJdGVtIG5hbWU9e1wiUGxheWxpc3QgMlwifSAvPlxyXG4gICAgICAgIDxNYWluSG9tZVNob3J0Y3V0SXRlbSBuYW1lPXtcIlBsYXlsaXN0IDNcIn0gLz5cclxuICAgICAgICA8TWFpbkhvbWVTaG9ydGN1dEl0ZW0gbmFtZT17XCJQbGF5bGlzdCA0XCJ9IC8+XHJcbiAgICAgICAgPE1haW5Ib21lU2hvcnRjdXRJdGVtIG5hbWU9e1wiUGxheWxpc3QgNVwifSAvPlxyXG4gICAgICAgIDxNYWluSG9tZVNob3J0Y3V0SXRlbSBuYW1lPXtcIlBsYXlsaXN0IDZcIn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ob21lX19oZWFkZXJcIj5NYWRlIGZvciB5b3U8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWhvbWVfX2Nhcm91c2VsXCI+XHJcbiAgICAgICAgPE1haW5Ib21lQ2Fyb3VzZWxJdGVtIG5hbWU9e1wiRGFpbHkgTWl4IDFcIn0gLz5cclxuICAgICAgICA8TWFpbkhvbWVDYXJvdXNlbEl0ZW0gbmFtZT17XCJEaXNjb3ZlciBXZWVrbHlcIn0gLz5cclxuICAgICAgICA8TWFpbkhvbWVDYXJvdXNlbEl0ZW0gbmFtZT17XCJSZWxlYXNlIFJhZGFyXCJ9IC8+XHJcbiAgICAgICAgPE1haW5Ib21lQ2Fyb3VzZWxJdGVtIG5hbWU9e1wiT24gUmVwZWF0XCJ9IC8+XHJcbiAgICAgICAgPE1haW5Ib21lQ2Fyb3VzZWxJdGVtIG5hbWU9e1wiUmVwZWF0IFJld2luZFwifSAvPlxyXG4gICAgICAgIDxNYWluSG9tZUNhcm91c2VsSXRlbSBuYW1lPXtcIkNyZWF0ZSBhIEJsZW5kXCJ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taG9tZV9faGVhZGVyXCI+UmVjZW50bHkgUGxheWVkPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ob21lX19jYXJvdXNlbFwiPlxyXG4gICAgICAgIDxNYWluSG9tZUNhcm91c2VsSXRlbSBuYW1lPXtcIlBsYXlsaXN0IDFcIn0gLz5cclxuICAgICAgICA8TWFpbkhvbWVDYXJvdXNlbEl0ZW0gbmFtZT17XCJQbGF5bGlzdCAyXCJ9IC8+XHJcbiAgICAgICAgPE1haW5Ib21lQ2Fyb3VzZWxJdGVtIG5hbWU9e1wiUGxheWxpc3QgM1wifSAvPlxyXG4gICAgICAgIDxNYWluSG9tZUNhcm91c2VsSXRlbSBuYW1lPXtcIlBsYXlsaXN0IDRcIn0gLz5cclxuICAgICAgICA8TWFpbkhvbWVDYXJvdXNlbEl0ZW0gbmFtZT17XCJQbGF5bGlzdCA1XCJ9IC8+XHJcbiAgICAgICAgPE1haW5Ib21lQ2Fyb3VzZWxJdGVtIG5hbWU9e1wiUGxheWxpc3QgNlwifSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWhvbWVfX2hlYWRlclwiPkp1bXAgYmFjayBpbjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taG9tZV9fY2Fyb3VzZWxcIj5cclxuICAgICAgICA8TWFpbkhvbWVDYXJvdXNlbEl0ZW0gbmFtZT17XCJQbGF5bGlzdCAxXCJ9IC8+XHJcbiAgICAgICAgPE1haW5Ib21lQ2Fyb3VzZWxJdGVtIG5hbWU9e1wiUGxheWxpc3QgMlwifSAvPlxyXG4gICAgICAgIDxNYWluSG9tZUNhcm91c2VsSXRlbSBuYW1lPXtcIlBsYXlsaXN0IDNcIn0gLz5cclxuICAgICAgICA8TWFpbkhvbWVDYXJvdXNlbEl0ZW0gbmFtZT17XCJQbGF5bGlzdCA0XCJ9IC8+XHJcbiAgICAgICAgPE1haW5Ib21lQ2Fyb3VzZWxJdGVtIG5hbWU9e1wiUGxheWxpc3QgNVwifSAvPlxyXG4gICAgICAgIDxNYWluSG9tZUNhcm91c2VsSXRlbSBuYW1lPXtcIlBsYXlsaXN0IDZcIn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ob21lX19oZWFkZXJcIj5KdW1wIGJhY2sgaW48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWhvbWVfX2Nhcm91c2VsXCI+XHJcbiAgICAgICAgPE1haW5Ib21lQ2Fyb3VzZWxJdGVtIG5hbWU9e1wiUGxheWxpc3QgMVwifSAvPlxyXG4gICAgICAgIDxNYWluSG9tZUNhcm91c2VsSXRlbSBuYW1lPXtcIlBsYXlsaXN0IDJcIn0gLz5cclxuICAgICAgICA8TWFpbkhvbWVDYXJvdXNlbEl0ZW0gbmFtZT17XCJQbGF5bGlzdCAzXCJ9IC8+XHJcbiAgICAgICAgPE1haW5Ib21lQ2Fyb3VzZWxJdGVtIG5hbWU9e1wiUGxheWxpc3QgNFwifSAvPlxyXG4gICAgICAgIDxNYWluSG9tZUNhcm91c2VsSXRlbSBuYW1lPXtcIlBsYXlsaXN0IDVcIn0gLz5cclxuICAgICAgICA8TWFpbkhvbWVDYXJvdXNlbEl0ZW0gbmFtZT17XCJQbGF5bGlzdCA2XCJ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFBsYXlsaXN0VHJhY2sgPSAoeyBudW0sIHRpdGxlLCBhcnRpc3QsIGFsYnVtLCB0aW1lIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdC10cmFja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0LXRyYWNrX19udW1iZXJcIj57bnVtfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0LXRyYWNrX19pbmZvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdC10cmFja19faW1hZ2VcIj5cclxuICAgICAgICAgIDxUcmFja0ljb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0LXRyYWNrX19kZXRhaWxzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0LXRyYWNrX190aXRsZVwiPnt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3QtdHJhY2tfX2FydGlzdFwiPnthcnRpc3R9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0LXRyYWNrX19hbGJ1bVwiPnthbGJ1bX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdC10cmFja19fdGltZVwiPnt0aW1lfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE1haW5QbGF5bGlzdCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXZpZXcgbWFpbi1wbGF5bGlzdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcGxheWxpc3RfX2JhY2tncm91bmRcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcGxheWxpc3RfX2hlYWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1wbGF5bGlzdF9faW1hZ2VcIj5cclxuICAgICAgICAgIDxQbGF5bGlzdEljb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcGxheWxpc3RfX2luZm9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1wbGF5bGlzdF9fdHlwZVwiPlBsYXlsaXN0PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcGxheWxpc3RfX3RpdGxlXCI+TXkgUGxheWxpc3Q8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1wbGF5bGlzdF9fb3duZXJcIj5Vc2VybmFtZTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXBsYXlsaXN0X19zdGF0c1wiPjUwIHNvbmdzLCAzIGhyIDIwIG1pbjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXBsYXlsaXN0X19jb250cm9sc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1wbGF5bGlzdF9fcGxheS1idXR0b25cIj5cclxuICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gZmlsbD1cImN1cnJlbnRjb2xvclwiPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTcuMDUgMy42MDZsMTMuNDkgNy43ODhhLjcuNyAwIDAxMCAxLjIxMkw3LjA1IDIwLjM5NEEuNy43IDAgMDE2IDE5Ljc4OFY0LjIxMmEuNy43IDAgMDExLjA1LS42MDZ6XCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1wbGF5bGlzdF9fbGlrZS1idXR0b25cIj5cclxuICAgICAgICAgIDxJY29ucy5SZWFjdC5zZXR0aW5ncyBzaXplPXsxMn0gLz4gey8qIEhlYXJ0IEljb24gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXBsYXlsaXN0X19tb3JlLWJ1dHRvblwiPlxyXG4gICAgICAgICAgPEljb25zLlJlYWN0LnNldHRpbmdzIHNpemU9ezEyfSAvPiB7LyogVGhyZWUgZG90cyBpY29uICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXBsYXlsaXN0X190cmFja2xpc3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0LXRyYWNrIHBsYXlsaXN0LXRyYWNrLS1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3QtdHJhY2tfX251bWJlclwiPiM8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3QtdHJhY2tfX2luZm9cIj5UaXRsZTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdC10cmFja19fYWxidW1cIj5BbGJ1bTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdC10cmFja19fdGltZVwiPlxyXG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD17MTJ9IGhlaWdodD17MTJ9IGZpbGw9XCJjdXJyZW50Y29sb3JcIj5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTggMS41YTYuNSA2LjUgMCAxMDAgMTMgNi41IDYuNSAwIDAwMC0xM3pNMCA4YTggOCAwIDExMTYgMEE4IDggMCAwMTAgOHpcIiAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOCAzLjI1YS43NS43NSAwIDAxLjc1Ljc1djMuMjVIMTFhLjc1Ljc1IDAgMDEwIDEuNUg3LjI1VjRBLjc1Ljc1IDAgMDE4IDMuMjV6XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UGxheWxpc3RUcmFjayBudW09ezF9IHRpdGxlPVwiVHJhY2sgMVwiIGFydGlzdD1cIkFydGlzdCAxXCIgYWxidW09XCJBbGJ1bSAxXCIgdGltZT1cIjM6NDVcIiAvPlxyXG4gICAgICAgIDxQbGF5bGlzdFRyYWNrIG51bT17Mn0gdGl0bGU9XCJUcmFjayAyXCIgYXJ0aXN0PVwiQXJ0aXN0IDFcIiBhbGJ1bT1cIkFsYnVtIDFcIiB0aW1lPVwiNDoxMFwiIC8+XHJcbiAgICAgICAgPFBsYXlsaXN0VHJhY2sgbnVtPXszfSB0aXRsZT1cIlRyYWNrIDNcIiBhcnRpc3Q9XCJBcnRpc3QgMlwiIGFsYnVtPVwiQWxidW0gMlwiIHRpbWU9XCIyOjU5XCIgLz5cclxuICAgICAgICA8UGxheWxpc3RUcmFjayBudW09ezR9IHRpdGxlPVwiVHJhY2sgNFwiIGFydGlzdD1cIkFydGlzdCAyXCIgYWxidW09XCJBbGJ1bSAyXCIgdGltZT1cIjU6MDJcIiAvPlxyXG4gICAgICAgIDxQbGF5bGlzdFRyYWNrIG51bT17NX0gdGl0bGU9XCJUcmFjayA1XCIgYXJ0aXN0PVwiQXJ0aXN0IDNcIiBhbGJ1bT1cIkFsYnVtIDNcIiB0aW1lPVwiMzoxNVwiIC8+XHJcbiAgICAgICAgPFBsYXlsaXN0VHJhY2sgbnVtPXs2fSB0aXRsZT1cIlRyYWNrIDZcIiBhcnRpc3Q9XCJBcnRpc3QgM1wiIGFsYnVtPVwiQWxidW0gM1wiIHRpbWU9XCI0OjIwXCIgLz5cclxuICAgICAgICA8UGxheWxpc3RUcmFjayBudW09ezd9IHRpdGxlPVwiVHJhY2sgN1wiIGFydGlzdD1cIkFydGlzdCAzXCIgYWxidW09XCJBbGJ1bSAzXCIgdGltZT1cIjI6NDVcIiAvPlxyXG4gICAgICAgIDxQbGF5bGlzdFRyYWNrIG51bT17OH0gdGl0bGU9XCJUcmFjayA4XCIgYXJ0aXN0PVwiQXJ0aXN0IDRcIiBhbGJ1bT1cIkFsYnVtIDRcIiB0aW1lPVwiMzozMFwiIC8+XHJcbiAgICAgICAgPFBsYXlsaXN0VHJhY2sgbnVtPXs5fSB0aXRsZT1cIlRyYWNrIDlcIiBhcnRpc3Q9XCJBcnRpc3QgNVwiIGFsYnVtPVwiQWxidW0gNVwiIHRpbWU9XCIzOjE1XCIgLz5cclxuICAgICAgICA8UGxheWxpc3RUcmFjayBudW09ezEwfSB0aXRsZT1cIlRyYWNrIDEwXCIgYXJ0aXN0PVwiQXJ0aXN0IDZcIiBhbGJ1bT1cIkFsYnVtIDZcIiB0aW1lPVwiMzoxNVwiIC8+XHJcbiAgICAgICAgPFBsYXlsaXN0VHJhY2sgbnVtPXsxMX0gdGl0bGU9XCJUcmFjayAxMVwiIGFydGlzdD1cIkFydGlzdCA2XCIgYWxidW09XCJBbGJ1bSA2XCIgdGltZT1cIjI6NDVcIiAvPlxyXG4gICAgICAgIDxQbGF5bGlzdFRyYWNrIG51bT17MTJ9IHRpdGxlPVwiVHJhY2sgMTJcIiBhcnRpc3Q9XCJBcnRpc3QgN1wiIGFsYnVtPVwiQWxidW0gN1wiIHRpbWU9XCIzOjMwXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJldmlldyA9ICh7IHNldHRpbmdzIH0pID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRSYWRpbywgc2V0U2VsZWN0ZWRSYWRpb10gPSB1c2VTdGF0ZShcImhvbWVcIik7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiU2V0dGluZ3M6XCIsIHNldHRpbmdzKTtcclxuXHJcbiAgY29uc3QgZGF0YVBhcnRzID0gW107XHJcblxyXG4gIGZvciAoY29uc3Qga2V5IGluIHNldHRpbmdzKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGtleSA9PT0gXCJjb2xvdXItc2NoZW1lXCIgfHxcclxuICAgICAga2V5ID09PSBcInNwb3RpZnktZm9udFwiIHx8XHJcbiAgICAgIGtleSA9PT0gXCJzcG90aWZ5LW1vZGVcIiB8fFxyXG4gICAgICBrZXkgPT09IFwidm9sdW1lLXBlcmNlbnRhZ2VcIiB8fFxyXG4gICAgICBrZXkgPT09IFwidGVzdC10b2dnbGVcIiB8fFxyXG4gICAgICBrZXkgPT09IFwidGVzdC1pbmNvbXBhdGlibGUtdG9nZ2xlXCIgfHxcclxuICAgICAga2V5ID09PSBcInRlc3QtaW5jb21wYXRpYmxlLWlucHV0XCIgfHxcclxuICAgICAga2V5ID09PSBcInRlc3QtaW5jb21wYXRpYmxlLWRyb3Bkb3duXCIgfHxcclxuICAgICAga2V5ID09PSBcInRlc3QtaW5wdXRcIiB8fFxyXG4gICAgICBrZXkgPT09IFwidGVzdC1kcm9wZG93blwiIHx8XHJcbiAgICAgIGtleSA9PT0gXCJ0ZXN0LXJldmVhbFwiIHx8XHJcbiAgICAgIGtleSA9PT0gXCJyZXZlYWxlZC10b2dnbGVcIiB8fFxyXG4gICAgICBrZXkgPT09IFwicmV2ZWFsZWQtaW5wdXRcIiB8fFxyXG4gICAgICBrZXkgPT09IFwicmV2ZWFsZWQtZHJvcGRvd25cIiB8fFxyXG4gICAgICBrZXkgPT09IFwidGVzdC1yYWRpb2J1dHRvblwiXHJcbiAgICApXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgY29uc3QgdmFsdWUgPSBzZXR0aW5nc1trZXldO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiICYmIHZhbHVlKSB7XHJcbiAgICAgIGRhdGFQYXJ0cy5wdXNoKGtleSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlICE9PSBcImJvb2xlYW5cIikge1xyXG4gICAgICBkYXRhUGFydHMucHVzaChgJHtrZXl9LSR7dmFsdWV9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRhU3RyaW5nID0gZGF0YVBhcnRzLmpvaW4oXCIgXCIpO1xyXG5cclxuICBjb25zdCBjb2xvdXJTY2hlbWUgPSBzZXR0aW5nc1tcImNvbG91ci1zY2hlbWVcIl07XHJcbiAgY29uc3Qgc3BvdGlmeUZvbnQgPSBzZXR0aW5nc1tcInNwb3RpZnktZm9udFwiXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld19faGVhZGVyXCI+XHJcbiAgICAgICAgPGgyPlByZXZpZXc8L2gyPlxyXG4gICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgb3B0aW9ucz17W1xyXG4gICAgICAgICAgICB7IGxhYmVsOiBcIkhvbWVcIiwgdmFsdWU6IFwiaG9tZVwiIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiUGxheWxpc3RcIiwgdmFsdWU6IFwicGxheWxpc3RcIiB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIG5hbWU9XCJkZWJ1Z1JhZGlvXCJcclxuICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZFJhZGlvfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NldFNlbGVjdGVkUmFkaW99XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3X19zcG90aWZ5LWFwcFwiXHJcbiAgICAgICAgY29sb3VyLXNjaGVtZT17Y29sb3VyU2NoZW1lfVxyXG4gICAgICAgIGRhdGE9e2RhdGFTdHJpbmcudHJpbSgpfVxyXG4gICAgICAgIHN0eWxlPXt7IFwiLS1wcmV2aWV3LWZvbnQtZmFtaWx5XCI6IHNwb3RpZnlGb250IH19XHJcbiAgICAgID5cclxuICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICB7c2VsZWN0ZWRSYWRpbyA9PT0gXCJwbGF5bGlzdFwiID8gPE1haW5QbGF5bGlzdCAvPiA6IDxNYWluSG9tZSAvPn1cclxuICAgICAgICA8Tm93UGxheWluZ0JhciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3O1xyXG4iLCAiaW1wb3J0IE1vdXNldHJhcCBmcm9tIFwiLi9kZWJ1Zy9Nb3VzZXRyYXBcIjtcclxuaW1wb3J0IGluaXRpYWxpc2VPcHRpb25zIGZyb20gXCIuL21lbnUvaGVscGVycy9pbml0aWFsaXNlT3B0aW9uc1wiO1xyXG5pbXBvcnQgU2V0dGluZ3NCdXR0b24gZnJvbSBcIi4vbWVudS9zZXR0aW5nc21lbnUvU2V0dGluZ3NCdXR0b25cIjtcclxuaW1wb3J0IENvbnNvbGUgZnJvbSBcIi4vdXRpbHMvQ29uc29sZVwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gXCIuL3V0aWxzL05vdGlmaWNhdGlvblwiO1xyXG5cclxuLy8gcnVuIG5weCByZWFjdC1kZXZ0b29scyBpbiBhIHRlcm1pbmFsLCBhbmQgY29weS1wYXN0ZSB0aGUgY29udGVudHMgb2YgaHR0cDovL2xvY2FsaG9zdDo4MDk3IGludG8geHB1aS5qc1xyXG4vLyBvciBhZGQgcmVhY3QgZGV2dG9vbHMgYXMgY2hyb21lIGV4dGVuc2lvblxyXG5cclxuLy8gVE9ETzpcclxuLy8gYWRkIHNhdmUgYW5kIHJlc2V0IGljb24gdG8gYnV0dG9uXHJcbi8vIE1ha2UgbWVudSBsb29rIG5pY2VyLiBJdCBsb29rcyBsaWtlIHNoaXQgcm5cclxuLy8gQWRkIHR5cGVzIG9mIGlucHV0IChudW1iZXIsIHN0cmluZylcclxuLy8gVXNlIGVzYnVpbGQgZm9yIGNzcyBzbyBpIGNhbiB1c2UgYmlvbWVcclxuLy8gUmVkbyBiYXNpY2FsbHkgYWxsIGNzcyBhcyBpdHMgdmVyeSBtZXNzeVxyXG4vLyBSZWRvIGFsbCBjbGFzc25hbWVzXHJcbi8vIFVzZSBhYnNvbHV0ZSBwYXRoIGluc3RlYWQgb2YgcmVsYXRpdmUgZm9yIGltcG9ydHMgKGVzYnVpbGQtcGx1Z2luLWFsaWFzKVxyXG4vLy5ib2R5LWRyYWctdG9wIG1ha2UgaXQgYmlnZ2VyXHJcbi8vIFVzZSBjdXN0b20gY29udGV4dG1lbnUgaWNvbnNcclxuLy8gQXV0byB1cGRhdGUgdGhlbWU/XHJcbi8vIEVWRU5UVUFMTFkgU1dJVENIIFRPIFRZUEVTQ1JJUFRcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRoZW1lKCkge1xyXG4gIGNvbnN0IHRpbWVvdXQgPSA1MDAwO1xyXG4gIGF3YWl0IFByb21pc2UucmFjZShbXHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gU3BpY2V0aWZ5LkV2ZW50cy53ZWJwYWNrTG9hZGVkLm9uKHJlc29sdmUpKTtcclxuICAgICAgd2hpbGUgKFxyXG4gICAgICAgICEoXHJcbiAgICAgICAgICBTcGljZXRpZnkuU25hY2tiYXIuZW5xdWV1ZUN1c3RvbVNuYWNrYmFyICYmXHJcbiAgICAgICAgICBTcGljZXRpZnkuU25hY2tiYXIuZW5xdWV1ZVNuYWNrYmFyICYmXHJcbiAgICAgICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUHJvZHVjdFN0YXRlQVBJLnByb2R1Y3RTdGF0ZUFwaVxyXG4gICAgICAgIClcclxuICAgICAgKSB7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwKSk7XHJcbiAgICAgIH1cclxuICAgIH0pKCksXHJcbiAgICBuZXcgUHJvbWlzZSgoXywgcmVqZWN0KSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChcIkluaXRpYWxpemF0aW9uIHRpbWVvdXRcIiksIHRpbWVvdXQpKSxcclxuICBdKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBgJHtlcnJvcn06IEZhaWxlZCB0byBpbml0aWFsaXplIGFmdGVyICR7dGltZW91dCAvIDEwMDB9IHNlY29uZHMuIFNvbWUgZmVhdHVyZXMgbWF5IG5vdCB3b3JrLmAsXHJcbiAgICApO1xyXG4gICAgTm90aWZpY2F0aW9uKHtcclxuICAgICAgYXV0b0hpZGVEdXJhdGlvbjogMTAwMDAsXHJcbiAgICAgIGlzV2FybmluZzogdHJ1ZSxcclxuICAgICAgbWVzc2FnZTogKFxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAge2Vycm9yfTogRmFpbGVkIHRvIGluaXRpYWxpemUgYWZ0ZXIge3RpbWVvdXQgLyAxMDAwfSBzZWNvbmRzLiBTb21lIGZlYXR1cmVzIG1heSBub3Qgd29yay5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICksXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgQ29uc29sZS5Mb2coXCJTcGljZXRpZnkgdGhlbWUgaW5pdGlhbGlzaW5nXCIpO1xyXG5cclxuICBTcGljZXRpZnkuTW91c2V0cmFwLmJpbmQoW1wiZXNjYXBlXCJdLCAoKSA9PiB7XHJcbiAgICBTcGljZXRpZnkuUG9wdXBNb2RhbC5oaWRlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IE1JTl9QQVRDSF9WRVJTSU9OID0gNjY7XHJcbiAgY29uc3QgTUFYX1BBVENIX1ZFUlNJT04gPSA2NztcclxuICBjb25zdCBbbWFqb3IsIG1pbm9yLCBwYXRjaF0gPSBTcGljZXRpZnkuUGxhdGZvcm0udmVyc2lvbi5zcGxpdChcIi5cIikubWFwKE51bWJlcik7XHJcbiAgY29uc3QgaXNTdXBwb3J0ZWRWZXJzaW9uID0gcGF0Y2ggPj0gTUlOX1BBVENIX1ZFUlNJT04gJiYgcGF0Y2ggPD0gTUFYX1BBVENIX1ZFUlNJT047XHJcblxyXG4gIGlmICghaXNTdXBwb3J0ZWRWZXJzaW9uKSB7XHJcbiAgICBOb3RpZmljYXRpb24oe1xyXG4gICAgICBhdXRvSGlkZUR1cmF0aW9uOiA1MDAwLFxyXG4gICAgICBpc1dhcm5pbmc6IHRydWUsXHJcbiAgICAgIG1lc3NhZ2U6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIFRoZW1lIHN1cHBvcnRzIFNwb3RpZnkgdnttYWpvcn0ue21pbm9yfS57TUlOX1BBVENIX1ZFUlNJT059IHRvIHZ7bWFqb3J9LnttaW5vcn0uXHJcbiAgICAgICAgICAgIHtNQVhfUEFUQ0hfVkVSU0lPTn0uIFlvdXIgdmVyc2lvbjoge21ham9yfS57bWlub3J9LntwYXRjaH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgTW91c2V0cmFwKCk7XHJcbiAgU2V0dGluZ3NCdXR0b24oKTtcclxuICBpbml0aWFsaXNlT3B0aW9ucygpO1xyXG5cclxuICBDb25zb2xlLkxvZyhcIlNwaWNldGlmeSB0aGVtZSBpbml0aWFsaXNlZFwiKTtcclxufVxyXG5cclxudGhlbWUoKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxXQUFPLFVBQVUsVUFBVTtBQUFBO0FBQUE7OztBQ0EzQjtBQUFBO0FBQUEsV0FBTyxVQUFVLFVBQVU7QUFBQTtBQUFBOzs7QUNBM0I7QUFBQTtBQUFBLFdBQU8sVUFBVSxVQUFVO0FBQUE7QUFBQTs7O0FDQTNCLG1CQUE0QjtBQUM1Qix1QkFBcUI7OztBQ2tDZjtBQW5DTixJQUFNLFFBQVE7QUFBQTtBQUFBLEVBRVosWUFDRTtBQUFBO0FBQUEsRUFFRixVQUNFO0FBQUE7QUFBQSxFQUVGLFFBQ0U7QUFBQTtBQUFBLEVBRUYsT0FDRTtBQUFBO0FBQUEsRUFFRixTQUNFO0FBQUE7QUFBQSxFQUVGLE1BQU07QUFBQTtBQUFBLEVBRU4sY0FDRTtBQUFBO0FBQUEsRUFFRixVQUNFO0FBQUE7QUFBQSxFQUVGLFNBQ0U7QUFBQTtBQUFBLEVBRUYsV0FDRTtBQUNKO0FBRUEsSUFBTSxpQkFBaUIsQ0FBQyxNQUFNLGNBQWMsT0FBTztBQUNqRCxTQUFPLENBQUMsRUFBRSxPQUFPLGFBQWEsT0FBTyxlQUFlLE1BQ2xELDRDQUFDLFNBQUksU0FBUyxPQUFPLFdBQVcsSUFBSSxXQUFXLElBQUksT0FBTyxNQUFNLFFB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WCxTQUNFLCtFQUNFLHlEQUFDLFVBQUs7QUFBQTtBQUFBLFFBQ3FCO0FBQUEsUUFBTTtBQUFBLFFBQUU7QUFBQSxRQUFNO0FBQUEsUUFBRTtBQUFBLFFBQWtCO0FBQUEsUUFBTTtBQUFBLFFBQU07QUFBQSxRQUFFO0FBQUEsUUFBTTtBQUFBLFFBQzlFO0FBQUEsUUFBa0I7QUFBQSxRQUFpQjtBQUFBLFFBQU07QUFBQSxRQUFFO0FBQUEsUUFBTTtBQUFBLFFBQUU7QUFBQSxTQUN0RCxHQUNGO0FBQUEsSUFFSixDQUFDO0FBQUEsRUFDSDtBQUVBLG9CQUFVO0FBQ1YseUJBQWU7QUFDZiw0QkFBa0I7QUFFbEIsa0JBQVEsSUFBSSw2QkFBNkI7QUFDM0M7QUFFQSxNQUFNOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfanN4X3J1bnRpbWUiLCAiUmVhY3RET00iLCAiUmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAib3B0aW9ucyIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAib3B0aW9ucyIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJvcHRpb25zIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3JlYWN0IiwgIm9wdGlvbnMiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgInNjaGVtZVRhZyIsICJzaWRlYmFyU3RhdGVMaXN0ZW5lciIsICJ2b2x1bWVCYXIiLCAiYWxsT3B0aW9ucyIsICJpbXBvcnRfcmVhY3RfZG9tIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3RfZG9tIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJvbkNsb3NlIiwgIkNvbmZpcm1EaWFsb2ciLCAiUmVhY3RET00iLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJhbGxPcHRpb25zIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3JlYWN0IiwgImFsbE9wdGlvbnMiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgIlJlYWN0RE9NIiwgIlNldHRpbmdzQnV0dG9uIiwgImltcG9ydF9qc3hfcnVudGltZSJdCn0K
