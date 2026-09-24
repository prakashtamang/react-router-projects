import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-sreen bg-gray-100">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
