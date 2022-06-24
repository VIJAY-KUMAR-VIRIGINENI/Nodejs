import Joi from 'joi';
export const validator=(userObj)=>{
const name = userObj.userName;
    const age = userObj.age;
    const password = userObj.password;
    const schema = Joi.object({
        userName: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        password: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        age: Joi.number()
        .integer()
        .min(4)
        .max(130),
        
    })
return schema.validate(userObj);}