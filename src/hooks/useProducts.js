import { useEffect, useState } from "react";

// Custom hook for fetching products
function useProducts() {
  // State for products
  const [products, setProducts] = useState([]);

  // State for loading
  const [loading, setLoading] = useState(true);

  // State for error handling
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
  };
}

export default useProducts;