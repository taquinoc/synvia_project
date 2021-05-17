const express = require('express');
const router = express.Router();

const AuthController = require("../controllers/authController");
const controller = new AuthController();

router.post("/token", (req, res) => controller.generateToken(req, res));

module.exports = router;