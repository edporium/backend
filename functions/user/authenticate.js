import Admin from '../../models/Admin.js';
import Parent from '../../models/Parent.js';

async function authenticate(req, res){

    let username = req.body.username;

    let password = req.body.password;

    let r = await Admin.findOne({
        username:username,
        password:password
    })

    if(r){
        res.send({
            type:'admin'
        })
    }else{

        r = await Parent.findOne({
            username:username,
            password:password
        });

        if(r){
            res.send({
                type:'parent',
                parentId:r._id
            })
        }else{
            res.sendStatus(401);
        }
    }




}

export default authenticate


