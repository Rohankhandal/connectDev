const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://dummysharma516:Rohan2003@devconnect.jt1kiqb.mongodb.net/?retryWrites=true&w=majority&appName=DevConnect"
  );
};

module.exports = connectDB;
