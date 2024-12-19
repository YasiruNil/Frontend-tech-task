import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchProducts } from "../redux/slice/product.slice";
import ProductList from "../components/product/ProductList";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const {
    errorMessage,
    status,
    list: productList,
  } = useAppSelector((state) => state.product.products);
  console.log(errorMessage, status, productList);

  // fetch all the products
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      {status === "loading" && <div>Loading...</div>}
      {status === "succeeded" && <ProductList productList={productList} />}
    </>
  );
};

export default MainPage;