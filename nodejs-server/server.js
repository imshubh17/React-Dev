// import modules
import express  from 'express';
import bodyParser, { json } from 'body-parser';
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//connect db
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser: true, useUnifiedTopology: true}, ()=> console.log('connected to db'));

//create server app
const app = express();
app.use(express.json());

//import routes
import authRoute from "./routes/auth";

//route middleware
app.use('/api/user',authRoute);

//Routing

app.get('/',(req, res) => res.status(200).send("Server page !!"));

//server listening
app.listen(8000, ()=>console.log('server listnning at localhost:8000'));