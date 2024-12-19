import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchCategories } from "../../redux/slice/category.slice";
import SidebarList from "./sidebarList/SidebarList";

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { errorMessage, status, list } = useAppSelector(
    (state) => state.category.categories
  );
  console.log(errorMessage, status, list);

  // fetch all the categories (only category name and urlPath)
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="sidebar-wrapper">
      <div className="container">
        <div className="list-wrapper">
          <div className="list">
            <span className="title">Categories</span>
          </div>
          {status === "loading" && <div>Loading...</div>}
          {status === "succeeded" && <SidebarList list={list} />}
        </div>

        <div className="list-wrapper">
          {/* logout */}
          <SidebarList list={[{ name: "logout" }]} />
        </div>
      </div>
    </div>
  );
};
