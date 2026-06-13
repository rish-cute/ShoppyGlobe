import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectCartItems,
  clearCart,
} from "../../redux/cartSlice";

import "../../styles/Checkout.css";

// Checkout Page
function Checkout() {
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (!name || !address) {
      alert("Please fill all details");
      return;
    }

    alert("Order placed successfully!");

    dispatch(clearCart());

    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">
        Checkout
      </h1>

      <div className="checkout-card">
        <h2>Customer Details</h2>

        <input
          className="checkout-input"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <textarea
          className="checkout-textarea"
          placeholder="Enter your address"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
        />
      </div>

      <div className="checkout-card">
        <h2>Order Summary</h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="order-item"
          >
            <h3>{item.title}</h3>

            <p>
              Quantity: {item.quantity}
            </p>

            <p>
              Price: ${item.price}
            </p>
          </div>
        ))}

        <div className="order-total">
          Total: ${totalPrice.toFixed(2)}
        </div>

        <button
          className="place-order-btn"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;