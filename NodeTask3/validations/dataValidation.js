const Joi = require('@hapi/joi');

const authSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    password: Joi.string().alphanum().required(),
    age: Joi.number().min(4).max(130).required()
})

module.exports ={
    authSchema:authSchema
}