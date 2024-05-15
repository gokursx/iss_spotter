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
      // inside the request callback ...
  // error can be set if invalid domain, user is offline, etc.
  if (error) {
    callback(error, null);
    return;
  }
  // if non-200 status, assume server error
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    callback(Error(msg), null);
    return;
  }
    const parsedBody = JSON.parse(body);

  // if we get here, all's well and we got the data
  });
}

const fetchCoordsByIP = function(ip, callback) {
  // your code here
  const geoLocationUrl = `http://ipwho.is/${ip}`;

  request(geoLocationUrl, (error, response, body) => {

  if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    callback(Error(msg), null);
    return;
  }
  const parsedBody = JSON.parse(body);
    const latLong = {lat: parsedBody.latitude, long: parsedBody.longitude};
    callback(null, latLong);
  });
};

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
const fetchISSFlyOverTimes = function(coords, callback) {
  //Inserting latitude and longitude into the url
  const flyoverUrl = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;
  
  request(flyoverUrl, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `${response.statusCode} wasencountered when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    callback(null, JSON.parse(body));
  });
};

//Exporting functions
module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };


//module.exports = { fetchMyIP };
//Exporting fetchCoordsByIP function
//module.exports = { fetchCoordsByIP };
module.exports = { fetchMyIP, fetchCoordsByIP };
