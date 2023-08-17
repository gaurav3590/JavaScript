var express = require('express');
var customerService = require('../service/customer-service');
var customerDbService = require('../service/customerdb-service');
var customerMongoService = require('../service/customer-mongo-service');
var router = express.Router();

router.get('/customer/edit/:id', function (req, res, next) {
    var callback = function (data) {
        res.render('customer-edit', { title: 'Update Customer', customer: data });
    }
    customerMongoService.getCustomerById(req.params.id, callback)
});

router.get('/customer/:field/:searchWord', function (req, res, next) {
    var callback = function (data) {
        res.render('customer', { title: 'Customer', data: data });
    }
    data: customerMongoService.getCustomersBySearch(req.params.field, req.params.searchWord, callback);
});



router.get('/customer/add', function (req, res, next) {
    res.render('customer-add', { title: 'Add Customer' });
});


router.get('/dashboard', function (req, res, next) {
    res.render('index', { title: 'Dashboard' });
});

router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About' });
});

router.get('/customer', function (req, res, next) {
    var callback = function (data) {
        res.render('customer', { title: 'Customer', data: data });
    }
    customerMongoService.getCustomers(callback);
});

router.get('/customer/:search', function (req, res, next) {
    res.redirect("/customer");
});

module.exports = router;