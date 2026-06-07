import { useSelector } from "react-redux";
import { selectSearchTerm } from "../../redux/searchSlice";

import useProducts from "../../hooks/useProducts";
import ProductItem from "../ProductItem/ProductItem";

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
    <div>
      <h2>Products</h2>

      {filteredProducts.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;