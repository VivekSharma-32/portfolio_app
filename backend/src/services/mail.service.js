const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_EMAIL_ID,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

module.exports = transporter;
