const mongoose = require("mongoose");
require("dotenv").config();
const url =
  "mongodb+srv://Prajwal:prajwal@cluster0.8vxol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
