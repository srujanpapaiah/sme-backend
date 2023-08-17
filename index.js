const express = require("express");
const dotenv = require("dotenv").config();
const authRouter = require("./routes/authRoutes");
const { mongoose } = require("mongoose");

// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((e) => console.log("Database note connected", e));

const app = express();

app.use("/", authRouter);

const port = 8080;
app.listen(port, () => console.log(`Serve is running on port ${port}`));
