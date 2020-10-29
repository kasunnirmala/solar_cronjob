
const axios = require('axios')
var moment = require('moment-timezone');
require('./db');
var DeviceDataModel = require('./model/deviceData');
var ResponseModel = require('./model/response');

var deviceData = {
    "nodeID": "ANANKE001",
    "datetime": moment().tz("Asia/Colombo").format('YYYY-MM-DD hh:mm A').toString(),
    "value": "164",
    "color": "GREEN",
    "location": {
        "lat": 6.799185,
        "lon": 79.9222218
    }
};
const DeviceData = new DeviceDataModel({
    data: JSON.stringify(deviceData)

});

DeviceData.save().then((savedDeviceData) => {
    console.log(savedDeviceData);






    axios
        .post('http://smartbin.solidaridadasia.com/api/Bin', deviceData)
        .then((res) => {
            // console.log(res.data);
            var response = {
                id: savedDeviceData._id,
                status: true,
                response: res.toString()
            };
            const Response = new ResponseModel({
                data: JSON.stringify(response)

            });

            Response.save().then((savedResponse) => {
                console.log(savedResponse);
            });


        })
        .catch((error) => {
            console.error(error);
            var response = {
                id: savedDeviceData._id,
                status: false,
                response: JSON.stringify(error)
            };
            const Response = new ResponseModel({
                data: JSON.stringify(response)

            });

            Response.save().then((savedResponse) => {
                console.log(savedResponse);



            })
        })


});