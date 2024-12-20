import React from "react";
import { useOutletContext } from "react-router-dom";

import { useAppSelector } from "../../redux/hooks";
import ProductCart from "./productCart/ProductCart";
import { Article, Category, ProductState } from "../../types/product.types";

const ProductList = ({ productList }: { productList: Category[] }) => {
  const { isNavShow } = useOutletContext<{ isNavShow: boolean }>();
  const { searchValue } = useAppSelector(
    (state: { product: ProductState }) => state.product
  );

  return (
    <div className={`product-list ${isNavShow ? "" : "hide"}`}>
      {productList.map((product: Category, index: number) => (
        <div key={index}>
          <div className="category-title">{product.name}</div>
          {product.articles.length > 0 && (
            <div className="article-wrapper">
              {product.articles
                .filter((item: { name: string }) =>
                  item.name
                    .toLocaleLowerCase()
                    .includes(searchValue.toLocaleLowerCase())
                )
                .map((article: Article, index: number) => (
                  <ProductCart
                    key={index}
                    cartItem={article}
                    categoryId={product.id}
                  />
                ))}

              {!product.articles.filter((item: { name: string }) =>
                item.name
                  .toLocaleLowerCase()
                  .includes(searchValue.toLocaleLowerCase())
              ).length && (
                <div className="no-articles">No articles available</div>
              )}
            </div>
          )}
          {!product.articles.length && (
            <div className="no-articles">No articles available</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
