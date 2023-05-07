const mongoose = require('mongoose');
const emailValidate = require('email-validator');


const URL = process.env.URL;
mongoose.connect(URL).then(() => console.log("Auth Database Connected Successfully---!")).catch((err) => console.log(err));


const authScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function() {
            return emailValidate.validate(this.email);
        }
    },
    contact: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
});



const authModel = new mongoose.model('auth', authScheme);
module.exports = authModel;