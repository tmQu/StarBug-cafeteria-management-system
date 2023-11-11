import fs from 'fs';
import Slider from '../model/Slider.js';


const sliderHandler = {
    getAll: async function (req, res){
        try{
            var result = await Slider.find();
            if (result){
                res.status(200).json(result);
            }
            else{
                res.status(404).json({err: 'Not Found'});
            }
        }
        catch (err)
        {
            console.log(err);
            res.status(500).json(err);
        }
    },

    addSlider: async function(req, res){
        try {
            var data = {
                img: req.file.path
            };

            await Slider(data).save();
            res.sendStatus(200).json({
                message: 'Add successfully'
            });
        }
        catch(err)
        {
            console.log(err);
            res.sendStatus(500).json(err);
        }
    },
    
    deleteSlider : async function(req, res) {
        var filter = {id: req.params.id};
        try {
            var prevData = await Slider.findOneAnDelete(filter);
            fs.unlinkSync(prevData.img);
            console.log('delete success');
            res.sendStatus(200);
        }
        catch(err){
            console.log(err);
            res.send(err);
        }
    }
}

export {sliderHandler};