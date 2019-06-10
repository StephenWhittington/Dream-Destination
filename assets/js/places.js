function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    zoom: 3,
    center: new google.maps.LatLng(46.619261,-33.134766)
  });

  function navSearch() {
    var input = document.getElementById('navBarSearch');
    new google.maps.places.Autocomplete(input);
  }

  google.maps.event.addDomListener(window, 'load', navSearch);

  function buttonSearch() {
    var input = document.getElementById('whereTo');
    new google.maps.places.Autocomplete(input);
  }

  google.maps.event.addDomListener(window, 'load', buttonSearch);


}
