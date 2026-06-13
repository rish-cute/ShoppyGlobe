import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cartSlice";

import "../../styles/CartItem.css";

// Cart Item Component
function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h3 className="cart-item-title">
        {item.title}
      </h3>

      <p className="cart-item-price">
        <strong>Price:</strong> ${item.price}
      </p>

      <p className="cart-item-quantity">
        <strong>Quantity:</strong> {item.quantity}
      </p>

      <div className="cart-buttons">
        <button
          className="quantity-btn"
          onClick={() =>
            dispatch(decreaseQuantity(item.id))
          }
        >
          -
        </button>

        <button
          className="quantity-btn"
          onClick={() =>
            dispatch(increaseQuantity(item.id))
          }
        >
          +
        </button>

        <button
          className="remove-btn"
          onClick={() =>
            dispatch(removeFromCart(item.id))
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;