import { createSlice } from "@reduxjs/toolkit";
import products from "../data/product";


const initialState = {
    products: products,
};

export const productsSlice = createSlice ({
    name: 'products',
    initialState,
    reducers: {

    }
});

export default productsSlice.reducer;