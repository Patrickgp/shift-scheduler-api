import express from "express";
import apiRoutes from "./routes/apiRoutes";
import connectDB from "./config/mongoose";

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
app.use("/api", apiRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
