import React, { Suspense } from "react";

const SidebarList = ({ list }: any) => {
  return (
    <div>
      {list &&
        list.map((item: any) => (
          <div key={item.id} className="list">
            <div className="flex items-center">
              {/* <img
                src={calendar}
                alt="calendar"
                className="w-[22px] h-[22px] m-[12px]"
              /> */}
              <span className="text-[#777E90] font-medium">{item.name}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SidebarList;
