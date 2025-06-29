import Notification from "../utils/Notification";

const ColourScheme = async (scheme) => {
  if (scheme === "default") {
    const schemeTag = document.querySelector("style.customColourScheme");
    schemeTag?.remove();
    return;
  }

  const response = await fetch(
    "https://raw.githubusercontent.com/veryboringhwl/spicetify/main/dist/color.ini",
  );
  if (!response.ok) {
    Notification({
      isWarning: true,
      autoHideDuration: 10000,
      message:
        "Unable to fetch the colour scheme options. You won't be able to change the colour scheme using the settings menu.",
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
    const rgb =
      value.length === 3
        ? value
            .split("")
            .map((char) => Number.parseInt(char + char, 16))
            .join(", ")
        : value
            .match(/\w\w/g)
            .map((x) => Number.parseInt(x, 16))
            .join(", ");
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

export default ColourScheme;
