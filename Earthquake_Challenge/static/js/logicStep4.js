// Add console.log to check to see if our code is working.
console.log("working");
let cityData = cities;

// adding new commetn

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 5);
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/ecmorrow1/mapping_earthquakes/main/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/ecmorrow1/Mapping_Earthquakes/main/torontoRoutes.json";

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/ecmorrow1/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3> " + feature.properties.city + ", " + feature.properties.country + "</h3>");
//   }
// }).addTo(map);

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   onEachFeature: function(feature, layer) {
//     console.log(feature);
//     layer.bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3> " + feature.properties.city + ", " + feature.properties.country + "</h3>");
//   }
// }).addTo(map);

// let line = [
//   [33.9416, -118.4085], //LAX
//   [37.6213, -122.3790]  //SFO
// ];

// let line = [
//   [33.9416, -118.4085], //LAX
//   [37.6213, -122.3790], //SFO
//   [40.7899, -111.9791], //SLC
//   [47.4502, -122.3088]  //SEA
// ];

//Plotting a line between the two points defined above
// L.polyline(line, {
//   color: "red"
// }).addTo(map);
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);


// Create the map object with a center and zoom level.
// This method is useful when we need to add multiple tile laters, or a background image of
// our map(s)

// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });


// This represents one method, but the finished method is listed below

// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY_MapBox
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// make the marker a circle
// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: "yellow"
//  }).addTo(map);

//  L.circleMarker([34.0522, -118.2437], {
//      radius: 300,
//      color: "black",
//      fillColor: '#ffffa1'
//   }).addTo(map);

// An array containing each city's location, state, and population.


// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location)
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
//  });
//  cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location,{
//     color: "orange",
//     radius: parseInt(city.population)/100000
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
//  });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY_MapBox
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY_MapBox
});

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY_MapBox
  });

var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/satellite-streets-v11",
  accessToken: API_KEY_MapBox
});

var darkMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/dark-v10",
  accessToken: API_KEY_MapBox
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY_MapBox
});

// Create a base layer that holds both maps.
// let baseMaps = {
//   Light: light,
//   Dark: dark
// };

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);
// satellite.addTo(map);
// darkMap.addTo(map);




// Adding the GeoJSON data after the tilelayer is loaded so that the map will load first, followed by any cumbersome data sets

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   onEachFeature: function(feature, layer) {
//     console.log(feature);
//     layer.bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3> " + feature.properties.city + ", " + feature.properties.country + "</h3>");
//   }
// }).addTo(map);

// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("<h2>Airport code: " + feature.properties.icao + "</h2> <hr> <h3>Airport Name: " + feature.properties.name);
//     }
//   }).addTo(map);
// });

// // Create a style for the lines.
// let myStyle = {
//   color: "#ffffa1",
//   weight: 2
// }

// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     style: myStyle,
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("<h2>Airline: "+ feature.properties.airline +"</h2><hr><h3>Destination: "+ feature.properties.dst +"</h3>");
//     }
//   })
//   .addTo(map);
// });

// Create the earthquake layer for our map.
let earthquakes = new L.layerGroup();

// We define an object that contains the overlays.
// This overlay will be visible all the time.
let overlays = {
  "Earthquakes": earthquakes
};

let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  // center: [30, 30],
  // center: [44, -80], //Toronto
  // center: [43.7, -79.3], //Toronto
  center: [39.5, -98.5], //USA Geographic Center
  zoom: 3,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
// L.control.layers(baseMaps).addTo(map);

// Then we add a control to the map that will allow the user to change
// which layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// let myStyle = {
//   color: "blue",
//   weight: 1,
//   fillColor: "yellow"
// }

// // // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
//   // L.geoJSON(data).addTo(map);
//   L.geoJSON(data, {
//     style: myStyle,
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("<h2>Neighborhood: "+ feature.properties.AREA_NAME +"</h2>");
//     }
//   })
//   .addTo(map);
// });

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
   
  L.geoJSON(data, {
    pointToLayer: function(feature,latlng) {
      console.log(data);
      return L.circleMarker(latlng);
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Magnitude: "+feature.properties.mag+"<br>Location: "+feature.properties.place);
    },
    style: styleInfo,
  // }).addTo(map);
  }).addTo(earthquakes);

  // Then add the earthquake layer to the map.
  earthquakes.addTo(map);
});

// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: getColor(feature.properties.mag),
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.5
  };
}

// This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
  if (magnitude === 0) {
    return 1;
  }
  return magnitude * 4;
}

// This function determines the color of the circle based on the magnitude of the earthquake.
function getColor(magnitude) {
  if (magnitude > 5) {
    return "#ea2c2c";
  }
  if (magnitude > 4) {
    return "#ea822c";
  }
  if (magnitude > 3) {
    return "#ee9c00";
  }
  if (magnitude > 2) {
    return "#eecc00";
  }
  if (magnitude > 1) {
    return "#d4ee00";
  }
  return "#98ee00";
}