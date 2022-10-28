const Ticket = require('../models/ticket');

module.exports = {
    create
}

function create(req, res) {
    const ticket = req.body;
    ticket.flight = req.params.id;
    Ticket.create(ticket, function(err, ticket) {
        res.redirect(`/flights/${req.params.id}`);
    });
}