const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./modules/connection');
const response = require('./modules/response-result');
require('dotenv').load();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use('/img', express.static(__dirname+'/img'));
app.use('/uploads', express.static(__dirname+'/uploads'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();
});

app.get('/test', function(req, res) {
    res.send('test success!');
});

const server = app.listen(port, function(){
    const address = server.address().address;
    console.log('Server is listening at http://%s:%s', address, port);
});