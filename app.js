
const axios = require('axios')
var moment = require('moment-timezone');
axios
    .post('https://postman-echo.com/post', {
        "nodeID": "ANANKE001",
        "datetime": moment().tz("Asia/Colombo").format('YYYY-MM-DD hh:mm A').toString(),
        "value": "164",
        "color": "GREEN",
        "location": {
            "lat": 6.799185,
            "lon": 79.9222218
        }
    })
    .then((res) => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
    })
    .catch((error) => {
        console.error(error)
    })