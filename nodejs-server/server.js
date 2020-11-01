// import modules
import express  from 'express';
import bodyParser, { json } from 'body-parser';
import fs from 'fs';

//create server app
const app = express();
app.use(bodyParser.json());

//read file
var rawData = {}
fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    rawData = JSON.parse(data);    
});

//Routing
app.get('/',(req, res) => res.status(200).send("Server page !!"));

app.get('/api',(req, res) => res.status(200).send(JSON.stringify(rawData)));

app.post('/api/user/signup',(req,res)=>{    
    withDB(async (db)=> {        
        const {FirstName, LastName, email, password} = req.body;
        const userData = {FirstName, LastName, email, password};
        //const userInfo = await db.collection('Users').findOne({ email: email })
        await db.collection('Users').insertOne(userData, async (err, res)=>{
            if (err){
                res.status(401).json({message:"Registration failed", error: err});
            }
            else{
                const registerdUser = await db.collection('Users').findOne({ email: email });
                res.status(200).json(updatedArticleInfo); 
            }
        });      
    }, 'ReactDev', res);       
});

//server listening
app.listen(8000, ()=>console.log('server listnning at localhost:8000'));