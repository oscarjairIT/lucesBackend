'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //mongodb+srv://user1:<password>@cluster0-az23m.gcp.mongodb.net/<dbname>

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/test_dimmer/:turn', (req, res)=>{
    res.send({ message: `Turn ${req.params.turn}` });
});

app.listen(port, ()=>{
    console.log(`API rest en localhost:${port}`);
});