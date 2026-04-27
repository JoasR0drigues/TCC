const fs = require("fs");
const path = require("path");

const root = process.cwd();
const sourceFile = path.join(root, "prototipo_patrimonio_rfid_app.html");
const targetDir = path.join(root, "www");
const targetFile = path.join(targetDir, "index.html");

function ensureFileExists(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Arquivo nao encontrado: ${filePath}`);
  }
}

function copyIfExists(fileName) {
  const source = path.join(root, fileName);
  const target = path.join(targetDir, fileName);
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, target);
    console.log(`Copiado: ${fileName}`);
  }
}

function main() {
  ensureFileExists(sourceFile);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.copyFileSync(sourceFile, targetFile);

  copyIfExists("manifest.webmanifest");
  copyIfExists("sw.js");
  copyIfExists("icon.svg");
  copyIfExists("firebase-config.js");

  console.log("Web build pronto em /www (index.html).");
}

main();
