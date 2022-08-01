import mongoose from "mongoose";
import Vendor from "../../models/Vendor.js";


async function readApprovedVendors(req, res){

    let vendors  = await Vendor.find({approved:true});


    res.send(vendors);
    
}

export default readApprovedVendors