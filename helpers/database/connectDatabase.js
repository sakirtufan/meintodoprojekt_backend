const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/todoAppDB", {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB Connection Successful..."))
    .catch((error) => console.log(error.message));
};

module.exports = connectDatabase;
