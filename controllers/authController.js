const express = require("express");

const authController = (req, res) => {
  res.json("Test is working");
};

const registerUser = (req, res) => {};

module.exports = { authController };
