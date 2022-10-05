const mongoose = require("mongoose")
var validate = require('mongoose-validator')


  var nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
    }),
]

const BookSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
        validate: nameValidator,
        unique:true
    },
    score:{
        type:Number,
        default:0,
    },
},
{timestamps:true}
);

module.exports = mongoose.model("Book",BookSchema);