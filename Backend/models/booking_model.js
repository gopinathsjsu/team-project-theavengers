const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const Schema=mongoose.Schema;


//Creating Booking Schema

const bookingSchema= new Schema({

    userID: {
        required:[true, 'User id is required']
    },
    bookingName: {
        type:String,
        required:[true,'Booking Name is required']
    },
    hotelID: {
        required:[true, 'Hotel id is required']
    },
    hotelName:{
        type:String,
        required:[true,'Hotel Name is required']
    },
    bookingDate:{
        type:Date,
        required:[true,'Booking date is required.']
    },
    checkinDate:{
        type:Date,
        required:[true,'Check-in date is required.']
    },
    checkoutDate:{
        type:Date,
        required:[true,'Checkout date is required.']
    },
    roomCount:{
        type:Number,
        required:[true,'Total booked rooms is required']
    },
    amenities:{
        type:String
    },
    guestList:{
        type: String
    },
    amountPaid: {
        type:Number,
        required:[true,'Amount paid is required']
    },
    bookingStatus:{
        type:String,
        required:[true,'Booking status is required']
    }
   
});

const Booking=mongoose.model('Booking',bookingSchema);
module.exports=Booking;


