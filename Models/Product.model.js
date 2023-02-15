const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  category: String,
  brand: String,
  reviews: Number,
  Rating: Number,
  stars: String,
  type: String,
  Price: Number,
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
