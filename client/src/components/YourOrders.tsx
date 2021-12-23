import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../redux/actions/orders";

const YourOrders = () => {
    const user = JSON.parse(localStorage.getItem('profile') || "{}");
    const ordersData: any = useSelector((state: any) => state.ordersReducer.ordersData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders(user?.result?.email));
    }, [dispatch, user?.result?.email]);

    let orders: any = null;

    if (ordersData)
        orders = ordersData.map((order: any) => {
            // return <Order />;
            return order.items[0];
        });

    return (
        <div className="your-orders">
            {!user?.result ? null : <p>{user.result.email}</p>}
            {/* {console.log("user: ", user?.result?.email)}
            {console.log("orders: ", ordersData)} */}

            {orders}
        </div>
    );
}

export default YourOrders;