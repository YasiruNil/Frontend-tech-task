import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {  Skeleton } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

import SidebarList from "./sidebarList/SidebarList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchCategories } from "../../redux/slice/category.slice";

export const Sidebar = ({
  isNavShow,
  handleCollapse,
}: {
  isNavShow: boolean;
  handleCollapse: () => void;
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { status, list } = useAppSelector((state) => state.category.categories);

  const handleCategoryCLick = () => {
    navigate({
      pathname: "/",
    });
  };

  // fetch all the categories (only category name and urlPath)
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={`sidebar-wrapper ${isNavShow ? "" : "hide"}`}>
      <div className={`container ${isNavShow ? "" : "hide"}`}>
        <div className="list-wrapper">
          <span className="title" onClick={() => handleCategoryCLick()}>
            Categories
          </span>
          {status === "loading" && (
            <div>
              {[1, 2, 3, 4, 5].map((item, indx) => (
                <div className="skeleton-wrapper" key={indx}>
                  <Skeleton.Node
                    active={true}
                    style={{ height: 44, width: 244 }}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="content-wrapper">
            {status === "succeeded" && <SidebarList list={list} />}
            {status === "failed" && (
              <div className="no-categories">No categories available</div>
            )}
          </div>
        </div>
      </div>
      <div className="collapse-wrapper">
        <button className="collapse-button" onClick={() => handleCollapse()}>
          {isNavShow ? <ArrowLeftOutlined style={{color: '#ffff'}}/> : <ArrowRightOutlined style={{color: '#ffff'}}/>}
        </button>
      </div>
    </div>
  );
};
