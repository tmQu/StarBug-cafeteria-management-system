import mongoose from "mongoose";


var itemSchema = mongoose.Schema({
    id: String,
    name: String,
    category: String,
    img: {
        type: Array,
        require: true
    },
    price: Number,
    avgRate: {
        type: Number,
        default: 0
    },
    topItem:{
        type: Boolean,
        default: false
    },
    description: {
        type: String
    },
    size: {
        small: {
            type: Number,
            default: 0
        },

        medium: {
            type: Number,
            default: 5
        },
        
        large: {
            type: Number,
            default: 10
        }
    },
    topping:[] // array object with name and price topping
})


const Item = mongoose.model('Item', itemSchema);

export default Item