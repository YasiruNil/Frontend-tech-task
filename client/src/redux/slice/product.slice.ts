import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productList: (state: any, action: PayloadAction<any>) => {
      state.tasks.searchValue = action.payload;
    },
  },
});


export const {
  productList
} = productSlice.actions;

export default productSlice.reducer;
