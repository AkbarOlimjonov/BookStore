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
    },
    price: {
        type: Number,
        required:true
    },
    img: {
        type: String,
        required : true
    }
})

//635cfba157db9d331f4e54aa

module.exports = model('product', productSchema)