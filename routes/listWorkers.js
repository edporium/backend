import Admin from "../models/Admin.js";


async function listWorkers(req, res){

    let workers = await Admin.find({});

    console.log(workers)

    res.send({
        data:workers,
        message:'workers returned'
    })


}

export default listWorkers