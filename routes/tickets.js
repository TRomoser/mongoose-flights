var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

// POST /flights/:id/tickets
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;