const express = require("express");
const {
  getData,
  postData,
  getAll,
  getUserByName,
  deleteById,
  deleteByName,
  deleteAll,
} = require("../controllers/emailController");

const emailRouter = express.Router();

emailRouter
  .get("/", getData)
  .post("/", postData)
  .get("/getAll", getAll)
  .get("/getAll/:name", getUserByName)
  .get("/delete/:id", deleteById)
  .get("/delete/:name", deleteByName)
  .get("/deleteAll", deleteAll);

module.exports = emailRouter;
