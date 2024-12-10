import { createSlice } from "@reduxjs/toolkit";
import products from "../data/product";


const initialState = {
    products: products,
    selectedProduct:null,
};

export const productsSlice = createSlice ({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProduct:(state,action)=>{
            const productId=action.payload;
            state.selectedProduct=state.products.find((p)=>p.id==productId);

    }}
});

export default productsSlice.reducer;