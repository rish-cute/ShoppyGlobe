import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

// Reusable Product Item Component
function ProductItem({ product }) {
  const dispatch = useDispatch();

  // Add product to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));

    alert(`${product.title} added to cart`);
  };

  return (
    <div
      style={{
        border: "1px solid #cccccc",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>{product.title}</h3>

      <p>{product.description}</p>

      <p>
        <strong>Price:</strong> ${product.price}
      </p>

      <button onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductItem;