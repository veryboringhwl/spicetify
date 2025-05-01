import LocalStorage from "../../utils/LocalStorage";

function getInitialOptions(optionList) {
  const acc = {};
  for (const option of optionList) {
    const mainKey = `theme:${option.name}`;
    acc[mainKey] = LocalStorage.get(mainKey, option.defaultVal);
    if (option.reveal) {
      for (const subOption of option.reveal) {
        const subKey = `theme:${subOption.name}`;
        acc[subKey] = acc[mainKey] ? LocalStorage.get(subKey, subOption.defaultVal) : false;
      }
    }
  }
  return acc;
}

export default getInitialOptions;
