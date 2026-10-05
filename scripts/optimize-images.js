const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMG_DIR = path.join(__dirname, '..', 'app', 'assets', 'img');
const RASTER_EXT = new Set(['.jpg', '.jpeg', '.png']);

async function walk(dir) {
	const entries = await fs.promises.readdir(dir, { withFileTypes: true });
	const files = [];

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await walk(fullPath)));
		} else {
			files.push(fullPath);
		}
	}

	return files;
}

async function optimize(file) {
	const ext = path.extname(file).toLowerCase();
	if (!RASTER_EXT.has(ext)) {
		return;
	}

	const image = sharp(file);
	const relPath = path.relative(IMG_DIR, file);

	const optimized = ext === '.png'
		? await image.clone().png({ quality: 80 }).toBuffer()
		: await image.clone().jpeg({ quality: 80, mozjpeg: true }).toBuffer();
	await fs.promises.writeFile(file, optimized);

	const webpPath = file.slice(0, -ext.length) + '.webp';
	await image.clone().webp({ quality: 80 }).toFile(webpPath);

	console.log(`optimized ${relPath}`);
}

async function main() {
	const files = await walk(IMG_DIR);
	await Promise.all(files.map(optimize));
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
