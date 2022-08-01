import Allowance from '../../models/Allowance.js';
import Fund from '../../models/Fund.js';
import Parent from '../../models/Parent.js';
import Student from '../../models/Student.js';
import mongoose from 'mongoose'
async function createParent(req, res){


    let parent = req.body.parent;

    let students = req.body.students;

    let allowances = req.body.allowances;

    let newParent = new Parent();


   console.log('creating parent', req.body)

    Object.keys(parent).map((key, index)=>{

        if(key != '_id'){

            newParent[key] = parent[key]
        }

    });

    newParent.password = 'test'

    let newStudents = []
    let newAllowances = []
    let updatedFunds = []
    students.forEach((student) => {
        let newStudent = new Student();

        Object.keys(student).forEach((key)=>{
            if(key != '_id'){

                newStudent[key] = student[key];
            }else{
                allowances[student[key]].forEach((allowance)=>{
                    console.log('saving allowance: ', allowance)
                    let newAllowance = new Allowance();
                    Fund.findOne({_id:mongoose.Types.ObjectId(allowance.sourceId)}).then((fund)=>{

                        console.log(fund)
                        let newBalance = fund.balance - allowance.balance;
                        let newDistributed = fund.initialBalance - newBalance
                        if(newBalance >= 0 && newDistributed >= 0){
                            fund.balance = newBalance
                            fund.distributed = newDistributed
                            fund.save()
    
                        }else{
                            res.status(500);
                            res.send();
                        }

                    });
                    newAllowance.sourceId = allowance.sourceId;
                    newAllowance.initialBalance = allowance.balance;
                    newAllowance.balance = allowance.balance;
                    newAllowance.studentId = newStudent._id;
                    newStudent.allowanceIds.push(newAllowance._id)
                    
                    newAllowance.save()

                    
                    
        
                });

                

            }

            
        });
        
        

        
        newStudent.parentId = newParent.id;
        newParent.studentIds.push(newStudent.id)
        newStudents.push(newStudent);
    });

    
  

    newStudents.forEach((student)=>{
        student.save();
    })

  
    await newParent.save();

    res.status(200)

    res.send()
}

export default createParent