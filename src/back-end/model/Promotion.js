import mongoose from "mongoose";

var promotionSchema = mongoose.Schema({
    img: String
})

const Promotion = mongoose.model('Promotion', promotionSchema);

export default Promotion