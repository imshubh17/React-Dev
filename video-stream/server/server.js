const express = require('express');
const app = express();
const server = require('http').Server(app);
const { v4:uuidv4} = require('uuid');

const data = {"uid":uuidv4()}

app.get('/',(req,res)=>{
    res.send(JSON.stringify({"uid":uuidv4()}));
})

app.get('/:room',(req,res)=>{
    res.send({roomId:req.params.room})
})




server.listen(3030);