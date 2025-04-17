import Product from "../models/Product.js";
import mongoose from "mongoose";

// API route to fetch all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({
      success: true,
      message: "All Products fetched successfully",
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, error: error.message });
  }
};

// API route to fetch a specific product by ID
export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;

    // Validate if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    const product = await Product.findById(id);

    // Check if the product exists
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // For now, return placeholder with the provided ID
    res.json({
      success: true,
      message: "Product id: " + id + " fetched successfully",
      data: id,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    // Validate if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    // update the product
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    // Check if the product exists
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // For now, return placeholder with the provided ID
    res.json({
      success: true,
      message: "Product id: " + id + " updated successfully",
      data: req.body,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    // Validate if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    // Delete the product
    await Product.findByIdAndDelete(id);

    // Check if the product exists
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // For now, return placeholder with the provided ID
    res.json({
      success: true,
      message: "Product id: " + id + " deleted successfully",
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      countInStock,
      category,
      image,
      brand,
      features,
    } = req.body;

    //Basic validation
    if (!name || !description || !price || !category) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, description, price and category fields",
      });
    }

    // Create a new product
    const product = new Product({
      name,
      description,
      price,
      countInStock,
      category,
      image,
      brand,
      features,
    });

    // Save product to the database
    await product.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, error: error.message });
  }
};
