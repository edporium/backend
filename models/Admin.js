import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },

    username:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    }
})



let Admin = new mongoose.model('Admin', adminSchema);



export default Admin