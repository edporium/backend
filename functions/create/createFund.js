import Fund from "../../models/Fund.js";

async function createFund(req, res){

    let newFund = new Fund();

    let recievedFund = req.body.fund;


    Object.keys(recievedFund).map((key, value)=>{

        newFund[key] = recievedFund[key];

    })

    newFund.distributed = 0;

    newFund.initialBalance = recievedFund.balance;

    newFund.save();

    res.status(200);

    res.send()


}

export default createFund;