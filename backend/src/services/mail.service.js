const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "gmail",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.GOOGLE_EMAIL_ID,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

module.exports = transporter;
