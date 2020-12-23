import express from "express";
import User from "../model/User";
const router = express.Router();
import {registerValidation, loginValidation} from "../validation";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

router.post('/register',async (req, res)=> {

    //validate data
    const {error} = registerValidation(req.body)
    if(error) return res.status(400).send({msg :error.details[0].message, status:false});

    //checking if user already exists
    const emailExist = await User.findOne({email:req.body.email});
    if (emailExist) return res.status(400).send({msg:'Email already exists', status: false});

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
        res.send({email:SavedUser, status:true});

    }catch(err){
        res.status(400).send({msg:err, status: false});
    }
    
})

//Login
router.post('/login',async (req, res)=> {

    //validate data
    const {error} = loginValidation(req.body)
    if(error) return res.status(400).send({msg :error.details[0].message, status:false});

     //checking if email exists
     const user  = await User.findOne({email:req.body.email});
     if (!user) return res.status(400).send({msg:'Email doesn\'t exists', status: false});

     //password is correct
     const validPass = await bcrypt.compare(req.body.password, user.password);
     if (!validPass) return res.status(400).send({msg:'Password is incorrect', status: false});

     //create and assign token
     const token = jwt.sign({_id: user._id, email: user.email}, process.env.TOKEN_SECRET)
     res.header('auth-token', token).send({token, status: true});
         
})

module.exports = router;