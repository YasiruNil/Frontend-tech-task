import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./slice/product.slice";

export const store = configureStore({
  reducer: productSlice,
});

export function setupStore() {
  return configureStore({
    reducer: productSlice,
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
