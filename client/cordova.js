/* Done here to be able to run these first */

Meteor.startup(function() {

	//navigator.geolocation = navigator.getlocation;
	navigator.geolocation.getCurrentPosition(success);

});


success = function(position) {
	Session.set('location', positon);
}