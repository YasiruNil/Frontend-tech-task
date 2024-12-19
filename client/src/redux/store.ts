import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./slice/product.slice";
import categorySlice from "./slice/category.slice";

export const store = configureStore({
  reducer: { product: productSlice, category: categorySlice },
});

export function setupStore() {
  return store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
