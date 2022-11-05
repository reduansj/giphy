const mongoose = require("mongoose");

const gifSchema = new mongoose.Schema(
  {
    Url: { type: String, required: [true, "Gif Url is required"] },
    Title: { type: String, required: [true, "Title is required"] },
    Genre: { type: String, required: [true, "Title is required"] },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Gif", gifSchema);
