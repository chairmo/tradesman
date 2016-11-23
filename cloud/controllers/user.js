var CRUD = require('../utils/crud');
var User = require('../models/user');

module.exports = function (app, io) {

    /**
     * Create new User
     */
    app.post('/api/user', function (req, res) {

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

        CRUD().create(User, createObject, function (success) {
            res.json(success);
        }, function (error) {
            res.json(error);
        });

    });

    /**
     * Retrieve All Contacts
     */
    app.get('/api/user', function (req, res) {
        CRUD().findAll(User, {}, 'asc', req.params.take, req.params.skip, function (success) {
            res.json(success);
        }, function (error) {
            res.json(error);
        });
    });

    /**
     * Retrieve Single User
     */
    app.get('/api/user/:id', function (req, res) {

        // Find an object based on the following properties
        var findObject = {
            _id: req.params.id
        };

        CRUD().findOne(User, findObject, function (success) {
            res.json(success);
        }, function (error) {
            res.json(error);
        });

    });

    /**
     * Update Existing User
     */
    app.put('/api/user/:id', function (req, res) {

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

        CRUD().update(User, findObject, updateObject, function (success) {
            res.json(success);
        }, function (error) {
            res.json(error);
        });

    });

};