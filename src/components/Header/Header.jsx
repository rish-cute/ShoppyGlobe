import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  setSearchTerm,
  selectSearchTerm,
} from "../../redux/searchSlice";

// Header Component
function Header() {
  const dispatch = useDispatch();

  const searchTerm = useSelector(selectSearchTerm);

  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <header
      style={{
        padding: "15px",
        borderBottom: "1px solid #cccccc",
      }}
    >
      <h1>ShoppyGlobe</h1>

      <nav
        style={{
          marginBottom: "10px",
        }}
      >
        <Link to="/">Home</Link>

        <span> | </span>

        <Link to="/cart">Cart</Link>
      </nav>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          marginTop: "10px",
          padding: "8px",
          width: "300px",
        }}
      />
    </header>
  );
}

export default Header;