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
  .get("/email", getData)
  .post("/email", postData)
  .get("/email/getAll", getAll)
  .get("/email/getAll/:name", getUserByName)
  .get("/email/delete/:id", deleteById)
  .get("/email/delete/:name", deleteByName)
  .get("/email/deleteAll", deleteAll);

module.exports = emailRouter;
