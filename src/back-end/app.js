import express from "express";
import bodyParser from "body-parser";
import {Item, Slider, Promotion} from "databaseSchema/dbSchema"
import multer from 'multer'



const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer({ dest: 'uploads/' })

const dbName = "StarBug-example"
mongoose.connect('mongodb://127.0.0.1:27017/' + dbName);





// Example data for testing
// async function testData(test)
// {
//     try{
//         await test.save();
//         console.log('ok');
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }

// for (var i = 0; i < 100; i++)
// {
//     var test =new Item({
//         id: 'Cafe0' + i,
//         name: 'Cafe đen đá không đường',
//         category: 'cafe'
//     });
//     testData(test);
// }




app.get('/item/all', async (req, res)=>{


});

app.get('/item/filter', async(req, res) => {
    // console.log('filter');
    var query = {};
    if (req.query.category)
    {
        query['category'] = req.query.category
    }
    if (req.query.name)
    {
        query['name'] = req.query.name;
    }
    if (req.query.topItem){
        query['topItem'] = req.query.topItem;
    }
    try{
        console.log(query);

        console.log(req.query)
        var result;
        if (req.query.from && req.query.to)
        {
            result = await Item.find(query).skip(req.query.from).limit(req.query.to - req.query.from + 1);
        }
        else{
            result = await Item.find(query);
        }
        res.send(result);
    }
    catch(err)
    {
        console.log(err);
    }
})


app.get('/item/:id', async (req, res)=>{
    // console.log('id');
    try{
        var id = req.params.id;
        var query = {id: id};
        var result = await Item.find(query, 'id name category price img');
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
    }
});


app.post('/item', async (req, res) => {
    var data = req.body;
    console.log(req.body);

    try {
        await new Item(data).save();
        res.sendStatus(200);
    }
    catch(err)
    {
        console.log(err);
        res.send(err);
    }
})

app.patch('/item/:id', async (req, res) => {

    var filter = {id:req.params.id }
    var update = req.body;
    try{
        await Item.findOneAndUpdate(filter, update);
        res.sendStatus(200);
    }
    catch{
        console.log(err);
        res.send(err);
    }
});

app.delete('/item/:id', async (req, res) => {
    var filter = {id: req.params.id};
    try{
        var result = await Item.findOneAndDelete(filter);
        if (!result)
        {
            res.sendStatus(404).json({err: 'Item not found'})
        }
        console.log('delete success');
        res.sendStatus(200);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
});



//----------------------------------Slider API---------------------------------------
app.get('/slider/all', async (req, res)=>{

    try{
        var result = await Slider.find();
        res.send(result);
    }
    catch(err){
        console.log(err);
    }
});

app.get('/slider/filter', async(req, res) => {
    // console.log('filter');
    var query = req.query.position;
    try{

        result = await Slider.find(query);
        res.send(result);
    }
    catch(err)
    {
        console.log(err);
    }
})

app.get('/slider/:id', async (req, res)=>{
    // console.log('id');
    try{
        var id = req.params.id;
        var query = {id: id};
        var result = await Slider.find(query);
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.send(err);
    }
});



app.post('/slider', upload.single('item-img'),async (req, res) => {
    var data = req.body;
    var img = req.file;

    console.log(req.body);
    try {
        await new Slider(data).save();
        console.log('insert secesu');
        res.sendStatus(200);
    }
    catch(err)
    {
        console.log(err);
        res.send(err);
    }
})

app.patch('/slider/:id', async (req, res) => {

    var filter = {id:req.params.id }
    var update = req.body;
    try{
        await Slider.findOneAndUpdate(filter, update);
        console.log('sucess update');
        res.sendStatus(200);
    }
    catch{
        console.log(err);
        res.send(err);
    }
});

app.delete('/slider/:id', async (req, res) => {
    var filter = {id: req.params.id};
    try{
        await Slider.findOneAndDelete(filter);
        console.log('delete success');
        res.sendStatus(200);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
});



// -----------------------------PROMOTION API-----------------------------------------

app.get('/promotion/all', async (req, res)=>{
    console.log('all');


    try{
        var result = await Promotion.find();
        res.send(result);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
});
app.get('/promotion/:id', async (req, res)=>{
    // console.log('id');
    try{
        var id = req.params.id;
        var query = {id: id};
        var result = await Promotion.find(query);
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
    }
});
app.post('/promotion', async (req, res) => {
    var data = req.body;
    console.log(req.body);
    try {
        await new Promotion(data).save();
        console.log('insert secesu');
        res.sendStatus(200);
    }
    catch(err)
    {
        console.log(err);
        res.send(err);
    }
})

app.patch('/promotion/:id', async (req, res) => {

    var filter = {id:req.params.id }
    var update = req.body;
    try{
        await Promotion.findOneAndUpdate(filter, update);
        console.log('sucess update');
        res.sendStatus(200);
    }
    catch{
        console.log(err);
        res.send(err);
    }
});

app.delete('/promotion/:id', async (req, res) => {
    var filter = {id: req.params.id};
    try{
        await Promotion.findOneAndDelete(filter);
        console.log('delete success');
        res.sendStatus(200);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
});


app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});