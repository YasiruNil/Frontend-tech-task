import React from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { Category } from "../../../types/product.types";

const SidebarList = ({ list }: { list: Category[] }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // Parse the query string
  const queryValue = queryParams.get("name");

  const handleClick = (item: any) => {
    navigate({
      pathname: "category",
      search: createSearchParams({
        name: `${item.urlPath}`,
      }).toString(),
    });
  };

  return (
    <>
      {list &&
        list.map((item: any, index: number) => (
          <div
            key={index}
            className={`list ${queryValue === item.urlPath ? "active" : ""}`}
            onClick={() => handleClick(item)}
          >
            <div className="list-item">
              <span>{item.name}</span>
            </div>
          </div>
        ))}
    </>
  );
};

export default SidebarList;
