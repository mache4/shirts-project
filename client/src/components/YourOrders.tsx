import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../redux/actions/orders";
import Order from "./Order";

import "../styles/your-orders.scss";

const YourOrders = () => {
    const user = JSON.parse(localStorage.getItem('profile') || "{}");
    const ordersData: any = useSelector((state: any) => state.ordersReducer.ordersData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders(user?.result?.email));
    }, [dispatch, user?.result?.email]);

    let orders: any = null;

    if (ordersData)
        orders = ordersData.map((order: any) => <Order
            key={order._id}
            customer={order.customer}
            items={order.items}
            totalPrice={order.totalPrice} />);

    return (
        <div className="your-orders">
            {!localStorage.getItem("profile") || localStorage.getItem("profile") === "{}" ?
                <h1 className="message">You need to signin to see your orders.</h1> :
                orders
            }
        </div>
    );
}

export default YourOrders;