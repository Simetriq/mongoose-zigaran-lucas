import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
