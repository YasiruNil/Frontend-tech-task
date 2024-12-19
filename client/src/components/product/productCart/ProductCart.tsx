import React from "react";

const ProductCart = ({ cartItem }: any) => {
  return (
    <div className="product-cart" key={cartItem.id}>
      <img src={cartItem.images[0].path} alt={cartItem.name} />
      <div className="article-name">{cartItem.name}</div>
      {/* <div className="article-price">{article.prices[0].value}</div> */}
    </div>
  );
};

export default ProductCart;
