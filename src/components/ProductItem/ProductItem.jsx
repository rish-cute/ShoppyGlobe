import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

import "../../styles/ProductItem.css";

// Reusable Product Item Component
function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    alert(`${product.title} added to cart`);
  };

  return (
    <div className="product-card">
      <h3 className="product-title">
        {product.title}
      </h3>

      <p className="product-description">
        {product.description}
      </p>

      <p className="product-price">
        ${product.price}
      </p>

      <div className="button-group">
        <Link to={`/product/${product.id}`}>
          <button className="details-btn">
            View Details
          </button>
        </Link>

        <button
          className="cart-btn"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;