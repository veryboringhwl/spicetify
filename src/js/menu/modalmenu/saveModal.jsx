import LocalStorage from "../../utils/LocalStorage";

const saveModal = (settings, options) => {
  Object.entries(settings).forEach(([key, value]) => {
    LocalStorage.set(`theme:${key}`, value);
    document.body.classList.toggle(key, value);
    options.find((opt) => opt.name === key)?.run?.(value);
  });
};

export default saveModal;
