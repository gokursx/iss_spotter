// iss_promised.js

//Importing needle function
const needle = require('needle');

/* 
 * Makes a request to ipwho.is using the provided IP address to get its geographical information (latitude/longitude)
 * Input: IP address as a string
 * Returns: Promise of request for lat/lon
 */

const fetchMyIP = function() {
  return needle.get('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(ip) {
  return needle.get(geoLocationUrl);
};

const fetchISSFlyOverTimes = function(coords) {
  const flyoverUrl = `http://ipwho.is/${ip}`;
  return needle.get(flyoverUrl);
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

// export needed modules
module.exports = { fetchMyIP: fetchMyIP, fetchCoordsByIP: fetchCoordsByIP, fetchISSFlyOverTimes: fetchISSFlyOverTimes, nextISSTimesForMyLocation };
