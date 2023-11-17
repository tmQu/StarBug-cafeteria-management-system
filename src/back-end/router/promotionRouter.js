import express, { Router } from "express";
import {promotionHandler} from '../Controller/promotionController.js';

var promotionRouter = express.Router();

promotionRouter.get('/all', promotionHandler.getAll);



export {promotionRouter};


