const mongoose = require('mongoose');
var ObjectIdSchema = mongoose.Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

const DeviceDataSchema = new mongoose.Schema({
    _id: { type: ObjectIdSchema, default: function () { return new ObjectId() } },
   data:String
}, {
    timestamps: true
});


module.exports = mongoose.model('deviceData', DeviceDataSchema);
