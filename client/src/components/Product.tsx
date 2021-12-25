import { useRef, useEffect, useState } from "react";
import { addCartItem } from "../redux/actions/cartItems";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import Modal from "./Modal";

interface Props {
    id: number,
    name: string,
    image: string,
    price: number
}

const Product = (props: Props) => {
    const dispatch = useDispatch();
    const numberRef = useRef<any>();
    const cartItems = useSelector((state: any) => state.cartItems);
    const buttonRef = useRef<any>("");
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (cartItems.find((i: any) => i.id === props.id)) {
            buttonRef.current.setAttribute("disabled", true);
            numberRef.current.setAttribute("disabled", true);
        }
    }, [cartItems, props])

    const addToCart = (e: any) => {
        dispatch(addCartItem({
            id: props.id,
            name: props.name,
            image: props.image,
            price: props.price,
            number: numberRef.current.value
        }));
        e.target.setAttribute("disabled", true);
        numberRef.current.setAttribute("disabled", true);
        setModal(true);
        window.setTimeout(() => {
            setModal(false);
        }, 1000);
    }

    return (
        <div className="product">
            <h1 className="product-name">{props.name}</h1>
            <img src={require(`../assets/${props.image}`)} alt={props.name} />
            <div className="product-info-div">
                <div className="product-info">
                    <p className="product-price">Price: <span>$</span>{props.price}</p>
                    <input type="number" className="product-number" ref={numberRef} min="1" max="10" defaultValue={1} />
                </div>
                <button ref={buttonRef} className="add-to-cart" onClick={addToCart}>Add To Cart</button>
            </div>
            <Modal show={modal}><FaShoppingCart /> Item is added to cart!</Modal>
        </div>
    );
}

export default Product;