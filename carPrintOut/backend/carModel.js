const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: [true, "What is the car brand"],
    },
    color: {
      type: String,
      required: [true, "What is the color of the car"],
    },
    problems: {
      type: Array,
      required: [false],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);
