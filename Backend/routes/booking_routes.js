const express = require('express');
const controller = require("../controllers/booking_controller");
const router = express();
router.get('/allbookings',controller.AllBookings);
router.put('/updatebooking',controller.updateBooking);
router.put('/cancelbooking',controller.cancelBooking);
module.exports = router;