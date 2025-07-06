import { spawn } from "node:child_process";
import fs from "node:fs";
import { join } from "node:path";
import esbuild from "esbuild";
import externalGlobalPlugin from "esbuild-plugin-external-global";
import { compileAsync } from "sass";

const buildJS = async () => {
  const OUT = "dist/theme.mjs";
  const SRC = "src/js/app.jsx";
  const SPICETIFY_OUT = join(process.env.APPDATA, "spicetify", "Themes", "boring", "theme.mjs");
  const buildConfig = {
    format: "esm",
    target: "es2024",
    platform: "browser",
    bundle: true,
    sourcemap: "inline",
    entryPoints: [SRC],
    outfile: OUT,
    minify: false,
    jsx: "automatic",
    external: ["react", "react-dom"],
    plugins: [
      externalGlobalPlugin.externalGlobalPlugin({
        react: "Spicetify.React",
        "react-dom": "Spicetify.ReactDOM",
        "react/jsx-runtime": "Spicetify.ReactJSX",
      }),
    ],
    banner: {
      js: `
          while (!Spicetify.React || !Spicetify.ReactDOM) {
            await new Promise(resolve => setTimeout(resolve, 10));
          }
              console.debug(
              "%c● ᴗ ● [Theme]%cTheme is running",
              "color:#272ab0; font-weight:1000; background:#ffffff; padding:3px; border:2px solid #272ab0; border-right:none; border-radius:3px 0 0 3px;",
              "color:#000000; background:#ffffff; padding:3px; border:2px solid #272ab0; border-left:none; border-radius:0 3px 3px 0;"
            );
    `.trim(),
    },
  };
  await esbuild.build(buildConfig);
  fs.copyFileSync(OUT, SPICETIFY_OUT);
  console.log("\x1b[32mJavaScript build completed.\x1b[0m");
};

const buildCSS = async () => {
  const OUT = "dist/user.css";
  const SRC = "src/css/app.scss";
  const SPICETIFY_OUT = join(process.env.APPDATA, "spicetify", "Themes", "boring", "user.css");

  const result = await compileAsync(SRC);
  fs.writeFileSync(OUT, result.css);
  fs.copyFileSync(OUT, SPICETIFY_OUT);

  console.log("\x1b[32mCSS build completed.\x1b[0m");
};

const applySpotify = async () => {
  console.log("\x1b[36mApplying to Spotify\x1b[0m");
  const killProccess = spawn("taskkill", ["/F", "/IM", "spotify.exe"]);
  await new Promise((resolve) => killProccess.on("close", resolve));

  const srcJS = join(process.cwd(), "dist", "theme.mjs");
  const srcCSS = join(process.cwd(), "dist", "user.css");

  const destJS = join(process.env.APPDATA, "Spotify", "Apps", "xpui", "extensions", "theme.mjs");
  const destCSS = join(process.env.APPDATA, "Spotify", "Apps", "xpui", "user.css");

  fs.copyFileSync(srcJS, destJS);
  fs.copyFileSync(srcCSS, destCSS);

  spawn(join(process.env.APPDATA, "Spotify", "Spotify.exe"), {
    detached: true,
  });

  console.log("\x1b[36mFinished applying to Spotify\x1b[0m");
};

const args = process.argv.slice(2);

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

  if (args.includes("--spicetify") || args.includes("--all")) {
    await applySpotify();
  }

  const endTime = performance.now();
  const elapsed = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`\x1b[33mBuild completed in ${elapsed} seconds.\x1b[0m`);
  process.exit(0);
};

runBuilds();
