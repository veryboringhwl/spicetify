import options from "@/menu/settingsmenu/options";
import applyOptions from "@/menu/helpers/applyOptions";
import { getLocalStorage } from "@/utils/LocalStorage";


const initialiseOptions = () => {
  const loadedOptions = Object.values(options)
    .flat()
    .reduce((acc, option) => {
      const mainKey = `theme:${option.name}`;
      acc[mainKey] = getLocalStorage(mainKey, option.defaultVal);
      if (option.reveal) {
        option.reveal.forEach((subOption) => {
          const subKey = `theme:${subOption.name}`;
          acc[subKey] = acc[mainKey]
            ? getLocalStorage(subKey, subOption.defaultVal)
            : false;
        });
      }
      return acc;
    }, {});

  applyOptions(loadedOptions);
  return loadedOptions;
};

export default initialiseOptions;
