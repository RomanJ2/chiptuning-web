const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = 'project_bundle.txt';
const TEXT_FILE_EXTENSIONS = ['.html', '.css', '.js', '.ts', '.yml', '.yaml', '.md', '.markdown', '.scss', '.json', '.txt'];
const EXCLUDE_DIRS = ['node_modules', '.git', '_site', '.jekyll-cache', 'assets', 'deleted_posts'];

function isTextFile(filePath) {
  return TEXT_FILE_EXTENSIONS.includes(path.extname(filePath));
}

function isExcluded(filePath) {
  return EXCLUDE_DIRS.some(dir => filePath.includes(path.sep + dir));
}

function bundleFiles(dir, outputStream) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (isExcluded(fullPath)) continue;

    if (item.isDirectory()) {
      bundleFiles(fullPath, outputStream);
    } else if (isTextFile(fullPath)) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        outputStream.write(`\n--- FILE: ${path.relative(__dirname, fullPath)} ---\n`);
        outputStream.write(content + '\n');
      } catch (err) {
        console.warn(`Skipping file ${fullPath}: ${err.message}`);
      }
    }
  }
}

function main() {
  const outputPath = path.join(__dirname, OUTPUT_FILE);
  const outputStream = fs.createWriteStream(outputPath, { flags: 'w' });

  bundleFiles(__dirname, outputStream);

  outputStream.end(() => {
    console.log(`✅ Project bundled into ${OUTPUT_FILE}`);
  });
}

main();
