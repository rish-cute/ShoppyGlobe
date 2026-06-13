import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/cartSlice";

import "../../styles/ProductDetail.css";

// Product Detail Page
function ProductDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();

        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2>Loading product...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    alert(`${product.title} added to cart`);
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <h1 className="product-detail-title">
          {product.title}
        </h1>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-detail-image"
          loading="lazy"
        />

        <p className="product-detail-description">
          {product.description}
        </p>

        <p className="product-detail-info product-price">
          Price: ${product.price}
        </p>

        <p className="product-detail-info">
          <strong>Category:</strong>{" "}
          {product.category}
        </p>

        <p className="product-detail-info">
          <strong>Rating:</strong>{" "}
          {product.rating}
        </p>

        <button
          className="add-cart-btn"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;