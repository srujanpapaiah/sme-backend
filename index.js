const express = require("express");
const dotenv = require("dotenv").config();
const authRouter = require("./routes/authRoutes");
const emailRouter = require("./routes/emailRouter");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((e) => console.log("Database not connected", e.message));

// middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "https://mail.google.com",
      "https://pwskills.vercel.app",
      "http://127.0.0.1:5173",
    ],
    allowedHeaders: "Content-Type, Authorization, Access-Control-Allow-Origin",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: false }));

// app.use("/", authRouter);
app.use("/", emailRouter);

const port = 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));
