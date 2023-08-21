var express = require('express');
var router = express.Router();
var { addCustomer, getCustomers, updateCustomer, deleteCustomer, getCustomerById } = require('../service/Customer-PSQL');

// /api/customer
router.get('/', async (req, res, next) => {
    let records = await getCustomers();
    res.send(records);
});

router.get('/:id', async function (req, res) {
    console.log("id:" + req.params.id);
    let record = await getCustomerById(req.params.id);
    res.send(record);
});

router.post('/', async function (req, res) {
    await addCustomer(req.body);
    res.send({ result: "ok", msg: "customer added ok" });
});

router.put('/', async function (req, res) {
    // assignment
    await updateCustomer(req.body);
    res.send({ result: "ok", msg: "customer updated ok" });
});


router.delete('/', async function (req, res) {
    await deleteCustomer(req.body)
    res.send({ result: "ok", msg: "customer deleted ok" }); //response to client
});


module.exports = router;