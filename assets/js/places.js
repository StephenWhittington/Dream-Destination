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

  var mapPlaceInput = document.getElementById('searchMapInput');
  var searchBox = new google.maps.places.SearchBox(mapPlaceInput);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(mapPlaceInput);

  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

   
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      }
      else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
  
   function buttonSearch() {
    var input = document.getElementById('whereTo');
    new google.maps.places.Autocomplete(input);
  }

  google.maps.event.addDomListener(window, 'load', buttonSearch);
}
