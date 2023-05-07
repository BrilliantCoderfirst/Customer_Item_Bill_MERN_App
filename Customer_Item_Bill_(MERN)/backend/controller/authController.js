const express = require('express');
const authModel = require('../models/authModel');
const jwt = require("jsonwebtoken");


const JWT_KEY = process.env.JWT_KEY;



module.exports.postSignup = async function postSignup(req, res){
    try {
        let userAuth = req.body;
        const userData = await authModel.create(userAuth);
        if (userData) {
            res.send({
                message: "User Sign In Successfully",
                data: userData,
                status: "200"
            });
        }
        else {
            res.send({
                message: "User Not Sign In"
            });
        }
        
    }
    catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
}


module.exports.postLogin = async function postLogin(req, res) {
    try {
        const userData = req.body;
        if (userData.email) {
            let user = await authModel.findOne({email: userData.email});
            if (user) {
                if (user.password == userData.password && user.email == userData.email) {
                    let uid = user["_id"];
                    let token = jwt.sign({payload: uid}, JWT_KEY);
                    res.cookie("isLoggedIn", token, { httpOnly: true });
                    return res.status(200).send({
                        message: "User Is Logged In",
                        data: user,
                        status: "200"
                    })
                }
                else {
                    res.send({
                        message: "Wrong Credentials"
                    });
                }
            }
            else {
                res.send({
                    message: "User Not Found"
                });
            }
        }
        else {
            res.send({
                message: "Email Field Is Empty"
            });
        }
    }
    catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
}