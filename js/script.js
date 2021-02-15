// Map

function myMap() {
    var mapProp = {
        center:new google.maps.LatLng(27.712021,85.312950),
        zoom:5,
    };

    var map = new google.maps.Map(document.getElementById("google-map"),mapProp);
}