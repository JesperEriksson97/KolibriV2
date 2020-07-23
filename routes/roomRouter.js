const express = require("express");
const router = express.Router();
const roomController = require("../controller/roomController");

router.get("/createRoom", roomController.createRoom);
router.get("/joinRoom", roomController.joinRoom);
router.post("/joinRoom", roomController.renderJoinedRoom)

module.exports = router;