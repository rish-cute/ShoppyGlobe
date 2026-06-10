// React Router configuration

import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Lazy loaded pages
const Home = lazy(() => import("../pages/Home/Home"));
const ProductDetail = lazy(() =>
  import("../pages/ProductDetail/ProductDetail")
);
const CartPage = lazy(() =>
  import("../pages/Cart/CartPage")
);
const Checkout = lazy(() =>
  import("../pages/Checkout/Checkout")
);
const NotFound = lazy(() =>
  import("../pages/NotFound/NotFound")
);

// Loading component
const Loader = () => <h2>Loading...</h2>;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <Suspense fallback={<Loader />}>
        <ProductDetail />
      </Suspense>
    ),
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<Loader />}>
        <CartPage />
      </Suspense>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Suspense fallback={<Loader />}>
        <Checkout />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loader />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default router;