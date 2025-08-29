import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bfhlRouter from "./routes/bfhl_routes.js";
import errorHandler from "./middleware/default.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Routes
app.use("/bfhl", bfhlRouter);

// 404
app.use((req, res) => res.status(404).json({ is_success: false, message: "Not found" }));

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
