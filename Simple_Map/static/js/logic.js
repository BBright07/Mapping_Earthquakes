// Add console.log to check to see if our code is working.
//The console.log() function with the phrase "working" inside the parentheses
// will help us confirm that our logic.js file is being accessed in the console 
//on Chrome.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([40.7, -94.5], 4);
// Create the map object with a center and zoom level.
let map = L.map("mapid", {center: [37.6213, -122.3790],zoom: 5
  });

//Airport stop line
let line = [ [37.615223,	-122.389977],
[30.18999924, -97.668663992], 
[	43.6777171,-79.624819699],
[40.658732,-73.812131]

]
// Coordinates for each point to be used in the polyline.
//let line = [
  //[33.9416, -118.4085],
  //[37.6213, -122.3790],
  //[40.7899, -111.9791],
  //[47.4502, -122.3088]
//];
  // Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue", linewidth: 4, opacity: 0.5,
}).addTo(map);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEYX
    
});
streets.addTo(map);

// Loop through the cities array and create one marker for each city.

// Get data from cities.js
let cityData = cities;
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location,{radius: city.population/200000, color: "orange", linewidth: 4})
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
.addTo(map);
});

// Then we add our 'graymap' tile layer to the map.


