import React from "react";
import ProductCart from "./productCart/ProductCart";
import { useOutletContext } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const ProductList = ({ productList }: any) => {
  const { isNavShow } = useOutletContext<{ isNavShow: boolean }>(); 
  const {searchValue} =
  useAppSelector((state: any) => state.product);
  console.log(searchValue);
  return (
    <div className={`product-list ${isNavShow ? '': 'hide'}`}>
      {productList.map((product: any, index: number) => (
        <div key={index}>
          <div className="category-title">{product.name}</div>
          {product.articles.length>0 && (
            <div className="article-wrapper">
              {product.articles.filter((item: { name: string; })=>item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())).map((article: any) => (
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
