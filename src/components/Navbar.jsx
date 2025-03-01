import React from "react";
import { Link, useLocation } from "react-router";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="text-white py-5 mt-8 bg-transparent">
      <div className="flex justify-between font-api-primary bg-transparent">
        <Link to="/">
          <h5 className="nav-title">
            Movie<span className="text-gradient">Search</span>
          </h5>
        </Link>
        <ul className="nav-list">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname == "/" && "text-gradient"
              } hover:underline`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                location.pathname == "/about" && "text-gradient"
              } hover:underline`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                location.pathname == "/contact" && "text-gradient"
              } hover:underline`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
