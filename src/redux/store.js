import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice.jsx'; // ✅ match actual filename + extension

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

