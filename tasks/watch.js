import { exec, spawn } from "node:child_process";
import fs from "node:fs";
import { join } from "node:path";
import readline from "node:readline";
import chokidar from "chokidar";
import esbuild from "esbuild";
import externalGlobalPlugin from "esbuild-plugin-external-global";
import WebSocket from "ws";

const getCurrentTime = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
};

let jsWatcher = null;
let cssWatcher = null;
let shouldWatchSpotify = false;

const watchJS = async () => {
  const OUT = "dist/theme.js";
  const SRC = "src/js/app.jsx";
  const SPICETIFY_OUT = join(process.env.APPDATA, "spicetify", "Themes", "boring", "theme.js");
  const SPOTIFY_OUT = join(
    process.env.APPDATA,
    "Spotify",
    "Apps",
    "xpui",
    "extensions",
    "theme.js",
  );

  jsWatcher = await esbuild.context({
    format: "esm",
    target: "es2024",
    platform: "browser",
    bundle: true,
    sourcemap: "inline",
    entryPoints: [SRC],
    outfile: OUT,
    minify: false,
    jsx: "automatic",
    plugins: [
      externalGlobalPlugin.externalGlobalPlugin({
        react: "Spicetify.React",
        "react-dom": "Spicetify.ReactDOM",
        "react/jsx-runtime": "Spicetify.ReactJSX",
      }),
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
    banner: {
      js: `(async function() {
        while (!Spicetify.React || !Spicetify.ReactDOM) {
          await new Promise(resolve => setTimeout(resolve, 1));
        }`,
    },
    footer: {
      js: "})();",
    },
  });

  await jsWatcher.watch();

  chokidar.watch(OUT).on("change", async () => {
    console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m JavaScript Changes Detected.`);
    fs.copyFileSync(OUT, SPICETIFY_OUT);
    if (shouldWatchSpotify) {
      fs.copyFileSync(OUT, SPOTIFY_OUT);
      await reloadSpotify();
      console.log("Theme's JS was updated.");
    }
  });
  console.log("\x1b[36js watcher started.\x1b[0m");
};

const watchCSS = async () => {
  const OUT = "dist/user.css";
  const SRC = "src/css/app.scss";
  const SPICETIFY_OUT = join(process.env.APPDATA, "spicetify", "Themes", "boring", "user.css");
  const SPOTIFY_OUT = join(process.env.APPDATA, "Spotify", "Apps", "xpui", "user.css");

  //sass doesnt have node api
  cssWatcher = exec(`sass ${SRC} ${OUT} --watch --no-source-map`, {
    stdio: "ignore",
  });

  chokidar.watch(OUT).on("change", async () => {
    console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m CSS Changes Detected.`);
    fs.copyFileSync(OUT, SPICETIFY_OUT);
    if (shouldWatchSpotify) {
      fs.copyFileSync(OUT, SPOTIFY_OUT);
      await reloadSpotify();
      console.log("Theme's CSS was updated.");
    }
  });

  console.log("\x1b[36mCSS watcher started.\x1b[0m");
};

const watchSpotify = async () => {
  console.log("\x1b[36mWatching Spotify\x1b[0m");

  new Promise((resolve) => spawn("taskkill", ["/F", "/IM", "spotify.exe"]).on("close", resolve));

  const file = fs.readFileSync(join(process.env.LOCALAPPDATA, "Spotify", "offline.bnk"));
  for (const pos of [file.indexOf("app-developer") + 14, file.lastIndexOf("app-developer") + 15]) {
    file[pos] = 50;
  }
  fs.writeFileSync(join(process.env.LOCALAPPDATA, "Spotify", "offline.bnk"), file);
  // timeouts as other wise spotify doesnt open
  await new Promise((resolve) => setTimeout(resolve, 1000));
  spawn(join(process.env.APPDATA, "Spotify", "Spotify.exe"), ["--remote-debugging-port=9222"], {
    detached: true,
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

const reloadSpotify = async () => {
  try {
    const response = await fetch("http://localhost:9222/json/list");
    const wsUrl = (await response.json()).find((d) =>
      d.url.includes("spotify"),
    )?.webSocketDebuggerUrl;

    if (wsUrl) {
      await new Promise((resolve) => {
        const ws = new WebSocket(wsUrl);
        ws.once("open", () => {
          ws.send(
            JSON.stringify({
              id: 0,
              method: "Runtime.evaluate",
              params: { expression: "window.location.reload();" },
            }),
          );
          ws.close();
          resolve();
        });
      });
    }
  } catch {
    console.log("Couldnt reload Spotify, attempting to restart");
    watchSpotify();
  }
};

const args = process.argv.slice(2);
const runWatchers = async () => {
  const tasks = [];

  if (args.includes("--spicetify") || args.includes("--all")) {
    await watchSpotify();
    shouldWatchSpotify = true;
  }

  if (args.includes("--js") || args.includes("--all")) {
    tasks.push(watchJS());
  }

  if (args.includes("--css") || args.includes("--all")) {
    tasks.push(watchCSS());
  }

  await Promise.all(tasks);
};

runWatchers();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", async (input) => {
  const command = input.trim().toLowerCase();

  if (command === "format") {
    console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m Formatting...`);
    exec("npx biome check --fix --unsafe", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m ${stdout}`);
    });
  }
});

rl.on("SIGINT", async () => {
  console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m Exiting...`);

  if (cssWatcher) {
    await new Promise((resolve) => {
      cssWatcher.kill("SIGINT");
      console.log("\x1b[33mCSS watcher terminated.\x1b[0m");
      resolve();
    });
  }
  if (jsWatcher) {
    await jsWatcher.dispose();
    console.log("\x1b[33mJavaScript watcher terminated.\x1b[0m");
  }
  process.exit(0);
});
