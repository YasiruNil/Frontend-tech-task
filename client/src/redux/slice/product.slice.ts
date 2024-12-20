import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Category,
  ProductsPayload,
  ProductState,
} from "../../types/product.types";

// Set Initial State
const initialState = {
  products: {
    errorMessage: "",
    status: "",
    list: [],
  },
  searchValue: "",
} as ProductState;

// Define GraphQL query
const GET_PRODUCTS = gql`
  {
    categories {
      name
      urlPath
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
    const response: ProductsPayload = await new ApolloClient({
      uri: "http://localhost:3000/graphql",
      cache: new InMemoryCache(),
    }).query({
      query: GET_PRODUCTS,
    });

    return response.data.categories || [];
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state: ProductState) => {
        state.products.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state: ProductState, action: PayloadAction<Category[]>) => {
          state.products.status = "succeeded";
          state.products.list = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state: ProductState) => {
        state.products.status = "failed";
        state.products.errorMessage = "Failed to fetch products";
      });
  },
});

export const { setSearchValue } = productSlice.actions;

export default productSlice.reducer;
