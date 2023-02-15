const mongoose = require("mongoose");

const MobileProductSchema = mongoose.Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  brand: String,
  rate: String,
  Price: Number,
});

const AppleProductModel = mongoose.model("mobile", MobileProductSchema);

module.exports = { AppleProductModel };
