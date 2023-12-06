import Cart from "../model/Cart.js";
import Order from "../model/Order.js";

const orderHandler = {
    addOrder : async function (req, res){
        try{
            var order = new Order(req.body.order);
            var cart = new Cart(req.body.cart);
            var cartResult = await cart.save();
            order.idCart = cartresult._id;
            var orderResult = await order.save();
            res.json(result);
        }
        catch(err){
            console.log(err);
            res.send(err);
        }
    },
    finishOrder : async function (req, res){
        try{
            var order = await Order.findOne({idOrder: req.body.idOrder});
            order.OrderStatus = "Finished";
            var result = await order.save();
            res.json(result);
        }
        catch(err){
            console.log(err);
            res.send(err);
        }
    },
    declineOrder : async function (req, res){
        try{
            var order = await Order.findOne({idOrder: req.body.idOrder});
            order.OrderStatus = "Declined";
            var result = await order.save();
            res.json(result);
        }
        catch(err){
            console.log(err);
            res.send(err);
        }
    },
}

export {orderHandler}