import LocalStorage from "../../utils/LocalStorage.ts";

interface SubOption {
  name: string;
  defaultVal: any;
}

interface Option {
  name: string;
  defaultVal: any;
  reveal?: SubOption[];
}

function getInitialOptions(optionList: Option[]): Record<string, any> {
  const acc: Record<string, any> = {};
  for (const option of optionList) {
    const mainKey = option.name;
    acc[mainKey] = LocalStorage.get(mainKey, option.defaultVal);
    if (option.reveal) {
      for (const subOption of option.reveal) {
        const subKey = subOption.name;
        acc[subKey] = acc[mainKey] ? LocalStorage.get(subKey, subOption.defaultVal) : false;
      }
    }
  }
  return acc;
}

export default getInitialOptions;
