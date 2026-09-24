const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: "$99",
    stock: 25,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: "$120",
    stock: 18,
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Sports",
    price: "$80",
    stock: 40,
  },
  {
    id: 4,
    name: "Coffee Mug",
    category: "Home",
    price: "$15",
    stock: 100,
  },
];

const Products = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
        <p className="mt-1 text-gray-500">Manage your products and inventory</p>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Stock</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{product.name}</td>
                  <td className="px-6 py-4 text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
