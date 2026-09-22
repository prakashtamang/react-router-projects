import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <section className="bg-linear-to-br from-blue-600 to-indigo-700">
      <div className="mx-auto max-w-7xl px-6 py-25">
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest tet-blue-200">
            React Router Practice
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight">
            Build Multi-page SPAs with React
          </h1>
          <p className="mb-8 text-lg leading-8 text-blue-100">
            Learn how BrowserRouter, Routes, Route, Link and NavLink work
            together to create modern single-page applications.
          </p>
          <div className="flex gap-4">
            <Link
              to="/products"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              View Products
            </Link>
            <Link
              to="/about"
              className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
