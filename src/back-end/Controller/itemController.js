import fs from 'fs';
import Item from '../model/Item.js'

const projection ={
    _id: 0,
    name: 1,
    category: 1,
    img: 1,
    price: 1,
    topItem: 1
}

const itemHandler = {

    getAll: async function (req, res)
        {
            try{
                var result = await Item.find({}, projection);
                res.json(result);
            }
            catch(err){
                console.log(err);
                res.send(err);
            }
        },
    getFilter:    async function (req, res)
        {
            var query = {};
            var filterProjection = projection;
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

            if (req.query.detail)
            {
                if (req.query.detail === true)
                {
                    filterProjection = {_id: -1}
                }
            }
            try{
                var result;
                if (req.query.from && req.query.to)
                {
                    result = await Item.find(query, filterProjection).skip(req.query.from).limit(req.query.to - req.query.from + 1);
                }
                else{
                    result = await Item.find(query, filterProjection);
                }
                res.json(result);
            }
            catch(err)
            {
                console.log(err);
                res.send(err);
            }
        },

        searchItem: async function (req, res){

            try{
                var searchPattern =  req.body.search;
                console.log(searchPattern);
  
                if(searchPattern){
                    var result = await Item.find({
                        name: {$regex: searchPattern, $options: 'i'}
                    }, projection);
                    res.send(result);

                }
                else{

                    res.status(404).json(err);
                }

            }
            catch(err)
            {
                res.status(404).json(err);
            }
        },

        getItemById: async function (req, res) 
        {
            try{
                var id = req.params.id;
                var query = {id: id};
                var result = await Item.find(query);
                res.json(result);
            }
            catch (err)
            {
                console.log(err);
                res.send(err);
            }
        },

        addItem: async function (req, res)
        {
            console.log('test');
            var data = req.body;

            data.img = [];
            req.files.forEach((file) =>{
                data.img.push(file.path);
            })
            console.log(req.files);

            try {
                var count = await Item.find({category: data.category});
                if(!count)
                {
                    count = 1;
                }
                data.id = data.category + String(count).padStart(3, '0');

                await new Item(data).save();
  
                res.status(200).json({
                    message: 'Add successfully'
                });
            }
            catch(err)
            {
                console.log('test');
                console.log(err);
                res.status(500).json(err).end();
            }
        },


        deleteItem: async function (req, res){
            var filter = {id: req.params.id};
            try{
                var prevData = await Item.findOneAndDelete(filter);
                prevData.img.forEach((path) => {
                    fs.unlinkSync(path);
                })
                console.log('delete success');
                res.sendStatus(200);
            }
            catch(err){
                console.log(err);
                res.send(err);
            }
        },

        updateItem: async function (req, res)
        {
            var filter = {id:req.params.id }
            var update = req.body;
            update.img = [];

            try{
                req.files.forEach((file) =>{
                    update.img.push(file.path);
                });


                var prevData = await Item.findOneAndUpdate(filter, update);
                var curData = await Item.findOne(filter); 
                prevData.img.forEach((path) => {
                    if (!curData.img.includes(path))
                    {
                        fs.unlinkSync(path);
                    }
                })
                
                res.sendStatus(200);
            }
            catch{
                console.log(err);
                res.send(err);
            }
        }
}

export {itemHandler};