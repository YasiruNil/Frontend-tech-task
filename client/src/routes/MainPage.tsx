import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchProducts } from "../redux/slice/product.slice";
import ProductList from "../components/product/ProductList";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // Parse the query string
  const queryValue = queryParams.get('name');
  const {
    errorMessage,
    status,
    list: productList,
  } = useAppSelector((state) => state.product.products);
  console.log(errorMessage, status, productList, queryValue);

  // fetch all the products
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // filter products based on categoryPath
  const filteredProductList = queryValue?.length
    ? productList.filter((product: any) => product.urlPath === queryValue)
    : productList;

  return (
    <>
      {status === "loading" && <div>Loading...</div>}
      {status === "succeeded" && <ProductList productList={filteredProductList} />}
    </>
  );
};

export default MainPage;