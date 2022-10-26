'use strict';
const express = require('express');
const cors = require ('cors');
const bodyParser = require('body-parser');
const config = require('./firebase-config');
const productRoutes = require('./routes/product-routes');
const userAccountRoutes = require('./routes/userAccounts-routes')

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// CORS
const corsOptions ={
    origin: '*',
    credentials:true,
    //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
app.use(cors(corsOptions))

// BodyParser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', productRoutes.routes);
app.use('/api', userAccountRoutes.routes);

app.listen(config.port, () => console.log('App is listning on url http://localhost:' + config.port));
