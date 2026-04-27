const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;
const rootDir = __dirname;

app.use(express.static(rootDir));

app.get("/", (_req, res) => {
  res.sendFile(path.join(rootDir, "prototipo_patrimonio_rfid_app.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor local ativo em http://localhost:${PORT}`);
});
