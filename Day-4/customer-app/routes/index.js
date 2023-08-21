var express = require('express');
var router = express.Router();
var { addCustomer, getCustomers, getCustomersBySearch, deleteCustomer, getCustomerById } = require('../service/CustomerData');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('/login');
});

router.get('/login', function(req, res, next) {
  delete(req.session.user);
  res.render('login', { title: 'Login' });
});


router.get('/dashboard', function (req, res, next) {
  res.render('index', { title: 'Dashboard' });
});

router.get('/about', function (req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/customer', function (req, res, next) {
  res.render('customer', { title: 'Customers', data: getCustomers() });
});

router.get('/customer/add', function (req, res, next) {
  res.render('add-customer', { title: 'Add Customer' });
});

router.get('/customer/edit/:id', function (req, res, next) {
  console.log("id:" + req.params.id);
  res.render('edit-customer', { title: 'Update Customer', customer: getCustomerById(req.params.id) });
});

router.get('/customer/:field/:text', function (req, res, next) {
  res.render('customer', { title: 'Customers', data: getCustomersBySearch(req.params.field, req.params.text) });
});

module.exports = router;
