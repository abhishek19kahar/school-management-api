import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import schoolRoutes from "./src/routes/schoolRoutes.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/api", schoolRoutes);

// Start Server after DB connection
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
};

startServer();
