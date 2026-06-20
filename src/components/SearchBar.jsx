import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if(location.pathname.includes('collection') && showSearch){
      setVisible(true)
    }
    else{
      setVisible(false)
    }
  },[location])

  return showSearch && visible ? (
    <div className="border-t border-b py-4 bg-gray-50 text-center">
      {/* Main Search Container */}
      <div className="inline-flex items-center justify-center border border-gray-300 rounded-full px-5 my-2 mx-3 w-3/4 sm:w-1/2">
        {/* Search Input */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-inherit outline-none text-gray-700 text-sm "
          type="text"
          placeholder="Search"
        />
        {/* Search Icon */}
        <img
          className="w-4 cursor-pointer"
          src={assets.search_icon}
          alt="search_icon"
        />
      </div>
      {/* Cross Icon */}
      <img
          onClick={() => setShowSearch(false)}
          className="inline w-3 cursor-pointer mr-5"
          src={assets.cross_icon}
          alt="cross_icon"
        />
    </div>
  ) : null;
};

export default SearchBar;
