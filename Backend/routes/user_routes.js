const express = require('express');
const controller = require("../controllers/user_controller");
const router = express();
router.post('/signin',controller.signIn);
router.post('/signup',controller.signUp);
module.exports = router;
