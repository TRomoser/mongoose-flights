const Destination = require('../models/flight');

module.exports = {
  create
};

function create(req, res) {
  Flight.findById(req.params.id, function(err, movie) {
    // We push an object with the data for the
    // review subdoc into Mongoose arrays
    flight.destinations.push(req.body);
    destination.save(function(err) {
      // Step 5: Respond with a redirect because we've mutated data
      res.redirect(`/flight/${flight._id}`);
    });
  });
}