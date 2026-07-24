const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

/* ============================================
   GET ALL PRODUCTS
============================================ */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch products",
      error: error.message,
    });
  }
});

/* ============================================
   SAVE NEW PRODUCT
============================================ */
router.post("/save-new-product", async (req, res) => {
  try {
    console.log(req.body);

    const { name, description, price, image, stock } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      image,
      stock,
    });

    await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Product saved successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to save new product",
      error: error.message,
    });
  }
});

module.exports = router;