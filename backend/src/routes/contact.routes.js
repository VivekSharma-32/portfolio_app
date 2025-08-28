const express = require("express");
const { register, getAll } = require("../controllers/contact.controller");

const router = express.Router();

router.post("/contact", register);
router.get("/contact/get", getAll);

module.exports = router;
