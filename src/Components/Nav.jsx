import React, { useContext, useState, useRef, useEffect } from "react";
import kulies_logo from "../assets/kulies_logo.png";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { dataContext } from "../Context/UserContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const { input, setInput } = useContext(dataContext);
  const cartItems = useSelector((state) => state.cart);
  const wishlistItems = useSelector((state) => state.wishlist);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsLoginDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsLoginDropdownOpen(false);
    }, 200); // 200ms delay before closing
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLoginDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8 shadow-sm bg-white">
      {/* Logo */}
      <Link to='/' className="h-[140px] w-[140px] flex justify-center items-center">
        <img src={kulies_logo} alt="Logo" className="object-contain" />
      </Link>

      {/* Search Bar */}
      <form
        className="w-[30%] md:w-[40%] h-[50px] bg-white flex items-center px-5 pr-0 gap-5 rounded-md border border-gray-300"
        onSubmit={(e) => e.preventDefault()}
      >

    
        <input
          type="text"
          placeholder="Search For Products, Brands and More"
          className="w-full outline-none text-[12px] md:text-[16px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          type="submit"
          className="bg-yellow-400 text-white h-full w-[15%] flex justify-center items-center rounded-r hover:bg-yellow-500 transition-colors"
        >
          <IoSearch className="w-[20px] h-[20px]" />
        </button>
      </form>

      {/* Icons and Login */}
      <div className="flex gap-5 items-center">
        {/* Login Dropdown */}
        <div
          className="relative"
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center gap-1 cursor-pointer">
            <CgProfile className="w-[24px] h-[24px] text-gray-700" />
            <span className="text-[16px] font-medium text-gray-700">Login</span>
            <IoIosArrowDown
              className={`transition-transform duration-200 ${
                isLoginDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {isLoginDropdownOpen && (
            <div 
              className="absolute right-0 top-full mt-0 w-[140px] bg-white rounded-lg shadow-lg z-20 border border-gray-200 overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ul className="flex flex-col">
                <li>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsLoginDropdownOpen(false)}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsLoginDropdownOpen(false)}
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Divider */}
        <span className="h-6 w-px bg-gray-300"></span>

        {/* Wishlist */}
        <Link to="/wishlist" className="flex items-center gap-1 relative group">
          {wishlistItems.length > 0 && (
            <span className="absolute bottom-5 left-1.5 bg-red-400 text-white w-[15px] h-[15px] flex items-center justify-center text-[10px] rounded-full font-bold">
              {wishlistItems.length}
            </span>
          )}
          <FaHeart className="w-[16px] h-[16px] text-gray-700 group-hover:text-red-500 transition-colors" />
          <span className="text-[16px] font-medium text-gray-700 group-hover:text-red-500 transition-colors">
            Wishlist
          </span>
        </Link>

        {/* Divider */}
        <span className="h-6 w-px bg-gray-300"></span>

        {/* Cart */}
        <Link to="/cart" className="flex items-center gap-1 relative group">
          {cartItems.length > 0 && (
            <span className="absolute bottom-5 left-1.5 bg-red-400 text-white w-[15px] h-[15px] flex items-center justify-center text-[10px] rounded-full font-bold">
              {cartItems.length}
            </span>
          )}
          <FaShoppingCart className="w-[16px] h-[16px] text-gray-700 group-hover:text-yellow-500 transition-colors" />
          <span className="text-[16px] font-medium text-gray-700 group-hover:text-yellow-500 transition-colors">
            Cart
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;