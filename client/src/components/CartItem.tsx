interface Props {
    id: number,
    name: string,
    image: string,
    price: number,
    number: number
}

const CartItem = (props: Props) => {
    return (
        <div className="cart-item">
            <p>{props.name}</p>
            <input type="number" defaultValue={props.number} />
        </div>
    );
}

export default CartItem;