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
      console.log(place);
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


      var contentString = `<h4>${place.name}</h4>
      <p>Price: ${place.price_level}<br/>
      rating: ${place.rating}`;

      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 160
      });

      var marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        icon: icon,
        title: place.name
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

      if (place.geometry.viewport) {
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
    var autocomplete = new google.maps.places.Autocomplete(input, { types: ['(cities)'] });
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      var place = autocomplete.getPlace();

    });
  }

  google.maps.event.addDomListener(window, 'load', buttonSearch);
}
