import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './productsSlice'; // Assure-toi du chemin correct

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer, // Utilise le slice correctement
  },
});

export default store;
