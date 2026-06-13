import { useSelector } from "react-redux";
import { selectSearchTerm } from "../../redux/searchSlice";

import useProducts from "../../hooks/useProducts";
import ProductItem from "../ProductItem/ProductItem";

import "../../styles/ProductList.css";

// Product List Component
function ProductList() {
  const { products, loading, error } = useProducts();

  const searchTerm = useSelector(selectSearchTerm);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-container">
      <h2 className="products-heading">
        Products
      </h2>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;