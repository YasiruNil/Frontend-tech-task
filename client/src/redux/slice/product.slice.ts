import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Set Initial State
const initialState = {
  products: {
    errorMessage: "",
    status: "",
    list: [],
  },
};

// Define GraphQL query
const GET_PRODUCTS = gql`
  {
    categories {
      name
      articleCount
      childCategories {
        name
        urlPath
      }
      articles {
        name
        variantName
        prices {
          currency
          value
        }
        images {
          path
        }
      }
    }
  }
`;

// Create async thunk for fetching categories from GraphQL
export const fetchProducts = createAsyncThunk(
  "categories/fetchProducts",
  async () => {
    const response = await new ApolloClient({
      uri: "http://localhost:3000/graphql",
      cache: new InMemoryCache(),
    }).query({
      query: GET_PRODUCTS,
    });
    
    return response.data?.categories ?? [];
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.products.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action.payload);
        state.products.status = "succeeded";
        state.products.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.products.status = "failed";
        state.products.errorMessage = "Failed to fetch categories";
      });
  },
});

export default productSlice.reducer;
