import mongoose from "mongoose";

async function updateFund(req, res){

    console.log('updating fund')

    let fundToUpdate = req.body.fund;

    let oldFund = await mongoose.models.Fund.findOne({_id:fundToUpdate._id})

    Object.keys(fundToUpdate).forEach((key)=>{

        oldFund[key] = fundToUpdate[key];

    })

    console.log(oldFund, fundToUpdate);

    oldFund.save()
    res.status(200);

    res.send()

}

export default updateFund