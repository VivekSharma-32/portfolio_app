const express = require("express");
const cors = require("cors");
require("dotenv").config({ quiet: true });
const contactRoutes = require("./src/routes/contact.routes");
const connectDb = require("./src/config/config");

const app = express();
connectDb();
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", contactRoutes);

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port: ${process.env.PORT || 5000}`);
});
