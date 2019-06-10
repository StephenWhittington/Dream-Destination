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

