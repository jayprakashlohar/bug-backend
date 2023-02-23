const express = require("express");
const { AppleProductModel } = require("../Models/MobileProducts.model");
const mobileRouter = express.Router();

//Get all product
mobileRouter.get("/", async (req, res) => {
  const product = await AppleProductModel.find();
  res.send(product);
});

//Find by id
mobileRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await AppleProductModel.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//Add new product
mobileRouter.post("/createproduct", async (req, res) => {
  const payload = req.body;
  try {
    const new_product = new AppleProductModel(payload);
    await new_product.save();
    res.send({ msg: "Product created successfully" });
  } catch (err) {
    res.send(400).json({ msg: "Something went wrong" });
  }
});

//Update product
mobileRouter.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await AppleProductModel.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete product
mobileRouter.delete("/delete/:id", async (req, res) => {
  const productID = req.params.id;
  try {
    await AppleProductModel.findByIdAndDelete({ _id: productID });
    res.send({ msg: "Product deleted successfully" });
  } catch (err) {
    res.send(400).send({ msg: "Something Went Wrong" });
  }
});

module.exports = { mobileRouter };
