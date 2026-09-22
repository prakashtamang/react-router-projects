import React from "react";

const Contact = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Get in Touch
          </p>

          <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>

          <p className="text-gray-600">Have a question? Send us a message</p>
        </div>

        <form className="space-y-6 rounded-xl border bg-white p-8 shadow-sm">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
