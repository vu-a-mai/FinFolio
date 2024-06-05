import React from "react";
import navbarlogo from "./finfolio-high-resolution-logo-transparent.png";
import { Link } from "react-router-dom";

interface Props {}

const NavBar = (props: Props) => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={navbarlogo} width={100} alt="navbar logo" />
          </Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkBlue">
              Search
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-back">
          <div className="hover:text-darkBlue">Login</div>
          <a
            href=""
            className="px-8 py-3 font-bold rounded text-white bg-green-500 hover:opacity-70"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
