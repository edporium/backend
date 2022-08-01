import mongoose from "mongoose";

async function deleteAdmin(req, res) {


    try {


        let adminToDelete = req.body.admin;

        await mongoose.models.Admin.deleteOne({ _id: adminToDelete._id });

        console.log(adminToDelete)
        res.status(200);
        res.send()

    } catch (error) {
        console.log(error);
        res.status(500);

        res.send()
    }


}


export default deleteAdmin