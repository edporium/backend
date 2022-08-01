import mongoose from "mongoose";
import Admin from "../../models/Admin.js";


async function updateAdmin(req, res){

    let adminToUpdate = req.body.admin;

    console.log(adminToUpdate)

 


    try {
        let admin = await mongoose.models.Admin.findOne({_id:adminToUpdate._id})
        console.log(admin)
        Object.keys(adminToUpdate).map((key, index)=>{
    
            admin[key] = adminToUpdate[key]
        })
    
        
        admin.save();
    
        res.status(200);
    
        res.send()
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send()
    }
}

export default updateAdmin