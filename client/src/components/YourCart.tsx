import "../styles/your-cart.scss";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const YourCart = () => {
    const cartItemsData = useSelector((state: any) => state.cartItems);

    const submitOrder = () => {

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
            <h1>YOUR CART</h1>
            {cartItemsData.length !== 0 ?
                <div>
                    {cartItems}
                    <h1>Total Price: ${totalPrice}</h1>
                    <button className="submit-order" onClick={submitOrder}>Submit Order</button>
                </div> :
                <h1>Your Cart is empty...</h1>}
        </div>
    );
}

export default YourCart;