const express = require("express");

const authController = (req, res) => {
  res.json("Test is working");
};

module.exports = { authController };
