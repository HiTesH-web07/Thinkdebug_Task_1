import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import Nav from './Nav';
import Footer from './Footer';
import signupImage from '../assets/sign-up.png';

const SignUp = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <div className="bg-white">
        <Nav />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb and Heading */}
        <div className="bg-white flex p-4 rounded-md justify-between items-center mb-6 ">
          <h2 className="font-semibold text-2xl">Sign Up</h2>
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="flex items-center text-blue-500 hover:text-blue-700">
              <MdHome className="w-5 h-5 mr-1" />
              <span>Home</span>
              <IoIosArrowForward className="text-gray-500 mx-1" />
              <span className="text-gray-600">Sign Up</span>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white flex flex-col md:flex-row items-center justify-between p-6 rounded-lg shadow-md">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img className="w-[80%]" src={signupImage} alt="Sign Up" />
          </div>

          {/* Right SignUp Form */}
          <div className="w-full md:w-1/2 max-w-md bg-gray-100 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-1">Welcome To Kulies</h2>
            <p className="text-sm text-gray-600 mb-6">Create New Account</p>

            <form>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex items-center gap-2 mb-4">
  <div className="px-4 py-2 bg-gray-200 border border-gray-300 rounded-md">
    <span className="text-sm text-gray-700">+91</span>
  </div>
  <input
    type="tel"
    placeholder="Mobile No"
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
</div>


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
              <div className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">I agree with <Link to="#" className="text-blue-500">Terms</Link> and <Link to="#" className="text-blue-500">Privacy</Link></span>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-md transition"
              >
                Sign Up
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              Already Have An Account?{' '}
              <Link to="/login" className="text-blue-500 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-9">
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
