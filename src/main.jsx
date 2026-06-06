import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import router from "./routes/router";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Redux Provider */}
    <Provider store={store}>
      {/* Router Provider */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);