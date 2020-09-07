const mongoose = require("mongoose");
const { Schema } = mongoose;

const DeviceSchema = new Schema(
    {
    name: {type: String, maxlength: 50},
    type: {type: String, maxlength: 50},
    onAction: {type: [String]},
    offAction: {type: [String]}
    }, 
    {timestamps: {createdAt: true, updatedAt: true}}
);

module.exports = mongoose.model("Device", DeviceSchema);