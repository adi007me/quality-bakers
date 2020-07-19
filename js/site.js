function initMap() {
  // The location of Uluru
  // 19.164865,73.2367913,17z
  var uluru = {lat: 19.164865, lng: 73.2367913};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

