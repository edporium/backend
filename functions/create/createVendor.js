import mongoose from "mongoose";
import Vendor from "../../models/Vendor.js";
async function createVendor(req, res){

    let vendor  = req.body.vendor;

    console.log(vendor);

    let newVendor = new Vendor();

    Object.keys(vendor).forEach(key => {

       newVendor[key] = vendor[key]; 
        
    });

    newVendor.approved = false;

    newVendor.save();

    res.send(200)
}

export default createVendor;