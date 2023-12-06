import express, { Router } from "express";
import {orderHandler} from '../Controller/orderController.js';
var orderRouter = express.Router();

orderRouter.post('/decline', orderHandler.declineOrder);
orderRouter.post('/finish', orderHandler.finishOrder);
orderRouter.post('/add', orderHandler.addOrder);

export {orderRouter};