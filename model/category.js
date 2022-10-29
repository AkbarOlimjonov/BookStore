const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

//635cfba157db9d331f4e54aa

module.exports = model("category", categorySchema);
