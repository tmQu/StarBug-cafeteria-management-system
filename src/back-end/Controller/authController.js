import User from '../model/User.js'
import jwt from 'jsonwebtoken'
import {sendEmail} from '../utils/emailHandler.js'
import ('dotenv/config')

const expiredDate = 3*24*60*60; // 3 days

const errorHandle = (err) => 
{
    console.log(err);
    var errors = {
        status: 500,
        error: 'Internal Server Error'
    };
    if (err.message == 'Wrong password' || err.message == 'Not valid user')
    {
        errors.status = 401;
        errors.error = 'Wrong Email or Password';
        return errors;
    }
    if (err.message == 'Not verified user')
    {
        errors.status = 402;
        errors.error = 'Not verified user, please check your email';

        return errors;
    }
    if (err.message && err.message.includes('User validation failed'))
    {
        errors.status=400;
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        })
        return errors;
    }

    // error checking unique email
    if (err.code === 11000)
    {
        errors.status = 409;
        errors.error = 'Email is already registered';
        return errors
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
    var verifyUrl = process.env.SERVER_URL + `/auth/verify?token=${verifyToken}`;
    var htmlContent = `<a href=${verifyUrl}>Verify link</a>`
    sendEmail(email, '[StarBug] Verify email', htmlContent);
}

const sendForgetPwdEmail = (email) => {
    var forgetPwdToken = createForgetPwdToken(email);
    var forgetPwdUrl = process.env.APP_URL + `/reset?token=${forgetPwdToken}`;
    var htmlContent = `<a href=${forgetPwdUrl}>Reset link</a>`
    sendEmail(email, '[StarBug] Reset Password', htmlContent);
}


const authHandler = {
    signUp: async (req, res) => {
        console.log('sing')
        const userInfo = req.body;
        console.log(req.body)
        try {
            const user = await User(userInfo).save();
            sendVerifyEmail(userInfo.email);
            res.status(201);
        }
        catch(err) {
            console.log(err);
            var errors = errorHandle(err);
            res.status(errors.status).json(errors.error)
        }
    },
    signIn: async (req, res) => {
        console.log('sign in')
        console.log(req.body);
        const {email, pwd} = req.body;

        try {
            const user = await User.login(email, pwd)
            const token = createToken(user.email);
            console.log('sigin in token')
            console.log(token)
            res.cookie('jwt', token, {httpOnly: true, maxAge: expiredDate * 1000})
            res.status(201).json({email: user.email});
        }
        catch(err) {
            console.log(err);
            if (err.message === 'Not verified user')
            {
                sendVerifyEmail(email);
            }
            var errors = errorHandle(err);
            console.log(errors);
            res.status(errors.status).json(errors.error)
        }
    },
    sendVerifyEmail: (req, res) => {
        var email = req.query.email;
        sendVerifyEmail(email);
        res.staus(201);
    },
    verify: async (req, res) => {
        var verifyToken = req.query.token;
        console.log(verifyToken);
        if (!verifyToken)
        {
            console.log('no token')
            res.status(400);
        
        }

        try{
            var decodedToken = jwt.verify(verifyToken, process.env.VERIFY_SECRET)
            var result = await User.findOneAndUpdate({email: decodedToken.email}, {verified: true});
            const token = createToken(decodedToken.email);
            console.log('success verify');
            console.log(token);
            res.cookie('jwt', token, {httpOnly: true, maxAge: expiredDate * 1000})
            // res.status(201).json({email: decodedToken.email});
            res.redirect('http://localhost:3000');

        }
        catch (err)
        {
            console.log(err)
            res.status(401).json({error: err});
        }

    },
    refreshToken: async (req, res) => {
        console.log('refresh token')
        console.log(req.cookies)
        const token = req.cookies.jwt;
        if (!token)
        {
            console.log('no token')
            res.status(400);
        }
        try{
            var decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
            const user = await User.findOne({email: decodedToken.email});
            const newToken = createToken(user.email);
            res.cookie('jwt', newToken, {httpOnly: true, maxAge: expiredDate * 1000})
            res.status(201).json({email: user.email, role: user.role, accessToken: newToken});
        }
        catch(err)
        {
            console.log(err);
            res.status(401).json({error: err});
        }
    },
    forgetPwd: async (req, res) => {
        var email = req.body.email;
        sendForgetPwdEmail(email);
        res.status(201);
    },
    resetPwd: async (req, res) => {
        var forgetPwdToken = req.query.token;
        console.log(forgetPwdToken);
        if (!forgetPwdToken)
        {
            console.log('no token')
            res.status(400);
        
        }
        var newPwd = req.body.pwd;
        if (jwt.verify(forgetPwdToken, process.env.FORGETPWD_SECRET))
        {
            try{
                var decodedToken = jwt.verify(forgetPwdToken, process.env.FORGETPWD_SECRET)
                var result = await User.findOneAndUpdate({email: decodedToken.email}, {pwd: newPwd});
                const token = createToken(decodedToken.email);
                console.log('success change pwd');
                console.log(token);
                res.cookie('jwt', token, {httpOnly: true, maxAge: expiredDate * 1000})
                // res.status(201).json({email: decodedToken.email});
                res.redirect('http://localhost:3000');
    
            }
            catch (err)
            {
                console.log(err)
                res.status(401).json({error: err});
            }
        }

    }
}

export {authHandler}