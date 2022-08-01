import mongoose from "mongoose";

async function deleteVendor(req, res){

    let vendorId = req.body.vendor.id;

    await mongoose.models.Vendor.deleteOne({_id:vendorId});

    res.sendStatus(200)
}

export default deleteVendor