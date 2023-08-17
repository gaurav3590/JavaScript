var express = require('express');
var router = express.Router();
var { addCustomer, getCustomers, updateCustomer, deleteCustomer, getCustomerById } = require('../service/CustomerData');

// /api/customer
router.get('/', async (req, res, next) =>{
  let record=await getCustomers();
  res.send(record);
});

router.get('/:id', function (req, res) {
  console.log("id:" + req.params.id);
  res.send(getCustomerById(req.params.id));
});

router.post('/', function (req, res) {
  addCustomer(req.body);
  res.send({ result: "ok", msg: "customer added ok" });
});

router.put('/', function (req, res) {
  // assignment
  updateCustomer(req.body);
  res.send({ result: "ok", msg: "customer updated ok" });
});


router.delete('/', function (req, res) {
  deleteCustomer(req.body)
  res.send({ result: "ok", msg: "customer deleted ok" }); //response to client
});


module.exports = router;