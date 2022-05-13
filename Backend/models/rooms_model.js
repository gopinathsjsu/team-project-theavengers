
const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const Schema=mongoose.Schema;

//Creating room schema and model

const roomSchema =new Schema({

    hotel_id:{type:String,required:true},
    roomNumber:{type:Number,required:true},
    basePrice:{type:Number,required:true},
    roomType:{type:String,required:true},
    max_guests:{type:Number,required:true}
	
});

const Room = mongoose.model('Room',roomSchema);

module.exports=Room;

