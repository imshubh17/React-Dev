import express from "express";
import User from "../model/User";
const router = express.Router();
import {registerValidation, loginValidation} from "../validation";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

router.post('/register',async (req, res)=> {

    //validate data
    const {error} = registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);

    //checking if user already exists
    const emailExist = await User.findOne({email:req.body.email});
    if (emailExist) return res.status(400).send('Email already exists');

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashPassword
    });

    try {
        const SavedUser = await user.save();
        res.send(SavedUser);

    }catch(err){
        res.status(400).send(err);
    }
    
})

//Login
router.post('/login',async (req, res)=> {

    //validate data
    const {error} = loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);

     //checking if email exists
     const user  = await User.findOne({email:req.body.email});
     if (!user) return res.status(400).send('Email doesn\'t exists');

     //password is correct
     const validPass = await bcrypt.compare(req.body.password, user.password);
     if (!validPass) return res.status(400).send('Password is incorrect');

     //create and assign token
     const token = jwt.sign({_id: user._id, email: user.email}, process.env.TOKEN_SECRET)
     res.header('auth-token', token).send(token);
         
})

module.exports = router;