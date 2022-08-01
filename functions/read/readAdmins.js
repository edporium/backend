import Admin from "../../models/Admin.js";

async function readAdmins(req, res){

    let admins = await Admin.find({});

    res.send(admins)

}

export default readAdmins