import React, { useEffect, useState } from "react";

import { Input } from "antd";
import { useDebounce } from "use-debounce";
import { SearchProps } from "antd/es/input";
import { setSearchValue } from "../../redux/slice/product.slice";
import { useAppDispatch } from "../../redux/hooks";


export const Header = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const [debouncedValue] = useDebounce(inputValue, 500);

  useEffect(() => {
    dispatch(setSearchValue(debouncedValue))
  }, [debouncedValue]);

  return (
    <div className="header-height">
      <div>Wisenet tech</div>
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
