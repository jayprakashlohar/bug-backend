const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  brand: String,
  rate: String,
  price: Number,
  qty: Number,
});

const CartModel = mongoose.model("cart", CartSchema);

module.exports = { CartModel };

// const mongoose = require("mongoose");

// const CartSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   productId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Product",
//   },
//   // name: {
//   //   type: String,
//   // },
//   // price: {
//   //   type: Number,
//   // },
//   // quantity: {
//   //   type: Number,
//   // },
//   // image: {
//   //   type: String,
//   // },
//   title: { type: String },
//   imgUrl: { type: String },
//   brand: { type: String },
//   rate: { type: String },
//   price: { type: Number },
//   qty: { type: Number },
// });

// const CartModel = mongoose.model("Cart", CartSchema);

// module.exports = { CartModel };
