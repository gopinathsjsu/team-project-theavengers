const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const Schema=mongoose.Schema;


//Creating Booking Schema

const bookingSchema= new Schema({

    user_id: {
        required:[true, 'User id is required']
    },
    booking_name: {
        type:String,
        required:[true,'Booking Name is required']
    },
    hotel_id: {
        required:[true, 'Hotel id is required']
    },
    hotel_name:{
        type:String,
        required:[true,'Hotel Name is required']
    },
    booking_date:{
        type:Date,
        required:[true,'Booking date is required.']
    },
    checkin_date:{
        type:Date,
        required:[true,'Check-in date is required.']
    },
    checkout_date:{
        type:Date,
        required:[true,'Checkout date is required.']
    },
    room_count:{
        type:Number,
        required:[true,'Total booked rooms is required']
    },
    amenities:{
        type:String
    },
    guest_list:{
        type: String
    },
    amount_paid: {
        type:Number,
        required:[true,'Amount paid is required']
    },
    booking_status:{
        type:String,
        required:[true,'Booking status is required']
    }
   
});

const Booking=mongoose.model('Booking',bookingSchema);
module.exports=Booking;


