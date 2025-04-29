import { exec } from "node:child_process";
import fs from "node:fs";
import esbuild from "esbuild";
import externalGlobalPlugin from "esbuild-plugin-external-global";
import wrapperPlugin from "./wrapperPlugin.js";

const buildJS = async () => {
  const OUT = "dist/theme.js";
  const SRC = "src/js/app.jsx";
  const PARENT_OUT = "../theme.js";

  const buildConfig = {
    platform: "browser",
    external: ["react", "react-dom"],
    plugins: [
      externalGlobalPlugin.externalGlobalPlugin({
        react: "Spicetify.React",
        "react-dom": "Spicetify.ReactDOM",
      }),
      wrapperPlugin(OUT),
    ],
    entryPoints: [SRC],
    outfile: OUT,
    bundle: true,
    sourcemap: false,
  };

  await esbuild.build(buildConfig);

  fs.copyFileSync(OUT, PARENT_OUT);
  console.log("\x1b[32mJavaScript build completed.\x1b[0m");
};

const buildCSS = () => {
  const OUT = "dist/user.css";
  const SRC = "src/css/app.scss";
  const PARENT_OUT = "../user.css";

  exec(`sass ${SRC} ${OUT} --no-source-map`, () => {
    fs.copyFileSync(OUT, PARENT_OUT);
    console.log("\x1b[32mCSS build completed.\x1b[0m");
  });
};

const args = process.argv.slice(2);

if (args.includes("--js")) {
  await buildJS();
}

if (args.includes("--css")) {
  buildCSS();
}
