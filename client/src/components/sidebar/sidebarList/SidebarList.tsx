import React from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

const SidebarList = ({ list }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // Parse the query string
  const queryValue = queryParams.get('name');
  console.log(location);
  
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
        list.map((item: any) => (
          <div key={item.id} className={`list ${queryValue === item.urlPath ? 'active': ''}`} onClick={() => handleClick(item)}>
            <div className="flex items-center">
              {/* <img
                src={calendar}
                alt="calendar"
                className="w-[22px] h-[22px] m-[12px]"
              /> */}
              <span>{item.name}</span>
            </div>
          </div>
        ))}
    </>
  );
};

export default SidebarList;
