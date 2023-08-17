const express = require("express");
const cors = require("cors");
const { authController } = require("../controllers/authController");

const authRouter = express.Router();

// middleware
authRouter.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5174",
  })
);

authRouter.get("/", authController);
authRouter.post("/register", registerUser);

module.exports = authRouter;
