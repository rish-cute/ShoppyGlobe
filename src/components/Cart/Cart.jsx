import { useSelector } from "react-redux";

import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cartSlice";

// Cart Component
function Cart() {
  const cartItems = useSelector(selectCartItems);

  if (cartItems.length === 0) {
    return <h2>Your cart is empty.</h2>;
  }

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}

export default Cart;