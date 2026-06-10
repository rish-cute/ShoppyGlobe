import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectCartItems,
  clearCart,
} from "../../redux/cartSlice";

// Checkout Page
function Checkout() {
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  // Calculate total price
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
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>

      <h2>Customer Details</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          display: "block",
          marginBottom: "10px",
          padding: "8px",
          width: "300px",
        }}
      />

      <textarea
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{
          display: "block",
          marginBottom: "20px",
          padding: "8px",
          width: "300px",
          height: "100px",
        }}
      />

      <h2>Order Summary</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #cccccc",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h3>{item.title}</h3>

          <p>Quantity: {item.quantity}</p>

          <p>Price: ${item.price}</p>
        </div>
      ))}

      <h2>Total: ${totalPrice.toFixed(2)}</h2>

      <button onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;