// import modules
import express  from 'express';
import bodyParser, { json } from 'body-parser';
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
import varifyToken from "./routes/varifyToken";

dotenv.config();

//data
const data = [{
    "id": 1,
    "title": "Java-Script",
    "desc": "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions." ,
    "imgUrl": "https://github.com/imshubh17/Projects/blob/master/images/New%20folder/js.png" 
  }, {
    "id": 2,
    "title": "Go(Golang)",
    "desc": "Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.",
    "imgUrl": "https://github.com/imshubh17/Projects/blob/master/images/New%20folder/go.png"
  }, {
    "id": 3,
    "title": "Python",
    "desc": "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
    "imgUrl": "https://github.com/imshubh17/Projects/blob/master/images/New%20folder/py.png"
  }];

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

app.get('/', varifyToken,(req, res) => res.status(200).send("Server page !!"));
app.get('/api',(req, res) => res.status(200).send({data:JSON.stringify(data)}));
//server listening
app.listen(5000, ()=>console.log('server listnning at localhost:5000'));