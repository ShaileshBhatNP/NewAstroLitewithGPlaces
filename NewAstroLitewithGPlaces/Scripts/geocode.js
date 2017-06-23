var placeSearch, autocomplete;
function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        { types: ['geocode'] });
}
// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}

function codeAddress() {
    geocoder = new google.maps.Geocoder();
    var address = document.getElementById("autocomplete").value;

    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            document.getElementById("fill").value = results[0].geometry.location.lat();
            alert("Latitude: " + results[0].geometry.location.lat());
            alert("Longitude: " + results[0].geometry.location.lng());
        }

        else {
            alert("Geocode was not successful for the following reason: " + status);
        }

    });
}
google.maps.event.addDomListener(window, 'load', initialize);