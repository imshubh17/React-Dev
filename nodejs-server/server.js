// import modules
import express  from 'express';
import bodyParser, { json } from 'body-parser';
import fs from 'fs';

//create server app
const app = express();
app.use(bodyParser.json());

//read file
const rawData;
fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    rawData = JSON.parse(data);    
});

//Routing
app.get('/',(req, res) => res.status(200).send("Server page !!"));
app.get('/api',(req, res) => res.status(200).send(JSON.parse(rawData)));  

//server listening
app.listen(8000, ()=>console.log('server listnning at localhost:8000'));