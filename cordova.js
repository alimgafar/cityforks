/* Done here to be able to run these first */

Meteor.startup(function() {

	if (Meteor.isClient) {
		//navigator.geolocation = navigator.getlocation;
		//navigator.geolocation.getCurrentPosition(success);
		if (navigator.geolocation) {
		  console.log('Geolocation is supported!');
		} else {
		  console.log('Geolocation is not supported for this Browser/OS version yet.');
		}

		window.onload = function() {
		  var startPos;
		  navigator.geolocation.getCurrentPosition(function(position) {
		    startPos = position;
		    console.log(position);
		    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
		    document.getElementById('startLon').innerHTML = startPos.coords.longitude;

		 //We'll pass these coordinates to Meteor method to conduct a search on Google Maps.
		 Meteor.call('fetchNearbyLocations', startPos.coords);
		    console.log(startPos);
		  }, function(error) {
		    alert('Error occurred. Error code: ' + error.code);
		    // error.code can be:
		    //   0: unknown error
		    //   1: permission denied
		    //   2: position unavailable (error response from locaton provider)
		    //   3: timed out
		  });
		 }
	}

});


success = function(position) {
	Session.set('location', position);
}