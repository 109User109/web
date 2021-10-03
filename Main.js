const express = require("express");
const colors = require("colors");
const path = require("path");
const { dir } = require("console");
const app = express();
//Configuracion
app.set("port", 3000);
app.set("views", path.join(__dirname, "Views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
// Rutas
app.use(require("./rutas/Rutas.js"));
// Static Files
app.use(express.static(path.join(__dirname, "public")))
// Escuchando el servidor
app.listen(app.get("port"), () =>{
    console.log("Server on port:", app.get("port"));
});