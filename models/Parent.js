import mongoose from "mongoose";
import Student from "./Student.js";


const parentSchema = new mongoose.Schema({

    username: {
        type:String,
        unique:true
    },
    password: String,
    firstname: String,
    lastname: String,
    phone:String,
    state:String,
    zip:String,
    city:String,
    street:String,
    dob: Date,
    studentIds: Array,
    accountActive: Boolean
    
});

parentSchema.methods.addNewStudents = async function(recievedStudents){

    recievedStudents.forEach(recievedStudent => {
        
        let newStudent = new Student();

        newStudent.firstname = recievedStudent.firstname;

        newStudent.lastname = recievedStudent.lastname;

        newStudent.parentId = this._id;

        newStudent.dateOfBirth = recievedStudent.dateOfBirth;

        newStudent.save();

    });


}

let Parent = new mongoose.model('Parent', parentSchema);

export default Parent;