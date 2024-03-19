import express from "express";
import { getAllUsers } from "../controllers/userControllers";
const router = express.Router();

router.route("/").get(getAllUsers);

export default router;