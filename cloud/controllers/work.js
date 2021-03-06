var CRUD = require('../utils/crud');
var Work = require('../models/work');
var twilio = require('twilio');

var accountSid = process.env.TWILIO_SID;
var authToken = process.env.TWILIO_TOKEN;

var client = new twilio.RestClient(accountSid, authToken);

module.exports = function (app) {

    /**
     * Create new Work
     */
    app.post('/api/work', function (req, res) {

        var ref = Math.floor((Math.random() * 10000) + 1);;

        // Object to be persisted to the database
        var createObject = {
            artisan: req.body.artisan,
            ref: ref,
            name: req.body.name,
            surname: req.body.surname,
            location: req.body.location,
            cell: req.body.cell,
            description: req.body.description,
            owner: req.body.owner,
        };

        CRUD().create(Work, createObject, function (success) {
            client.messages.create({
                body: 'Congratulations ' + req.body.name + ' ' + req.body.surname + ' you have scheduled a job with artisan:' + req.body.artisan + '. Your reference number is #' + ref + '. Please use this to rate the work when it is done by sending 1-5 where 1 is very bad and 5 is very good to 0823592858.',
                to: req.body.cell,
                from: '+12565307141'
            }, function (err, message) {
                if (err) {
                    res.json({
                        error: err.message + ' NB: Dont forget the + sign in front of the number.'
                    });
                } else {
                    res.json({
                        success: "Your request was processed successfully :)"
                    });
                }
            });
        }, function (error) {
            res.json(error);
        });

    });

    /**
     * Retrieve All Works
     */
    app.get('/api/work', function (req, res) {
        CRUD().findAll(Work, {}, 'asc', req.params.take, req.params.skip, function (success) {
            res.json(success);
        }, function (error) {
            res.json(error);
        });
    });

    /**
     * Retrieve Single Work
     */
    app.get('/api/work/:id', function (req, res) {

        // Find an object based on the following properties
        var findObject = {
            _id: req.params.id
        };

        CRUD().findOne(Work, findObject, function (success) {
            res.json(success);
        }, function (error) {
            res.json(error);
        });

    });

    /**
     * Update Existing Work
     */
    app.put('/api/work/:id', function (req, res) {

        // Details to be updated in the database
        var updateObject = {
            rating: req.body.rating
        };

        // The parameters the find will be based on
        var findObject = {
            _id: req.params.id
        };

        CRUD().update(Work, findObject, updateObject, function (success) {
            res.json(success);
        }, function (error) {
            res.json(error);
        });

    });

};