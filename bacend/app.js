required('dotenv').config()

const express = require("express");
const loger = require("morgan");
const bodyParse = require("body-parser");
//Tipo de servidor que realizaremos 
const http = require('http');
//Iniciar y configurar express
const app = express();
//log mostrar información de consola 
app.use(loger("dev"));
//Parsear las entradas de solicitud de datos 
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));
//configurar las rutas de bienbenida al servdor 
app.get('/',(req, res) => res.status(200).send({
    message: 'Bienvenido a la API REST de compras',
}));
//  Configurar puerto de servior 
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
//crea servidores basado en el puerto y caracteristicass de app
const server = http.createServer(app);
server.listen(port);

module.exports = app;

