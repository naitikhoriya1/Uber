require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookiesParser = require("cookie-parser");
const connectToDb = require("./Db/db.js");
const userRoutes = require("./routes/user.routes.js");
connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRoutes);

module.exports = app;
