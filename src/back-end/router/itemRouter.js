import express, { Router } from "express";
import {itemHandler} from '../Controller/itemController.js';
import { upload } from '../utils/imgHandler.js';
var itemRouter = express.Router();

itemRouter.get('/all', itemHandler.getAll);
itemRouter.get('/filter', itemHandler.getFilter);
itemRouter.get('/search', itemHandler.searchItem);
itemRouter.get('/:id', itemHandler.getItemById);


itemRouter.post('/', upload.array('uploaded_file', 10), itemHandler.addItem);

export {itemRouter};






