const mongoose = require("mongoose");

const FiddleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roomId: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  cursor: {
    type: Object,
  },
});

const Fiddle = mongoose.model("Fiddle", FiddleSchema);

module.exports = Fiddle;
