import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
    <ul
      className={`flex justify-evenly text-white bg-black h-[10px] transition-all duration-300 ${isHovered ? 'h-[50px]' : 'h-[25px]'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
       <li className="mx-[25px] cursor-pointer flex items-center justify-center">
          <Link to="/home" className="flex items-center space-x-2 hover:text-gray-300">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li className="mx-[25px] cursor-pointer flex items-center justify-center">
          <Link to="/about" className="flex items-center space-x-2 hover:text-gray-300">
            <i className="fas fa-info-circle"></i>
            <span>About</span>
          </Link>
        </li>
        <li className="mx-[25px] cursor-pointer flex items-center justify-center">
          <Link to="/shopnow" className="flex items-center space-x-2 hover:text-gray-300">
            <i className="fas fa-shopping-cart"></i>
            <span>ShopNow</span>
          </Link>
        </li>
        {/* <li className="mx-[25px] cursor-pointer flex items-center justify-center">
          <Link to="/login" className="flex items-center space-x-2 hover:text-gray-300">
            <i className="fas fa-sign-in-alt"></i>
            <span>Login</span>
          </Link>
        </li>
        <li className="mx-[25px] cursor-pointer flex items-center justify-center">
          <Link to="/signup" className="flex items-center space-x-2 hover:text-gray-300">
            <i className="fas fa-user-plus"></i>
            <span>Signup</span>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}

export default Navbar;