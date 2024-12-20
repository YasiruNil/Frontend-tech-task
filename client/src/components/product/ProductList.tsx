import React from "react";
import ProductCart from "./productCart/ProductCart";

const ProductList = ({ productList }: any) => {
  return (
    <div className="product-list">
      {productList.map((product: any, index: number) => (
        <div key={index}>
          <div className="category-title">{product.name}</div>
          {product.articles.length>0 && (
            <div className="article-wrapper">
              {product.articles.map((article: any) => (
                <ProductCart cartItem={article} />
              ))}
            </div>
          )}
          {!product.articles.length && <div className="no-articles">No articles available</div>}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
