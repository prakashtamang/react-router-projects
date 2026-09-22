import React from "react";

const About = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
          About Us
        </p>

        <h1 className="mb-6 text-4xl font-bold">About Our Project</h1>

        <p className="mb-6 text-lg leading-8 text-gray-600">
          This project is a simple multi-page single page application built with
          React and React Router.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-xl font-semibold">React Router</h2>
            <p className="text-gray-600">
              Handles client-side routing and navigation between different
              views.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-xl font-semibold">Tailwind CSS</h2>
            <p className="text-gray-600">
              Provides utility classes for quickly building the UI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
