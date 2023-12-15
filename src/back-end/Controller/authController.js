import User from '../model/User.js'
import jwt from 'jsonwebtoken'
import {sendEmail} from '../utils/emailHandler.js'
import ('dotenv/config')

const expiredDate = 3*24*60*60; // 3 days

const errorHandle = (err) => 
{
    console.log(err);
    var errors = {};
    if (err.message == 'Wrong password' || err.message == 'Not valid user')
    {
        errors.error = 'Not valid Email/Password';
        return errors;
    }
    if (err.message == 'Not verified user')
    {
        errors.error = 'Not verified user';

        return errors;
    }
    // error checking unique email
    if (err.code === 11000)
    {
        errors.email = 'That email is already exists';
        return errors
    }
    if (err.message.includes('user validation failed'))
    {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        })
    }
    return errors;
}


const createToken = (email)=>
{
    return jwt.sign({email: email}, process.env.TOKEN_SECRET,{
        expiresIn: expiredDate
    })
}

const createVerifyToken = (email) => {
    return jwt.sign({email: email}, process.env.VERIFY_SECRET,{
        expiresIn: 5*60 // 5 minutes
    })
}

const createForgetPwdToken = (email) => {
    return jwt.sign({email: email}, process.env.FORGETPWD_SECRET,{
        expiresIn: 5*60 // 5 minutes
    })
}

const sendVerifyEmail = (email) => {
    var verifyToken = createVerifyToken(email);
    var verifyUrl = process.env.SERVER_URL + `/auth/verify?token=${verifyToken}`
    var htmlContent = '<a>' + verifyUrl + '</a>'
    sendEmail(email, '[StarBug] verify email', htmlContent);
}


const authHandler = {
    signUp: async (req, res) => {
        console.log('sing')
        const userInfo = req.body;

        try {
            const user = User(userInfo).save();
            sendVerifyEmail(userInfo.email);
            res.stauts(201);
        }
        catch(err) {
            console.log(err);
            res.status(400).json(errorHandle(err))
        }
    },
    signIn: async (req, res) => {
        const {email, pwd} = req.body;

        try {
            const user = await User.login(email, pwd)
            const token = createToken(user.email);
            res.cookie('jwt', token, {httpOnly: true, maxAge: expiredDate * 1000})
            res.status(201).json({email: user.email});
        }
        catch(err) {
            console.log(err);
            if (err.message === 'Not verified user')
            {
                sendVerifyEmail(email);
            }
            res.status(400).json(errorHandle(err))
        }
    },
    sendVerifyEmail: (req, res) => {
        var email = req.query.email;
        sendVerifyEmail(email)
    },
    verify: async (req, res) => {
        var token = req.query.token;
        if (!token)
        {
            res.status(400);
        }

        try{
            var decodedToken = jwt.verify(token, process.env.VERIFY_SECRET)
            var result = await User.findOneAndUpdate({email: decodedToken.email}, {verified: true});
            const token = createToken(decodedToken.email);

            res.cookie('jwt', token, {httpOnly: true, maxAge: expiredDate * 1000})
            res.status(201).json({email: decodedToken.email});
        }
        catch (err)
        {
            console.log(err)
            res.status(401).json({error: err});
        }

    }
}

export {authHandler}