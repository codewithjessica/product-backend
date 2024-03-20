import express from "express";

import { getAllProducts, addProduct, singleProduct, deleteProduct } from "../controllers/productControllers";

const router = express.Router(); //create variable, handle routing

// localhost:8000/todos/ GET, POST
router.route("/").get(getAllProducts).post(addProduct);

// localhost:8000/todos/:id
router.route("/:id").get(singleProduct);

// localhost:8000/todos/:id
router.route("/:id").delete(deleteProduct);

export default router;