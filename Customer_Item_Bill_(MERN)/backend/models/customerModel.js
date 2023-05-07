const mongoose = require('mongoose');


const URL = process.env.URL;
mongoose.connect(URL).then(() => console.log("Customer Database Connected Successfully---!")).catch((err) => console.log(err));


const customerScheme = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    cityName: {
        type: String,
        required: true
    },
    items: []
});



const customerModel = new mongoose.model('customer', customerScheme);
module.exports = customerModel;