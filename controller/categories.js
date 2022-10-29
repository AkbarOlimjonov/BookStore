const {Types} = require("mongoose");
const Category = require("../model/category");
const Product = require("../model/product");
const { categoryValidate } = require("../helper/validate");

module.exports.getAll = async function (req, res) {
  const categories = await Category.find();
  res.send(categories);
};

module.exports.Add = async function (req, res) {
  const { name, img } = req.body;

  const check = await categoryValidate(req.body);

  if (!!check.error) {
    return res.status(400).send("Validate error");
  }

  const category = new Category({
    name,
    img,
  });

  await category.save();
  res.send("Category Added");
};

module.exports.Update = async function (req, res) {
  const { name, img } = req.body;
  const id = req.params.id;

  const check = await categoryValidate(req.body);

  if (!!check.error) {
    return res.send("Validate Error");
  }

  await Category.findByIdAndUpdate(id, { name, img });

  const categories = await Category.find();

  res.send(categories);
};

module.exports.Delete = async function (req, res) {
  const id = req.params.id;
  await Category.findByIdAndRemove(id);
  res.send("Category Deleted");
};

module.exports.byId = async function (req, res) {
  const category = await Category.findById(req.params.id);
  const products = await Product.aggregate([
    {
      $match: {
        categoryId: Types.ObjectId(req.params.id),
      },
    },
  ]);
  const response = {
    category,
    products
  }
  res.send(response)
};
