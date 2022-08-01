import mongoose from "mongoose";


const allowanceSchema = new mongoose.Schema({
    sourceId: mongoose.Schema.Types.ObjectId,
    balance:Number,
    initialBalance:Number,
    studentId:String
});

let Allowance = new mongoose.model('Allowance', allowanceSchema);

export default Allowance;