import path from 'path';
import esbuild from "esbuild";
import externalGlobalPlugin from 'esbuild-plugin-external-global';
import fs from 'fs';

const OUT = "dist";
const SRC = "src/js";
const entry = path.join(SRC, "app.jsx");
const outFile = path.join(OUT, "theme.js");

const wrapperPlugin = {
	name: 'wrapper',
	setup(build) {
		build.onEnd(async () => {
			const code = fs.readFileSync(outFile, "utf-8");
			const wrapped = `
        (async function() {
          while (!Spicetify.React || !Spicetify.ReactDOM) {
            await new Promise(resolve => setTimeout(resolve, 10));
           }
          ${code}
        })();`.trim();
			fs.writeFileSync(outFile, wrapped);
			console.log('\x1b[32m' + "Build succeeded." + '\x1b[0m');
		});
	},
};

const buildConfig = {
	platform: "browser",
	external: ['react', 'react-dom'],
	plugins: [
		externalGlobalPlugin.externalGlobalPlugin({
			'react': 'Spicetify.React',
			'react-dom': 'Spicetify.ReactDOM',
		}),
		wrapperPlugin,
	],
	entryPoints: [entry],
	outfile: outFile,
	bundle: true,
	sourcemap: false,
};

const args = process.argv.slice(2);
const isWatch = args.includes('--watch');

(async function build() {
	if (isWatch) {
		const ctx = await esbuild.context(buildConfig);
		await ctx.rebuild();
		await ctx.watch();
		console.log("Watching for changes...");

		process.stdin.resume();
		process.on("SIGINT", () => {
			ctx.dispose();
			console.log("\nBuild process terminated");
			process.exit(0);
		});

	} else {
		await esbuild.build(buildConfig);
		await esbuild.stop();
	}
})();
