import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "Product 1", category: "Category 1", expiryDate: "2025-12-31", cost: 2300 },
    { id: 2, name: "Product 2", category: "Category 2", expiryDate: "2025-12-31", cost: 2300 }
  ]
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    }
  }
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
