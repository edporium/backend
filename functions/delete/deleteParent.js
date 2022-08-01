import mongoose from "mongoose";
import Parent from "../../models/Parent.js";

async function deleteParent(req, res){

    let parentId = req.body.parent._id;



    let students = await mongoose.models.Student.find({parentId:parentId});

    students.forEach(async (student) => {
        
        let allowances = await mongoose.models.Allowance.find({studentId:student._id});

        allowances.forEach(async (allowance)=>{
            let fundId = allowance.sourceId;

            let fund = await mongoose.models.Fund.findOne({_id:mongoose.Types.ObjectId(fundId)});

            fund.balance += allowance.balance;

            fund.distributed = fund.initialBalance - fund.balance;
            console.log('adjusting funds', fund);

            

            fund.save();
            
        });

    await mongoose.models.Allowance.deleteMany({studentId:student._id});



    });


    await mongoose.models.Parent.deleteOne({_id:parentId});

    await mongoose.models.Student.deleteMany({parentId:parentId});

    res.status(200);

    res.send();

}

export default deleteParent