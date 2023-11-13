import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';

import {itemRouter} from './router/itemRouter.js';
import {sliderRouter} from './router/sliderRouter.js';
import { promotionRouter } from './router/promotionRouter.js';

import cors from 'cors'

const app = express();
const port = 4000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('database'))
app.use('/item', itemRouter);
app.use('/promotion', promotionRouter);
app.use('/slider', sliderRouter);


const dbName = "temp"
mongoose.connect('mongodb://127.0.0.1:27017/' + dbName);


app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});