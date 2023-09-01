const express = require("express");
const {
  authController,
  registerController,
  loginController,
  getProfile,
} = require("../controllers/authController");

const authRouter = express.Router();

authRouter.get("/", authController);
authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.get("/profile", getProfile);

module.exports = authRouter;
