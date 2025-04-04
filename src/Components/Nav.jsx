import React, { useContext, useEffect } from 'react'
import logo from '../assets/logo.png';
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { dataContext } from '../Context/UserContext';
import { dummydata } from '../srore';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Wishlist from './Wishlist';
import Footer from './Footer';



const Nav = () => {

  let { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext)
  useEffect(() => {
    let newList = dummydata.filter((item) => item.name.includes(input) || item.name.toLowerCase().includes(input.toLowerCase()))
    setCate(newList)
  }, [input])
  let items = useSelector((state) => state.cart);
  let wishlistItems = useSelector((state) => state.wishlist);
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
      <div className='h-[140px] w-[140px] flex justify-center items-center '>
        <img src={logo} alt="Logo" />
      </div>
      <form className='w-[30%] h-[50px] bg-white flex items-center px-5 pr-0 gap-5 rounded-md   border-gray-300 border-1 md:w-[40%]'
        onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder=' Search For Products, Brands and More' className="w-[100%] outline-none text-[12px] md:text-[18px]"
          onChange={(e) => setInput(e.target.value)} value={input} />
        <div className='bg-yellow-400 text-white h-[100%] w-[15%] items-center flex justify-center rounded'>
          <IoSearch className='w-[25px] h-[25px]' />
        </div>
      </form>
      <div className='flex gap-5'>
        <div className='flex justify-center items-center rounded-md gap-1 cursor-pointer'>
          <CgProfile className='w-[30px] h-[30px]' />
          <span className='text-[18px]'>Tim</span>
          <IoIosArrowDown />
        </div>

        <span>|</span>

        <Link to="/wishlist">
        <div className='flex justify-center items-center rounded-md gap-1 cursor-pointer relative '>
           {wishlistItems.length>0?<span className=" w-[15px] h-[15px] absolute bottom-5 left-1.5 bg-red-400 text-white font-bold flex justify-center items-center ">{wishlistItems.length}</span>:null}
       
        <FaHeart className='w-[15px] h-[15px]' />
        <span className='text-[18px]'>Wishlist</span>
        </div>
        </Link>

        <span>|</span>
        <Link to="/cart"> <div className='flex justify-center items-center rounded-md gap-1 cursor-pointer relative'>
          {items.length > 0 ? <span className=" w-[15px] h-[15px] absolute bottom-5 left-1.5 bg-red-400 text-white font-bold flex justify-center items-center ">{items.length}</span> : null}

          <FaShoppingCart className='w-[15px] h-[15px]' />
          <span className='text-[18px]'>Cart</span>
        </div>
        </Link>
      </div>

    </div>
  )
}

export default Nav
