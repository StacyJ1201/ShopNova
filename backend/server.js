import express from "express";
import connectDB from "./config/db";
import { connectedRedis } from "./config/redis";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

// Load environment variables from .env file
dotenv.config();

// Create an Express application
export const app = express();

// Connect to MongoDB
connectDB();

// Connect to Redis
connectedRedis();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes

// Start the server
port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
