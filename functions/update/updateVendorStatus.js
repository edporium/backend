import mongoose from "mongoose";

async function updateVendorStatus(req, res){

    let vendorId = req.body.vendor.vendorId;

    let decision = req.body.vendor.decision;

    console.log(req.body)

    if(decision){

        let vendor = await mongoose.models.Vendor.findOne({_id:mongoose.Types.ObjectId(vendorId)});

        console.log(vendor);

        vendor.approved = decision;
 
        //send email

        await vendor.save();

    }else{
        await mongoose.models.Vendor.deleteOne({_id:vendorId});
    }

    res.status(200)
    res.send();
}

export default updateVendorStatus