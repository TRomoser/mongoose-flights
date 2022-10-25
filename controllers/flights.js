const Flight = require('../models/flight');

module.exports = {
  index,
  show,
  new: newFlight,
  create
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { title: 'All Flights', flights });
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flight/show', { title: 'Flight Detail', flight });
  });
}

function newFlight(req, res) {
  const newFlight = new Flight();
// Obtain the default date
  const dt = newFlight.departs;
// Format the date for the value attribute of the input
  let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
  departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
  res.render('flights/new', { title: 'Add Flight', departsDate });
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    console.log(err);
    if (err) return res.redirect('/flights/new');
    res.redirect('/flights');
  });
}
