const express = require("express");
const cors = require("cors");
const { authController } = require("../controllers/authController");

const authRouter = express.Router();

// middleware
authRouter.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

authRouter.get("/", authController);

module.exports = authRouter;
