import { createClient } from "redis";

// Create a Redis client
const redisClient = createClient({
  url: process.env.REDIS_URL,
});

// Connect to Redis
const connectedRedis = async () => {
  try {
    await redisClient.connect();
    console.log("Redis connected");
  } catch (error) {
    console.error(`Redis connection error: ${error.message} `);
  }
};

// Handle Redis connection errors
redisClient.on("error", (error) => {
  console.log("Redis connection error: ", error);
});

export { redisClient, connectedRedis };
