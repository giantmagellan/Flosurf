// --------------------------------------
// Import data into JS
// --------------------------------------

// storm glass api endpoint url
url = "https://api.stormglass.io/v2"

// D3 GET request to the query url
d3.json(url, function(data) {
    // Sends data.features object to the createFeatures function
    createFeatures(data.features);
    });

// --------------------------------------
// Features and Popups for Surf Locations
// --------------------------------------

function createFeatures(surfData) {

    function onEachFeature(feature, layer) {
        layer.bindPopup("<h3>" + feature.)
    }
}