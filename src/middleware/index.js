const express = require('express');
const server = express();


const cors = require("cors");
server.use(express.json());
server.use(cors());

// Ojala ejecutar 1 vez (al abrir app)
server.get("/devices", (req, res)=>{
    // ejecutar funciones de ewelink.service.js , para actualizar la BD
        // luego Obtener data de la BD

});

module.exports = server;