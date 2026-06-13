import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cartSlice";

import "../../styles/Cart.css";

// Cart Component
function Cart() {
  const cartItems = useSelector(selectCartItems);

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2>Your cart is empty.</h2>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">
        Shopping Cart
      </h2>

      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}

      <div
        style={{
          marginTop: "25px",
          padding: "20px",
          background: "#ffffff",
          border: "1px solid #cbd5e1",
          borderRadius: "12px",
          maxWidth: "400px" ,
        }}
      >
        <h2>
          Total: ${totalPrice.toFixed(2)}
        </h2>

        <Link to="/checkout">
          <button
            style={{
              marginTop: "15px",
              padding: "12px 24px",
              background: "#6366f1",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;