import ('dotenv/config')
import nodemailer from 'nodemailer'

const sendEmail = async (to_email, subject, message) =>{
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_EMAIL,
            pass: process.env.MAIL_PWD
        }
    });
    
    const mailOptions = {
        to: to_email,
        subject: subject,
        html: message
    }

    await transport.sendMail(mailOptions);

}

export {sendEmail}