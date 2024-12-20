import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Category,
  CategoryPayload,
  CategoryState,
} from "../../types/product.types";

// Set Initial State
const initialState = {
  categories: {
    errorMessage: "",
    status: "",
    list: [],
  },
} as CategoryState;

// Define GraphQL query
const GET_CATEGORIES = gql`
  {
    categories {
      name
      urlPath
    }
  }
`;

// Create async thunk for fetching categories from GraphQL
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response: CategoryPayload = await new ApolloClient({
      uri: "http://localhost:3000/category",
      cache: new InMemoryCache(),
    }).query({
      query: GET_CATEGORIES,
      fetchPolicy: "no-cache",
    });

    return response.data.categories || [];
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state: CategoryState) => {
        state.categories.status = "loading";
      })
      .addCase(
        fetchCategories.fulfilled,
        (state: CategoryState, action: PayloadAction<Category[]>) => {
          state.categories.status = "succeeded";
          state.categories.list = action.payload;
        }
      )
      .addCase(fetchCategories.rejected, (state: CategoryState) => {
        state.categories.status = "failed";
        state.categories.errorMessage = "Failed to fetch categories";
      });
  },
});

export default categorySlice.reducer;
