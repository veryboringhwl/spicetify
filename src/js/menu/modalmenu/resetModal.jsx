import LocalStorage from "../../utils/LocalStorage";

const resetModal = (options, setSettings) => {
  const defaultSettings = Object.fromEntries(
    options.map((option) => [option.name, option.defaultVal]),
  );
  setSettings(defaultSettings);
  options.forEach((option) => {
    const key = `theme:${option.name}`;
    LocalStorage.set(key, option.defaultVal);
    document.body.classList.toggle(option.name, option.defaultVal);
    if (option.run) {
      option.run(option.defaultVal);
    }
  });
};

export default resetModal;
