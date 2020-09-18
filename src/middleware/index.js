const express = require('express');
const server = express();
const { EWELINK_PASSWORD, EWELINK_MAIL } = require('../config');
const ewelink = require('ewelink-api');
const { Device } = require("../components/devices");
const cors = require("cors");


server.use(express.json());
server.use(cors());

// Ojala ejecutar 1 vez (al abrir app)
server.get("/devices", async(req, res)=>{
    // ejecutar funciones de ewelink.service.js , para actualizar la BD
        // luego Obtener data de la BD
    let devices;
    // let devices = await Device.find();
    // console.log(devices);
    try {
        devices = await Device.find();
        // console.log(devices);
    } catch(err){
        console.log(err);
    }
    /*
    devices.forEach(device => {
        // console.log(device);
        (async () => {
            const connection = new ewelink({
                email: EWELINK_MAIL,
                password: EWELINK_PASSWORD,
                region: 'us',
            });

            const auth = await connection.getCredentials();
            const connectionAPI = new ewelink({
                at: auth.at,
                apiKey: auth.user.apikey,
                region: auth.region,
            });

            if (device.channels.length == 1){
                // const status = await connectionAPI.getDevicePowerState(device.deviceid);
                // console.log(status);
                console.log("[getDevicePowerState] Para este dispositivo no disponible por ewelink");
            } 
            else if (device.channels.length > 1) {
                // console.log(device.channels[0].state);
                const status1 = await connectionAPI.getDevicePowerState(device.deviceid, 1); // aveces no responde bien
                console.log(status1);
                const status2 = await connectionAPI.getDevicePowerState(device.deviceid, 2); // aveces no responde bien
                console.log(status2);
            } else {
                console.log("device: ", device.name);
                console.log("largo: ", device.channels.length);
            }
        })();
    });
    */

    return res.send({ error: false, data: devices });

});

server.get("/device/:id", async(req, res)=>{
    const id = req.params.id;
    console.log(id);
    let device = await Device.findById(id);

    return res.send({error: false, data: device});
});

server.get("/devices/find/:name", async (req, res) => {
    const name = req.params.name;
    console.log(name);
    Device.find({
        name: name
    }, function(err, result) {
        if (err) {
            // console.log(err);
            return res.send({ error: err, data: ''});
        } else {
            // console.log(result);
            return res.send({ error: false, data: result });
        }
    });
    // return res.send({ error: false, data: devices });
});

module.exports = server;