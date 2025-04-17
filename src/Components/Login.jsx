import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import login from "../assets/log-in.png";
import Footer from './Footer';

const Login = () => {
  return (
    <div className='font-sans bg-gray-100 min-h-screen'>
      <div className='bg-white'>
        <Nav />
      </div>

      <div className='max-w-7xl mx-auto px-4 py-8'>
        {/* Breadcrumb and Heading */}
        <div className="bg-white flex p-4 rounded-md justify-between items-center mb-6">
          <h2 className="font-semibold text-2xl">Log In</h2>
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="flex items-center text-blue-500 hover:text-blue-700">
              <MdHome className="w-5 h-5 mr-1" />
              <span>Home</span>
              <IoIosArrowForward className="text-gray-500 mx-1" />
              <span className="text-gray-600">Log In</span>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className='bg-white flex flex-col md:flex-row items-center justify-between p-6 rounded-lg shadow-md'>
          {/* Left Image */}
          <div className='w-full md:w-1/2 flex justify-center mb-6 md:mb-0'>
            <img className='w-[80%]' src={login} alt="Login" />
          </div>

          {/* Right Login Form */}
          <div className='w-full md:w-1/2 max-w-md bg-gray-100 p-8 rounded-lg'>
            <h2 className='text-xl font-semibold mb-1'>Welcome To Kulies</h2>
            <p className='text-sm text-gray-600 mb-6'>Log In Your Account</p>

            <form>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="flex justify-between items-center mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <Link to="#" className="text-blue-500 text-sm hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-md transition"
              >
                Log In
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              Don't Have An Account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className='pt-9'>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
