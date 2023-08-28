const express = require("express");
const cors = require("cors");
const {
  authController,
  registerController,
  loginController,
  getProfile,
} = require("../controllers/authController");

const authRouter = express.Router();

// middleware
authRouter.use(
  cors({
    credentials: true,
    origin: "https://sme-frontend.vercel.app",
  })
);

authRouter.get("/", authController);
authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.get("/profile", getProfile);

module.exports = authRouter;
