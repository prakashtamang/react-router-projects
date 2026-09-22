const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Headphones",
    price: 150,
    category: "Audio",
  },
  {
    id: 4,
    name: "Keyboard",
    price: 100,
    category: "Accessories",
  },
  {
    id: 5,
    name: "Mouse",
    price: 60,
    category: "Accessories",
  },
  {
    id: 6,
    name: "Monitor",
    price: 400,
    category: "Electronics",
  },
];

const Products = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
          Our Store
        </p>

        <h1 className="mb-4 text-4xl font-bold">Products</h1>

        <p className="max-w-2xl text-gray-600">
          Browse our collection of products.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-6 flex h-32 items-center justify-center rounded-lg bg-gray-100">
              <span className="text-4xl">📦</span>
            </div>

            <p className="mb-2 text-sm font-medium text-blue-600">
              {product.category}
            </p>

            <h2 className="mb-3 text-xl font-semibold">{product.name}</h2>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">${product.price}</span>

              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Buy Now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;
