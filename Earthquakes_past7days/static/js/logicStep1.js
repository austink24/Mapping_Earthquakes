// Add console.log to check to see if our code is working.
console.log("working");


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satilliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satillites Streets": satilliteStreets
  };

//read in JSON file Data from Github
// let airportData = "https://raw.githubusercontent.com/austink24/Mapping_Earthquakes/main/majorAirports.json"

// // Accessing the Toronto airline routes GeoJSON URL.
// let torontoData = "https://raw.githubusercontent.com/austink24/Mapping_Earthquakes/main/torontoRoutes.json"

// Create a style for the lines.
// let myStyle = {
//   color: "#ffffa1",
//   weight: 2
// }

// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//     console.log(data);

//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//     color: '#ffffa1',
//     weight: 2,
//     onEachFeature: function(feature, layer,) {
//       layer.bindPopup('<h3>Airline:' + feature.properties.airline + '</h3> <hr> <h3>Destination: ' + 
//       feature.properties.dst + '</h3>');
//     }
//   }).addTo(map) 
// });

// // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
})

//Acessing Toronto NeighborHoods from Github
let torontoHoods = "https://raw.githubusercontent.com/austink24/Mapping_Earthquakes/main/torontoNeighborhoods.json"

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});

// // Grab GeoJSON data from trontoHoods
// d3.json(torontoHoods).then(function(data) {
//   console.log(data);
//   L.geoJson(data).addTo(map)

// })
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);
// dark.addTo(map);