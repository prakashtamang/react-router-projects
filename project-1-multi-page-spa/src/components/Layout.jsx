import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <footer className="bg-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-gray-500">
          © 2026 Multi Page SPA. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
