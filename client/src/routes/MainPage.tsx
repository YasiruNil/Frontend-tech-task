import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchProducts } from "../redux/slice/product.slice";
import ProductList from "../components/product/ProductList";
import { useLocation } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // Parse the query string
  const queryValue = queryParams.get('name');
  const {
    status,
    list: productList,
  } = useAppSelector((state) => state.product.products);

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
      {status === "loading" && <div className="spin-loader">
          <Spin indicator={<LoadingOutlined spin />} size="large" />
          {/* Replace with a spinner */}
        </div>}
      {status === "succeeded" && <ProductList productList={filteredProductList} />}
    </>
  );
};

export default MainPage;