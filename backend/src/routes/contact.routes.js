const express = require("express");

const router = express.Router();

router.post("/contact", (req, res) => {
  const { name, email, mobile, message } = req.body;
});
