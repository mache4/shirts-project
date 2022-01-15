import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customer: String,
    items: [],
    totalPrice: Number,
    createdAt: Date
});

const Order = mongoose.model("orders", orderSchema);

export default Order;