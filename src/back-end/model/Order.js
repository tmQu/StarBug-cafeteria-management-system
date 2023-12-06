import mongoose from "mongoose";

var orderSchema = mongoose.Schema({
    idOrder: {
        type: String,
        require: true
    },
    BranchDelivery: {
        type: String,
        require: true
    },
    IDCustomer: {
        type: String,
        require: true
    },
    idCart: {
        type: String,
        require: true
    },
    DateCreate: {
        type: Date,
        default: Date.now
    },
    TotalPrice: {
        type: Number,
        require: true
    },
    paymentMethod: {
        type: String,
        require: true
    },
    OrderStatus: {
        type: String,
        require: true,
        default: "In Process"
    },
})

const Order = mongoose.model('Order', orderSchema);

export default Order;