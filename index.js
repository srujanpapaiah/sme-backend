const express = require("express");
const dotenv = require("dotenv").config();
const authRouter = require("./routes/authRoutes");
const { mongoose } = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");

// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((e) => console.log("Database not connected", e));

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", authRouter);

const port = 8080;
app.listen(port, () => console.log(`Serve is running on port ${port}`));
