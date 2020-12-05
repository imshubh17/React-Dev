//validation
import Joi from "joi";

//register validation
const registerValidation = (data) =>{
    const schema = Joi.object({
        firstName: Joi.string().min(3).max(50).required(),
        lastName: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(6).max(20).required().email(),
        password: Joi.string().min(6).max(15).required(),
    });
    return schema.validate(data);
}

//login validation
const loginValidation = (data) =>{
    const schema = Joi.object({      
        email: Joi.string().min(6).max(20).required().email(),
        password: Joi.string().min(6).max(15).required(),
    });
    return schema.validate(data);
}

module.exports.loginValidation = loginValidation;

module.exports.registerValidation = registerValidation;

