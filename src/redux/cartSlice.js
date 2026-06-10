// Redux Toolkit function for creating slices
import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const savedCart =
  JSON.parse(localStorage.getItem("cart")) || [];

// Initial cart state
const initialState = {
  items: savedCart,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // Add product to cart
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },

    // Remove product completely
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },

    // Increase quantity
    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },

    // Decrease quantity (minimum 1)
    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },

    // Clear cart after order placement
    clearCart: (state) => {
      state.items = [];

      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

// Selector
export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;