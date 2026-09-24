const StatCard = ({ title, value, icon, description }) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">{value}</h2>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-2xl">
          {icon}
        </div>
      </div>
      <p className="mt-4 text-sm text-green-600">{description}</p>
    </div>
  );
};

export default StatCard;
