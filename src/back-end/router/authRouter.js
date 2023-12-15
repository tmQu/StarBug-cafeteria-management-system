import express, { Router } from "express";
import {authHandler} from '../Controller/authController.js';

var authRouter = express.Router();

authRouter.post('/signup', authHandler.signUp);
authRouter.get('/verify', authHandler.verify);
authRouter.post('/signin', authHandler.signIn);

export {authRouter};