const mongoose = require("mongoose");

const favoriteSchema = mongoose.Schema(
  {
    userFrom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    movieId: {
      type: String,
    },
    title: {
      type: String,
    },
    backdrop_path: {
      type: String,
    },
    runtime: {
      type: String,
    },
  },
  { timestamps: true }
);

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = { Favorite };
