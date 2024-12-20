import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Article } from "../../../types/product.types";

const ProductCart = ({ cartItem }: {cartItem:Article}) => {
  return (
    <div className="product-cart">
      <LazyLoadImage
        effect="blur"
        style={{ display:'flex', justifyContent:'center', alignItems:'center',borderRadius:'20px', height:'160px',maxWidth:'160px',margin:'10px' }}
        src={cartItem.images[0].path}
        alt={cartItem.name}
      />
      <div className="article-name">{cartItem.name}</div>
      <div className="article-price">{cartItem.prices.currency}: {cartItem.prices.value}</div>
    </div>
  );
};

export default ProductCart;
