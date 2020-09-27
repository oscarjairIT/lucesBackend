const mongoose = require("mongoose");
const { Schema } = mongoose;

const CronJobSchema = new Schema(
    {
    // _id: {type: Schema.Types.ObjectId, ref: "CronJob"},
    deviceid: {type: String, maxlength: 20}, // id del dispositivo segun ewelink
    channel: {type: Number},
    state: {type: String},
    min: {type: String},
    hour: {type: String},
    alive: {type: Boolean}
    }
);

module.exports = mongoose.model("CronJob", CronJobSchema, 'CronJob');