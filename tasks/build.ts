import * as esbuild from "@esbuild/mod.js";
import { join } from "@std/path";

import externalGlobalsPlugin from "./pluginExternalGlobals.ts";
import importMapPlugin from "./pluginImportMap.ts";

// Deno bundle will have runtime api so can replace esbuild
const APPDATA: string = Deno.env.get("APPDATA") || "";
const LOCALAPPDATA: string = Deno.env.get("LOCALAPPDATA") || "";
const SPICETIFY_OUT: string = join(APPDATA, "spicetify", "Themes", "boring") || "";
const SPOTIFY_OUT: string = join(APPDATA, "Spotify", "Apps", "xpui") || "";

const buildJS = async () => {
  const OUT = "dist/theme.js";
  const SRC = "src/js/app.tsx";

  await esbuild.build({
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

  await Deno.copyFile(OUT, join(SPICETIFY_OUT, "theme.js"));
  console.log("\x1b[32mJavaScript build completed.\x1b[0m");
};

const buildCSS = async () => {
  const OUT = "dist/user.css";
  const SRC = "src/css/app.css";

  await esbuild.build({
    bundle: true,
    entryPoints: [SRC],
    outfile: OUT,
    minify: false,
  });

  await Deno.copyFile(OUT, join(SPICETIFY_OUT, "user.css"));
  console.log("\x1b[32mCSS build completed.\x1b[0m");
};

const killSpotify = async (): Promise<void> => {
  await new Deno.Command("taskkill", {
    args: ["/F", "/IM", "spotify.exe"],
  }).output();
};

const applySpotify = async () => {
  await Deno.copyFile("dist/theme.js", join(SPOTIFY_OUT, "extensions", "theme.js"));
  await Deno.copyFile("dist/user.css", join(SPOTIFY_OUT, "user.css"));

  const bnkPath = join(LOCALAPPDATA, "Spotify", "offline.bnk");
  try {
    const decoder = new TextDecoder("utf-8");
    const fileBytes = await Deno.readFile(bnkPath);
    const content = decoder.decode(fileBytes);

    const pattern = /(?<=app-developer..|app-developer>)[01]/g;

    const modifiedBytes = new Uint8Array(fileBytes);
    let modified = false;
    let match;

    while ((match = pattern.exec(content)) !== null) {
      modifiedBytes[match.index] = "2".charCodeAt(0);
      modified = true;
    }

    if (modified) {
      await Deno.writeFile(bnkPath, modifiedBytes);
    }
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) {
      // It's fine if the file doesn't exist.
    } else {
      console.error(`\x1b[31mError patching "offline.bnk": ${e.message}\x1b[0m`);
    }
  }

  console.log("\x1b[36mFinished applying to Spotify\x1b[0m");
};

function startSpotify(): void {
  const spotifyExe = join(APPDATA, "Spotify", "Spotify.exe");
  new Deno.Command(spotifyExe, {
    detached: true,
  }).spawn();
  console.log("Spotify started.");
}

const args = Deno.args;

const runBuilds = async () => {
  const startTime = performance.now();

  const tasks = [];

  if (args.includes("--js") || args.includes("--all")) {
    tasks.push(buildJS());
  }

  if (args.includes("--css") || args.includes("--all")) {
    tasks.push(buildCSS());
  }

  await Promise.all(tasks);

  if (args.includes("--dev") || args.includes("--all")) {
    await killSpotify();
    await applySpotify();
    startSpotify();
  }

  const endTime = performance.now();
  const elapsed = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`\x1b[33mBuild completed in ${elapsed} seconds.\x1b[0m`);
  esbuild.stop();
  Deno.exit(0);
};

runBuilds();
