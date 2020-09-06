'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/devices', (req, res)=>{
    // res.send({ message: `Turn ${req.params.turn}` });
});


const uri = "mongodb+srv://user1:user1@cluster0-az23m.gcp.mongodb.net/lights_db?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    // const collection = client.db("lights_db").collection("Device");
    // console.log(collection.count());
    // client.close();
    if (err != null) {
        console.log("Error al conectar la BD ",err);
    } else {
        console.log("Conectado OK a DB");
        app.listen(port, ()=>{
            console.log(`API rest en localhost:${port}`);
        });
    }

});




