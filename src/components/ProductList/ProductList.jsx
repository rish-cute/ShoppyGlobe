import useProducts from "../../hooks/useProducts";
import ProductItem from "../ProductItem/ProductItem";

// Product List Component
function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;