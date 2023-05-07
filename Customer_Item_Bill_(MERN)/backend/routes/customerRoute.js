const express = require('express');
const customerRoute = express.Router();

const { addCustomer, allCustomers, oneCustomer, editCustomer, deleteCustomer, buyItemsByCustomer } = require('../controller/customerController');




customerRoute
.route('/addCustomer')
.post(addCustomer)


customerRoute
.route('/allCustomers')
.get(allCustomers)



customerRoute
.route('/oneCustomer/:id')
.get(oneCustomer)



customerRoute
.route('/editCustomer/:id')
.put(editCustomer)



customerRoute
.route('/deleteCustomer/:id')
.delete(deleteCustomer)


customerRoute
.route('/buyItemsByCustomer')
.post(buyItemsByCustomer)











module.exports = customerRoute;