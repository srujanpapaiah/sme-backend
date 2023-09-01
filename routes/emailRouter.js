const express = require("express");
const cors = require("cors");
const {
  get,
  postData,
  getAll,
  getUserByName,
  deleteById,
  deleteByName,
  deleteAll,
} = require("../controllers/emailController");

const emailRouter = express.Router();

emailRouter.use(
  cors({
    credentials: true,
    origin: "https://sme-frontend.vercel.app",
  })
);

emailRouter
  .get("/email", get)
  .post("/email", postData)
  .get("/email/getAll", getAll)
  .get("/email/getAll/:name", getUserByName)
  .get("/email/delete/:id", deleteById)
  .get("/email/delete/:name", deleteByName)
  .get("/email/deleteAll", deleteAll);

module.exports = emailRouter;
