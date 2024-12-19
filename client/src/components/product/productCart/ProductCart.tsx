import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductCart = ({ cartItem }: any) => {
  return (
    <div className="product-cart" key={cartItem.id}>
      <LazyLoadImage
        effect="blur"
        style={{ display:'flex', justifyContent:'center', alignItems:'center',borderRadius:'20px',width: '200px', height:'200px' }}
        src={cartItem.images[0].path}
        alt={cartItem.name}
      />
      <div className="article-name">{cartItem.name}</div>
      <div className="article-price">{cartItem.prices.currency}: {cartItem.prices.value}</div>
    </div>
  );
};

export default ProductCart;
