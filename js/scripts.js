// Global map variable
var map;
var infoWindow = new google.maps.InfoWindow();

// Get the location to display the coordinates
var lat = document.getElementById('latcoords');
var lng = document.getElementById('loncoords');

// Function run on DOM load
function loadMap() {
    // Set the map options
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(-1.9441, 30.0619),
        // ... rest of the options
    };

    // Get the id of the map container div
    var mapId = document.getElementById('map');

    // Create the map
    map = new google.maps.Map(mapId, mapOptions);

    // Create a marker
    var marker = addMarker();

    // Info Window function
    addInfoWindow(marker);

    marker.setMap(map); // Display marker either through map option or using setMap
    marker.setVisible(true); // Show or hide the icons

    return marker;
}

function addMarker() {
    // Create and return the marker
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-1.9441, 30.0619),
        // ... marker options
    });

    return marker;
}

function addInfoWindow(marker) {
    // ... rest of the code
}

// Add Commas to number
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Load the map
google.maps.event.addDomListener(window, 'load', loadMap);