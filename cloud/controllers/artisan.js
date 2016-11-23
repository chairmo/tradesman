var request = require('request');
var util = require('util');
var CRUD = require('../utils/crud');
var Contact = require('../models/contact');

module.exports = function (app, io) {

    /**
     * Create new Contact
     */
    app.post('/api/contact', function (req, res) {

        // Object to be persisted to the database
        var createObject = {
            MSISDN: req.body.MSISDN,
            ID: req.body.ID,
            Firstname: req.body.Firstname,
            Lastname: req.body.Lastname,
            Status: req.body.Status,
            Salary: req.body.Salary,
            RelationshipStatus: req.body.RelationshipStatus
        };

        CRUD().create(Contact, createObject, function (success) {
            io.emit('contact create', success);
            res.json(success);
        }, function (error) {
            res.json(error);
        });

    });

    /**
     * Retrieve All Contacts
     */
    app.get('/api/contact', function (req, res) {
        CRUD().findAll(Contact, {}, 'asc', req.params.take, req.params.skip, function (success) {
            res.json(success);
        }, function (error) {
            res.json(error);
        });
    });

    /**
     * Retrieve Single Contact
     */
    app.get('/api/contact/:id', function (req, res) {

        // Find an object based on the following properties
        var findObject = {
            _id: req.params.id
        };

        CRUD().findOne(Contact, findObject, function (success) {
            res.json(success);
        }, function (error) {
            res.json(error);
        });

    });

    /**
     * Update Existing Contact
     */
    app.put('/api/contact/:id', function (req, res) {

        var status = "Pending";

        if (req.body.ID && req.body.Firstname && req.body.Lastname && req.body.Salary) {
            status = "Complete";
        }

        // Details to be updated in the database
        var updateObject = {
            MSISDN: req.body.MSISDN,
            ID: req.body.ID,
            Email: req.body.Email,
            Firstname: req.body.Firstname,
            Lastname: req.body.Lastname,
            Employer: req.body.Employer,
            Status: status,
            Salary: req.body.Salary,
            Spouses: req.body.Spouses,
            Children: req.body.Children,
            OtherDependants: req.body.OtherDependants,
            Bathrooms: req.body.Bathrooms,
            Kitchens: req.body.Kitchens,
            Bedrooms: req.body.Bedrooms,
            Fax: req.body.Fax,
            RelationshipStatus: req.body.RelationshipStatus,
        };

        // The parameters the find will be based on
        var findObject = {
            _id: req.params.id
        };

        CRUD().update(Contact, findObject, updateObject, function (success) {
            res.json(success);
        }, function (error) {
            res.json(error);
        });

    });

};