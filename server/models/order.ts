import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    email: String,
    items: [],
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Order = mongoose.model("orders", orderSchema);

export default Order;