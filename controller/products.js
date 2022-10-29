const mongoose = require("mongoose");
const Product = require("../model/product");
const { productValidate } = require("../helper/validate");

module.exports.getAll = async function (req, res) {
  const products = await Product.find();
  res.send(products);
};

module.exports.Add = async function (req, res) {
  const { name, desc, img, categoryId, price } = req.body;

  const check = await productValidate(req.body);

  console.log(check);

  if(!!check.error){
    return res.status(400).send("Validate error");
  }

  const product = new Product({
    name,
    price,
    img,
    desc,
    categoryId,
  });

  await product.save();
  res.send("Product Added");
};

module.exports.Update = async function (req, res) {
  const { name, desc, img, categoryId, price } = req.body;
  const id = req.params.id;

  const check = await productValidate(req.body);

  if(!!check.error){
    return res.send("Validate Error")
  }

  await Product.findByIdAndUpdate(id, { name, img, desc, categoryId, price });

  const products = await Product.find();

  res.send(products);
};

module.exports.Delete = async function (req, res) {
  const id = req.params.id;
  await Product.findByIdAndRemove(id);
  res.send("Product Deleted");
};

module.exports.byId = async function (req, res) {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.send(product);
};
