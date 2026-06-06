import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";

// Central Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});

export default store;