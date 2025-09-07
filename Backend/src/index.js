import dotenv from "dotenv";
import express from "express";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import chatRouter from "./routes/chat.js";

dotenv.config({ path: "./.env" });

const port = process.env.PORT || 8000;

const app = express();

const server = http.createServer(app);

// Middlewares
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.static("public"));
app.use(express.static("public"));
app.use(cookieParser());

// CORS Configuration

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use('/api', chatRouter);

// Start server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
