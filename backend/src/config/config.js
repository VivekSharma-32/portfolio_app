const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(`Connected with the database successfully`);
  } catch (error) {
    console.error("Error connecting with the database:");
    console.error(error);
  }
};

module.exports = connectDb;
