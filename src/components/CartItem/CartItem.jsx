import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cartSlice";

// Cart Item Component
function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid #cccccc",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>{item.title}</h3>

      <p>
        <strong>Price:</strong> ${item.price}
      </p>

      <p>
        <strong>Quantity:</strong> {item.quantity}
      </p>

      <button
        onClick={() => dispatch(decreaseQuantity(item.id))}
      >
        -
      </button>

      <button
        onClick={() => dispatch(increaseQuantity(item.id))}
        style={{ marginLeft: "5px" }}
      >
        +
      </button>

      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        style={{ marginLeft: "10px" }}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;