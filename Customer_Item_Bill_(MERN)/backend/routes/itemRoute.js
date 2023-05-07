const express = require('express');
const itemRoute = express.Router();

const { addItem, allItems, oneItem, editItem, deleteItem } = require('../controller/itemController');




itemRoute
.route('/addItem')
.post(addItem)


itemRoute
.route('/allItems')
.get(allItems)


itemRoute
.route('/oneItem/:id')
.get(oneItem)


itemRoute
.route('/editItem/:id')
.put(editItem)



itemRoute
.route('/deleteItem/:id')
.delete(deleteItem)














module.exports = itemRoute;