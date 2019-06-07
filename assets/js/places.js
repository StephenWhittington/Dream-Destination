function initialize() {
  var input = document.getElementById('navBarSearch');
  new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', initialize);