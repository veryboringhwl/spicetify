import { exec } from "node:child_process";
import fs from "node:fs";
import esbuild from "esbuild";
import externalGlobalPlugin from "esbuild-plugin-external-global";
import { compileAsync } from "sass";

const buildJS = async () => {
  const OUT = "dist/theme.mjs";
  const SRC = "src/js/app.jsx";
  const buildConfig = {
    format: "esm",
    target: "es2024",
    platform: "browser",
    bundle: true,
    sourcemap: false,
    entryPoints: [SRC],
    outfile: OUT,
    minify: true,
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
    `,
    },
  };
  await esbuild.build(buildConfig);
  console.log("\x1b[32mJavaScript build completed.\x1b[0m");
};

const buildCSS = async () => {
  const OUT = "dist/user.css";
  const SRC = "src/css/app.scss";

  const result = await compileAsync(SRC, { style: "compressed" });
  fs.writeFileSync(OUT, result.css);

  console.log("\x1b[32mCSS build completed.\x1b[0m");
};

const runBuilds = async () => {
  const startTime = performance.now();

  await Promise.all([buildJS(), buildCSS()]);

  await new Promise((resolve, reject) => {
    exec("bunx biome check --fix --unsafe", (error, stdout, stderr) => {
      if (error) {
        console.error(`Biome Error: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.error(`Biome stderr: ${stderr}`);
      }
      console.log(`Biome stdout: ${stdout}`);
      resolve();
    });
  });

  const endTime = performance.now();
  const elapsed = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`\x1b[33mBuild completed in ${elapsed} seconds.\x1b[0m`);
  process.exit(0);
};

runBuilds();
