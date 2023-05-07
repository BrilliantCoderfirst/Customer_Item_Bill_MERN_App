const mongoose = require('mongoose');


const URL = process.env.URL;
mongoose.connect(URL).then(() => console.log("Item Database Connected Successfully---!")).catch((err) => console.log(err));


const itemScheme = new mongoose.Schema({
    brandName: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    priceCode: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        default: 0
    },
    cgst: {
        type: Number,
        required: true
    },
    sgst: {
        type: Number,
        required: true
    },
    gst: {
        type: Number,
        required: true
    },
});



const itemModel = new mongoose.model('item', itemScheme);
module.exports = itemModel;