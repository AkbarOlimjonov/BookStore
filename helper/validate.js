const Joi = require('joi');


module.exports.productValidate = function (body) {
  const schema = Joi.object({
    name: Joi.string().required(),
    desc: Joi.string().required(),
    img: Joi.string().required(),
    categoryId: Joi.required(),
    price: Joi.number().integer().required().min(10000),
  });

  return schema.validate(body);
}


module.exports.categoryValidate = function (body) {
  const schema = Joi.object({
    name: Joi.string().required(),
    img: Joi.string().required(),
  });
  return schema.validate(body);
}

