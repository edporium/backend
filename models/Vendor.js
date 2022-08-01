import mongoose from "mongoose";


const vendorSchema = new mongoose.Schema({
    businessName: String,
    email:String,
    firstname:String,
    lastname:String,
    ein:String,
    about:String,
    vendorType:String,
    w9Path: String,
    approved:Boolean

})


let Vendor = new mongoose.model('Vendor', vendorSchema);

export default Vendor