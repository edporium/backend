import Admin from "../models/Admin.js";


async function newUser(req, res){

    let token = req.get('token');


    let newAdmin = new Admin({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username,
        password:'test'
    })


    await newAdmin.save()

    res.status(200);
    res.send(JSON.stringify({
        data:{},
        msg:'worker saved'
    }))
}

export default newUser