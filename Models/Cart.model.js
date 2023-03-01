const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  brand: String,
  rate: String,
  price: Number,
  qty: Number,
});

const CartModel = mongoose.model("cart", CartSchema);

module.exports = { CartModel };
