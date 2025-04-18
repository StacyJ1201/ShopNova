import mongoose from "mongoose";
import Order from "../models/Order.js";

// API route to fetch all orders
export const getAllOrders = async (req, res) => {
  try {
    // search for all orders
    const orders = await Order.find({});

    res.json({
      success: true,
      message: "All Orders fetched successfully",
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// API route to fetch a specific order by ID
export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order ID",
      });
    }

    // search for order by ID
    const order = await Order.findById(id);

    // For now, return placeholder with the provided ID
    res.json({
      success: true,
      message: "Order fetched successfully",
      data: id,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//API route to create a new order
export const createOrder = async (req, res) => {
  try {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    //Basic validation
    if (
      !orderItems ||
      !shippingAddress ||
      !paymentMethod ||
      !itemsPrice ||
      !taxPrice ||
      !shippingPrice ||
      !totalPrice
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Create a new order
    const order = await Order.create({
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      // user: req.user._id,
    });

    // Save the order to the database
    await order.save();

    // Return the created order
    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//API route to update an existing order
export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order ID",
      });
    }

    // update the order
    const order = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    // For now, return placeholder with the provided ID
    res.json({
      success: true,
      message: "Order id: " + id + " updated successfully",
      data: req.body,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//API route to delete an existing order
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order ID",
      });
    }

    // Delete the order
    await Order.findByIdAndDelete(id);

    // For now, return placeholder with the provided ID
    res.json({
      success: true,
      message: "Order id: " + id + " deleted successfully",
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
