import { Link } from "react-router-dom";
import Cart from "../../components/Cart/Cart";

// Cart Page Component
function CartPage() {
  return (
    <div>
      <h1>Cart Page</h1>

      <Cart />

      <Link to="/checkout">
        <button
          style={{
            marginTop: "20px",
            padding: "10px",
          }}
        >
          Proceed To Checkout
        </button>
      </Link>
    </div>
  );
}

export default CartPage;