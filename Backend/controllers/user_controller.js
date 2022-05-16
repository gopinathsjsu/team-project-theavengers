const User = require("../models/user_model");
const Booking = require("../models/booking_model");
const Hotel=require("../models/hotel_model");
const Room=require("../models/rooms_model");
const date = require('date-and-time');
var bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

//User signup API
exports.signUp=async (req,res)=>{
    User.findOne({
        email:req.body.email
    })
    .exec((err,user)=>{
        
        if (err){
            res.status(500).send({message:err});
            //res.status(500);
        }
        if(user){
            res.status(400).send({message:"User already exists."});
            //res.status(400)
        }
        if(!user){
            const user=new User({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                password:bcrypt.hashSync(req.body.password,10),
                dob:req.body.dob,
                mobile:req.body.mobile,
                rewardPoints:0      
            });

            user.save()
            .then(response => {
                res.send({
                    id:user._id,
                    email:user.email,
                    name:user.firstName+" "+user.lastName,
                    rewardPoints:user.rewardPoints,
                    isAuth:true
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).send("Unsuccessful");
            });            
        }
    });
};

// User SignIn API
exports.signIn=(req,res)=>{
    User.findOne({email:req.body.email})
    .exec((err,user)=>{

        if(err){
            res.status(500).send({message:err});
        }

        if(!user){
            res.status(404).send({message:"User not found"});
        }
        var passwordIsValid=bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if(!passwordIsValid){
            res.status(401).send({message:"Invalid Password"});
        }
        res.status(200).send({
            id:user._id,
            email:user.email,
            name:user.firstName+" "+user.lastName,
            rewardPoints:user.rewardPoints,
            isAuth:true
        });
    });
};

// User Update Profile API
exports.updateProfile = (req,res) => {
	User.findOne({
		email:req.body.email
	})
		.exec((err,user) => {
			if(err){
				res.status(500).send({message:err});
				return;
			}
			if(!user) {
				return res.status(404).send({message:"User not found"});
			}
			if(req.body.firstname){
				user.firstName = req.body.firstname;
			}
			if(req.body.lastname){
				user.lastName = req.body.lastname;
			}
			if(req.body.dob){
				user.dob = req.body.dob;
			}
			if(req.body.mobile){
				user.mobile = req.body.mobile;
			}
			if(req.body.password){
				user.password = bcrypt.hashSync(req.body.password,10);
			}
			user.save()
            .then(response=>{
                res.send("Successfullyupdated details")
            })
            .catch(err=>{
                res.status(500).send("Details are not updated.Please try again");
            })
		});
};
 
//Price Details

 //Redeem reward points
 exports.redeemRewards=(req,res)=>{
    User.findOne({
        _id:mongoose.Types.ObjectId(req.params.id)
    }).then(resp => {
        console.log(resp);
        resp.password=undefined;
        res.status(200).send(resp);
    })
    .catch(err => {
        res.status(500).send("Internal Error");
    })
    
}

//User Booking
exports.userBooking=(req,res)=>{
    console.log(req.body);
    if(req.body){
        const booking=new Booking({
            userId:req.body.userId,
            hotelId:req.body.hotelId,
            hotelName:req.body.name,
            bookingDate:new Date().toJSON().slice(0, 10),
            checkInDate:req.body.checkInDate,
            checkOutDate:req.body.checkOutDate,
            roomType:req.body.roomType,
            roomCount:req.body.roomCount,
            roomPrice:req.body.roomPrice,
            guestList:req.body.guestList,
            amountPaid:req.body.amountPaid,
            bookingStatus:req.body.bookingStatus,
            bookingID:req.body.bookingID
        });
        booking.save((err,resp)=>{
            console.log(err,resp);
            if (err){
                res.status(500).send({message:err});
            }
            console.log("check-back",req.body.roomPrice*req.body.roomCount);
            User.findOneAndUpdate({ _id:mongoose.Types.ObjectId(req.body.userId)},{ $inc: { rewardPoints:req.body.roomPrice*req.body.roomCount}})            
            .then(response=>{
                res.status(200).send("Successfully booked")
            })
            .catch(err=>{
                console.log(err);
                res.status(500).send({message:err})
            })
        });
    }
}

//View all bookings
//Cancel Booking
//Booking on BookingID









