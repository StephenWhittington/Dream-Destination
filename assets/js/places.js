// initMap function with autocomplete search bar that marks the users destination.
function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    zoom: 3,
    streetViewControl: false,
    mapTypeControl: false,
    center: new google.maps.LatLng(46.619261, -33.134766),
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

  var mapInput = document.getElementById('searchMapInput');
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(mapInput);

  var autocomplete = new google.maps.places.Autocomplete(mapInput);
  autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
  
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener('place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    }
    else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
    marker.setIcon(({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
  });



  // Button autocomplete in modal also for users who want to enter a location
  function buttonSearch() {
    var input = document.getElementById('whereTo');
    new google.maps.places.Autocomplete(input);
  }

  google.maps.event.addDomListener(window, 'load', buttonSearch);

}
