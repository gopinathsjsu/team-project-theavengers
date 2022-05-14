const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const Schema=mongoose.Schema;



//Creating Hotel Schema

const hotelSchema= new Schema({

    name:{
        type:String,
        required:[true,'Hotel Name is required.']
    },
    amenities:{
        type:String
    },
    minPrice:{
        type:Number
    },
    maxPrice:{
        type:Number
    },
    latitude:{
        type:String
    },
    longitude:{
        type:String
    },
    address:{
        type:String,
        required:[true,'Address is required.']
    },
    city:{
        type:String,
        required:[true,'City is required.']
    },
    state:{
        type:String,
        required:[true,'State is required.']
    },
    country:{
        type:String,
        required:[true,'Country is required']
    },
    phoneNumber:{
        type:String
    },
   
});

const Hotel=mongoose.model('Hotel',hotelSchema);
module.exports=Hotel;



