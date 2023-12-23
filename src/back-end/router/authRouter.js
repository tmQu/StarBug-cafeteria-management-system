import express, { Router } from "express";
import {authHandler} from '../Controller/authController.js';

var authRouter = express.Router();

authRouter.post('/signup', authHandler.signUp);
authRouter.get('/verify', authHandler.verify);
authRouter.post('/signin', authHandler.signIn);
authRouter.get('/refresh', authHandler.refreshToken);
authRouter.post('/forgetpwd', authHandler.forgetPwd);
authRouter.post('/resetpwd', authHandler.resetPwd);
authRouter.get('/logout', authHandler.logout);
export {authRouter};