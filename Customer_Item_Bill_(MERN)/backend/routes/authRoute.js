const express = require('express');
const authRoute = express.Router();

const { postSignup, postLogin } = require('../controller/authController');





authRoute
.route('/signup')
.post(postSignup);



authRoute
.route('/login')
.post(postLogin);
















module.exports = authRoute;