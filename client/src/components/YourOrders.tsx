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
            totalPrice={order.totalPrice}
            date={order.createdAt} />);

    return (
        <div className="your-orders">
            {!localStorage.getItem("profile") || localStorage.getItem("profile") === "{}" ?
                <h3 className="message">You need to signin to see your orders.</h3> :
                <>
                    <h1>Your Orders</h1>
                    <h2>{user.result.email}</h2>
                    {orders}
                </>
            }
        </div>
    );
}

export default YourOrders;