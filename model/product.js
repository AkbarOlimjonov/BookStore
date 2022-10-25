const { Schema, model, Types } = require('mongoose');

const productSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    categoryId:{
        type: Types.ObjectId,
        required: true
    }
})

module.exports = model('product', productSchema)