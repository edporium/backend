import mongoose from 'mongoose';

async function readFunds(req, res){

    console.log('reading funds');
    
    try {
        
        
            let funds = await mongoose.models.Fund.find();
        
            console.log(funds)
            res.status(200);
            res.send(funds)
        
    } catch (error) {
        res.status(500);
        res.send()
    }
}

export default readFunds