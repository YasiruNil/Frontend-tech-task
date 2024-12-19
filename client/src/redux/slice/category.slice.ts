import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Set Initial State
const initialState = {
  categories: {
    errorMessage: "",
    status: "",
    list: [],
  },
};

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
    const response = await new ApolloClient({
      uri: "http://localhost:3000/category",
      cache: new InMemoryCache(),
    }).query({
      query: GET_CATEGORIES,
      fetchPolicy: "no-cache",
    });

    return response.data?.categories ?? [];
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.categories.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories.status = "succeeded";
        state.categories.list = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categories.status = "failed";
        state.categories.errorMessage = "Failed to fetch categories";
      });
  },
});

export default categorySlice.reducer;
