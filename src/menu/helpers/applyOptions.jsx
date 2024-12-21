import options from "@/menu/settingsmenu/options";

const applyOptions = (settings) => {
  Object.values(options)
    .flat()
    .forEach(({ name, type, reveal, run }) => {
      const key = `theme:${name}`;
      const value = settings[key];
      if (type === "toggle") {
        document.body.classList.toggle(name, value);
      }
      if (reveal) {
        reveal.forEach(({ name: subName, type: subType }) => {
          if (subType === "toggle") {
            document.body.classList.toggle(
              subName,
              value && settings[`theme:${subName}`]
            );
          }
        });
      }
      if (run) run(value);
    });
};

export default applyOptions;
