/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');

const fetchMyIP = function(callback) { 
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', (error, response, body) => {
    // handle error and response here
  });
}

const fetchCoordsByIP = function(ip, callback) {
  // your code here
  const geoLocationUrl = `http://ipwho.is/8.8.4.4`;

  request(geoLocationUrl, (error, data) => {

  if (error) {
      callback(error, null);
      return;
    }
  const parsedBody = JSON.parse(data);
    const latLong = {lat: parsedBody.latitude, long: parsedBody.longitude};
    callback(null, latLong);
  });
};


//module.exports = { fetchMyIP };
//Exporting fetchCoordsByIP function
//module.exports = { fetchCoordsByIP };
module.exports = { fetchMyIP, fetchCoordsByIP };
