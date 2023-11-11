import express, { Router } from "express";
import {sliderHandler} from '../Controller/sliderController.js';

var sliderRouter = express.Router();

sliderRouter.get('/all', sliderHandler.getAll);



export {sliderRouter};
