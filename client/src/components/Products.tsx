import Product from "./Product";
import "../styles/products.scss";

const Products = () => {
    let products = [
        {
            id: 0,
            name: 'Grey T-Shirt',
            image: 'product-shirt1.jpg',
            price: 3.5,
        },
        {
            id: 1,
            name: 'Navy Blue T-Shirt',
            image: 'product-shirt2.jpg',
            price: 5,
        },
        {
            id: 2,
            name: 'White T-Shirt',
            image: 'product-shirt3.jpg',
            price: 4.5,
        }
    ];
    return (
        <div className="products">
            {products.map(p =>
                <Product
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    image={p.image}
                    price={p.price} />
            )}
        </div>
    );
}

export default Products;