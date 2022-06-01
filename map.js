// const divMap = document.getElementById("map");
// const coord = { lat: -4.0, lng: 36.0 };
// let map;
// let marker;

// function initMap() {
// 	map = new google.maps.Map(divMap, {
// 		center: coord,
// 		zoom: 4,
// 	});
// 	marker = new google.maps.Marker({
// 		position: coord,
// 		map: map,
// 	});
// }

function iniciarMap(){
	var coord = {lat:37.387474, lng: -122.0575434};
	var map = new google.maps.Map(document.getElementById('map'),{
	  zoom: 10,
	  center: coord
	});
	var marker = new google.maps.Marker({
	  position: coord,
	  map: map
	});
}