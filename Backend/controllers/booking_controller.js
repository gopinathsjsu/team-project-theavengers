const db = require("../models");
const Booking = db.booking;

//API to view all bookings
exports.AllBookings = (req,res) => {
    Booking.find({
        userId:req.body.userId
    })
    .exec((err,bookings) => {
        if(err) {
            return res.status(500).send({message:err});
        }
        else {
            return res.status(200).send({all_bookings:bookings})
        }
    });
};

//API to update booking check-in, check-out dates or booking name of a booking
exports.updateBooking = (req,res) => {
    Booking.findOne({
        _id:req.body.bookingID
    })
    .exec((err,booking) => {
        if(err) {
            return res.status(500).send({message:err});
        }
        else if(!booking){
            return res.status(200).send({message:"Booking not found"})
        }
        else {
            booking.checkinDate = req.body.checkinDate,
            booking.checkoutDate = req.body.checkoutDate,
            booking.bookingName = req.body.bookingName
            booking.save((err) => {
				if(err) {
					res.status(500).send({message:err});
					return;
				}
				res.send({message:"Booking updated successfully"});
			});
        }
    });
};

//API to cancel booking
exports.cancelBooking = (req,res) => {
    Booking.findOne({
        _id:req.body.bookingID
    })
    .exec((booking,err) => {
        if(err) {
            return res.status(500).send({message:err})
        }
        else if(!booking) {
            return res.status(404).send({message:"Booking not found"})
        }
        else {
            booking.bookingStatus = "Cancelled"
            booking.save((err) => {
                if(err) {
                    res.status(500).send({message:err});
                    return;
                }
                res.send({message:"Booking cancelled"});
            });
        }
    });

};