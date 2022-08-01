import 'crypto'

export default function hashPassword(passwordToHash, salt){

    let hash = crypto.pbkdf2Sync(passwordToHash, salt, 1000, 64, 'sha512').toString('hex');

    return hash;

}