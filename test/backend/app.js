import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js"; 

const app = express();

// Middleware
app.use(express.json());  // Express already provides JSON parsing

// Routes
app.get("/", async (req, res) => {
    res.status(200).json({ message: "Welcome to the API!" });
});

app.use("/api/users", userRoutes);  // Use the userRoutes for "/api/users"

// Start the server

export default app;
