import { exec } from "node:child_process";
import fs from "node:fs";
import chokidar from "chokidar";
import esbuild from "esbuild";
import externalGlobalPlugin from "esbuild-plugin-external-global";

const getCurrentTime = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
};

let jsWatcher = null;
let sassProcess = null;

const watchJS = async () => {
  const OUT = "dist/theme.js";
  const SRC = "src/js/app.jsx";
  const PARENT_OUT = "../theme.js";

  jsWatcher = await esbuild.context({
    format: "esm",
    bundle: true,
    sourcemap: false,
    entryPoints: [SRC],
    outfile: OUT,
    external: ["react", "react-dom"],
    plugins: [
      externalGlobalPlugin.externalGlobalPlugin({
        react: "Spicetify.React",
        "react-dom": "Spicetify.ReactDOM",
      }),
    ],
    banner: {
      js: `
        (async function() {
          while (!Spicetify.React || !Spicetify.ReactDOM) {
            await new Promise(resolve => setTimeout(resolve, 1));
          }
      `.trim(),
    },
    footer: {
      js: `
        })();
      `.trim(),
    },
  });

  await jsWatcher.watch();

  chokidar.watch(OUT).on("change", () => {
    console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m JavaScript Changes Detected.`);
    fs.copyFileSync(OUT, PARENT_OUT);
    console.log("Theme's JS was updated.");
  });

  console.log("\x1b[36mJavaScript watcher started.\x1b[0m");
};

const watchCSS = () => {
  const OUT = "dist/user.css";
  const SRC = "src/css/app.scss";
  const PARENT_OUT = "../user.css";

  sassProcess = exec(`sass ${SRC} ${OUT} --watch --no-source-map`, {
    stdio: "ignore",
  });

  chokidar.watch(OUT).on("change", () => {
    console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m CSS Changes Detected.`);
    fs.copyFileSync(OUT, PARENT_OUT);
    console.log("Theme's CSS was updated.");
  });

  console.log("\x1b[36mCSS watcher started.\x1b[0m");
};

process.stdin.resume();
process.on("SIGINT", async () => {
  await jsWatcher.dispose();
  sassProcess.kill("SIGINT");
  console.log("\x1b[31mWatch process terminated.\x1b[0m");
  process.exit();
});

const args = process.argv.slice(2);

if (args.includes("--js")) {
  watchJS();
}

if (args.includes("--css")) {
  watchCSS();
}

if (args.includes("--all")) {
  watchJS();
  watchCSS();
}
