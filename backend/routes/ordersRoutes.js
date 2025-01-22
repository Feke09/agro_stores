import express from "express";
const router = express.Router();

import { CreateUserOrder } from "../controllers/ordersController.js";

router.post("/create", CreateUserOrder);

export default router;
