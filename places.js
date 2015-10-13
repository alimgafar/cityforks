Places = new Mongo.Collection('places');

Meteor.methods({
  'fetchNearbyLocations': function(coords) {
    if (Meteor.isServer) {
    //  results = HTTP.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + coords.latitude + "," + coords.longitude + "&radius=500&types=food&key=AIzaSyCtfoCAldCEf8hXUlkVUd4UljqKR6W_aF4")
      results = HTTP.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.77366823201335,-73.75196541347871&radius=500&types=food&key=AIzaSyCtfoCAldCEf8hXUlkVUd4UljqKR6W_aF4");
        console.log(results);
      _(results.data.results).each(function(loc) {
        _.extend(loc, {loc: {type: "Point", coordinates: [loc.geometry.location.lng, loc.geometry.location.lat]}});
        Places.upsert({id: loc.id}, {$set: loc});
      });
    }
  }
});
