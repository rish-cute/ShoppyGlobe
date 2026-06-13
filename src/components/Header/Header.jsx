import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  setSearchTerm,
  selectSearchTerm,
} from "../../redux/searchSlice";

import "../../styles/Header.css";

// Header Component
function Header() {
  const dispatch = useDispatch();

  const searchTerm = useSelector(selectSearchTerm);

  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <header className="header">
      <h1 className="logo">ShoppyGlobe</h1>

      <nav className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/cart">Cart</Link>
      </nav>

      <input
        className="search-box"
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </header>
  );
}

export default Header;