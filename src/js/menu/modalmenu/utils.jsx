export const applySettingToDOM = (option, value) => {
  if (option.run) {
    option.run(value);
  } else if (option.name.toLowerCase().includes("windowcontrol")) {
    document.documentElement.style.setProperty(
      `--windowcontrol-${option.name.replace("WindowsControl", "").toLowerCase()}`,
      value,
    );
  } else {
    document.body.classList.toggle(option.name, value);
  }
};
