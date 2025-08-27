import { Notification } from "../utils/Notification.tsx";

interface ColourSchemeData {
  [key: string]: {
    [key: string]: string;
  };
}

let cachedIniContent: string | null = null;
let cachedColourSchemes: ColourSchemeData | null = null;

export const ColourScheme = async (scheme: string): Promise<void> => {
  if (scheme === "default") {
    document.querySelector("style.customColourScheme")?.remove();
    return;
  }

  try {
    if (!cachedIniContent) {
      const response = await fetch(
        "https://raw.githubusercontent.com/veryboringhwl/spicetify/main/dist/color.ini",
      );
      if (!response.ok) throw new Error("Failed to fetch color.ini");
      cachedIniContent = await response.text();
    }

    if (!cachedColourSchemes) {
      cachedColourSchemes = cachedIniContent
        .split(/[\r\n]+/)
        .reduce((acc: ColourSchemeData, line: string) => {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith(";") || trimmedLine === "") return acc;
          const sectionMatch = trimmedLine.match(/^\[([^\]]+)\]$/);
          if (sectionMatch) {
            acc[sectionMatch[1]] = {};
          } else {
            const paramMatch = trimmedLine.match(/^([^=]+?)\s*=\s*(.+)$/);
            if (paramMatch) {
              const [, key, value] = paramMatch;
              const currentSection = Object.keys(acc).pop();
              if (currentSection) {
                acc[currentSection][key] = value.split(";")[0].trim();
              }
            }
          }
          return acc;
        }, {});
    }

    const selectedScheme = cachedColourSchemes[scheme];
    if (!selectedScheme) return;

    const injectStr =
      Object.entries(selectedScheme).reduce((acc, [key, value]) => {
        if (!value) return acc;
        const rgb =
          value.length === 3
            ? value
                .split("")
                .map((char) => parseInt(char + char, 16))
                .join(", ")
            : value
                .match(/\w\w/g)
                ?.map((x) => parseInt(x, 16))
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
  } catch (error) {
    Notification({
      isWarning: true,
      autoHideDuration: 10000,
      message:
        "Unable to fetch the colour scheme options. You won't be able to change the colour scheme.",
    });
  }
};
