const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect("mongodb://localhost:27017/portfolio_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Connected with the database successfully`);
};

module.exports = connectDb;
