import crypto from 'crypto'

export default function generateToken(){
    var token = crypto.randomBytes(64).toString('hex');

    return token;
}