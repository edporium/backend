import Fund from "../../models/Fund.js";

async function deleteFund(req, res){

    let fundId = req.body.fund._id;

    await Fund.deleteOne({fundId:fundId});

    res.status(200);

    res.send();

}

export default deleteFund