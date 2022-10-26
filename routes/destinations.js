const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// All routes "starts with" / (root)

// POST /movies/:id/reviews
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;