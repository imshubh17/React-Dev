import express from "express";
import User from "../model/User";
const router = express.Router();
import {registerValidation} from "../validation";

router.post('/register',async (req, res)=> {

    //validate data
    const {error} = registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const SavedUser = await user.save();
        res.send(SavedUser);

    }catch(err){
        res.status(400).send(err);
    }
    
})

router.post('/login', (req, res)=> {
    res.send('Login');
})

module.exports = router;