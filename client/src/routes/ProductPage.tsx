import React, { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchProducts } from "../redux/slice/product.slice";
import { ProductState } from "../types/product.types";
import { Spin } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const queryParams = new URLSearchParams(location.search); // Parse the query string
  const getcategoryId = queryParams.get("categoryId");
  const { list: productList, status } = useAppSelector(
    (state: { product: ProductState }) => state.product.products
  );

  const product = productList
    .find((item) => item.id === Number(getcategoryId))
    ?.articles.find((item) => item.id === Number(id));

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === "loading") {
    return (
      <div className="product-spinner">
        <Spin indicator={<LoadingOutlined spin />} size="large" />
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page">
      <LazyLoadImage
        effect="blur"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          height: "500px",
          maxWidth: "500px",
          margin: "10px",
        }}
        src={product.images[0].path}
        alt={product.name}
      />
      <div>
      <p>Price: {product.prices.value}</p>
      <p>Price: {product.name}</p>
      </div>
    </div>
  );
};

export default ProductPage;
