import express from "express";
import cors from "cors";
import todoRouter from "./routes/todoRoutes";
import userRouter from "./routes/userRoutes";
const app = express();

// MIDDLEWARE
app.use(express.json({ limit: "10kb" }));

//CORS
app.use(cors({
    origin: ["https://codewithjessicateastore.netlify.app", "http://localhost:5173"]
}));

// ROUTES (endpoint)
// localhost:8000/todos
app.use("/todos", todoRouter);

// localhost:8000/users
// app.use("/users", userRouter);

export default app;