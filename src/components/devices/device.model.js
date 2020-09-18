const mongoose = require("mongoose");
const { Schema } = mongoose;

const ChannelSchema = new Schema(
    {
        num: {type: Number},
        state: {type: String}
    }
);

const DeviceSchema = new Schema(
    {
    _id: {type: Schema.Types.ObjectId, ref: "Device"},
    enabled: {type: Boolean}, // si esta habilitado o no para la visualizacion del usuario normal
    deviceid: {type: String, maxlength: 20}, // id del dispositivo segun ewelink
    ewelinkapi: {type: Boolean}, // si el dispositivo soporta funciones de ewelink api node js
    name: {type: String, maxlength: 50}, // nombre registrado en la app ewelink premium
    channels: {type: [ChannelSchema]},
    online: {type: String, maxlength: 4},
    onAction: {type: [String]},
    offAction: {type: [String]}
    }
);

module.exports = mongoose.model("Device", DeviceSchema, 'Device');