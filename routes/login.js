import { PrismaClient } from "@prisma/client";
import generateToken from "../functions/generateToken.js";
import hashPassword from "../functions/hashPassword.js";
import loginIsValid from "../functions/loginIsValid.js";

export default async function login(req, res){

    console.log(req.body)

    

}