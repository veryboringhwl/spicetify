import { exec } from "node:child_process";
import fs from "node:fs";
import chokidar from "chokidar";
import esbuild from "esbuild";
import externalGlobalPlugin from "esbuild-plugin-external-global";
import wrapperPlugin from "./wrapperPlugin.js";

let jsWatcher = null;
let sassProcess = null;

const watchJS = async () => {
  const OUT = "dist/app.js";
  const SRC = "src/js/app.jsx";
  const PARENT_OUT = "../theme.js";

  jsWatcher = await esbuild.context({
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
  });

  await jsWatcher.watch();
  console.log("\x1b[32mWatching JavaScript for changes...\x1b[0m");

  chokidar.watch(OUT).on("change", () => {
    console.log("\x1b[32mJavaScript changes detected.\x1b[0m");
    fs.copyFileSync(OUT, PARENT_OUT);
    console.log("\x1b[32mTheme's JS was reloaded.\x1b[0m");
  });
};

const watchCSS = () => {
  const OUT = "dist/user.css";
  const SRC = "src/css/app.scss";
  const PARENT_OUT = "../user.css";

  sassProcess = exec(`sass ${SRC} ${OUT} --watch --no-source-map`, {
    stdio: "ignore",
  });
  console.log("\x1b[32mWatching CSS for changes...\x1b[0m");

  chokidar.watch(OUT).on("change", () => {
    console.log("\x1b[32mCSS changes detected.\x1b[0m");
    fs.copyFileSync(OUT, PARENT_OUT);
    console.log("\x1b[32mTheme's CSS was reloaded.\x1b[0m");
  });
};

process.stdin.resume();
process.on("SIGINT", async () => {
  await jsWatcher.dispose();
  sassProcess.kill("SIGINT");
  console.log("\x1b[32mWatch process terminated.\x1b[0m");
  process.exit(0);
});

const args = process.argv.slice(2);

if (args.includes("--js")) {
  watchJS();
}

if (args.includes("--css")) {
  watchCSS();
}
