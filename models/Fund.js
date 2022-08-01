import mongoose from "mongoose";


const fundSchema = new mongoose.Schema({

    name:{
        unique:true,
        type:String
    },
    initialBalance:Number,
    balance:Number,
    distributed:Number

});

let Fund = new mongoose.model('Fund', fundSchema);

export default Fund