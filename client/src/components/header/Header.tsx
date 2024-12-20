
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { Input } from "antd";
import { useDebounce } from "use-debounce";

import { useAppDispatch } from "../../redux/hooks";
import { setSearchValue } from "../../redux/slice/product.slice";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const [debouncedValue] = useDebounce(inputValue, 500);

  const handleSelect = () => {
    navigate({
      pathname: "/",
    });
  }
  
  useEffect(() => {
    dispatch(setSearchValue(debouncedValue))
  }, [dispatch,debouncedValue]);

  return (
    <div className="header-height">
      <div className="header-text" onClick={()=>handleSelect()}>Wisenet tech</div>
      <div>
        <Input
          placeholder="Search Article"
          allowClear
          onChange={onSearch}
          size="large"
          style={{ width: 400 }}
        />
      </div>
    </div>
  );
};
