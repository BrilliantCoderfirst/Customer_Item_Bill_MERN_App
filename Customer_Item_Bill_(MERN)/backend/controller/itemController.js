const express = require('express');
const itemModel = require('../models/itemModel');



module.exports.addItem = async function addItem(req, res) {
    try {
        let itemObj = req.body;
        const itemData = await itemModel.create(itemObj);
        if (itemData) {
            return res.status(200).json({
                message: "Item Add Successfully--!",
                data: itemData,
                status: "200"
            });
        }
        else {
            return res.send({
                message: "Item Not Add"
            });
        }
       
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}



module.exports.allItems = async function allItems(req, res) {
    try {
        const allItemsData = await itemModel.find();
        res.status(200).send({
            message: "All Items",
            data: allItemsData
        })
    }
    catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}


module.exports.oneItem = async function oneItem(req, res) {
    try {
        let id = req.params.id;
        const oneItemData = await itemModel.findById(id);
        res.status(200).send({
            message: "One Item",
            data: oneItemData
        })
    }
    catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}



module.exports.editItem = async function editItem(req, res) {
    try {
        let id = req.params.id;
        let itemData = req.body;
        const editItemData = await itemModel.findByIdAndUpdate(id, itemData);
        res.status(200).send({
            message: "Edit Item Data Successfully---!",
            data: editItemData,
            status: "200"
        })
    }
    catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}



module.exports.deleteItem = async function deleteItem(req, res) {
    try {
        let id = req.params.id;
        const deleteData = await itemModel.findByIdAndDelete(id);
        res.status(200).send({
            message: "Customer Delete Successfully---!",
            data: deleteData,
            status: "200"
        })
    }
    catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}



