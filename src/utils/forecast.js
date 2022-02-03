const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=2aa8bb777fa030e2dfaf34023791601f&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(
        "Unable to access weather services! Check your internet connection",
        undefined
      );
    } else if (body.error) {
      callback("Unable to find the location!", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees out. The humidity is " +
          body.current.humidity +
          "%"
      );
    }
  });
};

module.exports = forecast;
