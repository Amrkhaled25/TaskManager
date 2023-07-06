const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      // useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      // useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB Atlas:", error);
    });
};

module.exports = connectDB;
