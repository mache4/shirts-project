import { useRef } from "react";
import { patchCartItem } from "../redux/actions/cartItems";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../redux/actions/cartItems";
import { ImCross } from "react-icons/im";
import "../styles/cart-item.scss";

interface Props {
    id: number,
    name: string,
    image: string,
    price: number,
    number: number
}

const CartItem = (props: Props) => {
    const numberRef = useRef<HTMLInputElement | any>();
    const dispatch = useDispatch();

    const numberChanged = () => dispatch(patchCartItem(props.id, numberRef.current.value));

    return (
        <div className="cart-item">
            <p className="item-price">${props.price * props.number}</p>
            <input className="item-number" type="number" defaultValue={props.number} onChange={numberChanged} ref={numberRef} min="1" max="10" />
            <p className="item-name">{props.name}</p>
            <img className="item-image" src={require(`../assets/${props.image}`)} alt={props.name} />
            <ImCross className="remove-item" onClick={() => dispatch(removeCartItem(props.id))} />
        </div>
    );
}

export default CartItem;