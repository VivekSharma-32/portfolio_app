const express = require("express");
const cors = require("cors");
require("dotenv").config({ quiet: true });

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port: ${process.env.PORT || 5000}`);
});
