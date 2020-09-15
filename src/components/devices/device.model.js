const mongoose = require("mongoose");
const { Schema } = mongoose;

const DeviceSchema = new Schema(
    {
    _id: {type: Schema.Types.ObjectId, ref: "Device"},
    enabled: {type: Boolean}, // si esta habilitado o no para la visualizacion del usuario normal
    deviceid: {type: String, maxlength: 20}, // id del dispositivo segun ewelink
    ewelinkapi: {type: Boolean}, // si el dispositivo soporta funciones de ewelink api node js
    name: {type: String, maxlength: 50}, // nombre registrado en la app ewelink premium
    channels: {type: Object},
    online: {type: String, maxlength: 4},
    onAction: {type: [String]},
    offAction: {type: [String]}
    }
);

// var LogSchema = new Schema(
//     {  _id_: {type: Schema.Types.ObjectId, ref: "log"},
//         text: {type: String}
//     }
// )
// module.exports = mongoose.model("log", LogSchema, 'log');

module.exports = mongoose.model("Device", DeviceSchema, 'Device');