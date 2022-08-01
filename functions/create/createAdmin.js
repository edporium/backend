import Admin from "../../models/Admin.js";

function createAdmin(req,res){

    let admin = req.body.admin

    let newAdmin = new Admin();




    try {
        Object.keys(admin).map((key, index)=>{

            newAdmin[key] = admin[key]
        })

        newAdmin.password = 'test';
    
        newAdmin.save();
    
        res.status(200);
    
        res.send()
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send()
    }

}

export default createAdmin;