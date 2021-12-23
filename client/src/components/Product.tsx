import { useRef, useEffect } from "react";
import { addCartItem } from "../redux/actions/cartItems";
import { useSelector, useDispatch } from "react-redux";

interface Props {
    id: number,
    name: string,
    image: string,
    price: number
}

const Product = (props: Props) => {
    const dispatch = useDispatch();
    const numberRef = useRef<HTMLInputElement | any>();
    const cartItems = useSelector((state: any) => state.cartItems);
    const buttonRef = useRef<any>("");

    useEffect(() => {
        if (cartItems.find((i: any) => i.id === props.id)) {
            buttonRef.current.setAttribute("disabled", true);
        }
    }, [cartItems, props])

    const addToCart = (e: any) => {
        // if (cartItems.find((i: any) => i.id === props.id)) {
        //     return console.log("ovde ci izaci modal. item je vec u cart-u!");
        // }
        dispatch(addCartItem({
            id: props.id,
            name: props.name,
            image: props.image,
            price: props.price,
            number: numberRef.current.value
        }));
        e.target.setAttribute("disabled", true);
    }

    return (
        <div className="product">
            <h1 className="product-name">{props.name}</h1>
            <img src={require(`../assets/${props.image}`)} alt={props.name} />
            <div className="product-info">
                <p className="product-price">Price: <span>$</span>{props.price}</p>
                <input type="number" className="product-number" ref={numberRef} min="1" max="10" defaultValue={1} />
                <button ref={buttonRef} className="add-to-cart" onClick={addToCart}>Add To Cart</button>
            </div>
        </div>
    );
}

export default Product;