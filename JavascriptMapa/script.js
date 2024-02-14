document.addEventListener("DOMContentLoaded", function(){
    if (!("geolocation" in navigator)) {
        alert("Navegador não tem suporte para esta API")
    } else {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
})

function showPosition(local){
    let latitude = local.coords.latitude
    let longitude = local.coords.longitude
    document.getElementById("location").innerHTML = "<span>Latitude: </span>" + latitude + " <span>Longitude: </span>" + longitude
    var mapOption = {
        center: [
            latitude, 
            longitude
        ],
        zoom: 16
    }
    var map = new L.map("map", mapOption);
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{Y}.png');
    map.addLayer(layer)
    var marker = new L.Marker([latitude, longitude])
    marker.addTo(map)
    .bindPopup("Você está aqui!")
    .openPopup()
}