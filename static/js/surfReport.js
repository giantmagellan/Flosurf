// --------------------------------------
// Import data into JS
// --------------------------------------

// storm glass api endpoint url
urlWeather = "https://api.stormglass.io/v2/weather/point";
urlTide = "https://api.stormglass.io/v2/tide/sea-level/point";
urlAstronomy = "https://api.stormglass.io/v2/astronomy/point";

const urls = 'urlWeather, urlTide, urlAstronomy';

// lat-lng coordinates
const lat = 32.7707;
const lng = 117.2514;
// Parameters
const params = 'waveHeight,waveDirection,wavePeriod,windSpeed,windDirection,swellHeight,swellDirection,swellPeriod,waterTemperature,currentDirection';

fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
  headers: {
    'Authorization': '2f05e490-ae02-11ea-9fc5-0242ac130002-2f05e544-ae02-11ea-9fc5-0242ac130002'
  }
}).then((response) => response.json()).then((jsonData) => {
  // Do something with response data.
});

// D3 GET request to the query url
d3.json(urlWeather, function(dataWeather) {
    // Sends data.features object to the createFeatures function
    createFeatures(dataWeather.data);
    });

// // --------------------------------------
// // Features and Popups for Surf Locations
// // --------------------------------------

function createFeatures(surfData) {

    function onEachFeature(feature, layer) {
        layer.bindPopup("<h3>" + feature.)
    }
}