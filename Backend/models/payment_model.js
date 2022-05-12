const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const Schema=mongoose.Schema;

//Creating room schema and model

const paymentSchema=new Schema({
    userId:{type:String},
    nameOnCard:{type:String},
    cardNumber:{type:String},
    expiration:{type:String},
});

const payment =mongoose.model("Payment",paymentSchema);
module.exports=payment;