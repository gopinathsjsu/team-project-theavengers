const User = require("../models/user_model");
const Booking = require("../models/booking_model");
const Room=require("../models/rooms_model");
const date = require('date-and-time');
var bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

//User Sign Up
exports.signUp=(req,res)=>{
    User.findOne({
        email:req.body.email
    })
    .exec((err,user)=>{
        if (err){
            res.status(500).send({message:err});
        }
        if(user){
            res.status(404).send({message:"User already exists."});
        }
        if(!user){
            const user=new User({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                password:bcrypt.hashSync(req.body.password,10),
                dob:req.body.dob,
                mobile:req.body.mobile
                
            });
            user.save((err)=>{
                if(err){
                    res.status(500).send({message:err});
                }
                res.send({message:"User was registered successfully"});
            });
        }
    });
};
//User SignIn
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
            email:user.email
        });
    });
};
//User profile update
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
			user.save((err) => {
				if(err) {
					res.status(500).send({message:err});
					return;
				}
				res.send({message:"Details updated successfully"});
			});
		});
};
//Price Details
exports.viewPrice=(req,res)=>{
    Room.findOne({
        hotel_id:req.body.hotel_id,
        roomType:req.body.roomType
    })
    .exec((err,hotelDetails)=>{
        if(err){
            res.status(500).send({message:err});
        }
        var date1 =new Date(req.body.checkInDate);
        var date2 =new Date(req.body.checkOutDate);
        const days=parseInt((date2-date1)/(1000 * 60 * 60 * 24));
        const price=(hotelDetails.basePrice)*days
        const checkInMonth=(date1.getMonth())+1;
        const checkOutMonth=(date2.getMonth())+1;
        //Thanks giving Christmas pricing
        if((date1.getDate()+1>19 && checkInMonth==11)||checkInMonth==12){
            price+=(price*0.20);
        }
        //Summer Season pricing
        else if((checkInMonth==4||checkInMonth==5)||(checkOutMonth==4||checkOutMonth==5)){
            price+=(price*0.20);
        }
        //Weekend Prcing
        else if (date1.getDay()>date2.getDay()||date2.getDay()==7){
            price+=(price*0.15);
        }
    });
 };
 //Redeem reward points
 exports.redeemRewards=(req,res)=>{
     User.findOne({
         _id:mongoose.Types.ObjectId(req.body._id)
     })
     .exec((err,result)=>{
       if(err){
           res.status(500).send({message:err});
       }  
       if (result.rewardPoints>0){
            var price=req.body.price
           if (result.rewardPoints<req.body.price){
            price-=result.rewardPoints;
            User.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.body._id)},{rewardPoints:0}).exec((error,results)=>{
                if (error){
                    res.status(500).send({message:err});
                }
            })
           }
           else{
               User.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.body._id)},{rewardPoints:result.rewardPoints-price})
               .exec((error,results)=>{
                   if(error){
                       res.status(500).send({message:err});
                   }
               })
               price=0
           }
           res.send({price})
       }
       else{
           res.send({message:"You dont have any reward points"})
       }
     });
 };
//User Booking
exports.userBooking=(req,res)=>{
    if(req.body){
        const booking=new Booking({
            userId:req.body.userId,
            hotelId:req.body.hotelId,
            hotelName:req.body.name,
            checkInDate:req.body.checkInDate,
            checkOutDate:req.body.checkOutDate,
            roomType:req.body.roomType,
            guestList:req.body.guestList,
            amountPaid:req.body.amountPaid,
            bookingStatus:req.body.bookingStatus,
            bookingDate:Date.now()
        });
        booking.save((err)=>{
            if (err){
                res.status(500).send({message:err});
            }
            res.send({message:"Successfully booked"});
        }

        );
    }
}

