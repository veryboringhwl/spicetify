import fs from "node:fs";

const wrapperPlugin = (outFile) => ({
  name: "wrapper",
  setup(build) {
    build.onEnd(async () => {
      const code = fs.readFileSync(outFile, "utf-8");
      const wrapped = `
        (async function() {
          while (!Spicetify.React || !Spicetify.ReactDOM) {
            await new Promise(resolve => setTimeout(resolve, 10));
          }
          ${code}
        })();`.trim();
      fs.writeFileSync(outFile, wrapped);
    });
  },
});

export default wrapperPlugin;
