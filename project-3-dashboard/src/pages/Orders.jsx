const orders = [
  {
    id: "#ORD-1001",
    customer: "John Doe",
    date: "Sep 20, 2026",
    total: "$150",
    status: "Completed",
  },
  {
    id: "#ORD-1002",
    customer: "Jane Smith",
    date: "Sep 21, 2026",
    total: "$85",
    status: "Pending",
  },
  {
    id: "#ORD-1003",
    customer: "Robert Brown",
    date: "Sep 22, 2026",
    total: "$220",
    status: "Processing",
  },
];

const Orders = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>

        <p className="mt-1 text-gray-500">View and manage customer orders.</p>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-6 py-4">Order</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Total</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{order.id}</td>

                  <td className="px-6 py-4">{order.customer}</td>

                  <td className="px-6 py-4 text-gray-500">{order.date}</td>

                  <td className="px-6 py-4 font-medium">{order.total}</td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
