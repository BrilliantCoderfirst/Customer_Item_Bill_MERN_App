const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const CORS = require('cors');
const cookieParser = require('cookie-parser');




app.use(express.json());
app.use(cookieParser());


const authRoute = require('./routes/authRoute');
app.use('/auth', CORS(), authRoute);
const customerRoute = require('./routes/customerRoute');
app.use('/customer', CORS(), customerRoute);
const itemRoute = require('./routes/itemRoute');
app.use('/item', CORS(), itemRoute);






PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Start on the Port ${PORT}`);
})