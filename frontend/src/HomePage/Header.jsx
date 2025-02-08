import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-router-dom'


const Header =()=>{
    useEffect(()=>{
        AOS.init({
            duration:1500,
            once:true
        })
    })
    return (
      <nav
        className="sticky top-0 flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2 z-50 bg-white shadow-lg pb-10"
        data-aos="fade-down"
      >
        <div className=" fixed top-0 flex items-center flex-1 md:absolute md:inset-y-0 md:left-0 ">
          <div className="flex items-center pl-10 justify-between w-full md:w-auto ">
            <Link
              to="/"
              
              className="font-semibold text-xl text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out mr-5"
            >
              Logo
            </Link>
            <div className="hidden md:flex md:space-x-10">
              <Link
                to="/shop"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out "
              >
                Shop
              </Link>
              <Link
                to="/features"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Features
              </Link>
              <Link
                to="/UserChatPage"
                
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Chat
              </Link>
              <Link
                to="/store"
                href="https://docs.pingping.io"
                target="_blank"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Store
              </Link>
              
              
            </div>
          </div>
        </div>
        <div className=" pr-10 hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <span className="inline-flex">
            <Link
              to="/register"
              
              className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out"
            >
              Sign up
            </Link>
          </span>
          <span className="inline-flex rounded-md shadow ml-2">
            <Link
              to="/login"
             
              className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
            >
              Login
            </Link>
          </span>
        </div>
      </nav>
    );
}

export default Header