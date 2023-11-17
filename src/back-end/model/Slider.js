import mongoose, { model } from "mongoose";


// Use the _id create by mongodb
var sliderSchema = mongoose.Schema({
    img: String
})

const Slider = mongoose.model('Slider', sliderSchema);

export default Slider;