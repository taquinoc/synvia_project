const express = require('express');
const router = express.Router();

const SampleController = require("../controllers/sampleController");
const controller = new SampleController();

router.post("/check", (req, res) => controller.checkSample(req, res));

module.exports = router;