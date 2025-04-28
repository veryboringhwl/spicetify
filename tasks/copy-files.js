import fs from 'fs';
import path from 'path';
import chokidar from 'chokidar';

const sourceFiles = [
	{ src: 'dist/theme.js', dest: '../theme.js' },
	{ src: 'dist/user.css', dest: '../user.css' }
];

function copyFile(src, dest) {
	const tryCopy = (retries = 3) => {
		try {
			fs.copyFileSync(src, dest);
			console.log(`Copied ${src} to ${dest}`);
		} catch (err) {
			if (retries > 0) {
				setTimeout(() => tryCopy(retries - 1), 100);
			} else {
				console.error(`Error copying ${src}:`, err);
			}
		}
	};

	tryCopy();
}

function copyAllFiles() {
	sourceFiles.forEach(({ src, dest }) => copyFile(src, dest));
}

const watchMode = process.argv.includes('--watch');

if (watchMode) {
	console.log('Watching for file changes...');
	const watcher = chokidar.watch(sourceFiles.map(f => f.src), {
		persistent: true,
		awaitWriteFinish: {
			stabilityThreshold: 100,
			pollInterval: 100
		}
	});

	watcher.on('change', (filePath) => {
		const fileConfig = sourceFiles.find(f => path.normalize(f.src) === path.normalize(filePath));
		if (fileConfig) {
			setTimeout(() => copyFile(fileConfig.src, fileConfig.dest), 50);
		}
	});

	process.stdin.resume();
	process.on("SIGINT", () => {
		console.log("Copy process terminated");
		process.exit(0);
	});
} else {
	copyAllFiles();
}