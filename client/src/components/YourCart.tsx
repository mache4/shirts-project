import { useState } from "react";
import "../styles/your-cart.scss";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { RESET_CART_ITEMS } from "../constants/actionTypes";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { submitOrder } from "../redux/actions/orders";

const YourCart = () => {
    const cartItemsData = useSelector((state: any) => state.cartItems);
    const user = JSON.parse(localStorage.getItem('profile') || "{}");
    const [modalText, setModalText] = useState("");
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const history = useNavigate();

    const submit = () => {
        if (!localStorage.getItem("profile") || localStorage.getItem("profile") === "{}") {
            setModalText("You are not authenticated.");
            setModal(true);
            window.setTimeout(() => {
                setModal(false);
            }, 1500);
            return;
        }

        dispatch(submitOrder({
            customer: user?.result?.email,
            items: cartItemsData,
            totalPrice,
        }));
        dispatch({ type: RESET_CART_ITEMS });
        setModalText("Order Submited.");
        setModal(true);
        window.setTimeout(() => {
            setModal(false);
        }, 1500);
        history("/your-orders");
    }

    let totalPrice = 0;

    if (cartItemsData)
        cartItemsData.map((i: any) => totalPrice += i.price * i.number);

    const cartItems = cartItemsData.map((item: any) =>
        <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            number={item.number} />
    );

    return (
        <div className="your-cart">
            {cartItemsData.length !== 0 ?
                <div>
                    <h1>YOUR CART</h1>
                    {cartItems}
                    <h1>Total Price: ${totalPrice}</h1>
                    <button className="submit-order" onClick={submit}>Submit Order</button>
                </div> :
                <h3 className="message">Your cart is empty.</h3>}
            <Modal show={modal}>{modalText}</Modal>
        </div>
    );
}

export default YourCart;

/*
    {
        customer: localStorage.getItem("profile")?.result?.email,
        items: cartItemsData,
        totalPrice,
    }
*/