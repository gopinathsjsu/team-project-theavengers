const express = require('express');
const controller = require("../controllers/user_controller");
const router = express();
router.post('/signin',controller.signIn);
router.post('/signup',controller.signUp);
router.post('/updatedetails',controller.updateProfile);
router.post('/updatedetails',controller.updateProfile);
router.get('/viewprice',controller.viewPrice);
router.get('/rewardPoints/:id',controller.redeemRewards);
router.get('/getbookings/:userId',controller.getBookings)
router.post('/createBooking',controller.userBooking);

