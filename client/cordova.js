/* Done here to be able to run these first */

Meteor.startup(function() {

	//navigator.geolocation = navigator.getlocation;
	navigator.geolocation.getCurrentPosition(success, error);

});


success = function(position) {
	Session.set('location', position);
	//debugger;
	console.log("Getting the current position ");
    document.getElementById('startLat').innerHTML = position.coords.latitude;
    document.getElementById('startLon').innerHTML = position.coords.longitude;
    //debugger;
	Meteor.call('fetchNearbyLocations',position);
    console.log(position.coords);
};


error = function(err) {
    alert('Error occurred. Error code: ' + error.code);
// error.code can be:
//   0: unknown error
//   1: permission denied
//   2: position unavailable (error response from locaton provider)
//   3: timed out
	console.log("Error occurred. Error code: " + error.code);

};