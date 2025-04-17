import express from "express";
import {
  getAllOrders,
  getOrderById,
  createOrder,
  deleteOrder,
  updateOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.post("/", createOrder);
router.delete("/:id", deleteOrder);
router.put("/:id", updateOrder);

export default router;
