import express from "express";
import { submitOrder, getOrders } from "../controllers/orders";

const router = express.Router();

router.post("/", submitOrder);
router.get("/:customer", getOrders);

export default router;