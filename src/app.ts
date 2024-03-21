import express from "express";
import cors from "cors";
import productRouter from "./routes/productRoutes";
const app = express();

// MIDDLEWARE
app.use(express.json({ limit: "10kb" }));

//CORS
app.use(cors({
    origin: ["https://codewithjessicateastore.netlify.app", "http://localhost:5173"]
}));

// ROUTES (endpoint)
// localhost:8000/products
app.use("/products", productRouter);

export default app;