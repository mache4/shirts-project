import "../styles/your-cart.scss";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
// import { useSelector } from "react-redux";

const YourCart = () => {
    const cartItemsData = useSelector((state: any) => state.cartItems)
    return (
        <div className="your-cart">
            <h1>YOUR CART</h1>
            {cartItemsData.map((item: any) => <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                number={item.number} />)}
        </div>
    );
}

export default YourCart;