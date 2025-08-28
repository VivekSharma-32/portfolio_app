const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    required: true,
  },
  email: {
    required: true,
    unique: true,
  },
  mobile: {
    required: true,
  },
  message: {
    required: true,
  },
});
