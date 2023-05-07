const express = require('express');
const customerModel = require('../models/customerModel');
const itemModel = require('../models/itemModel');



module.exports.addCustomer = async function addCustomer(req, res) {
    try {
        let customerObj = req.body;
        const customerData = await customerModel.create(customerObj);
        if (customerData) {
            return res.status(200).json({
                message: "Customer Add Successfully--!",
                data: customerData,
                status: "200"
            });
        }
        else {
            return res.send({
                message: "Customer Not Add"
            });
        }
       
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}



module.exports.allCustomers = async function allCustomers(req, res) {
    try {
        const customerData = await customerModel.find();
        res.status(200).send({
            message: "All Customers",
            data: customerData
        })
    }
    catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}



module.exports.oneCustomer = async function oneCustomer(req, res) {
    try {
        let id = req.params.id;
        const oneCustomerData = await customerModel.findById(id);
        res.status(200).send({
            message: "One Customers",
            data: oneCustomerData
        })
    }
    catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}



module.exports.editCustomer = async function editCustomer(req, res) {
    try {
        let id = req.params.id;
        let customerData = req.body;
        const EditCustomerData = await customerModel.findByIdAndUpdate(id, customerData);
        res.status(200).send({
            message: "Edit Customer Data Successfully---!",
            data: EditCustomerData,
            status: "200"
        })
    }
    catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}



module.exports.deleteCustomer = async function deleteCustomer(req, res) {
    try {
        let id = req.params.id;
        const deleteData = await customerModel.findByIdAndDelete(id);
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



module.exports.buyItemsByCustomer = async function buyItemsByCustomer(req, res) {
    try {
        let { customerId, productId } = req.body;
        const particularCustomer = await customerModel.findById(customerId);
        const particularItem = await itemModel.findById(productId);
        particularCustomer.items.push(particularItem);
        particularCustomer.save();
        res.status(200).send({
            message: "Customer Buy Item Successfully---!",
            data: particularCustomer,
            status: "200"
        })
    }
    catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

