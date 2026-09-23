import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition ${isActive ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-slate-100"}`;
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <NavLink to="/products" className="text-xl font-bold text-blue-600">
          Product Catalog
        </NavLink>
        <nav className="flex items-center gap-2">
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
