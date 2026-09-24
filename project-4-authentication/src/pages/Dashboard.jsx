import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

      <p className="mt-2 text-gray-600">Welcome back, {user.name}!</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Name</h2>

          <p className="mt-2 text-gray-600">{user.name}</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Email</h2>

          <p className="mt-2 text-gray-600">{user.email}</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Role</h2>

          <p className="mt-2 capitalize text-blue-600">{user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
