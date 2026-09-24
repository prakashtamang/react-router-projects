import Activity from "../components/Activity";
import StatCard from "../components/StatCard";

const Dashboard = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-gray-500">
          Welcome back! Here's what's hapenning today.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value="1,250"
          icon="👥"
          description="+12% from last month"
        />

        <StatCard
          title="Products"
          value="350"
          icon="📦"
          description="+8% from last month"
        />

        <StatCard
          title="Orders"
          value="1,580"
          icon="🛒"
          description="+15% from last month"
        />

        <StatCard
          title="Revenue"
          value="$24,500"
          icon="💰"
          description="+10% from last month"
        />
      </div>

      <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>

        <div className="mt-4 space-y-4">
          <Activity
            title="New user registered"
            description="John Doe created an account"
            time="5 minutes ago"
          />

          <Activity
            title="New order received"
            description="Order #ORD-1005 was placed"
            time="20 minutes ago"
          />

          <Activity
            title="Product updated"
            description="Wireless Headphones stock updated"
            time="1 hour ago"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
