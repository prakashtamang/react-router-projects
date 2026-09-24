import { useAuth } from "../context/AuthContext";

const Admin = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-3xl font-bold">Admin Panel</h1>

      <p className="mt-2 text-gray-600">Welcome, {user.name}.</p>

      <div className="mt-8 rounded-xl bg-white p-8 shadow">
        <h2 className="text-xl font-semibold">Administrator Area</h2>

        <p className="mt-3 text-gray-600">
          Only users with the admin role can access this page.
        </p>
      </div>
    </div>
  );
};

export default Admin;
