import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    firstname: String,
    lastname:String,
    dob:Date,
    parentId : mongoose.Schema.Types.ObjectId,
    allowanceIds: Array

})

let Student = new mongoose.model('Student', studentSchema);

export default Student;