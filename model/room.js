const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  roomID: {
    type: String,
    required: true,
  },
  fiddle: {
    type: Object,
    required: true,
  },
  users: {
    type: Array,
    required: true,
  },
});

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
