import mongoose from 'mongoose';

let Schema = mongoose.Schema({
    listCartitem: [
        {
            quantityProduct: {
                type: Number,
                require: true
            },
            idProduct: {
                type: String,
                require: true
            },   
            size: {
                type: String,
                requrie: true
            },
            Note: {
                type: String,
                require: true
            },
        }
    ]
})

const Cart = mongoose.model('Cart', Schema);

export default Cart;
