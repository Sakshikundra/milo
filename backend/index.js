import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
dotenv.config({ path: "./backend/.env" });

connectDb();
const app = express();
const port = process.env.PORT || 5000;
console.log("MONGODB_URL:", process.env.MONGODB_URL);

app.get("/", (req, res) => {
  res.send("hii");
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
