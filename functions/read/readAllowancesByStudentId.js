import mongoose from "mongoose";
import Allowance from '../../models/Allowance.js'
async function readAllowancesByStudentId(req, res){


    let id = req.query.studentId;

    let allowances = await Allowance.find({studentId:id});

    console.log('reading allowances: ', allowances)

    res.status(200)

    res.send(allowances)

}

export default readAllowancesByStudentId