import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import prismaClient from '@prisma/client';
import mongoose from 'mongoose';
import sendEmail from './apis/sendGrid/sendEmail.js';
import newWorker from './routes/newWorker.js';
import listWorkers from './routes/listWorkers.js';
import submitVendorForm from './routes/sumbitVendorForm.js';
import createParent from './functions/create/createParent.js';
import createAdmin from './functions/create/createAdmin.js';
import createFund from './functions/create/createFund.js';
import createVendor from './functions/create/createVendor.js';
import updateAdmin from './functions/update/updateAdmin.js';
import deleteAdmin from './functions/delete/deleteAdmin.js';
import updateFund from './functions/update/updateFund.js';
import readStudentsByParentId from './functions/read/readStudentsByParentId.js';
import readAllowancesByStudentId from './functions/read/readAllowancesByStudentId.js';
import readAdmins from './functions/read/readAdmins.js';
import readParents from './functions/read/readParents.js';
import readFunds from './functions/read/readFunds.js';
import deleteParent from './functions/delete/deleteParent.js';
import deleteFund from './functions/delete/deleteFund.js';
import readVendors from './functions/read/readApprovedVendors.js';
import updateVendorStatus from './functions/update/updateVendorStatus.js';
import readPendingVendors from './functions/read/readPendingVendors.js';
import readApprovedVendors from './functions/read/readApprovedVendors.js';
import deleteVendor from './functions/delete/deleteVendor.js';
import authenticate from './functions/user/authenticate.js';
const prisma = new prismaClient.PrismaClient();



const app = express();




let bodyParserJson = bodyParser.json()

app.use(cors({ origin: '*' }), bodyParserJson);


app.post('/user/authenticate', authenticate);

app.post('/create/parent', createParent);

app.post('/create/admin', createAdmin);

app.post('/create/vendor', createVendor);

app.post('/create/fund', createFund);

app.post('/update/admin', updateAdmin);

app.post('/update/fund', updateFund);

app.post('/update/vendorStatus', updateVendorStatus);

app.post('/delete/admin', deleteAdmin);

app.post('/delete/parent', deleteParent);

app.post('/delete/fund', deleteFund);

app.post('/delete/vendor', deleteVendor);

app.get('/read/admins', readAdmins);

app.get('/read/parents', readParents);

app.get('/read/funds', readFunds);

app.get('/read/pendingVendors', readPendingVendors);

app.get('/read/approvedVendors', readApprovedVendors);

app.get('/read/allowancesByStudentId', readAllowancesByStudentId);

app.get('/read/studentsByParentId', readStudentsByParentId);

app.post('/submitVendorForm', submitVendorForm);

app.listen(5000, () => console.log('Server Started...'));

mong();



async function mong() {

    console.log('mong');

    await mongoose.connect('mongodb+srv://duffy:Duffy51151998@cluster0.sbpok.mongodb.net/?retryWrites=true&w=majority');



    // try {

    //         let nu = new User({
    //             username:'trystinduffy@gmail.com',
    //             password:'test',
    //             type: 'admin'
    //         });

    //         let nu1 = new User({
    //             username:'trystin@gmail.com',
    //             password:'test',
    //             type: 'parent'
    //         });

    //         await nu.save();

    //         await nu1.save();

    // } catch (error) {
    //     console.log('user already exists')
    // }
}


