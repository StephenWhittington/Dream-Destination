// initAutocomplete function with a search bar that marks the users destination and chosen place.
function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 46.619261, lng: -33.134766 },
    zoom: 3,
    mapTypeId: 'roadmap',
    streetViewControl: false,
    mapTypeControl: false,
    styles: [{
        "elementType": "geometry.fill",
        "stylers": [{
          "weight": 2
        }]
      },
      {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [{
          "color": "#009fff"
        }]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.government",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.medical",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.school",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      }
    ]
  });


  map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchMapInput);


  var markers = [];

  var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';

  var hostnameRegexp = new RegExp('^https?://.+?/');

  var places, infoWindow;

  var autocomplete;


  autocomplete = new google.maps.places.Autocomplete(
    (
      document.getElementById('searchMapInput')), {
      types: ['(cities)']
    });
  places = new google.maps.places.PlacesService(map);

  autocomplete.addListener('place_changed', onPlaceChanged);
  document.getElementById('category').addEventListener('change', onPlaceChanged);

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });

  function onPlaceChanged() {
    var place = autocomplete.getPlace();

    if ($("#accommodation").is(':selected')) {
      if (place.geometry) {
        map.panTo(place.geometry.location);
        map.setZoom(15);
        var search = {
          bounds: map.getBounds(),
          types: ['lodging']
        };
        searchNearby(search);
      }
      else {
        $('#searchMapInput').attr("placeholder", "Enter a location");
      }
    }
    else if ($("#bars").is(':selected')) {
      if (place.geometry) {
        map.panTo(place.geometry.location);
        map.setZoom(15);
        search = {
          bounds: map.getBounds(),
          types: ['bar', 'restaurant']
        };
        searchNearby(search);
      }
      else {
        $('#searchMapInput').attr("placeholder", "Enter a location");
      }
    }
    else if ($("#tourist").is(':selected')) {
      if (place.geometry) {
        map.panTo(place.geometry.location);
        map.setZoom(15);
        search = {
          bounds: map.getBounds(),
          types: ['museum', 'amusement_park', 'art_gallery']
        };
        searchNearby(search);
      }
      else {
        $('#searchMapInput').attr("placeholder", "Enter a location");
      }
    }
  }

  var bounds = new google.maps.LatLngBounds();



  function searchNearby(search) {
    places.nearbySearch(search, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        clearResults();
        clearMarkers();
        // Create a marker for each hotel found, and
        // assign a letter of the alphabetic to each marker icon.
        for (var i = 0; i < results.length; i++) {
          var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
          var markerIcon = MARKER_PATH + markerLetter + '.png';
          // Use marker animation to drop the icons incrementally on the map.
          markers[i] = new google.maps.Marker({
            position: results[i].geometry.location,
            animation: google.maps.Animation.DROP,
            icon: markerIcon
          });
          // If the user clicks a hotel marker, show the details of that hotel
          // in an info window.
          markers[i].placeResult = results[i];
          google.maps.event.addListener(markers[i], 'click', showInfoWindow);
          setTimeout(dropMarker(i), i * 100);
          addResult(results[i], i);
        }
      }
    });
  }

  function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
      if (markers[i]) {
        markers[i].setMap(null);
      }
    }
    markers = [];
  }

  function dropMarker(i) {
    return function() {
      markers[i].setMap(map);
    };
  }

  function addResult(result, i) {
    var results = document.getElementById('searchResult');
    var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
    var markerIcon = MARKER_PATH + markerLetter + '.png';

    var tr = document.createElement('tr');
    tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
    tr.onclick = function() {
      google.maps.event.trigger(markers[i], 'click');
    };

    var iconTd = document.createElement('td');
    var nameTd = document.createElement('td');
    var icon = document.createElement('img');
    icon.src = markerIcon;
    icon.setAttribute('class', 'placeIcon');
    icon.setAttribute('className', 'placeIcon');
    var name = document.createTextNode(result.name);
    iconTd.appendChild(icon);
    nameTd.appendChild(name);
    tr.appendChild(iconTd);
    tr.appendChild(nameTd);
    results.appendChild(tr);
  }

  function clearResults() {
    var results = document.getElementById('searchResult');
    while (results.childNodes[0]) {
      results.removeChild(results.childNodes[0]);
    }
  }

  function showInfoWindow() {
    var marker = this;
    places.getDetails({ placeId: marker.placeResult.place_id },
      function(place, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          return;
        }
        infoWindow.open(map, marker);
        buildIWContent(place);
      });
  }

  function buildIWContent(place) {
    document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
      'src="' + place.icon + '"/>';
    document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
      '">' + place.name + '</a></b>';
    document.getElementById('iw-address').textContent = place.vicinity;

    if (place.formatted_phone_number) {
      document.getElementById('iw-phone-row').style.display = '';
      document.getElementById('iw-phone').textContent =
        place.formatted_phone_number;
    }
    else {
      document.getElementById('iw-phone-row').style.display = 'none';
    }

    if (place.rating) {
      var ratingHtml = '';
      for (var i = 0; i < 5; i++) {
        if (place.rating < (i + 0.5)) {
          ratingHtml += '&#10025;';
        }
        else {
          ratingHtml += '&#10029;';
        }
        document.getElementById('iw-rating-row').style.display = '';
        document.getElementById('iw-rating').innerHTML = ratingHtml;
      }
    }
    else {
      document.getElementById('iw-rating-row').style.display = 'none';
    }

    // The regexp isolates the first part of the URL (domain plus subdomain)
    // to give a short URL for displaying in the info window.
    if (place.website) {
      var fullUrl = place.website;
      var website = hostnameRegexp.exec(place.website);
      if (website === null) {
        website = 'http://' + place.website + '/';
        fullUrl = website;
      }
      document.getElementById('iw-website-row').style.display = '';
      document.getElementById('iw-website').textContent = website;
    }
    else {
      document.getElementById('iw-website-row').style.display = 'none';
    }
  }

  if (places.geometry) {
    bounds.union(places.geometry);
  }
  else {
    bounds.extend(places.geometry.location);
  }
  map.fitBounds(bounds);



  function buttonSearch() {
    var input = document.getElementById('whereTo');
    var autocomplete = new google.maps.places.Autocomplete(input, { types: ['(cities)'] });
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      var place = autocomplete.getPlace();

    });
  }

  google.maps.event.addDomListener(window, 'load', buttonSearch);
}
