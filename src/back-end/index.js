import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import ('dotenv/config')
import { itemRouter } from './router/itemRouter.js';
import { sliderRouter } from './router/sliderRouter.js';
import { promotionRouter } from './router/promotionRouter.js';
import { orderRouter } from './router/orderRouter.js';
import {authRouter} from './router/authRouter.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const port = 4000;

app.use(cors({
    origin:[
        'http://localhost:3000', 
        'https://star-bug-cafeteria-management-system-q2g5.vercel.app/'
    ],
    credentials:true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());



app.use('/db', express.static(path.join(__dirname,'db')));
app.use('/item', itemRouter);
app.use('/promotion', promotionRouter);
app.use('/slider', sliderRouter);
app.use('/order', orderRouter);
app.use('/auth', authRouter);

const dbName = "Starbug"
const dbUrl = `mongodb+srv://StarbugCoffee:vcydm8VTdB75VRjz@starbugproject.ukwaquc.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(dbUrl).then(()=> {
    console.log('connected to db')
});



app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});