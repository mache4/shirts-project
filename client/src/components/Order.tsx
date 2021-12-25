interface Props {
    customer: string,
    items: Array<object>,
    totalPrice: number,
    // data: Date
}

const Order = (props: Props) => {
    return (
        <div className="order">
            {props.customer}
        </div>
    );
}

export default Order;