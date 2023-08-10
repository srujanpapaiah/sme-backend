const express = require("express");
const dotenv = require("dotenv").config();
const authRouter = require("./routes/authRoutes");

const app = express();

app.use("/", authRouter);

const port = 8000;
app.listen(port, () => console.log(`Serve is running on port ${port}`));
