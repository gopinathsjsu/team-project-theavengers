const express = require('express');
const controller = require("../controllers/hotel_controller");
const router = express();
router.get('/searchhotels',controller.searchHotels);
router.get('/getrooms',controller.getRooms);
module.exports = router;