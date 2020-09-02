const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=602e7e3d2ea903c396525980bb0e5a4c&query=' + encodeURIComponent(longitude) + ',' + encodeURIComponent(latitude) + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather', undefined)
        } else if (body.error) {
            callback('Invalid coordinates', undefined)
        } else {
            callback(undefined, 
                body.current.temperature + ' degrees, but feels like ' + body.current.feelslike + ' degrees' 
            )
        }
    })
}

module.exports = forecast
