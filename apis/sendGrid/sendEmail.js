import {google} from 'googleapis';
import sgMail from '@sendgrid/mail';

const key = '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'

const fromAddress = 'trystinduffy@gmail.com'
sgMail.setApiKey(key);

export default function sendEmail(to, activationLink){
    const msg = {
        to: to, // Change to your recipient
        from: fromAddress, // Change to your verified sender
        subject: 'Your Edporium Account Is Ready!',
        text: 'Activate your account',
        html: `<strong><button><a href="local">Click Here</a></button></strong>`,
      }
      
      sgMail
        .send(msg)
        .then((response) => {
          console.log(response[0].statusCode)
          console.log(response[0].headers)
        })
        .catch((error) => {
          console.error(error)
        })
    
}