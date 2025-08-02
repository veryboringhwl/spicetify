import * as sass from "npm:sass";
import type { BuildContext } from "@esbuild/mod.d.ts";
import * as esbuild from "@esbuild/mod.js";
import { join } from "@std/path";
import { TextLineStream } from "@std/streams";
import externalGlobalsPlugin from "./pluginExternalGlobals.ts";
import importMapPlugin from "./pluginImportMap.ts";

const APPDATA: string = Deno.env.get("APPDATA") || "";
const LOCALAPPDATA: string = Deno.env.get("LOCALAPPDATA") || "";
const SPICETIFY_OUT: string = join(APPDATA, "spicetify", "Themes", "boring");
const SPOTIFY_OUT: string = join(APPDATA, "Spotify", "Apps", "xpui");

const getCurrentTime = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
};

let cssWatcher: BuildContext | null = null;
let jsWatcher: BuildContext | null = null;
let shouldWatchSpotify = false;

const watchJS = async () => {
  const SRC = "src/js/app.tsx";
  const OUT = "dist/theme.js";

  jsWatcher = await esbuild.context({
    format: "esm",
    target: "esnext",
    platform: "browser",
    bundle: true,
    sourcemap: "inline",
    entryPoints: [SRC],
    outfile: OUT,
    minify: false,
    jsx: "automatic",
    external: ["react", "react-dom/client", "react/jsx-runtime"],
    plugins: [
      externalGlobalsPlugin({
        react: "Spicetify.React",
        "react-dom/client": "Spicetify.ReactDOM",
        "react/jsx-runtime": "Spicetify.ReactJSX",
      }),
      importMapPlugin(),
      {
        name: "on-end-plugin",
        setup(build) {
          build.onEnd(async () => {
            console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m JavaScript Changes Detected.`);
            await Deno.copyFile(OUT, join(SPICETIFY_OUT, "theme.js"));
            if (shouldWatchSpotify) {
              await Deno.copyFile(OUT, join(SPOTIFY_OUT, "extensions", "theme.js"));
              await reloadSpotify();
              console.log("Theme's JS was updated in Spotify.");
            }
          });
        },
      },
    ],
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
  console.log("\x1b[36mJS watcher started.\x1b[0m");
};

const watchCSS = async () => {
  const SRC = "src/css/app.css";
  const OUT = "dist/user.css";

  cssWatcher = await esbuild.context({
    entryPoints: [SRC],
    outfile: OUT,
    bundle: true,
    minify: false,
    plugins: [
      {
        name: "on-end-plugin-css",
        setup(build) {
          build.onEnd(async () => {
            console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m CSS Changes Detected.`);
            await Deno.copyFile(OUT, join(SPICETIFY_OUT, "user.css"));
            if (shouldWatchSpotify) {
              await Deno.copyFile(OUT, join(SPOTIFY_OUT, "user.css"));
              await reloadSpotify();
              console.log("Theme's CSS was updated in Spotify.");
            }
          });
        },
      },
    ],
  });

  await cssWatcher.watch();
  console.log("\x1b[36mCSS watcher started.\x1b[0m");
};

const killSpotify = async (): Promise<void> => {
  await new Deno.Command("taskkill", {
    args: ["/F", "/IM", "spotify.exe"],
  }).output();
};

const watchSpotify = async () => {
  const bnkPath = join(LOCALAPPDATA, "Spotify", "offline.bnk");
  const fileBytes = await Deno.readFile(bnkPath);
  const content = new TextDecoder().decode(fileBytes);

  const firstLocation = content.indexOf("app-developer");
  const firstPatchLocation = firstLocation + 14;
  const secondLocation = content.lastIndexOf("app-developer");
  const secondPatchLocation = secondLocation + 15;

  const modifiedBytes = new Uint8Array(fileBytes);
  modifiedBytes[firstPatchLocation] = 50;
  modifiedBytes[secondPatchLocation] = 50;
  await Deno.writeFile(bnkPath, modifiedBytes);
};

const startSpotify = (): void => {
  const spotifyPath = join(APPDATA, "Spotify", "Spotify.exe");
  const startCommand = new Deno.Command(spotifyPath, {
    args: ["--remote-debugging-port=9222"],
    detached: true,
  });
  startCommand.spawn();
  console.log("Spotify started.");
};

interface DebuggerTarget {
  id: string;
  url: string;
  webSocketDebuggerUrl?: string;
}

interface RuntimeEvaluateMessage {
  id: number;
  method: string;
  params: {
    expression: string;
  };
}

const reloadSpotify = async (): Promise<void> => {
  try {
    const response = await fetch("http://localhost:9222/json/list");
    const targets: DebuggerTarget[] = await response.json();
    const wsUrl = targets.find((d) => d.url.includes("spotify"))?.webSocketDebuggerUrl;

    if (wsUrl) {
      const ws = new WebSocket(wsUrl);
      await new Promise<void>((resolve, reject) => {
        ws.onopen = () => {
          const message: RuntimeEvaluateMessage = {
            id: 0,
            method: "Runtime.evaluate",
            params: {
              expression: "window.location.reload();",
            },
          };
          ws.send(JSON.stringify(message));
          ws.close();
          resolve();
        };
        ws.onerror = (err) => reject(err);
      });
    }
  } catch {
    console.log("Couldn't reload Spotify, attempting to restart...");
    await killSpotify();
    await new Promise<void>((resolve) => setTimeout(resolve, 500));
    startSpotify();
  }
};

const runWatchers = async () => {
  const tasks = [];

  if (Deno.args.includes("--spicetify") || Deno.args.includes("--all")) {
    await watchSpotify();
    shouldWatchSpotify = true;
  }

  if (Deno.args.includes("--js") || Deno.args.includes("--all")) {
    tasks.push(watchJS());
  }

  if (Deno.args.includes("--css") || Deno.args.includes("--all")) {
    tasks.push(watchCSS());
  }

  await Promise.all(tasks);
};

runWatchers();

const runBiome = async (): Promise<void> => {
  const formatCommand = new Deno.Command("deno", {
    args: ["task", "check"],
  });
  const { stdout } = await formatCommand.output();
  console.log("Biome:", new TextDecoder().decode(stdout));
};

async function executeCommand(commandString: string): Promise<void> {
  console.log(`Executing: ${commandString}`);
  const [cmd, ...args] = commandString.split(" ");

  try {
    const command = new Deno.Command(cmd, {
      args,
      stdout: "inherit",
      stderr: "inherit",
      stdin: "inherit",
    });
    const status = await command.spawn().status;
    if (!status.success) {
      console.log(`Command exited with code ${status.code}`);
    }
  } catch (error) {
    console.log(error);
  }
}

const lineStream = Deno.stdin.readable
  .pipeThrough(new TextDecoderStream())
  .pipeThrough(new TextLineStream());

for await (const line of lineStream) {
  const command = line.trim();
  if (!command) continue;

  if (command === "format" || command === "check") {
    await runBiome();
  } else {
    await executeCommand(command);
  }
}

Deno.addSignalListener("SIGINT", async () => {
  console.log(`\n\x1b[32m[${getCurrentTime()}]\x1b[0m Exiting...`);

  if (jsWatcher) {
    await jsWatcher.dispose();
    console.log(`\x1b[33mJS watcher terminated.\x1b[0m`);
  }

  if (cssWatcher) {
    await cssWatcher.dispose();
    console.log(`\x1b[33mCSS watcher terminated.\x1b[0m`);
  }

  esbuild.stop();
  Deno.exit(0);
});
