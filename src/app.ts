import express from "express";

import todoRouter from "./routes/todoRoutes";
import userRouter from "./routes/userRoutes";
const app = express();

// MIDDLEWARE
app.use(express.json({ limit: "10kb" }));

//CORS
// app.use(cors({
//     origin: "teastore website"
// }));

// ROUTES (endpoint)
// localhost:8000/todos
app.use("/todos", todoRouter);

// localhost:8000/users
app.use("/users", userRouter);

export default app;