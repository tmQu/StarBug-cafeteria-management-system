import jwt from 'jsonwebtoken'
import (dotenv/config)

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token)
    {
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
            if (err)
            {
                res.status(401).json({error: 'user not login'})
            }
            else {                
                req.userEmail = decodedToken.email;
                next();
            }

        })
    }
    else
    {
        res.status(401).json({error: 'user not login'})
    }
}