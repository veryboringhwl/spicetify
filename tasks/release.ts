import * as esbuild from "@esbuild/mod.js";
import { join } from "@std/path";

import externalGlobalsPlugin from "./pluginExternalGlobals.ts";
import importMapPlugin from "./pluginImportMap.ts";

const buildJS = async () => {
  const OUT = "dist/theme.js";
  const SRC = "src/js/app.tsx";
  await esbuild.build({
    format: "esm",
    target: "esnext",
    platform: "browser",
    bundle: true,
    sourcemap: false,
    entryPoints: [SRC],
    outfile: OUT,
    minify: true,
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
  console.log("\x1b[32mJavaScript build completed.\x1b[0m");
};

const buildCSS = async () => {
  const OUT = "dist/user.css";
  const SRC = "src/css/app.css";

  await esbuild.build({
    entryPoints: [SRC],
    outfile: OUT,
    bundle: true,
    minify: true,
  });

  console.log("\x1b[32mCSS build completed.\x1b[0m");
};

const runBiome = async (): Promise<void> => {
  const formatCommand = new Deno.Command("deno", {
    args: ["task", "check"],
  });
  const { stdout } = await formatCommand.output();
  console.log("Biome:", new TextDecoder().decode(stdout));
};

const runBuilds = async () => {
  const startTime = performance.now();

  await Promise.all([buildJS(), buildCSS()]);
  await runBiome();

  const endTime = performance.now();
  const elapsed = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`\x1b[33mBuild completed in ${elapsed} seconds.\x1b[0m`);
  process.exit(0);
};

runBuilds();
