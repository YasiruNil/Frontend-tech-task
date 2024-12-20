import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Article } from "../../../types/product.types";
import { createSearchParams, useNavigate } from "react-router-dom";

const ProductCart = ({
  cartItem,
  categoryId,
}: {
  cartItem: Article;
  categoryId: number;
}) => {
  const navigate = useNavigate();

  const handleClick = (articleId: number, categoryId: number) => {
    navigate({
      pathname: `/article/${articleId}`,
      search: createSearchParams({
        categoryId: `${categoryId}`,
      }).toString(),
    });
  };

  return (
    <div
      className="product-cart"
      onClick={() => handleClick(cartItem.id, categoryId)}
    >
      <LazyLoadImage
        effect="blur"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          height: "160px",
          maxWidth: "160px",
          margin: "10px",
        }}
        src={cartItem.images[0].path}
        alt={cartItem.name}
      />
      <div className="article-name">{cartItem.name}</div>
      <div className="article-price">
        {cartItem.prices.currency}: {cartItem.prices.value}
      </div>
    </div>
  );
};

export default ProductCart;
