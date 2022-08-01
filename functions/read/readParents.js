import mongoose from "mongoose";


async function readParents(req, res){


    let parents = await mongoose.models.Parent.find();

    console.log('read parents: ', parents)

    res.status(200)

    res.send(parents)
}


export default readParents