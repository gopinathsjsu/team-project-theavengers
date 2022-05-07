const Hotel = require("../models/hotel_model");


//adding new Hotel
exports.addHotel=(req,res)=>{

    if (req.body){
        const hotel=new Hotel({
            name:req.body.name,
            star:req.body.star,
            rooms:req.body.rooms,
            address:req.body.address,
            amenities:req.body.amenities,
            city:req.body.city,
            state:req.body.state,
            country:req.body.country,
            contact:req.body.contact
        });

        hotel.save((err)=>{
            if(err){
                res.status(500).send({message:err});
            }
            res.send({message:"Hotel added successfully"});
        });
    }
};

exports.deleteHotel = (req,res) => {
};
