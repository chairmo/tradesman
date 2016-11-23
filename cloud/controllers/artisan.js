var CRUD = require('../utils/crud');
var Artisan = require('../models/artisan');

module.exports = function (app, io) {

    /**
     * Create new Artisan
     */
    app.post('/api/artisan', function (req, res) {

        // Object to be persisted to the database
        var createObject = {
            name: req.body.name,
            surname: req.body.surname,
            company: req.body.company,
            cell: req.body.cell,
            email: req.body.email,
            experience: req.body.experience,
            capacity: req.body.capacity,
            skill: req.body.skill
        };

        CRUD().create(Artisan, createObject, function (success) {
            res.json(success);
        }, function (error) {
            res.json(error);
        });

    });

    /**
     * Retrieve All Artisans
     */
    app.get('/api/artisan', function (req, res) {
        CRUD().findAll(Artisan, {}, 'asc', req.params.take, req.params.skip, function (success) {
            res.json(success);
        }, function (error) {
            res.json(error);
        });
    });

    /**
     * Retrieve Single Artisan
     */
    app.get('/api/artisan/:id', function (req, res) {

        // Find an object based on the following properties
        var findObject = {
            _id: req.params.id
        };

        CRUD().findOne(Artisan, findObject, function (success) {
            res.json(success);
        }, function (error) {
            res.json(error);
        });

    });

    /**
     * Update Existing Artisan
     */
    app.put('/api/artisan/:id', function (req, res) {

        // Details to be updated in the database
        var updateObject = {
            name: req.body.name,
            surname: req.body.surname,
            company: req.body.company,
            cell: req.body.cell,
            email: req.body.email,
            experience: req.body.experience,
            capacity: req.body.capacity,
            skill: req.body.skill
        };

        // The parameters the find will be based on
        var findObject = {
            _id: req.params.id
        };

        CRUD().update(Artisan, findObject, updateObject, function (success) {
            res.json(success);
        }, function (error) {
            res.json(error);
        });

    });

};