import { spawn } from "node:child_process";
import fs from "node:fs";
import { join } from "node:path";
import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";

const runScript = async () => {
  const killProcess = spawn("taskkill", ["/F", "/IM", "spotify.exe"]);
  await new Promise((resolve) => killProcess.on("close", resolve));

  const file = fs.readFileSync(join(process.env.LOCALAPPDATA, "Spotify", "offline.bnk"));
  [file.indexOf("app-developer") + 14, file.lastIndexOf("app-developer") + 15].forEach((pos) => {
    file[pos] = 50;
  });
  fs.writeFileSync(join(process.env.LOCALAPPDATA, "Spotify", "offline.bnk"), file);
  console.log("Spotify offline.bnk modified.");

  const rl = createInterface({ input: stdin, output: stdout });
  await rl.question("Press Enter to continue: ");
  rl.close();

  console.log("Starting Spotify with debugging enabled...");
  spawn(join(process.env.APPDATA, "Spotify", "Spotify.exe"), ["--remote-debugging-port=9222"], {
    detached: true,
  });
  console.log("Spotify launch command issued.");

  console.log("Spotify debug script completed.");
  process.exit(0);
};

runScript();
