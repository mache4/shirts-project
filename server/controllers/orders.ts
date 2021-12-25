import Order from "../models/order";

export const submitOrder = async (req: any, res: any) => {
    const { email, items, totalPrice } = req.body;

    try {
        const result = await Order.create({ email, items });
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}

export const getOrders = async (req: any, res: any) => {
    const { customer } = req.params;

    try {
        const orders = await Order.find({ customer });
        res.status(200).json(orders);
    } catch (error) {
        res.status(404).json({ message: "Something went wrong" });
    }
}