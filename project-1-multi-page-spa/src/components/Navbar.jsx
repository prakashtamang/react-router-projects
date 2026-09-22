import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition ${isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`;
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          MultiPage
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
