var express = require('express');
var router = express.Router();
var { addCustomer, getCustomers, getCustomersBySearch, deleteCustomer, getCustomerById } = require('../service/Customer-PSQL');

router.get('/dashboard', function (req, res, next) {
    res.render('index', { title: 'Dashboard', name: req.session.user });
});

router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About', name: req.session.user });
});

router.get('/customer', async function (req, res, next) {
    let records = await getCustomers();
    res.render('customer', { title: 'Customers', data: records, name: req.session.user });
});

router.get('/customer/add', function (req, res, next) {
    res.render('add-customer', { title: 'Add Customer' });
});

router.get('/customer/edit/:id', async function (req, res, next) {
    console.log("id:" + req.params.id);
    let record = await getCustomerById(req.params.id)
    res.render('edit-customer', { title: 'Update Customer', customer: record });
});

router.get('/customer/:field/:text', async function (req, res, next) {
    res.render('customer', { title: 'Customers', data: getCustomersBySearch(req.params.field, req.params.text), name: req.session.user });
});

module.exports = router;
