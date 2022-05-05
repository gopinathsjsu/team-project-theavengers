const express = require("express");
const cors = require("cors");
const app = express();
const dbConfig = require("./config/db_config");
const mongoose = require('mongoose');
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const db = require("./models");

var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

//Mongo DB Connection
const mongoDB='mongodb+srv://tejaramisetty:cmpe2022211@cluster0.sz9jt.mongodb.net/HotelBooking?retryWrites=true&w=majority'

mongoose.connect(mongoDB, options, (err, res) => {

  if (err) {
      console.log(err);
      console.log(`MongoDB Connection Failed`);
  } else {
     // auth();
      console.log(`MongoDB Connected`);
  }
});

//routes
const User_Route = require("./routes/user_routes");
app.use(User_Route);
const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {
	console.log(`Server is running on port ${PORT}`);
});
