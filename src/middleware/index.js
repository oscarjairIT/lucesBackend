const express = require('express');
const server = express();
const cors = require("cors");
const ewelink = require('ewelink-api');

server.use(express.json());
server.use(cors());

server.get("/devices", (req, res)=>{});

/** TESTING EWELINK */


server.get

module.exports = server;