
const axios = require('axios')

axios
    .post('https://postman-echo.com/post', {
        todo: 'Buy the milk',
    })
    .then((res) => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
    })
    .catch((error) => {
        console.error(error)
    })