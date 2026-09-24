import { NavLink } from "react-router";

const navigation = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "📊",
  },
  {
    name: "Users",
    path: "/dashboard/users",
    icon: "👥",
  },
  {
    name: "Products",
    path: "/dashboard/products",
    icon: "📦",
  },
  {
    name: "Orders",
    path: "/dashboard/orders",
    icon: "🛒",
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: "⚙️",
  },
];

const Sidebar = () => {
  return (
    <aside className="hidden min-h-screen w-64 bg-gray-900 text-white md:block">
      <div className="border-b border-gray-700 p-6">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/dashboard"}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`
                }
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
