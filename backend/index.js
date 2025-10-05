import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";  
import authRouter from "./routes/auth.routes.js";
import cors from "cors";

// ✅ Initialize environment variables
dotenv.config();

// ✅ Create the app **before** using it
const app = express();

// ✅ Connect to MongoDB
connectDb();

// ✅ CORS configuration
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true 
}));    

// ✅ Middleware
app.use(express.json()); 
app.use(cookieParser());  

// ✅ Routes
app.use("/api/auth", authRouter); 

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});


const port = process.env.PORT || 8000;
console.log("MONGODB_URL:", process.env.MONGODB_URL);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
