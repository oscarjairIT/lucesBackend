const mongoose = require("mongoose");
const { Schema } = mongoose;

const DeviceSchema = new Schema(
    {
    enabled: {type: Boolean}, // si esta habilitado o no para la visualizacion del usuario normal
    deviceid: {type: String, maxlength: 20}, // id del dispositivo segun ewelink
    ewelinkapi: {type: Boolean}, // si el dispositivo soporta funciones de ewelink api node js
    name: {type: String, maxlength: 50}, // nombre registrado en la app ewelink premium
    channels: {type: [
        {type: Number, type: String}
    ]},
    online: {type: String, maxlength: 4},
    onAction: {type: [String]},
    offAction: {type: [String]}
    }, 
    {timestamps: {createdAt: true, updatedAt: true}}
);

module.exports = mongoose.model("Device", DeviceSchema);