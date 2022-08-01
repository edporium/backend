import mongoose from "mongoose";

async function readStudentsByParentId(req, res){

    
    let parentId = req.query.parentId;
    
    console.log(parentId)
    let students = await mongoose.models.Student.find({parentId:parentId});

    res.status(200);

    res.send(students);
}

export default readStudentsByParentId