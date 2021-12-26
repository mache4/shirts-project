import "../styles/order.scss";

interface Props {
    customer: string,
    items: Array<object>,
    totalPrice: number,
    date: Date
}


const Order = (props: Props) => {
    const fun = (number: any) => {
        if (number < 10)
            number = '0' + number;
        return number;
    }

    let date = new Date(props.date);
    let seconds = fun(date.getSeconds());
    let minutes = fun(date.getMinutes());
    let hours = fun(date.getHours());
    let day = fun(date.getDate());
    let month = fun(date.getMonth() + 1);
    let year = fun(date.getFullYear());

    return (
        <div className="order">
            <h3 className="order-date">{hours}:{minutes}:{seconds} <br /> {day}.{month}.{year}</h3>
            <p className="order-price">Price: <span>${props.totalPrice}</span></p>
        </div>
    );
};

export default Order;