import Vendor from '../../models/Vendor.js'

async function readPendingVendors(req, res){

    let vendors  = await Vendor.find({approved:false});


    res.send(vendors);
} 

export default readPendingVendors