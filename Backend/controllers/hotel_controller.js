const { hotel } = require("../models");
const db = require("../models");
const Hotel = db.hotel;
const Room = db.room;

exports.searchHotels = (req,res) => {
    Hotel.find({
        country:req.body.country,
        state:req.body.state,
        city:req.body.city
    })
    .exec((err,hotels) => {
        if(err) {
            res.status(500).send({message:err});
        }
        else if(hotels.length == 0) {
            return res.status(404).send({message:"Hotels not found"});
        }
        else {
            res.status(200).send({hotels_list:hotels});
        }
    });
};

exports.getRooms = (req,res) => {
    console.log(req.body.hotel_id);
    Room.find({
        hotel_id:req.body.hotel_id
    })
    .exec((err,rooms) => {
        if(err) {
            res.status(500).send({message:err});
        }
        else if(rooms.length == 0) {
            return res.status(404).send({message:"Rooms not found"});
        }
        else {
            res.status(200).send({rooms_list:rooms});
        }
    });
};
