const ColourScheme = async (scheme) => {
  if (scheme === "default") {
    document.querySelector("style.customColorScheme")?.remove();
    return;
  }

  const response = await fetch(
    "https://raw.githubusercontent.com/veryboringhwl/spicetify/main/src/color.ini"
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

  const injectStr =
    Object.entries(colourSchemes[scheme]).reduce((acc, [key, value]) => {
      const rgb =
        value.length === 3
          ? value
              .split("")
              .map((char) => parseInt(char + char, 16))
              .join(", ")
          : value
              .match(/\w\w/g)
              .map((x) => parseInt(x, 16))
              .join(", ");
      return `${acc}--spice-${key}:#${value};--spice-rgb-${key}:${rgb};`;
    }, ":root{") + "}";

  let schemeTag = document.querySelector("style.customColourScheme");
  if (!schemeTag) {
    schemeTag = document.createElement("style");
    schemeTag.classList.add("customColourScheme");
    document.body.appendChild(schemeTag);
  }
  schemeTag.textContent = injectStr;
};

export default ColourScheme;
