import useProducts from "../../hooks/useProducts";

// Product list component
function ProductList() {
  const { products, loading, error } = useProducts();

  // Loading state
  if (loading) {
    return <h2>Loading products...</h2>;
  }

  // Error state
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #cccccc",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{product.title}</h3>

          <p>{product.description}</p>

          <p>
            <strong>Price:</strong> ${product.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;