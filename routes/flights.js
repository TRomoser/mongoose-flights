var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// All routes start with '/movies'

// GET /movies (index functionality)
router.get('/', flightsCtrl.index);
// // GET /movies/new (new functionalit)
// router.get('/new', flightsCtrl.new);
// // GET /movies/:id (show functionality)
// router.get('/:id', flightsCtrl.show);
// // POST /movies (create functionality)
// router.post('/', flightsCtrl.create);

module.exports = router;
