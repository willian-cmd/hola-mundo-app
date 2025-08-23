const express = require("express");
const app = express();

// Ruta principal
app.get("/", (req, res) => {
  res.send("Hola Mundo desde DevOps 🚀 23/8/2025");
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

// Exportamos app para poder hacer pruebas
module.exports = app;

