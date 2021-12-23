import express from "express";
import { submitOrder, getOrders } from "../controllers/orders";

const router = express.Router();

router.post("/", submitOrder);
router.get("/:email", getOrders);

export default router;