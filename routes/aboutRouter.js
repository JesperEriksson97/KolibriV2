const express = require("express");
const router = express.Router();
const aboutController = require("../controller/aboutController");

router.get("/", aboutController.render);

module.exports = router;
